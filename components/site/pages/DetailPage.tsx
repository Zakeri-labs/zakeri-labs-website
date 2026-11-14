import { ArrowRight } from "lucide-react";

import {
  CheckList,
  Chips,
  Cta,
  Faq,
  FinalCta,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  Split,
  Steps,
  Visual,
} from "@/components/site/blocks";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { COMMON } from "@/lib/content/common";
import { detailLinks, type DetailEntry, type DetailKind } from "@/lib/content/detail";
import { IMG } from "@/lib/images";
import type { Lang } from "@/lib/locales";
import { whatsappUrl } from "@/lib/site";

const LABELS = {
  en: {
    home: "Home",
    related: {
      services: "Related services",
      industries: "Industries we serve with this",
      products: "Ready-made products",
      work: "Case studies",
    },
    faq: "Frequently asked questions",
    learn: "Learn more",
  },
  ar: {
    home: "الرئيسية",
    related: {
      services: "خدمات ذات صلة",
      industries: "قطاعات نخدمها بهذا الحل",
      products: "منتجات جاهزة",
      work: "دراسات حالة",
    },
    faq: "الأسئلة الشائعة",
    learn: "اعرف المزيد",
  },
} as const;

const HUB_PATH: Record<DetailKind, string> = {
  services: "/services",
  products: "/products",
  industries: "/industries",
  work: "/work",
};

/** One template for every service, product, industry and case-study page. */
export function DetailPage({ entry, lang }: { entry: DetailEntry; lang: Lang }) {
  const d = entry[lang];
  const t = LABELS[lang];
  const c = COMMON[lang];
  const hub = HUB_PATH[entry.kind];
  const contactHref = entry.interest ? `/contact?interest=${entry.interest}` : "/contact";

  const related = (["services", "industries", "products", "work"] as const)
    .map((kind) => ({ kind, links: detailLinks(kind, lang, entry.related[kind]) }))
    .filter((g) => g.links.length > 0);

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          <li>
            <LocalizedLink href="/" className="hover:text-primary">
              {t.home}
            </LocalizedLink>
          </li>
          <li aria-hidden>/</li>
          <li>
            <LocalizedLink href={hub} className="hover:text-primary">
              {c.nav[hub as keyof typeof c.nav]}
            </LocalizedLink>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-foreground/80">
            {d.name}
          </li>
        </ol>
      </nav>

      <PageHero
        eyebrow={d.hero.eyebrow}
        title={d.hero.title}
        intro={d.hero.intro}
        support={d.hero.support}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href={contactHref}>{d.cta.button}</Cta>
            <Cta href={whatsappUrl(lang)} variant="outline" icon="whatsapp">
              {c.cta.whatsapp}
            </Cta>
          </div>
        }
        visual={
          <Visual src={IMG[entry.image]} alt={d.name} priority className="mx-auto max-w-md" />
        }
      />

      {/* ---------- Problem ---------- */}
      <Section tone="tint">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <SectionHeading eyebrow={d.problem.eyebrow} title={d.problem.title} intro={d.problem.intro} />
          <Reveal>
            <CheckList items={d.problem.points} className="card-surface p-6 sm:p-8" />
          </Reveal>
        </div>
      </Section>

      {/* ---------- Offer ---------- */}
      <Section>
        <SectionHeading eyebrow={d.offer.eyebrow} title={d.offer.title} intro={d.offer.intro} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.offer.items.map((item) => (
            <Reveal key={item.title} className="card-surface h-full p-6">
              <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
        {d.chips && (
          <Reveal className="mt-10">
            <p className="mb-3 text-sm font-semibold text-foreground/80">{d.chips.label}</p>
            <Chips items={d.chips.items} />
          </Reveal>
        )}
      </Section>

      {/* ---------- Process ---------- */}
      {d.process && (
        <Section tone="tint">
          <SectionHeading eyebrow={d.process.eyebrow} title={d.process.title} />
          <Steps items={d.process.steps} className="mt-12" />
        </Section>
      )}

      {/* ---------- Outcomes ---------- */}
      <Section>
        <Split
          reverse
          visual={<Visual src={IMG[entry.image]} alt="" sizes="(min-width: 1024px) 40vw, 90vw" />}
        >
          <SectionHeading eyebrow={d.outcomes.eyebrow} title={d.outcomes.title} />
          <ul className="mt-8 space-y-5">
            {d.outcomes.items.map((item) => (
              <li key={item.title} className="border-s-2 border-primary/40 ps-4">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </Split>
      </Section>

      {/* ---------- Related (internal linking) ---------- */}
      {related.length > 0 && (
        <Section tone="tint" className="py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {related.map((g) => (
              <div key={g.kind}>
                <h2 className="text-xl font-bold">{t.related[g.kind]}</h2>
                <ul className="mt-5 grid gap-3">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <LocalizedLink
                        href={l.href}
                        className="group card-surface flex items-start justify-between gap-4 p-4 transition hover:border-primary/40"
                      >
                        <span>
                          <span className="block font-semibold">{l.name}</span>
                          <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                            {l.summary}
                          </span>
                        </span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
                      </LocalizedLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ---------- FAQ ---------- */}
      <Section>
        <SectionHeading eyebrow="FAQ" title={t.faq} />
        <div className="mt-10 max-w-4xl">
          <Faq items={d.faq} />
        </div>
      </Section>

      <FinalCta eyebrow={c.cta.discussShort} title={d.cta.title} text={d.cta.text} primaryHref={contactHref} />
    </>
  );
}

/** Card grid used by the hubs (/services, /products, /industries) and the Work case-study list. */
export function DetailCards({ kind, lang, cta }: { kind: DetailKind; lang: Lang; cta: string }) {
  const links = detailLinks(kind, lang);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((l) => (
        <Reveal key={l.href} className="h-full">
            <LocalizedLink
              href={l.href}
              className="group card-surface flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]"
            >
              <h3 className="text-lg font-bold leading-snug">{l.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{l.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {cta} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </span>
            </LocalizedLink>
        </Reveal>
      ))}
    </div>
  );
}

export const DETAIL_LABELS = LABELS;
