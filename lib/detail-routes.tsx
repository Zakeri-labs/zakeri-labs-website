import { Fragment } from "react";
import { notFound } from "next/navigation";

import { DetailPage } from "@/components/site/pages/DetailPage";
import { COMMON } from "@/lib/content/common";
import {
  DETAIL_PAGES,
  detailPath,
  getDetail,
  type DetailEntry,
  type DetailKind,
} from "@/lib/content/detail";
import { isLocalizedLang, localizePathname, type Lang } from "@/lib/locales";
import {
  absoluteUrl,
  buildMetadata,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  jsonLdScript,
} from "@/lib/seo";
import { SITE } from "@/lib/site";

const ORG = { "@id": `${SITE.url}/#organization` };
const OMAN = { "@type": "Country", name: "Oman" };

/** Service / SoftwareApplication / Article schema per page kind. */
function mainJsonLd(e: DetailEntry, lang: Lang) {
  const d = e[lang];
  const url = absoluteUrl(localizePathname(detailPath(e.kind, e.slug), lang));
  const base = {
    "@context": "https://schema.org",
    url,
    name: d.name,
    description: d.seo.description,
    inLanguage: lang,
  };
  if (e.kind === "products")
    return {
      ...base,
      "@type": "SoftwareApplication",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      publisher: ORG,
      areaServed: OMAN,
    };
  if (e.kind === "work")
    return {
      ...base,
      "@type": "Article",
      headline: d.hero.title,
      author: ORG,
      publisher: ORG,
      about: d.name,
    };
  return {
    ...base,
    "@type": "Service",
    serviceType: d.name,
    provider: ORG,
    areaServed: OMAN,
    ...(e.kind === "industries" ? { audience: { "@type": "BusinessAudience", name: d.name } } : {}),
  };
}

function hubName(kind: DetailKind, lang: Lang) {
  return COMMON[lang].nav[`/${kind}` as keyof (typeof COMMON)["en"]["nav"]];
}

function metadata(kind: DetailKind, slug: string, lang: Lang) {
  const e = getDetail(kind, slug);
  if (!e) notFound();
  return buildMetadata({
    path: detailPath(kind, slug),
    lang,
    title: e[lang].seo.title,
    description: e[lang].seo.description,
    type: kind === "work" ? "article" : "website",
  });
}

function render(kind: DetailKind, slug: string, lang: Lang) {
  const e = getDetail(kind, slug);
  if (!e) notFound();
  const ld = [
    getBreadcrumbJsonLd(
      [
        { name: COMMON[lang].nav["/"], path: "/" },
        { name: hubName(kind, lang), path: `/${kind}` },
        { name: e[lang].name, path: detailPath(kind, slug) },
      ],
      lang,
    ),
    mainJsonLd(e, lang),
    getFaqJsonLd(e[lang].faq),
  ];
  return (
    <>
      {ld.map((data, i) => (
        <Fragment key={i}>{jsonLdScript(data)}</Fragment>
      ))}
      <DetailPage entry={e} lang={lang} />
    </>
  );
}

type EnParams = { params: Promise<{ slug: string }> };
type LangParams = { params: Promise<{ lang: string; slug: string }> };

/** `/services/<slug>` (English, at the root). */
export function enDetailRoute(kind: DetailKind) {
  return {
    generateStaticParams: () => DETAIL_PAGES[kind].map((e) => ({ slug: e.slug })),
    generateMetadata: async ({ params }: EnParams) => metadata(kind, (await params).slug, "en"),
    Page: async ({ params }: EnParams) => render(kind, (await params).slug, "en"),
  };
}

/** `/ar/services/<slug>`. */
export function localizedDetailRoute(kind: DetailKind) {
  const resolve = async (params: LangParams["params"]) => {
    const p = await params;
    if (!isLocalizedLang(p.lang)) notFound();
    return p as { lang: Lang; slug: string };
  };
  return {
    generateStaticParams: () => DETAIL_PAGES[kind].map((e) => ({ slug: e.slug })),
    generateMetadata: async ({ params }: LangParams) => {
      const p = await resolve(params);
      return metadata(kind, p.slug, p.lang);
    },
    Page: async ({ params }: LangParams) => {
      const p = await resolve(params);
      return render(kind, p.slug, p.lang);
    },
  };
}
