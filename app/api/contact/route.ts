import { NextResponse } from "next/server";
import { z } from "zod";

import { CHALLENGES, COMMON, INTERESTS, SIZES } from "@/lib/content/common";
import { SITE } from "@/lib/site";

const FROM = "IDRAK Website <website@omanai.tech>";

const Lead = z.object({
  size: z.enum(SIZES),
  challenges: z.array(z.enum(CHALLENGES)).min(1).max(CHALLENGES.length),
  interest: z.enum(INTERESTS).default("not-sure"),
  note: z.string().trim().max(2000).optional().default(""),
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(6).max(40),
  company: z.string().trim().max(160).optional().default(""),
  email: z
    .union([z.string().trim().email().max(200), z.literal("")])
    .optional()
    .default(""),
  lang: z.enum(["en", "ar"]).default("en"),
  page: z.string().max(200).optional().default(""),
  website: z.string().optional().default(""), // honeypot
});

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => `&#${ch.charCodeAt(0)};`).replace(/\n/g, "<br>");

export async function POST(request: Request) {
  const parsed = Lead.safeParse(await request.json().catch(() => null));
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

  const f = COMMON.en.form;
  const size = f.size.options[e.size].join(" · ");
  const challenges = e.challenges.map((c) => f.challenge.options[c]).join(", ");
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
    ["Sent from", `${SITE.url}${e.page}`],
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
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
