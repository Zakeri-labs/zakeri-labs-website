import type { Lang } from "@/lib/locales";

export const SITE = {
  /** Brand used in titles, header, footer and structured data. */
  name: "IDRAK AI Solutions",
  shortName: "IDRAK",
  /**
   * The registered company, exactly as on Commercial Registration 1662469.
   * Meta Business verification matches the website against this entity, so
   * the footer and the Organization JSON-LD must carry it verbatim.
   */
  legalName: "Idrak AI Solutions SPC",
  crNumber: "1662469",
  legalCity: "Muscat, Oman",
  founder: "Mohammadreza Zakeri",
  url: "https://www.zakeri.dev",
  phone: "+968 7171 3260",
  phoneRaw: "96871713260",
  email: "zakeri@omanai.tech",
};

const WHATSAPP_GREETING: Record<Lang, string> = {
  en: "Hi IDRAK, I'd like to discuss a business challenge with you.",
  ar: "مرحباً إدراك، أودّ مناقشة تحدٍّ في عملي معكم.",
};

export function whatsappUrl(lang: Lang): string {
  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(WHATSAPP_GREETING[lang])}`;
}
