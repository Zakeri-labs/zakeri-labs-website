type Params = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends a conversion event to whatever analytics is on the page: GA4 via gtag
 * (loaded when NEXT_PUBLIC_GA_ID is set) and/or a GTM dataLayer. A no-op when
 * neither exists, so calls never need guarding.
 */
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
  window.dataLayer?.push({ event, ...params });
}

/** Classifies a clicked link as a direct-contact action, or null. */
export function contactEventFor(href: string): string | null {
  if (href.startsWith("https://wa.me/")) return "whatsapp_contact_clicked";
  if (href.startsWith("mailto:")) return "email_contact_clicked";
  if (href.startsWith("tel:")) return "phone_contact_clicked";
  return null;
}
