import "server-only";

import Markdoc, { type Node } from "@markdoc/markdoc";
import { createReader } from "@keystatic/core/reader";
import { cache } from "react";

import config from "@/keystatic.config";
import type { Lang } from "@/lib/locales";

/**
 * Articles are edited in the Keystatic panel (/keystatic) and stored as JSON
 * in content/articles. `draft` articles are reachable by URL for review but
 * are noindex and left out of the list and the sitemap.
 */
const reader = createReader(process.cwd(), config);

export type ArticleCopy = {
  title: string;
  description: string;
  seoTitle: string;
  imageAlt: string;
  body: Node;
};

export type Article = {
  slug: string;
  status: "draft" | "published";
  date: string;
  image: string;
  canonical: string | null;
  noindex: boolean;
  related: { href: string; label: Record<Lang, string> }[];
} & Record<Lang, ArticleCopy>;

export const getArticles = cache(async (): Promise<Article[]> => {
  const entries = await reader.collections.articles.all();
  const list = entries.map(({ slug, entry: e }) => {
    const copy = (l: Lang): ArticleCopy => ({
      title: e[l].title,
      description: e[l].description,
      seoTitle: e[l].seoTitle,
      imageAlt: e[l].imageAlt,
      body: e[l].body.node,
    });
    return {
      slug,
      status: e.status as Article["status"],
      date: e.date ?? "",
      image: e.image ?? "",
      canonical: e.canonical || null,
      noindex: e.noindex,
      related: e.related.map((r) => ({ href: r.href, label: { en: r.en, ar: r.ar } })),
      en: copy("en"),
      ar: copy("ar"),
    };
  });
  return list.sort((a, b) => b.date.localeCompare(a.date));
});

export const getPublishedArticles = async () =>
  (await getArticles()).filter((a) => a.status === "published");

export const findArticle = async (slug: string) =>
  (await getArticles()).find((a) => a.slug === slug);

/** Markdoc body → renderable tree (headings, lists, links, bold, images). */
export function renderBody(body: Node) {
  return Markdoc.transform(body);
}

/** Per-page overrides from the "Page SEO" singleton; empty fields mean "keep the default". */
export const getSeoOverrides = cache(async () => (await reader.singletons.seo.read())?.pages);
