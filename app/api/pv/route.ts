import { createHash } from "node:crypto";

import { findArticle } from "@/lib/articles";
import { stripLangFromPathname } from "@/lib/locales";
import { PUBLIC_PAGE_PATHS } from "@/lib/seo";

// First-party page views → CRM Supabase table site_pageviews (service role only, RLS on).
// No raw IP is stored: visitor_hash = sha256(ip + ua + day + PV_SALT) rotates daily.

const BOT_UA =
  /bot|crawl|spider|slurp|preview|headless|lighthouse|pingdom|monitor|curl|wget|python|axios|node-fetch|go-http/i;
const SKIP_PATH = /^\/(?:ar\/)?(?:api|keystatic|admin)(?:\/|$)/;

const ALLOWED_ORIGINS = new Set([
  "https://omanai.tech",
  "https://www.omanai.tech",
  "https://zakeri.dev",
]);
const PAGES = new Set<string>([...Object.values(PUBLIC_PAGE_PATHS), "/articles"]);
const DAILY_CAP = 60;

function allowedOrigin(req: Request): boolean {
  let origin = req.headers.get("origin");
  if (!origin) {
    try {
      origin = new URL(req.headers.get("referer") ?? "").origin;
    } catch {
      return false;
    }
  }
  if (ALLOWED_ORIGINS.has(origin)) return true;
  return process.env.NODE_ENV !== "production" && /^http:\/\/localhost(:\d+)?$/.test(origin);
}

/** Only count paths that are real pages (EN or /ar), incl. existing article slugs. */
async function isSitePath(path: string): Promise<boolean> {
  const base = stripLangFromPathname(path);
  if (PAGES.has(base)) return true;
  const slug = /^\/articles\/([a-z0-9-]+)$/.exec(base)?.[1];
  return !!slug && !!(await findArticle(slug));
}

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const ua = req.headers.get("user-agent") ?? "";
  if (!url || !key || !ua || BOT_UA.test(ua)) return new Response(null, { status: 204 });
  if (!allowedOrigin(req)) return new Response(null, { status: 403 });

  let body: { path?: unknown; referrer?: unknown };
  try {
    body = JSON.parse(await req.text());
  } catch {
    return new Response(null, { status: 400 });
  }
  const path = typeof body.path === "string" ? body.path.split(/[?#]/)[0].slice(0, 200) : "";
  if (!path.startsWith("/") || SKIP_PATH.test(path) || !(await isSitePath(path))) {
    return new Response(null, { status: 204 });
  }

  let referrer_host: string | null = null;
  if (typeof body.referrer === "string" && body.referrer) {
    try {
      referrer_host = new URL(body.referrer).hostname.slice(0, 200) || null;
    } catch {
      // malformed referrer: keep null
    }
  }

  const ip =
    (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "";
  const day = new Date().toISOString().slice(0, 10);
  const visitor_hash = createHash("sha256")
    .update(`${ip}|${ua}|${day}|${process.env.PV_SALT ?? ""}`)
    .digest("hex");

  const auth = { apikey: key, Authorization: `Bearer ${key}` };

  // Per-visitor daily cap so one client can't flood the table.
  // ponytail: one count query per view; add an index on (visitor_hash, created_at) if the table grows large.
  const count = await fetch(
    `${url}/rest/v1/site_pageviews?select=id&visitor_hash=eq.${visitor_hash}&created_at=gte.${day}T00:00:00Z`,
    { method: "HEAD", headers: { ...auth, Prefer: "count=exact" } },
  ).catch(() => null);
  const seen = Number(count?.headers.get("content-range")?.split("/")[1] ?? 0);
  if (seen >= DAILY_CAP) return new Response(null, { status: 204 });

  const res = await fetch(`${url}/rest/v1/site_pageviews`, {
    method: "POST",
    headers: { ...auth, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({
      path,
      referrer_host,
      country: req.headers.get("x-vercel-ip-country")?.slice(0, 2) || null,
      lang: path === "/ar" || path.startsWith("/ar/") ? "ar" : "en",
      visitor_hash,
    }),
  }).catch(() => null);

  return new Response(null, { status: res?.ok ? 204 : 502 });
}
