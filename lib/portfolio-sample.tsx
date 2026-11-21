import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { preload } from "react-dom";

import { PortfolioData } from "@/components/site/pages/PortfolioRoute";
import { PORTFOLIO } from "@/lib/content/portfolio";
import { normalizeCode } from "@/lib/industries";
import { isLocalizedLang, localizePathname, type Lang } from "@/lib/locales";
import { absoluteUrl, buildMetadata, createPageMetadata, shareImage } from "@/lib/seo";
import { getPublishedVideo } from "@/lib/videos";

/**
 * /portfolio/<code>: the link sales and the WhatsApp AI send for one sample. Same page as
 * /portfolio with that sample open; the share preview shows the sample's own cover and title.
 * Google is pointed at /portfolio (canonical), so 100 sample links are not 100 thin pages.
 */
type Params = { params: Promise<{ code: string; lang?: string }> };

async function resolve({ params }: Params) {
  const { code, lang = "en" } = await params;
  if (lang !== "en" && !isLocalizedLang(lang)) notFound();
  return { code: normalizeCode(code), lang: lang as Lang };
}

export async function sampleMetadata(p: Params): Promise<Metadata> {
  const { code, lang } = await resolve(p);
  const v = code ? await getPublishedVideo(code) : null;
  if (!v) return createPageMetadata("portfolio", lang);
  const title = PORTFOLIO[lang].sample.seoTitle
    .replace("{title}", v.title[lang])
    .replace("{code}", v.code ?? "");
  return buildMetadata({
    path: `/portfolio/${v.code}`,
    lang,
    title,
    description: v.description[lang] || PORTFOLIO[lang].hero.intro,
    canonical: absoluteUrl(localizePathname("/portfolio", lang)),
    // Meta's crawler shows the tags of og:url, so it must stay this sample, not the gallery
    ogUrl: absoluteUrl(localizePathname(`/portfolio/${v.code}`, lang)),
    // only a cover whose real size is known; otherwise the gallery's default share image
    image:
      v.poster && v.width && v.height
        ? { url: v.poster, width: v.width, height: v.height, alt: v.title[lang] }
        : shareImage("/og/portfolio.jpg", v.title[lang]),
  });
}

export async function SamplePage(p: Params) {
  const { code, lang } = await resolve(p);
  const v = code ? await getPublishedVideo(code) : null;
  // a hidden or mistyped sample still lands on the gallery instead of a dead end
  if (!v?.code) redirect(localizePathname("/portfolio", lang));
  // the open sample's cover is the LCP, and the dialog only exists after hydration
  if (v.poster) preload(v.poster, { as: "image", fetchPriority: "high" });
  return <PortfolioData lang={lang} initial={v.code} />;
}
