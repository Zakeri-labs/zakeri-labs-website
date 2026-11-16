import { ABOUT } from "@/lib/content/about";
import { COMMON } from "@/lib/content/common";
import { CONTACT } from "@/lib/content/contact";
import { DELETION } from "@/lib/content/deletion";
import { DETAIL_PAGES, detailPath } from "@/lib/content/detail";
import { HOME } from "@/lib/content/home";
import { HOW } from "@/lib/content/how";
import { DEFAULT_COPY, flatten } from "@/lib/content/overrides";
import { PORTFOLIO } from "@/lib/content/portfolio";
import { PRIVACY } from "@/lib/content/privacy";
import { PRODUCTS } from "@/lib/content/products";
import { SERVICES } from "@/lib/content/services";
import { TERMS } from "@/lib/content/terms";
import { WORK } from "@/lib/content/work";
import { IMG } from "@/lib/images";
import { createPageMetadata, PUBLIC_PAGE_PATHS, type PublicPage } from "@/lib/seo";

export const dynamic = "force-static";

// importing a module registers its default copy; listing them here keeps the bundler from dropping any
void [
  ABOUT,
  COMMON,
  CONTACT,
  DELETION,
  HOME,
  HOW,
  PORTFOLIO,
  PRIVACY,
  PRODUCTS,
  SERVICES,
  TERMS,
  WORK,
];

const NAMES: Record<string, string> = {
  home: "Home",
  services: "Services (hub)",
  products: "Products (hub)",
  industries: "Industries (hub)",
  work: "Work (hub)",
  portfolio: "Video portfolio",
  about: "About",
  "how-we-work": "How we work",
  contact: "Contact",
  privacy: "Privacy",
  terms: "Terms",
  deletion: "Data deletion",
  common: "Shared: menu, footer, forms",
};

/**
 * What the admin panel needs to edit pages: every page, its URL and every string as written in the code
 * (the defaults, before any panel edit). Public copy only; nothing here is secret.
 */
export function GET() {
  const langs = ["en", "ar"] as const;
  const copyOf = (id: string) =>
    Object.fromEntries(langs.map((l) => [l, flatten(DEFAULT_COPY[id]?.[l])]));
  const hubs = [...(Object.keys(PUBLIC_PAGE_PATHS) as PublicPage[]), "common"].map((id) => {
    const page = id in PUBLIC_PAGE_PATHS ? (id as PublicPage) : null;
    const copy = copyOf(id);
    if (page)
      for (const l of langs) {
        const m = createPageMetadata(page, l);
        // hub titles and descriptions live in lib/seo.tsx; they are edited under the same two keys as money pages
        copy[l] = {
          "seo.title": (m.title as { absolute: string }).absolute,
          "seo.description": m.description ?? "",
          ...copy[l],
        };
      }
    return {
      id,
      kind: page ? "hub" : "shared",
      name: NAMES[id] ?? id,
      path: page ? PUBLIC_PAGE_PATHS[page] : null,
      image: null,
      copy,
    };
  });
  const details = (Object.keys(DETAIL_PAGES) as (keyof typeof DETAIL_PAGES)[]).flatMap((kind) =>
    DETAIL_PAGES[kind].map((e) => {
      const id = `${kind}/${e.slug}`;
      return {
        id,
        kind,
        name: (DEFAULT_COPY[id]?.en as { name?: string })?.name ?? e.slug,
        path: detailPath(kind, e.slug),
        image: IMG[e.image]?.src ?? null,
        copy: copyOf(id),
      };
    }),
  );
  return Response.json({ generated: new Date().toISOString(), pages: [...hubs, ...details] });
}
