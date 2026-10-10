import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { Container, Cta, PageHero, Section } from "@/components/site/blocks";
import Markdoc from "@markdoc/markdoc";
import React from "react";

import { type Article, renderBody } from "@/lib/articles";
import { localizePathname, type Lang } from "@/lib/locales";
import { absoluteUrl, getBreadcrumbJsonLd, jsonLdScript } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const ARTICLES_COPY = {
  en: {
    home: "Home",
    title: "Articles",
    eyebrow: "Insights",
    intro:
      "Practical guides on using AI to grow businesses in Oman: automation, WhatsApp, AI video and more.",
    empty: "Our first articles are being written. Check back soon.",
    cta: "Talk to IDRAK",
    ctaTitle: "Want to see what AI can do for your business?",
    read: "Read article",
    related: "Related",
    draft: "Draft outline for review. Not published.",
    metaTitle: "Articles | IDRAK AI Solutions Oman",
    metaDescription:
      "Practical articles on AI automation, WhatsApp AI assistants and AI video for businesses in Oman, from IDRAK AI Solutions.",
  },
  ar: {
    home: "الرئيسية",
    title: "المقالات",
    eyebrow: "رؤى",
    intro:
      "أدلة عملية لاستخدام الذكاء الاصطناعي في تنمية الأعمال في عُمان: الأتمتة وواتساب وفيديو الذكاء الاصطناعي وغيرها.",
    empty: "نعمل على كتابة مقالاتنا الأولى. عُد قريباً.",
    cta: "تواصل مع إدراك",
    ctaTitle: "هل تريد أن ترى ما يمكن أن يقدّمه الذكاء الاصطناعي لعملك؟",
    read: "اقرأ المقال",
    related: "ذو صلة",
    draft: "مخطط مسودة للمراجعة. غير منشور.",
    metaTitle: "المقالات | إدراك للحلول الذكية عُمان",
    metaDescription:
      "مقالات عملية عن الأتمتة بالذكاء الاصطناعي ومساعدي واتساب الذكيين وفيديو الذكاء الاصطناعي للشركات في عُمان من إدراك للحلول الذكية.",
  },
};

const dateFmt = (d: string, lang: Lang) =>
  new Date(d).toLocaleDateString(lang === "ar" ? "ar-OM-u-nu-latn" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  });

export function ArticlesList({ lang, articles: list }: { lang: Lang; articles: Article[] }) {
  const t = ARTICLES_COPY[lang];
  return (
    <>
      {jsonLdScript(
        getBreadcrumbJsonLd(
          [
            { name: t.home, path: "/" },
            { name: t.title, path: "/articles" },
          ],
          lang,
        ),
      )}
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <Section className="pt-0 lg:pt-0">
        {list.length === 0 ? (
          <div className="card-surface rounded-3xl p-8 text-center sm:p-10">
            <p className="text-lg text-foreground/80">{t.empty}</p>
            <div className="mt-6">
              <Cta href="/contact">{t.cta}</Cta>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <article key={a.slug} className="card-surface overflow-hidden rounded-3xl">
                <Link href={localizePathname(`/articles/${a.slug}`, lang)} className="block">
                  <Image
                    src={a.image}
                    alt={a[lang].imageAlt}
                    width={1024}
                    height={1024}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="p-6">
                    <time className="text-xs text-muted-foreground" dateTime={a.date}>
                      {dateFmt(a.date, lang)}
                    </time>
                    <h2 className="mt-2 text-xl font-bold leading-snug">{a[lang].title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {a[lang].description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-cyan">
                      {t.read} →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

export function ArticleView({ article, lang }: { article: Article; lang: Lang }) {
  const t = ARTICLES_COPY[lang];
  const c = article[lang];
  const path = `/articles/${article.slug}`;
  const crumbs = [
    { name: t.home, path: "/" },
    { name: t.title, path: "/articles" },
    { name: c.title, path },
  ];
  return (
    <>
      {jsonLdScript({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: c.title,
        description: c.description,
        image: absoluteUrl(article.image),
        datePublished: article.date,
        dateModified: article.date,
        inLanguage: lang,
        mainEntityOfPage: absoluteUrl(localizePathname(path, lang)),
        author: { "@type": "Person", name: SITE.founder },
        publisher: { "@id": `${SITE.url}/#organization` },
      })}
      {jsonLdScript(getBreadcrumbJsonLd(crumbs, lang))}
      <Container className="pt-10 lg:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          {crumbs.slice(0, -1).map((b) => (
            <Fragment key={b.path}>
              <Link href={localizePathname(b.path, lang)} className="hover:text-primary">
                {b.name}
              </Link>
              <span className="mx-2 [&:nth-last-child(2)]:hidden sm:[&:nth-last-child(2)]:inline">
                /
              </span>
            </Fragment>
          ))}
          <span aria-current="page" className="hidden text-foreground/80 sm:inline">
            {c.title}
          </span>
        </nav>
      </Container>
      <article>
        <Container className="max-w-3xl pb-20 pt-8 lg:pb-28">
          {article.status === "draft" && (
            <p className="mb-6 rounded-xl border border-amber-400/40 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
              {t.draft}
            </p>
          )}
          <time className="text-sm text-muted-foreground" dateTime={article.date}>
            {dateFmt(article.date, lang)}
          </time>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.2] sm:text-5xl">{c.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">{c.description}</p>
          <Image
            src={article.image}
            alt={article[lang].imageAlt}
            width={1024}
            height={1024}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover"
          />
          {/* Body from the Keystatic editor: headings, paragraphs, lists, links, images. */}
          <div className="mt-12 text-[17px] leading-8 text-foreground/75 [&_a]:font-semibold [&_a]:text-cyan [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_img]:my-6 [&_img]:rounded-2xl [&_li]:ms-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_p]:mb-4 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2">
            {Markdoc.renderers.react(renderBody(c.body), React)}
          </div>
          <aside className="mt-14 border-t border-border pt-8">
            <h2 className="text-lg font-bold">{t.related}</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {article.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={localizePathname(r.href, lang)}
                    className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm transition hover:bg-primary/20"
                  >
                    {r.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className="card-surface mt-10 rounded-3xl p-8 text-center">
            <p className="text-lg font-semibold">{t.ctaTitle}</p>
            <div className="mt-5">
              <Cta href="/contact">{t.cta}</Cta>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
