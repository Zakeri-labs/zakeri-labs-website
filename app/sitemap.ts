import type { MetadataRoute } from "next";

import { getPublishedArticles } from "@/lib/articles";
import { LANGUAGES, localizePathname } from "@/lib/locales";
import { absoluteUrl, PUBLIC_PAGE_PATHS } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = (await getPublishedArticles()).filter((a) => !a.noindex && !a.canonical);
  const pages = [...Object.values(PUBLIC_PAGE_PATHS)];
  if (articles.length) pages.push("/articles");

  const alternates = (path: string) => ({
    languages: Object.fromEntries(
      LANGUAGES.map((l) => [l, absoluteUrl(localizePathname(path, l))]),
    ),
  });

  return LANGUAGES.flatMap((lang) => [
    ...pages.map((path) => ({
      url: absoluteUrl(localizePathname(path, lang)),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.8,
      alternates: alternates(path),
    })),
    ...articles.map((a) => ({
      url: absoluteUrl(localizePathname(`/articles/${a.slug}`, lang)),
      lastModified: a.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: alternates(`/articles/${a.slug}`),
    })),
  ]);
}
