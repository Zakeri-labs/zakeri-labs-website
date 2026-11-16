import { NextResponse } from "next/server";
import { z } from "zod";

import { CAMPAIGN_KEYS } from "@/lib/attribution";
import { CHALLENGES, COMMON, INTERESTS, SIZES } from "@/lib/content/common";
import { saveWebsiteLead } from "@/lib/crm-lead";
import { SITE } from "@/lib/site";

const FROM = "IDRAK Website <website@omanai.tech>";

const short = z.string().trim().max(500).optional().default("");
/** First-visit source from the idrak_attr cookie (lib/attribution.ts). Unknown keys are dropped. */
const Attribution = z
  .object({
    landing_page: short,
    referrer: short,
    first_seen: short,
    ...Object.fromEntries(CAMPAIGN_KEYS.map((k) => [k, short])),
  })
  .default({});

const Lead = z.object({
  size: z.enum(SIZES),
  challenges: z.array(z.enum(CHALLENGES)).min(1).max(CHALLENGES.length),
  interest: z.enum(INTERESTS).default("not-sure"),
  note: z.string().trim().max(2000).optional().default(""),
  name: z.string().trim().min(1).max(120),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+\d][\d\s().-]*$/)
    .refine((p) => p.replace(/\D/g, "").length >= 8),
  company: z.string().trim().max(160).optional().default(""),
  email: z
    .union([z.string().trim().email().max(200), z.literal("")])
    .optional()
    .default(""),
  lang: z.enum(["en", "ar"]).default("en"),
  page: z.string().max(200).optional().default(""),
  page_url: short,
  attribution: Attribution,
  website: z.string().optional().default(""), // honeypot
});

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => `&#${ch.charCodeAt(0)};`).replace(/\n/g, "<br>");

// ponytail: per-instance memory, so a burst spread over several serverless instances gets through;
// move to a Vercel Firewall rule or a shared store if the form is abused.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  const parsed = Lead.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  const e = parsed.data;
  // Bots fill the hidden field; pretend success so they move on.
  if (e.website) return NextResponse.json({ ok: true });

  const f = COMMON.en.form;
  const size = f.size.options[e.size].join(" · ");
  const challenges = e.challenges.map((c) => f.challenge.options[c]).join(", ");
  const tracking: Record<string, string> = {
    page_url: e.page_url || `${SITE.url}${e.page}`,
    ...e.attribution,
  };

  // 1. the CRM lead (source Website). A CRM problem must not lose the enquiry: the email still goes out.
  const crm = await saveWebsiteLead({
    name: e.name,
    phone: e.phone,
    email: e.email,
    company: e.company,
    size: e.size,
    lang: e.lang,
    summary: [
      `Wants to: ${challenges}`,
      `Area of interest: ${f.interests[e.interest]}`,
      `Business size: ${size}`,
      ...(e.note ? [`Message: ${e.note}`] : []),
    ],
    tracking,
  });
  if (!crm.ok) console.error("contact: CRM lead not saved:", crm.error);

  // 2. the email to the team
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return crm.ok
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }
  const waLink = `https://wa.me/${e.phone.replace(/[^\d]/g, "")}`;
  const rows: [string, string][] = [
    ["Name", e.name],
    ["WhatsApp / Phone", e.phone],
    ["Company", e.company || "—"],
    ["Email", e.email || "—"],
    ["Business size", size],
    ["Wants to", challenges],
    ["Area of interest", f.interests[e.interest]],
    ["Site language", e.lang === "ar" ? "Arabic" : "English"],
    ["CRM", crm.ok ? `Lead ${crm.status} (source: Website)` : `NOT saved: ${crm.error}`],
    ...Object.entries(tracking)
      .filter(([, v]) => v)
      .map(([k, v]): [string, string] => [k.replace(/_/g, " "), v]),
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0e1633;max-width:640px">
      <h2 style="margin:0 0 16px">New lead from the website</h2>
      <p><a href="${waLink}" style="display:inline-block;background:#25d366;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Reply on WhatsApp</a></p>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border:1px solid #e7e5ee;background:#f6f5fb;font-weight:bold;width:170px">${k}</td><td style="padding:8px 12px;border:1px solid #e7e5ee">${escape(v)}</td></tr>`,
          )
          .join("")}
      </table>
      ${
        e.note
          ? `<h3 style="margin:24px 0 8px">In their words</h3><div style="padding:12px 16px;border-left:4px solid #4b3be0;background:#f6f5fb;line-height:1.6">${escape(e.note)}</div>`
          : ""
      }
    </div>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}${e.note ? `\n\nIn their words:\n${e.note}` : ""}\n\nReply on WhatsApp: ${waLink}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [SITE.email],
      ...(e.email ? { reply_to: e.email } : {}),
      subject: `New lead: ${e.name}${e.company ? ` (${e.company})` : ""} — ${challenges}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("contact: Resend rejected the email", res.status, await res.text());
    // the lead is in the CRM, so the visitor's enquiry was not lost
    if (!crm.ok) return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
