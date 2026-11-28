import { z } from "zod";

import { DETAIL_PAGES, type DetailKind } from "@/lib/content/detail";
import { HOW } from "@/lib/content/how";
import { PRODUCTS } from "@/lib/content/products";
import { SERVICES } from "@/lib/content/services";
import { PORTFOLIO } from "@/lib/content/portfolio";
import { SITE } from "@/lib/site";

const MODEL = "google/gemini-2.5-flash";
const GATEWAY = "https://ai-gateway.vercel.sh/v1/chat/completions";

const Body = z.object({
  lang: z.enum(["en", "ar"]).default("en"),
  messages: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().min(1).max(1200) }))
    .min(1)
    .max(16),
});

// The agent only knows what the website says — built from the same copy modules.
const detail = (kind: DetailKind) =>
  DETAIL_PAGES[kind]
    .map(
      (e) =>
        `- ${e.en.name} (/${kind}/${e.slug}): ${e.en.summary} Includes: ${e.en.offer.items.map((x) => x.title).join(", ")}.`,
    )
    .join("\n");
const s = SERVICES.en;
const p = PRODUCTS.en;
const h = HOW.en;
const KNOWLEDGE = `
COMPANY: ${SITE.name} (legal: ${SITE.legalName}, CR ${SITE.crNumber}), based in Al Khoudh, Al Seeb, Muscat, Oman. Office: ${SITE.office.address.en} (Arabic: ${SITE.office.address.ar}), map ${SITE.office.mapUrl}. Founder & CEO: ${SITE.founder}.
Positioning: AI that creates business value — more sales, lower costs, better performance. We start with the business challenge, not the technology.
Contact: WhatsApp/phone ${SITE.phone}, email ${SITE.email}, or the contact form on /contact.

SERVICES (each has its own page):
${detail("services")}

INDUSTRIES WE SERVE:
${detail("industries")}

CASE STUDIES (on /work):
${detail("work")}

READY-MADE PRODUCTS:
- ${p.construction.title} (${p.construction.subtitle}): ${p.construction.lead} ${p.construction.paragraphs.join(" ")} Model: ${p.construction.steps.map((x) => x.title).join(", ")}.
- ${p.clinic.title}: ${p.clinic.subtitle} Before visit: ${p.clinic.before.join(" ")} After visit: ${p.clinic.after.join(" ")}

HOW WE WORK: ${h.approach.steps.map((x) => `${x.title}: ${x.text}`).join(" ")}
Ways to start: ${h.ways.items.map((x) => `${x.title} — ${x.text}`).join(" ")}
Pricing: ${h.pricing.paragraphs.join(" ")} Software, automation and AI projects have no fixed public price list.
CONTENT PACKAGES (monthly, the only fixed public prices; full list at /portfolio#packages): ${PORTFOLIO.en.packages.items.map((x, i) => `${x.name} (Arabic: ${PORTFOLIO.ar.packages.items[i].name}) ${x.price} OMR a month: ${x.features.join(", ")}`).join(". ")}.
Office hours: ${SITE.office.hours.en}.
FAQ: ${s.faq.items.map((f) => `Q: ${f.q} A: ${f.a}`).join(" ")}
`.trim();

const SYSTEM = `You are "IDRAK AI", the assistant on the IDRAK AI Solutions website. You are living proof that IDRAK builds useful AI.
Rules:
- Reply in the visitor's language (Arabic, English, or Persian). Keep answers short: 2–5 sentences or a few bullets. Warm, confident, practical.
- Only use the knowledge below. Never invent prices, timelines, client names, results or features. If you don't know, say so and offer to connect them with the team.
- Pricing: content packages have fixed monthly prices (CONTENT PACKAGES below; in Arabic use their Arabic names and ر.ع). Everything else depends on scope; offer a quick conversation.
- Always steer toward the next step: ask about their business challenge, then suggest the contact form (/contact) or WhatsApp (${SITE.phone}).
- Plain text only (no markdown tables or headings).

KNOWLEDGE:
${KNOWLEDGE}`;

// Best-effort abuse guard (per instance): 20 requests / 10 min per IP.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 20;
}

export async function POST(request: Request) {
  const parsed = Body.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return new Response("invalid", { status: 400 });

  const key = process.env.AI_GATEWAY_API_KEY;
  if (!key) return new Response("not_configured", { status: 503 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
  if (limited(ip)) return new Response("rate_limited", { status: 429 });

  const upstream = await fetch(GATEWAY, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      stream: true,
      max_tokens: 500,
      temperature: 0.4,
      messages: [{ role: "system", content: SYSTEM }, ...parsed.data.messages],
    }),
  });
  if (!upstream.ok || !upstream.body) {
    console.error("chat: gateway error", upstream.status, await upstream.text().catch(() => ""));
    return new Response("upstream_error", { status: 502 });
  }

  // Re-emit the OpenAI-style SSE stream as plain text tokens.
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";
  const stream = upstream.body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          const data = line.replace(/^data:\s*/, "").trim();
          if (!data || data === "[DONE]" || !line.startsWith("data:")) continue;
          try {
            const token = JSON.parse(data).choices?.[0]?.delta?.content;
            if (token) controller.enqueue(encoder.encode(token));
          } catch {
            // Ignore keep-alives and partial frames.
          }
        }
      },
    }),
  );

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
