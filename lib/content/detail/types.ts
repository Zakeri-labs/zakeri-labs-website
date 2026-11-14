/**
 * One shape for every money page Sajjad's architecture asks for (Nov 2026):
 * /services/<slug>, /products/<slug>, /industries/<slug> and /work/<slug> (case studies).
 * Each kind lives in its own content file; the page, sitemap, JSON-LD and menus read them from
 * lib/content/detail/index.ts.
 */
import type { IMG } from "@/lib/images";

export type DetailKind = "services" | "products" | "industries" | "work";

export type ServiceSlug =
  | "custom-software-development"
  | "ai-business-automation"
  | "whatsapp-ai-automation"
  | "ai-video-production"
  | "content-social-media"
  | "web-design"
  | "seo-geo";

export type ProductSlug = "construction-supervision-reporting" | "clinic-crm-whatsapp-assistant";

export type IndustrySlug =
  | "real-estate"
  | "healthcare"
  | "construction"
  | "wholesale-distribution"
  | "facility-property-management"
  | "logistics-transport";

export type CaseSlug = string;

export type Item = { title: string; text: string };

export type DetailCopy = {
  /** <title> (50–60 chars, primary keyword first) and meta description (140–160 chars). */
  seo: { title: string; description: string };
  /** Short name used in menus, cards and breadcrumbs. */
  name: string;
  /** One-line card text for hubs, menus and related links. */
  summary: string;
  hero: { eyebrow: string; title: string; intro: string; support?: string };
  /** The business problem, in the buyer's words. */
  problem: { eyebrow: string; title: string; intro?: string; points: string[] };
  /** What we build / what is included. Case studies: "What we built". */
  offer: { eyebrow: string; title: string; intro?: string; items: Item[] };
  /** Optional chip list (capabilities, use cases, technologies). */
  chips?: { label: string; items: string[] };
  /** How it runs / how we deliver. */
  process?: { eyebrow: string; title: string; steps: Item[] };
  /** Outcomes or results. No invented numbers. */
  outcomes: { eyebrow: string; title: string; items: Item[] };
  faq: { q: string; a: string }[];
  cta: { title: string; text: string; button: string };
};

export type DetailEntry = {
  kind: DetailKind;
  slug: string;
  image: keyof typeof IMG;
  /** Contact-form interest preset (?interest=…). */
  interest?: string;
  related: {
    services?: ServiceSlug[];
    products?: ProductSlug[];
    industries?: IndustrySlug[];
    work?: CaseSlug[];
  };
  en: DetailCopy;
  ar: DetailCopy;
};
