import { Fragment, type ComponentType } from "react";
import { notFound } from "next/navigation";

import { COMMON } from "@/lib/content/common";
import { isLocalizedLang, type Lang } from "@/lib/locales";
import {
  createPageMetadata,
  FAQS,
  getBreadcrumbJsonLd,
  getAboutJsonLd,
  getFaqJsonLd,
  getProductsJsonLd,
  getProjectsJsonLd,
  getServicesJsonLd,
  jsonLdScript,
  PUBLIC_PAGE_PATHS,
  type PublicPage,
} from "@/lib/seo";

/**
 * Structured data per page. Components are passed in by each route file (not
 * imported here) so a route only bundles its own page.
 */
const JSON_LD: Partial<Record<PublicPage, (lang: Lang) => object[]>> = {
  services: (l) => [getServicesJsonLd(l), getFaqJsonLd(FAQS.services(l))],
  products: (l) => [getProductsJsonLd(l), getFaqJsonLd(FAQS.products(l))],
  "selected-work": (l) => [getProjectsJsonLd(l)],
  about: (l) => [getAboutJsonLd(l)],
  "how-we-work": (l) => [getFaqJsonLd(FAQS["how-we-work"](l))],
  contact: (l) => [getFaqJsonLd(FAQS.contact(l))],
};

/** Short page name for breadcrumbs: the part of the SEO title before " | ". */
const SEO_TITLE = (page: PublicPage, lang: Lang) =>
  (createPageMetadata(page, lang).title as { absolute: string }).absolute.split(" | ")[0];

function render(page: PublicPage, Component: ComponentType, lang: Lang) {
  const crumbs =
    page === "home"
      ? null
      : getBreadcrumbJsonLd(
          [
            { name: COMMON[lang].nav["/"], path: "/" },
            { name: SEO_TITLE(page, lang), path: PUBLIC_PAGE_PATHS[page] },
          ],
          lang,
        );
  return (
    <>
      {crumbs && jsonLdScript(crumbs)}
      {JSON_LD[page]?.(lang).map((data, i) => (
        <Fragment key={i}>{jsonLdScript(data)}</Fragment>
      ))}
      <Component />
    </>
  );
}

/** English route at the root: `/services`. */
export function enPage(page: PublicPage, Component: ComponentType) {
  return {
    metadata: createPageMetadata(page, "en"),
    Page: () => render(page, Component, "en"),
  };
}

type Params = { params: Promise<{ lang: string }> };

/** Localized route under `/[lang]`: `/ar/services`. */
export function localizedPage(page: PublicPage, Component: ComponentType) {
  return {
    generateMetadata: async ({ params }: Params) => {
      const { lang } = await params;
      if (!isLocalizedLang(lang)) notFound();
      return createPageMetadata(page, lang);
    },
    Page: async ({ params }: Params) => {
      const { lang } = await params;
      if (!isLocalizedLang(lang)) notFound();
      return render(page, Component, lang);
    },
  };
}
