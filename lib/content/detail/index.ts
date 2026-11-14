import type { Lang } from "@/lib/locales";
import { CASE_PAGES } from "./work";
import { INDUSTRY_PAGES } from "./industries";
import { PRODUCT_PAGES } from "./products";
import { SERVICE_PAGES } from "./services";
import type { DetailEntry, DetailKind } from "./types";

export type { DetailEntry, DetailKind } from "./types";

export const DETAIL_PAGES: Record<DetailKind, DetailEntry[]> = {
  services: SERVICE_PAGES,
  products: PRODUCT_PAGES,
  industries: INDUSTRY_PAGES,
  work: CASE_PAGES,
};

export const detailPath = (kind: DetailKind, slug: string) => `/${kind}/${slug}`;

export function getDetail(kind: DetailKind, slug: string) {
  return DETAIL_PAGES[kind].find((e) => e.slug === slug);
}

/** Every money-page path, for the sitemap. */
export const DETAIL_PATHS = (Object.keys(DETAIL_PAGES) as DetailKind[]).flatMap((kind) =>
  DETAIL_PAGES[kind].map((e) => detailPath(kind, e.slug)),
);

/** Light link list (name, summary, href) for menus, hubs and footers — keeps the full copy out of client bundles. */
export type DetailLink = { href: string; name: string; summary: string; image: DetailEntry["image"] };

export function detailLinks(kind: DetailKind, lang: Lang, slugs?: string[]): DetailLink[] {
  const list = slugs
    ? slugs.map((s) => getDetail(kind, s)).filter((e): e is DetailEntry => !!e)
    : DETAIL_PAGES[kind];
  return list.map((e) => ({
    href: detailPath(kind, e.slug),
    name: e[lang].name,
    summary: e[lang].summary,
    image: e.image,
  }));
}

/** Menu groups for the header / footer, both languages. */
export function navMenus(lang: Lang) {
  return {
    services: detailLinks("services", lang),
    products: detailLinks("products", lang),
    industries: detailLinks("industries", lang),
    work: detailLinks("work", lang),
  };
}
export type NavMenus = ReturnType<typeof navMenus>;
