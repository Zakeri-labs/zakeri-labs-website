import { PortfolioPage } from "@/components/site/pages/PortfolioPage";
import type { PageComponent } from "@/lib/pages";
import type { Lang } from "@/lib/locales";
import { absoluteUrl, jsonLdScript } from "@/lib/seo";
import { localizePathname } from "@/lib/locales";
import { SITE } from "@/lib/site";
import { getPublishedVideos } from "@/lib/videos";

/** Server wrapper: loads published videos (ISR, see `revalidate` in the route files) and lists them as VideoObjects. */
export async function PortfolioData({ lang, initial }: { lang: Lang; initial?: string }) {
  const videos = await getPublishedVideos();
  const listed = videos.filter((v) => v.poster && (v.src || v.youtubeId));
  const pageUrl = absoluteUrl(localizePathname("/portfolio", lang));
  return (
    <>
      {/* a sample page is canonical to /portfolio: the list markup belongs there only */}
      {!initial &&
        listed.length > 0 &&
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "ItemList",
          url: pageUrl,
          numberOfItems: listed.length,
          itemListElement: listed.map((v, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "VideoObject",
              name: v.title[lang],
              description: v.description[lang] || v.title[lang],
              thumbnailUrl: v.poster,
              uploadDate: v.date,
              url: v.code ? `${pageUrl}/${v.code}` : `${pageUrl}?v=${v.id}`,
              ...(v.code ? { identifier: v.code } : {}),
              ...(v.youtubeId
                ? { embedUrl: `https://www.youtube.com/embed/${v.youtubeId}` }
                : { contentUrl: v.src }),
              ...(v.width && v.height ? { width: v.width, height: v.height } : {}),
              publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
            },
          })),
        })}
      <PortfolioPage videos={videos} initial={initial} />
    </>
  );
}

// ponytail: the route helpers type pages as sync components; Next renders async server components fine.
export const PortfolioRoute = PortfolioData as unknown as PageComponent;
