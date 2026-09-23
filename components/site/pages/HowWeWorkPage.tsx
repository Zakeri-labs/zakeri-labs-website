"use client";

import { CircleSlash, HelpCircle } from "lucide-react";

import {
  CheckList,
  Cta,
  Eyebrow,
  Faq,
  FinalCta,
  PageHero,
  Prose,
  Reveal,
  Section,
  SectionHeading,
  Steps,
  TextLink,
  Visual,
} from "@/components/site/blocks";
import { ContactForm } from "@/components/site/ContactForm";
import { COMMON } from "@/lib/content/common";
import { HOW } from "@/lib/content/how";
import { useCopy } from "@/lib/i18n";
import { IMG } from "@/lib/images";

export function HowWeWorkPage() {
  const h = useCopy(HOW);
  const c = useCopy(COMMON);

  return (
    <>
      <PageHero
        eyebrow={h.hero.eyebrow}
        title={h.hero.title}
        intro={h.hero.intro}
        support={h.hero.support}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href="#contact-form">{c.cta.discuss}</Cta>
            <Cta href="#approach" variant="outline" icon="none">
              {c.cta.howWeWork}
            </Cta>
          </div>
        }
        visual={
          <Visual
            src={IMG.approach}
            alt={h.hero.imageAlt}
            priority
            className="aspect-square max-h-[560px]"
          />
        }
      />

      {/* ---------- Starting point ---------- */}
      <Section tone="tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={h.start.eyebrow} title={h.start.title} />
          <Reveal>
            <ul className="space-y-3">
              {h.start.lines.map((line) => (
                <li key={line} className="card-surface px-5 py-4 font-medium">
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-muted-foreground">{h.start.text}</p>
            <p className="mt-6 text-xl font-bold">
              <span className="gradient-text">{h.start.highlight}</span>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Approach ---------- */}
      <Section id="approach">
        <SectionHeading eyebrow={h.approach.eyebrow} title={h.approach.title} center />
        <Steps items={h.approach.steps} className="mt-12" />
        <Reveal className="mt-10 text-center">
          <p className="inline-block rounded-full bg-ink px-6 py-3 font-semibold text-white">
            {h.approach.line}
          </p>
        </Reveal>
      </Section>

      {/* ---------- Ways to start ---------- */}
      <Section id="ways-to-start" tone="tint">
        <SectionHeading eyebrow={h.ways.eyebrow} title={h.ways.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {h.ways.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.06}>
              <article className="card-surface flex h-full flex-col p-7">
                <span className="font-display text-sm font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                <p className="mt-6 text-sm font-bold">{item.listLabel}</p>
                <CheckList items={item.list} className="mt-3 flex-1" />
                <p className="mt-6 rounded-xl bg-secondary px-4 py-3 text-sm">
                  <span className="font-bold text-primary">{h.ways.outcomeLabel}: </span>
                  {item.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="rounded-2xl border-s-4 border-primary bg-surface px-6 py-5 text-lg font-semibold shadow-[var(--shadow-soft)]">
            {h.ways.highlight}
          </p>
        </Reveal>
      </Section>

      {/* ---------- By service ---------- */}
      <Section id="by-service">
        <SectionHeading eyebrow={h.byService.eyebrow} title={h.byService.title} />
        <Reveal className="mt-10">
          <div className="card-surface overflow-x-auto">
            <table className="w-full min-w-[640px] text-start text-sm">
              <thead className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground rtl:tracking-normal">
                <tr>
                  {h.byService.head.map((th) => (
                    <th key={th} scope="col" className="px-6 py-3 text-start font-bold">
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {h.byService.rows.map(([service, start, engagement]) => (
                  <tr key={service}>
                    <th scope="row" className="px-6 py-4 text-start text-base font-bold">
                      {service}
                    </th>
                    <td className="px-6 py-4">{start}</td>
                    <td className="px-6 py-4">{engagement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{h.byService.note}</p>
        </Reveal>
      </Section>

      {/* ---------- Pricing ---------- */}
      <Section id="pricing" tone="tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow={h.pricing.eyebrow} title={h.pricing.title} />
            <Prose className="mt-5 text-lg">
              {h.pricing.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </div>
          <Reveal className="rounded-[1.25rem] bg-ink p-7 text-white sm:p-9">
            <h3 className="text-2xl font-bold">{h.pricing.whyTitle}</h3>
            <div className="mt-4 space-y-4 leading-relaxed text-white/75">
              {h.pricing.whyParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {h.pricing.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="card-surface h-full p-6">
                <h3 className="text-lg font-bold">{g.title}</h3>
                <CheckList items={g.items} className="mt-4 text-sm" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Products ---------- */}
      <Section id="product-pricing">
        <SectionHeading
          eyebrow={h.products.eyebrow}
          title={h.products.title}
          intro={h.products.text}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {h.products.items.map((item) => (
            <Reveal key={item.title}>
              <div className="card-surface h-full p-7">
                <span className="rounded-md bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white rtl:tracking-normal">
                  {c.productTag}
                </span>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <CheckList items={item.points} className="mt-4" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Cta href="/products" variant="outline">
            {c.cta.idrakProducts}
          </Cta>
        </div>
      </Section>

      {/* ---------- Fit ---------- */}
      <Section id="fit" tone="tint">
        <SectionHeading eyebrow={h.fit.eyebrow} title={h.fit.title} />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {h.fit.good.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.05}>
                <div className="card-surface h-full p-6">
                  <h3 className="font-bold">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="rounded-[1.25rem] border border-border bg-muted/70 p-7">
            <CircleSlash className="h-6 w-6 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-bold">{h.fit.notTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {h.fit.not.map((n) => (
                <li key={n} className="flex gap-2">
                  <span aria-hidden>–</span>
                  {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Before we start ---------- */}
      <Section id="before-we-start">
        <SectionHeading eyebrow={h.before.eyebrow} title={h.before.title} intro={h.before.text} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {h.before.questions.map((q, i) => (
            <Reveal key={q} delay={i * 0.05}>
              <div className="card-surface flex h-full items-start gap-3 p-6">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="font-bold leading-snug">{q}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <p className="text-muted-foreground">{h.before.note}</p>
        </Reveal>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section id="faq" tone="tint">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>{h.faq.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{h.faq.title}</h2>
            <div className="mt-6">
              <TextLink href="/contact">{c.cta.discuss}</TextLink>
            </div>
          </div>
          <Faq items={h.faq.items} />
        </div>
      </Section>

      <FinalCta
        eyebrow={h.final.eyebrow}
        title={h.final.title}
        text={h.final.text}
        primaryHref="#contact-form"
        aside={
          <div id="contact-form" className="rounded-[1.5rem] bg-surface p-6 text-foreground sm:p-8">
            <h3 className="text-xl font-bold">{h.final.formTitle}</h3>
            <div className="mt-5">
              <ContactForm extended submitLabel={h.final.submit} />
            </div>
          </div>
        }
      />
    </>
  );
}
