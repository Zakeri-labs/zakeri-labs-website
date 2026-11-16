/**
 * Where a visitor came from, kept in a first-party cookie so a website lead can be followed to a
 * contract in the CRM. Landing page and referrer are written once (first visit); campaign tags
 * (utm_*, gclid) are replaced whenever a later visit arrives with new ones.
 */
export const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;
export type Attribution = Partial<
  Record<(typeof CAMPAIGN_KEYS)[number] | "landing_page" | "referrer" | "first_seen", string>
>;

const COOKIE = "idrak_attr";
const DAYS = 90;

export function readAttribution(): Attribution {
  try {
    const raw = document.cookie.split("; ").find((c) => c.startsWith(`${COOKIE}=`));
    return raw ? (JSON.parse(decodeURIComponent(raw.slice(COOKIE.length + 1))) as Attribution) : {};
  } catch {
    return {};
  }
}

/** Call once per page load. */
export function captureAttribution() {
  const saved = readAttribution();
  const params = new URLSearchParams(window.location.search);
  const campaign = Object.fromEntries(
    CAMPAIGN_KEYS.flatMap((k) => (params.get(k) ? [[k, params.get(k)!.slice(0, 200)]] : [])),
  );
  if (saved.landing_page && !Object.keys(campaign).length) return;
  const external = document.referrer && new URL(document.referrer).host !== window.location.host;
  const next: Attribution = {
    landing_page: window.location.href.slice(0, 500),
    referrer: external ? document.referrer.slice(0, 500) : "",
    first_seen: new Date().toISOString(),
    ...saved,
    // new tags replace the whole old set, so a campaign is never mixed with another one's term
    ...(Object.keys(campaign).length
      ? { ...Object.fromEntries(CAMPAIGN_KEYS.map((k) => [k, ""])), ...campaign }
      : {}),
  };
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(next))}; Path=/; Max-Age=${DAYS * 86400}; SameSite=Lax; Secure`;
}
