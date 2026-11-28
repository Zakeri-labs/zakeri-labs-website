import type { Lang } from "@/lib/locales";

const OFFICE = {
  street: "Office 12, First Floor, Building 620A, Mazoon Street, Al Khoudh",
  locality: "Al Seeb",
  region: "Muscat",
};

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
  /** Registered address on the CR. Legal pages only: the footer and JSON-LD carry the office (one NAP for Google). */
  registeredAddress: {
    en: "Murtafaat Al Matar, Al Seeb, Muscat, P.O. Box 85, P.C. 121",
    ar: "مرتفعات المطار، السيب، مسقط، ص.ب 85، الرمز البريدي 121",
  },
  /**
   * The office visitors come to. Same text as the CRM AI seller's OFFICE_ADDRESS and the
   * Idrak contracts; change it in all three places together. The English line is built from
   * street/locality/region (what the JSON-LD uses), so it cannot drift from the schema.
   */
  office: {
    address: {
      en: `${OFFICE.street}, ${OFFICE.locality}, ${OFFICE.region}, Sultanate of Oman`,
      ar: "مكتب 12، الطابق الأول، مبنى 620A، شارع المزون، الخوض، السيب، مسقط، سلطنة عُمان",
    },
    area: { en: "Al Khoudh, Al Seeb, Muscat", ar: "الخوض، السيب، مسقط" },
    ...OFFICE,
    country: "OM",
    lat: 23.614832,
    lng: 58.204288,
    mapUrl: "https://maps.google.com/?q=23.614832,58.204288",
    /** Office hours (Hossein 28 Nov: «اداری»). Shown on /contact and /portfolio, and in the JSON-LD. */
    hours: {
      en: "Sunday to Thursday, 8:00 am to 5:00 pm",
      ar: "من الأحد إلى الخميس، 8:00\u00a0ص – 5:00\u00a0م",
    },
    openDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "17:00",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=23.614832,58.204288",
  },
  founder: "Mohammadreza Zakeri",
  url: "https://omanai.tech",
  phone: "+968 7171 3238",
  phoneRaw: "96871713238",
  email: "zakeri@omanai.tech",
  /**
   * Official profiles (Google Business Profile, LinkedIn, Instagram, YouTube…). They feed
   * Organization `sameAs`, which ties the brand's profiles together for Google and AI search.
   * Add each URL here as soon as the profile exists.
   */
  sameAs: [] as string[],
};

const WHATSAPP_GREETING: Record<Lang, string> = {
  en: "Hi IDRAK, I'd like to discuss a business challenge with you.",
  ar: "مرحباً إدراك، أودّ مناقشة تحدٍّ في عملي معكم.",
};

export function whatsappUrl(lang: Lang): string {
  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(WHATSAPP_GREETING[lang])}`;
}
