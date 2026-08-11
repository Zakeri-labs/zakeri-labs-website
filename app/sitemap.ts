import type { MetadataRoute } from "next";

import { LANGUAGES, localizePathname } from "@/lib/locales";
import { absoluteUrl, PUBLIC_PAGE_PATHS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGUAGES.flatMap((lang) =>
    Object.values(PUBLIC_PAGE_PATHS).map((path) => ({
      url: absoluteUrl(localizePathname(path, lang)),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.8,
    })),
  );
}
