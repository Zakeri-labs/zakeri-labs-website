"use client";

import {
  ArrowRight,
  Clapperboard,
  Globe,
  Layers,
  Megaphone,
  MessageCircle,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

import {
  Cta,
  Eyebrow,
  Faq,
  FinalCta,
  PageHero,
  ProductsBanner,
  Reveal,
  Section,
  SectionHeading,
  Steps,
  Visual,
} from "@/components/site/blocks";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { COMMON } from "@/lib/content/common";
import { SERVICES } from "@/lib/content/services";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import type { NavMenus } from "@/lib/content/detail";
import { useCopy, useI18n } from "@/lib/i18n";
import { localizePathname } from "@/lib/locales";
import { cn } from "@/lib/utils";
import { IMG } from "@/lib/images";

/** Old /services#automation style links (shared before Nov 2026) jump to the new standalone pages. */
const LEGACY: Record<string, string> = {
  "#automation": "/services/custom-software-development",
  "#whatsapp": "/services/whatsapp-ai-automation",
  "#ai-video": "/services/ai-video-production",
  "#content": "/services/content-social-media",
  "#web": "/services/web-design",
};

function LegacyHashRedirect() {
  const router = useRouter();
  const { lang } = useI18n();
  useEffect(() => {
    const to = LEGACY[window.location.hash];
    if (to) router.replace(localizePathname(to, lang));
  }, [router, lang]);
  return null;
}

export function ServicesPage({ menus }: { menus: NavMenus }) {
  const s = useCopy(SERVICES);
  const c = useCopy(COMMON);

  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        intro={s.hero.intro}
        support={s.hero.support}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href="/contact">{c.cta.discuss}</Cta>
            <Cta href="#services-overview" variant="outline" icon="none">
              {s.hero.secondary}
            </Cta>
          </div>
        }
        visual={
          <Visual
            src={IMG.hero}
            alt={s.hero.imageAlt}
            priority
            className="mx-auto max-h-[560px] max-w-sm"
          />
        }
      />

      {/* ---------- Overview ---------- */}
      <Section id="services-overview" tone="tint">
        <SectionHeading
          eyebrow={s.overview.eyebrow}
          title={s.overview.title}
          intro={s.overview.intro}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menus.services.map((card, i) => {
            const Icon = [Layers, Workflow, MessageCircle, Clapperboard, Megaphone, Globe, Search][i] ?? Sparkles;
            return (
              <Reveal key={card.href} delay={i * 0.05}>
                <LocalizedLink
                  href={card.href}
                  className={cn(
                    "group card-surface flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]",
                    i === 0 && "border-primary/30 sm:col-span-2",
                  )}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold leading-snug">{card.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {c.menu2.learnMore} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                  </span>
                </LocalizedLink>
              </Reveal>
            );
          })}
        </div>
        <LegacyHashRedirect />
      </Section>

      <ProductsBanner
        eyebrow={s.products.eyebrow}
        title={s.products.title}
        text={s.products.text}
      />

      {/* ---------- Approach ---------- */}
      <Section id="approach" tone="tint">
        <SectionHeading
          eyebrow={s.approach.eyebrow}
          title={s.approach.title}
          intro={s.approach.intro}
          center
        />
        <Steps items={s.approach.steps} className="mt-14" />
        <Reveal className="mt-10 text-center">
          <p className="mx-auto max-w-2xl font-medium text-foreground/80">{s.approach.note}</p>
        </Reveal>
      </Section>

      {/* ---------- Which service ---------- */}
      <Section id="which-service">
        <SectionHeading eyebrow={s.which.eyebrow} title={s.which.title} />
        <Reveal className="mt-10">
          <div className="card-surface overflow-hidden">
            <div className="hidden grid-cols-[1.4fr_1fr] gap-6 border-b border-border bg-muted/60 px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground md:grid rtl:tracking-normal">
              <span>{s.which.needLabel}</span>
              <span>{s.which.serviceLabel}</span>
            </div>
            <ul className="divide-y divide-border">
              {s.which.rows.map((row) => (
                <li
                  key={row.need}
                  className="grid gap-2 px-6 py-5 md:grid-cols-[1.4fr_1fr] md:items-center md:gap-6"
                >
                  <span className="font-medium">{row.need}</span>
                  <LocalizedLink
                    href={row.href}
                    className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 shrink-0" /> {row.service}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-muted-foreground">{s.which.note}</p>
          <Cta href="/contact" className="shrink-0">
            {s.which.cta}
          </Cta>
        </Reveal>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section id="faq" tone="tint">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>{s.faq.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{s.faq.title}</h2>
          </div>
          <Faq items={s.faq.items} />
        </div>
      </Section>

      <FinalCta eyebrow={s.final.eyebrow} title={s.final.title} text={s.final.text} />
    </>
  );
}
