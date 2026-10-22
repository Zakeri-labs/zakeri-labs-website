import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { z } from "zod";

import type { Lang } from "@/lib/locales";

/**
 * Site videos: table site_videos + public bucket site-videos in the CRM Supabase
 * (service role only, same access pattern as /api/pv). Schema: supabase/migrations.
 */
export const BUCKET = "site-videos";
export const CATEGORIES = ["promo", "solution", "project_demo"] as const;
export type Category = (typeof CATEGORIES)[number];

export const UPLOAD_TYPES: Record<string, "video" | "poster"> = {
  "video/mp4": "video",
  "video/webm": "video",
  "video/quicktime": "video",
  "image/jpeg": "poster",
  "image/png": "poster",
  "image/webp": "poster",
};

const EXT: Record<string, string> = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/quicktime": "mov",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

const env = () => ({
  url: process.env.SUPABASE_URL,
  key: process.env.SUPABASE_SERVICE_ROLE_KEY,
});

const headers = (key: string) => ({ apikey: key, Authorization: `Bearer ${key}` });

export type VideoRow = {
  id: string;
  title_en: string;
  title_ar: string | null;
  description_en: string | null;
  description_ar: string | null;
  category: Category;
  solution_slug: string | null;
  storage_path: string | null;
  external_url: string | null;
  poster_path: string | null;
  published: boolean;
  sort_order: number;
  created_at: string;
};

const path = z
  .string()
  .max(200)
  .regex(/^[a-z0-9][a-z0-9._/-]*$/, "bad path")
  .refine((p) => !p.includes(".."), "bad path");
const opt = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .nullish()
    .transform((v) => v || null);

export const videoInput = z.object({
  title_en: z.string().trim().min(1).max(200),
  title_ar: opt(200),
  description_en: opt(1000),
  description_ar: opt(1000),
  category: z.enum(CATEGORIES),
  solution_slug: z
    .string()
    .regex(/^[a-z0-9-]{1,60}$/)
    .nullish()
    .transform((v) => v || null),
  storage_path: path.nullish().transform((v) => v || null),
  external_url: z
    .string()
    .url()
    .max(500)
    .startsWith("https://")
    .nullish()
    .transform((v) => v || null),
  poster_path: path.nullish().transform((v) => v || null),
  published: z.boolean().default(false),
  sort_order: z.number().int().min(-100000).max(100000).default(0),
});
export const videoCreate = videoInput.refine((v) => v.storage_path || v.external_url, {
  message: "storage_path or external_url is required",
});
export const videoPatch = videoInput.partial();

/** PostgREST call; returns null when Supabase is not configured. */
async function rest(pathAndQuery: string, init: RequestInit = {}) {
  const { url, key } = env();
  if (!url || !key) return null;
  return fetch(`${url}/rest/v1/${pathAndQuery}`, {
    ...init,
    headers: { ...headers(key), "Content-Type": "application/json", ...init.headers },
  });
}

export async function listVideos(all: boolean): Promise<VideoRow[]> {
  const res = await rest(
    `site_videos?select=*&order=sort_order.asc,created_at.desc${all ? "" : "&published=eq.true"}`,
    all ? { cache: "no-store" } : { next: { revalidate: 60 } },
  ).catch(() => null);
  return res?.ok ? ((await res.json()) as VideoRow[]) : [];
}

export async function createVideo(v: z.infer<typeof videoCreate>) {
  const res = await rest("site_videos", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify(v),
  });
  return res?.ok ? ((await res.json()) as VideoRow[])[0] : null;
}

export async function patchVideo(id: string, v: z.infer<typeof videoPatch>) {
  const res = await rest(`site_videos?id=eq.${id}`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ ...v, updated_at: new Date().toISOString() }),
  });
  if (!res) return { status: 502 as const };
  if (!res.ok) return { status: res.status === 400 ? (400 as const) : (502 as const) };
  const row = ((await res.json()) as VideoRow[])[0];
  return row ? { status: 200 as const, row } : { status: 404 as const };
}

export async function deleteVideo(id: string): Promise<boolean> {
  const res = await rest(`site_videos?id=eq.${id}`, {
    method: "DELETE",
    headers: { Prefer: "return=representation" },
  });
  if (!res?.ok) return false;
  const [row] = (await res.json()) as VideoRow[];
  const { url, key } = env();
  const files = [row?.storage_path, row?.poster_path].filter(Boolean);
  if (url && key && files.length) {
    // Best effort: a leftover file is harmless, a failed delete must not undo the row removal.
    await fetch(`${url}/storage/v1/object/${BUCKET}`, {
      method: "DELETE",
      headers: { ...headers(key), "Content-Type": "application/json" },
      body: JSON.stringify({ prefixes: files }),
    }).catch(() => {});
  }
  return !!row;
}

/** Signed one-time upload URL: the browser/automation PUTs the file straight to Supabase. */
export async function signUpload(contentType: string, filename: string) {
  const { url, key } = env();
  if (!url || !key) return null;
  const kind = UPLOAD_TYPES[contentType];
  if (!kind) return null;
  const ext = EXT[contentType];
  const base =
    filename
      .replace(/\.[^.]*$/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) || kind;
  const objectPath = `${kind}s/${Date.now().toString(36)}-${base}.${ext}`;
  const res = await fetch(`${url}/storage/v1/object/upload/sign/${BUCKET}/${objectPath}`, {
    method: "POST",
    headers: { ...headers(key), "Content-Type": "application/json" },
    body: "{}",
  }).catch(() => null);
  if (!res?.ok) return null;
  const { url: signed } = (await res.json()) as { url: string };
  return {
    kind,
    path: objectPath,
    upload_url: `${url}/storage/v1${signed}`,
    // The storage gateway wants an apikey header; the public (anon) key is fine here.
    apikey: process.env.SUPABASE_ANON_KEY ?? null,
  };
}

/* ---------- Public shape ---------- */

export type PublicVideo = {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  category: Category;
  solutionSlug: string | null;
  src: string | null;
  youtubeId: string | null;
  poster: string | null;
  date: string;
};

export function youtubeId(u: string | null): string | null {
  if (!u) return null;
  try {
    const x = new URL(u);
    const h = x.hostname.replace(/^www\./, "");
    const id =
      h === "youtu.be"
        ? x.pathname.split("/")[1]
        : /(^|\.)youtube(-nocookie)?\.com$/.test(h)
          ? x.searchParams.get("v") || /^\/(?:shorts|embed)\/([\w-]{11})/.exec(x.pathname)?.[1]
          : null;
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

const storageUrl = (p: string | null) =>
  p && process.env.SUPABASE_URL
    ? `${process.env.SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${p}`
    : null;

export function toPublic(r: VideoRow): PublicVideo {
  const yt = youtubeId(r.external_url);
  return {
    id: r.id,
    title: { en: r.title_en, ar: r.title_ar || r.title_en },
    description: {
      en: r.description_en ?? "",
      ar: r.description_ar || r.description_en || "",
    },
    category: r.category,
    solutionSlug: r.solution_slug,
    src: storageUrl(r.storage_path) ?? (yt ? null : r.external_url),
    youtubeId: storageUrl(r.storage_path) ? null : yt,
    poster: storageUrl(r.poster_path) ?? (yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : null),
    date: r.created_at,
  };
}

export async function getPublishedVideos(): Promise<PublicVideo[]> {
  return (await listVideos(false)).map(toPublic);
}

/* ---------- Auth: automation token header, or admin cookie from the login form ---------- */

const COOKIE = "vid_admin";
const TTL = 60 * 60 * 24 * 7;

const sign = (exp: number) =>
  createHmac("sha256", process.env.VIDEOS_ADMIN_SECRET ?? "")
    .update(`admin.${exp}`)
    .digest("hex");

function same(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function checkPassword(p: string): boolean {
  const want = process.env.VIDEOS_ADMIN_PASSWORD;
  return !!want && !!process.env.VIDEOS_ADMIN_SECRET && same(p, want);
}

export function sessionCookie(clear = false): string {
  const exp = Math.floor(Date.now() / 1000) + TTL;
  const value = clear ? "" : `${exp}.${sign(exp)}`;
  return `${COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${clear ? 0 : TTL}`;
}

export function isAdminCookie(cookieHeader: string | null): boolean {
  if (!process.env.VIDEOS_ADMIN_SECRET) return false;
  const v = cookieHeader
    ?.split(/;\s*/)
    .find((c) => c.startsWith(`${COOKIE}=`))
    ?.slice(COOKIE.length + 1);
  const [exp, sig] = v?.split(".") ?? [];
  return !!exp && !!sig && Number(exp) > Date.now() / 1000 && same(sig, sign(Number(exp)));
}

export function isAuthorized(req: Request): boolean {
  const token = process.env.VIDEOS_API_TOKEN;
  const given = req.headers.get("x-api-key");
  if (token && given && same(given, token)) return true;
  return isAdminCookie(req.headers.get("cookie"));
}

export const unauthorized = () => Response.json({ error: "unauthorized" }, { status: 401 });
