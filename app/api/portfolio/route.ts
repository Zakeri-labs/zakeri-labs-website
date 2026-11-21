import { absoluteUrl } from "@/lib/seo";
import { getPublishedVideos } from "@/lib/videos";

export const revalidate = 60;

/**
 * Public list of the published portfolio samples, for the WhatsApp AI and the sales team:
 * pick by industry, send `url`. Only what the public page already shows.
 */
export async function GET() {
  const samples = (await getPublishedVideos())
    .filter((v) => v.code)
    .map((v) => ({
      code: v.code,
      industry: v.industry,
      title: v.title,
      vertical: !!v.width && !!v.height && v.height > v.width,
      url: absoluteUrl(`/portfolio/${v.code}`),
      url_ar: absoluteUrl(`/ar/portfolio/${v.code}`),
    }));
  // a data feed, not a page: keep it out of search results
  return Response.json({ samples }, { headers: { "X-Robots-Tag": "noindex" } });
}
