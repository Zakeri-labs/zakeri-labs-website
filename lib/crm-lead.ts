import "server-only";

/**
 * Website enquiry → lead in the Idrak CRM (Supabase, service role; same env as /api/pv).
 * The lead goes through the CRM's own `insert_lead` function (Lead + Customer rows, workspace
 * idrak-default, source "Website"), so a number that is already a lead keeps its rep and its first
 * source. The answers and where the visitor came from are added to the lead's notes, and (once
 * supabase/migrations/20261116000000_site_leads.sql is applied) saved as one row in site_leads.
 */
const TENANT = "idrak-default";
const SOURCE = "Website";
const SIZE = { small: "Small", medium: "Medium", large: "Big" } as const;

export type WebsiteLead = {
  name: string;
  phone: string;
  email: string;
  company: string;
  size: keyof typeof SIZE;
  /** Human-readable lines for the rep: what they want, their message. */
  summary: string[];
  /** page_url, landing_page, referrer, utm_*, gclid: empty values are dropped. */
  tracking: Record<string, string>;
  lang: string;
};

/** Digits with country code, as the CRM stores them. An 8-digit number is an Oman local number. */
export function crmPhone(input: string): string {
  const digits = input.replace(/\D/g, "").replace(/^00/, "");
  return digits.length === 8 ? `968${digits}` : digits;
}

export async function saveWebsiteLead(
  lead: WebsiteLead,
): Promise<{ ok: true; status: string } | { ok: false; error: string }> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { ok: false, error: "CRM is not configured" };
  const rest = (path: string, init: RequestInit = {}) =>
    fetch(`${url}/rest/v1/${path}`, {
      ...init,
      signal: AbortSignal.timeout(8000),
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        ...init.headers,
      },
    });
  const phone = crmPhone(lead.phone);
  const where = `phone=eq.${phone}&tenant_id=eq.${TENANT}`;
  const tracking = Object.entries(lead.tracking).filter(([, v]) => v);

  try {
    const made = await rest("rpc/insert_lead", {
      method: "POST",
      body: JSON.stringify({
        p_phone: Number(phone),
        p_tenant_id: TENANT,
        p_name: lead.name,
        p_resource: SOURCE,
      }),
    });
    // the CRM rejects numbers it cannot call (too short, wrong country code, …) with a readable message
    if (!made.ok) return { ok: false, error: (await made.text()).slice(0, 300) };
    const status = (await made.json()) as string; // "inserted" | "updated"

    const [row] = (await (await rest(`Lead?select=notes,tags,email,company&${where}`)).json()) as {
      notes: string | null;
      tags: string[];
      email: string | null;
      company: string | null;
    }[];
    const stamp = new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Muscat",
      dateStyle: "medium",
      timeStyle: "short",
    });
    const block = [
      `[Website form, ${stamp}]`,
      ...lead.summary,
      ...tracking.map(([k, v]) => `${k}: ${v}`),
    ].join("\n");
    // A number that is already a lead belongs to its rep: an anonymous form must not change it (the CRM's own
    // public form never does). The enquiry still reaches us by email and, once the table exists, in site_leads.
    if (status === "inserted") {
      const patched = await rest(`Lead?${where}`, {
        method: "PATCH",
        body: JSON.stringify({
          notes: block.slice(0, 20000),
          tags: [...new Set([...(row?.tags ?? []), SOURCE])],
          size: SIZE[lead.size],
          ...(lead.company ? { company: lead.company } : {}),
        }),
      });
      if (!patched.ok) console.error("website lead: notes not saved", patched.status);
      // on its own: another lead may already own this email (unique per workspace), which must not undo the rest
      if (lead.email)
        await rest(`Lead?${where}`, {
          method: "PATCH",
          body: JSON.stringify({ email: lead.email }),
        });
    }
    // structured copy for reports (lead → contract by phone); ignored until the table exists
    await rest("site_leads", {
      method: "POST",
      body: JSON.stringify({
        tenant_id: TENANT,
        phone: Number(phone),
        name: lead.name,
        email: lead.email || null,
        company: lead.company || null,
        lang: lead.lang,
        answers: lead.summary.join("\n"),
        ...Object.fromEntries(tracking),
      }),
    });
    return { ok: true, status };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "CRM request failed" };
  }
}
