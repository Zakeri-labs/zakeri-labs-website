import type { MetadataRoute } from "next";

import { getPublishedArticles } from "@/lib/articles";
import { DETAIL_PATHS } from "@/lib/content/detail";
import { pageMeta } from "@/lib/content/overrides";
import { LANGUAGES, localizePathname } from "@/lib/locales";
import { absoluteUrl, PUBLIC_PAGE_PATHS } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = (await getPublishedArticles()).filter((a) => !a.noindex && !a.canonical);
  // Money pages (services, products, industries, case studies) right after the hubs.
  // a page set to noindex or pointed at another canonical in the admin panel leaves the sitemap
  const listed = (id: string) => !pageMeta(id).noindex && !pageMeta(id).canonical;
  const pages = [
    ...Object.entries(PUBLIC_PAGE_PATHS)
      .filter(([id]) => listed(id))
      .map(([, path]) => path),
    ...DETAIL_PATHS.filter((path) => listed(path.slice(1))),
  ];
  if (articles.length) pages.push("/articles");

  const alternates = (path: string) => ({
    languages: {
      ...Object.fromEntries(LANGUAGES.map((l) => [l, absoluteUrl(localizePathname(path, l))])),
      "x-default": absoluteUrl(path),
    },
  });

  return LANGUAGES.flatMap((lang) => [
    ...pages.map((path) => ({
      url: absoluteUrl(localizePathname(path, lang)),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : /^\/(services|products|industries)(\/|$)/.test(path) ? 0.9 : 0.8,
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
