"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  Cta,
  FinalCta,
  PageHero,
  ProductsBanner,
  Prose,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/blocks";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { ProjectCard } from "@/components/site/ProjectCard";
import { COMMON } from "@/lib/content/common";
import { WORK } from "@/lib/content/work";
import { useCopy } from "@/lib/i18n";
import { FEATURED, GROUP_OF, MORE, type IndustryGroup } from "@/lib/projects";
import { cn } from "@/lib/utils";

const PAGE = 9;
const FILTERS = ["all", "real-estate", "healthcare", "professional", "other"] as const;
type Filter = (typeof FILTERS)[number];

export function WorkPage() {
  const w = useCopy(WORK);
  const c = useCopy(COMMON);
  const [filter, setFilter] = useState<Filter>("all");
  const [shown, setShown] = useState(PAGE);

  const matches =
    filter === "all"
      ? MORE
      : MORE.filter((p) => GROUP_OF[p.industry] === (filter as IndustryGroup));
  const visible = matches.slice(0, shown);

  return (
    <>
      <PageHero
        eyebrow={w.hero.eyebrow}
        title={w.hero.title}
        intro={w.hero.intro}
        support={w.hero.support}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href="#featured">{w.hero.primary}</Cta>
            <Cta href="/services" variant="outline">
              {w.hero.secondary}
            </Cta>
          </div>
        }
        visual={
          <div className="grid grid-cols-2 gap-4">
            {FEATURED.slice(0, 4).map((p, i) => (
              <div
                key={p.url}
                className={cn(
                  "overflow-hidden rounded-2xl border border-white/10 shadow-[var(--shadow-lift)] ring-1 ring-border",
                  i % 2 === 1 && "translate-y-8",
                )}
              >
                <Image
                  src={p.image}
                  alt=""
                  placeholder="blur"
                  sizes="25vw"
                  priority={i < 2}
                  className="aspect-[16/10] object-cover object-top"
                />
              </div>
            ))}
          </div>
        }
      />

      {/* ---------- Intro ---------- */}
      <Section tone="tint" className="py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={w.intro.eyebrow} title={w.intro.title} />
          <Reveal>
            <Prose className="text-lg">
              {w.intro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Featured ---------- */}
      <Section id="featured">
        <SectionHeading eyebrow={w.featured.eyebrow} title={w.featured.title} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((p, i) => (
            <Reveal key={p.url} delay={(i % 3) * 0.06}>
              <ProjectCard project={p} large />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- All projects ---------- */}
      <Section id="projects" tone="tint">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl">{w.more.title}</h2>
          <div role="group" aria-label={w.more.filterLabel} className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => {
                  setFilter(f);
                  setShown(PAGE);
                }}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition",
                  filter === f
                    ? "border-ink bg-ink text-white"
                    : "border-border bg-surface text-foreground/75 hover:border-primary/40 hover:text-primary",
                )}
              >
                {w.more.filters[f]}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.url} project={p} />
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {w.more.count(visible.length, matches.length)}
          </p>
          {shown < matches.length && (
            <button
              type="button"
              onClick={() => setShown((n) => n + PAGE)}
              className="inline-flex min-h-11 items-center rounded-full border border-input bg-surface px-6 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
            >
              {w.more.loadMore}
            </button>
          )}
        </div>
      </Section>

      {/* ---------- Bridge ---------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={w.bridge.eyebrow} title={w.bridge.title} />
          <Reveal>
            <Prose className="text-lg">
              {w.bridge.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </Reveal>
        </div>
      </Section>

      {/* ---------- IDRAK today ---------- */}
      <Section tone="ink">
        <SectionHeading eyebrow={w.today.eyebrow} title={w.today.title} invert />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {w.today.cards.map((card) => (
            <LocalizedLink
              key={card.title}
              href={card.href}
              className="group flex flex-col rounded-[1.25rem] border border-white/10 bg-white/5 p-6 transition hover:border-cyan/40 hover:bg-white/10"
            >
              <h3 className="text-lg font-bold leading-snug">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{card.text}</p>
              <ArrowRight className="mt-5 h-5 w-5 text-cyan transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </LocalizedLink>
          ))}
        </div>
        <div className="mt-10">
          <Cta href="/services" variant="light">
            {c.cta.allServices}
          </Cta>
        </div>
      </Section>

      <ProductsBanner
        eyebrow={w.products.eyebrow}
        title={w.products.title}
        text={w.products.text}
      />

      <FinalCta eyebrow={w.final.eyebrow} title={w.final.title} text={w.final.text} />
    </>
  );
}
