import type { ComponentType } from "react";

import { VideosPage } from "@/components/site/pages/VideosPage";
import { jsonLdScript } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { getPublishedVideos } from "@/lib/videos";

/** Server wrapper: loads published videos (ISR, see `revalidate` in the route files) and adds VideoObject JSON-LD. */
async function VideosData() {
  const videos = await getPublishedVideos();
  return (
    <>
      {videos
        .filter((v) => v.poster && (v.src || v.youtubeId))
        .map((v) =>
          jsonLdScript({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: v.title.en,
            description: v.description.en || v.title.en,
            thumbnailUrl: v.poster,
            uploadDate: v.date,
            ...(v.youtubeId
              ? { embedUrl: `https://www.youtube.com/embed/${v.youtubeId}` }
              : { contentUrl: v.src }),
            publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
          }),
        )}
      <VideosPage videos={videos} />
    </>
  );
}

// ponytail: the route helpers type pages as sync components; Next renders async server components fine.
export const VideosRoute = VideosData as unknown as ComponentType;
