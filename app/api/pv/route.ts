import { createHash } from "node:crypto";

// First-party page views → CRM Supabase table site_pageviews (service role only, RLS on).
// No raw IP is stored: visitor_hash = sha256(ip + ua + day + PV_SALT) rotates daily.

const BOT_UA =
  /bot|crawl|spider|slurp|preview|headless|lighthouse|pingdom|monitor|curl|wget|python|axios|node-fetch|go-http/i;
const SKIP_PATH = /^\/(?:ar\/)?(?:api|keystatic|admin)(?:\/|$)/;

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const ua = req.headers.get("user-agent") ?? "";
  if (!url || !key || !ua || BOT_UA.test(ua)) return new Response(null, { status: 204 });

  let body: { path?: unknown; referrer?: unknown };
  try {
    body = JSON.parse(await req.text());
  } catch {
    return new Response(null, { status: 400 });
  }
  const path = typeof body.path === "string" ? body.path.split(/[?#]/)[0].slice(0, 300) : "";
  if (!path.startsWith("/") || SKIP_PATH.test(path)) return new Response(null, { status: 204 });

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

  const res = await fetch(`${url}/rest/v1/site_pageviews`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
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
