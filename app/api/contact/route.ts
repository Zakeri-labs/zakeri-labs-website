import { NextResponse } from "next/server";
import { z } from "zod";

import { COMMON, INTERESTS, TIMELINES } from "@/lib/content/common";
import { SITE } from "@/lib/site";

const FROM = "IDRAK Website <website@omanai.tech>";

const Enquiry = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  country: z.string().trim().max(80).optional().default(""),
  interest: z.enum(INTERESTS),
  message: z.string().trim().min(1).max(5000),
  timeline: z
    .union([z.enum(TIMELINES), z.literal("")])
    .optional()
    .default(""),
  lang: z.enum(["en", "ar"]).default("en"),
  page: z.string().max(200).optional().default(""),
  website: z.string().optional().default(""), // honeypot
});

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => `&#${ch.charCodeAt(0)};`).replace(/\n/g, "<br>");

export async function POST(request: Request) {
  const parsed = Enquiry.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  const e = parsed.data;
  // Bots fill the hidden field; pretend success so they move on.
  if (e.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const labels = COMMON.en.form;
  const rows: [string, string][] = [
    ["Name", e.name],
    ["Company", e.company],
    ["Email", e.email],
    ["WhatsApp / Phone", e.phone || "—"],
    ["Country", e.country || "—"],
    ["Interested in", labels.interests[e.interest]],
    ["Timeline", e.timeline ? labels.timelines[e.timeline] : "—"],
    ["Site language", e.lang === "ar" ? "Arabic" : "English"],
    ["Sent from", `${SITE.url}${e.page}`],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0e1633;max-width:640px">
      <h2 style="margin:0 0 16px">New enquiry from the website</h2>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border:1px solid #e7e5ee;background:#f6f5fb;font-weight:bold;width:170px">${k}</td><td style="padding:8px 12px;border:1px solid #e7e5ee">${escape(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">What they would like to improve</h3>
      <div style="padding:12px 16px;border-left:4px solid #4b3be0;background:#f6f5fb;line-height:1.6">${escape(e.message)}</div>
      <p style="margin-top:24px;font-size:12px;color:#565d78">Reply to this email to answer ${escape(e.name)} directly.</p>
    </div>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nWhat they would like to improve:\n${e.message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [SITE.email],
      reply_to: e.email,
      subject: `New enquiry: ${labels.interests[e.interest]} — ${e.name} (${e.company})`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("contact: Resend rejected the email", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
