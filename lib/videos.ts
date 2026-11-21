import "server-only";

import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";
import { z } from "zod";

import { INDUSTRIES, isIndustry, normalizeCode, type Industry } from "@/lib/industries";
import type { Lang } from "@/lib/locales";
import { presignUrl } from "@/lib/sigv4";

/**
 * Site videos: table site_videos in the CRM Supabase (service role only, same access pattern as
 * /api/pv; schema: supabase/migrations). Files live in the public Cloudflare R2 bucket idrak-media,
 * served at media.zakeri.dev, and a row stores their full https URL. Rows from before 16 Nov 2026
 * may still hold a path inside the old Supabase bucket site-videos; both forms are read.
 */
export const BUCKET = "site-videos";
export const MEDIA_URL = "https://media.zakeri.dev";
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
  /** Short public code of a sample ("C81"). Missing until the gallery migration is applied. */
  code?: string | null;
  industry?: string | null;
  storage_path: string | null;
  external_url: string | null;
  poster_path: string | null;
  published: boolean;
  sort_order: number;
  created_at: string;
};

/** A file URL on media.zakeri.dev, or a legacy path inside the Supabase bucket. */
const path = z
  .string()
  .max(300)
  .regex(/^(https:\/\/media\.zakeri\.dev\/)?[a-z0-9][a-z0-9._/-]*$/, "bad path")
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
  code: z
    .string()
    .nullish()
    .transform((v, ctx) => {
      if (!v?.trim()) return null;
      const code = normalizeCode(v);
      if (!code) ctx.addIssue({ code: "custom", message: "code looks like C81" });
      return code;
    }),
  industry: z
    .enum(INDUSTRIES)
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
    // unset code/industry are left out, so adding a video works before the gallery migration runs
    body: JSON.stringify({
      ...v,
      code: v.code ?? undefined,
      industry: v.industry ?? undefined,
    }),
  });
  if (res?.status === 409) return "duplicate" as const;
  return res?.ok ? ((await res.json()) as VideoRow[])[0] : null;
}

export async function patchVideo(id: string, v: z.infer<typeof videoPatch>) {
  const res = await rest(`site_videos?id=eq.${id}`, {
    method: "PATCH",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({ ...v, updated_at: new Date().toISOString() }),
  });
  if (!res) return { status: 502 as const };
  if (!res.ok)
    return { status: res.status === 400 || res.status === 409 ? res.status : (502 as const) };
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
  const all = [row?.storage_path, row?.poster_path, row?.external_url].filter(
    (f): f is string => !!f,
  );
  // Best effort: a leftover file is harmless, a failed delete must not undo the row removal.
  await Promise.all(
    all
      // only files this site put there: the bucket may hold other things
      .filter((f) => f.startsWith(`${MEDIA_URL}/videos/`))
      .map((f) => {
        const signed = r2Presign("DELETE", f.slice(MEDIA_URL.length + 1));
        return signed && fetch(signed, { method: "DELETE" }).catch(() => {});
      }),
  );
  const legacy = all.filter((f) => !f.startsWith("https://"));
  if (url && key && legacy.length) {
    await fetch(`${url}/storage/v1/object/${BUCKET}`, {
      method: "DELETE",
      headers: { ...headers(key), "Content-Type": "application/json" },
      body: JSON.stringify({ prefixes: legacy }),
    }).catch(() => {});
  }
  return !!row;
}

const CACHE_CONTROL = "public, max-age=31536000, immutable";

/** Presigned R2 request for one object key; null when the R2 env vars are missing. */
function r2Presign(method: "PUT" | "DELETE", objectKey: string, contentType?: string) {
  const { R2_ENDPOINT, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET } = process.env;
  if (!R2_ENDPOINT || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) return null;
  return presignUrl({
    method,
    url: `${R2_ENDPOINT.replace(/\/$/, "")}/${R2_BUCKET || "idrak-media"}/${objectKey}`,
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
    region: "auto",
    expires: 900,
    // signed: the upload must carry exactly this type
    headers: contentType ? { "content-type": contentType } : undefined,
  });
}

/**
 * Presigned upload: the browser/automation PUTs the file body straight to R2 with the returned
 * headers, then saves `path` (the public URL) on the row. The pixel size goes into the file name
 * (video-1080x1920.mp4) so the pages know the shape of a video without a schema change.
 */
export function signUpload(contentType: string, width?: number, height?: number) {
  const kind = UPLOAD_TYPES[contentType];
  if (!kind) return null;
  const size = width && height ? `-${width}x${height}` : "";
  const objectKey = `videos/${randomUUID()}/${kind}${size}.${EXT[contentType]}`;
  const upload_url = r2Presign("PUT", objectKey, contentType);
  if (!upload_url) return null;
  return {
    kind,
    path: `${MEDIA_URL}/${objectKey}`,
    upload_url,
    headers: { "Content-Type": contentType, "Cache-Control": CACHE_CONTROL },
  };
}

/* ---------- Public shape ---------- */

export type PublicVideo = {
  id: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  category: Category;
  solutionSlug: string | null;
  code: string | null;
  industry: Industry | null;
  src: string | null;
  youtubeId: string | null;
  poster: string | null;
  /** Pixel size read from the file name; null when unknown (YouTube, old uploads). */
  width: number | null;
  height: number | null;
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
  p?.startsWith("https://")
    ? p
    : p && process.env.SUPABASE_URL
      ? `${process.env.SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${p}`
      : null;

export function toPublic(r: VideoRow): PublicVideo {
  const yt = youtubeId(r.external_url);
  const src = storageUrl(r.storage_path) ?? (yt ? null : r.external_url);
  const poster =
    storageUrl(r.poster_path) ?? (yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : null);
  const size = /-(\d{2,5})x(\d{2,5})\.\w+$/.exec(src ?? poster ?? "");
  return {
    id: r.id,
    title: { en: r.title_en, ar: r.title_ar || r.title_en },
    description: {
      en: r.description_en ?? "",
      ar: r.description_ar || r.description_en || "",
    },
    category: r.category,
    solutionSlug: r.solution_slug,
    code: normalizeCode(r.code),
    industry: isIndustry(r.industry) ? r.industry : null,
    src,
    youtubeId: storageUrl(r.storage_path) ? null : yt,
    poster,
    width: size ? Number(size[1]) : null,
    height: size ? Number(size[2]) : null,
    date: r.created_at,
  };
}

export async function getPublishedVideos(): Promise<PublicVideo[]> {
  return (await listVideos(false)).map(toPublic);
}

/** One published sample by its code ("c81", "#C81") or, for links sent before codes, its id. */
export async function getPublishedVideo(codeOrId: string): Promise<PublicVideo | null> {
  const code = normalizeCode(codeOrId);
  const videos = await getPublishedVideos();
  return videos.find((v) => (code ? v.code === code : v.id === codeOrId)) ?? null;
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
