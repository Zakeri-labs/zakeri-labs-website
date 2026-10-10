import { notFound } from "next/navigation";

import { ArticlesList, ArticleView, ARTICLES_COPY } from "@/components/site/pages/ArticlePages";
import { findArticle, getPublishedArticles } from "@/lib/articles";
import { isLocalizedLang, type Lang } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

type LangParams = { params: Promise<{ lang?: string; slug?: string }> };

async function resolve({ params }: LangParams): Promise<{ lang: Lang; slug?: string }> {
  const { lang = "en", slug } = await params;
  if (lang !== "en" && !isLocalizedLang(lang)) notFound();
  return { lang: lang as Lang, slug };
}

/** /articles and /ar/articles. Noindex until something is published. */
export const listRoute = {
  generateMetadata: async (p: LangParams) => {
    const { lang } = await resolve(p);
    const t = ARTICLES_COPY[lang];
    return buildMetadata({
      path: "/articles",
      lang,
      title: t.metaTitle,
      description: t.metaDescription,
      noindex: (await getPublishedArticles()).length === 0,
    });
  },
  Page: async (p: LangParams) => (
    <ArticlesList lang={(await resolve(p)).lang} articles={await getPublishedArticles()} />
  ),
};

/** /articles/[slug] and /ar/articles/[slug]. Drafts render but are noindex. */
export const articleRoute = {
  generateMetadata: async (p: LangParams) => {
    const { lang, slug } = await resolve(p);
    const a = await findArticle(slug!);
    if (!a) notFound();
    return buildMetadata({
      path: `/articles/${a.slug}`,
      lang,
      title: a[lang].seoTitle || `${a[lang].title} | IDRAK`,
      description: a[lang].description,
      type: "article",
      image: { url: a.image, width: 1024, height: 1024, alt: a[lang].imageAlt },
      canonical: a.canonical ?? undefined,
      noindex: a.status !== "published" || a.noindex,
    });
  },
  Page: async (p: LangParams) => {
    const { lang, slug } = await resolve(p);
    const a = await findArticle(slug!);
    if (!a) notFound();
    return <ArticleView article={a} lang={lang} />;
  },
};
