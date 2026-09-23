"use client";

import { Boxes, Building2, Settings2, Stethoscope } from "lucide-react";

import {
  Advantage,
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
  Split,
  TextLink,
  Visual,
} from "@/components/site/blocks";
import { COMMON } from "@/lib/content/common";
import { PRODUCTS } from "@/lib/content/products";
import { useCopy } from "@/lib/i18n";
import { IMG } from "@/lib/images";

function Audience({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Building2;
}) {
  return (
    <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-sm">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{value}</span>
    </p>
  );
}

function ProductHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <Reveal>
      <p className="inline-flex rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white rtl:tracking-normal">
        {tag}
      </p>
      <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <p className="mt-3 text-xl font-semibold text-primary">{subtitle}</p>
    </Reveal>
  );
}

export function ProductsPage() {
  const p = useCopy(PRODUCTS);
  const c = useCopy(COMMON);

  return (
    <>
      <PageHero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        intro={p.hero.intro}
        support={p.hero.support}
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href="/contact">{c.cta.discuss}</Cta>
            <Cta href="#construction-reporting" variant="outline" icon="none">
              {p.hero.secondary}
            </Cta>
          </div>
        }
        visual={
          <Visual
            src={IMG.products}
            alt={p.hero.imageAlt}
            priority
            className="mx-auto max-h-[580px] max-w-md"
          />
        }
      />

      {/* ---------- Products vs services ---------- */}
      <Section tone="tint" className="py-16 lg:py-20">
        <SectionHeading eyebrow={p.why.eyebrow} title={p.why.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {p.why.items.map((item, i) => {
            const Icon = [Settings2, Boxes][i];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div
                  className={
                    i ? "h-full rounded-[1.25rem] bg-ink p-7 text-white" : "card-surface h-full p-7"
                  }
                >
                  <Icon className={i ? "h-6 w-6 text-cyan" : "h-6 w-6 text-primary"} />
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className={i ? "mt-2 text-white/70" : "mt-2 text-muted-foreground"}>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-8">
          <p className="font-semibold text-foreground/80">{p.why.note}</p>
        </Reveal>
      </Section>

      {/* ---------- Product 01 ---------- */}
      <Section id="construction-reporting">
        <Split
          reverse
          visual={
            <Visual
              src={IMG.construction}
              alt={p.construction.imageAlt}
              className="max-h-[640px]"
            />
          }
        >
          <ProductHeader
            tag={p.construction.tag}
            title={p.construction.title}
            subtitle={p.construction.subtitle}
          />
          <p className="mt-6 text-lg font-medium">{p.construction.lead}</p>
          <Prose className="mt-4">
            {p.construction.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </Prose>
          <Audience
            label={p.construction.audienceLabel}
            value={p.construction.audience}
            icon={Building2}
          />
        </Split>
        <Reveal className="mt-14">
          <h3 className="text-lg font-bold">{p.construction.stepsLabel}</h3>
        </Reveal>
        <ol className="mt-5 grid gap-4 md:grid-cols-3">
          {p.construction.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <li className="card-surface flex h-full gap-4 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-lg font-bold">{step.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center">
          <Advantage text={p.construction.advantage} className="lg:flex-1" />
          <Cta href="/contact?interest=construction-reporting" className="shrink-0">
            {p.construction.cta}
          </Cta>
        </div>
      </Section>

      {/* ---------- Product 02 ---------- */}
      <Section id="clinic-crm" tone="tint">
        <Split
          visual={<Visual src={IMG.clinic} alt={p.clinic.imageAlt} className="max-h-[640px]" />}
        >
          <ProductHeader tag={p.clinic.tag} title={p.clinic.title} subtitle={p.clinic.subtitle} />
          <Prose className="mt-6">
            {p.clinic.paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </Prose>
          <Audience label={p.clinic.audienceLabel} value={p.clinic.audience} icon={Stethoscope} />
        </Split>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="card-surface p-7">
            <h3 className="text-lg font-bold">{p.clinic.beforeLabel}</h3>
            <CheckList items={p.clinic.before} className="mt-5" />
          </Reveal>
          <Reveal className="card-surface p-7" delay={0.06}>
            <h3 className="text-lg font-bold">{p.clinic.afterLabel}</h3>
            <CheckList items={p.clinic.after} className="mt-5" />
          </Reveal>
        </div>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center">
          <Advantage text={p.clinic.advantage} className="lg:flex-1" />
          <Cta href="/contact?interest=clinic-crm" className="shrink-0">
            {p.clinic.cta}
          </Cta>
        </div>
      </Section>

      {/* ---------- Commercial model ---------- */}
      <Section id="commercial-model" tone="ink">
        <SectionHeading
          eyebrow={p.model.eyebrow}
          title={p.model.title}
          intro={p.model.text}
          invert
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {p.model.items.map((item) => (
            <Reveal key={item.title}>
              <div className="h-full rounded-[1.25rem] border border-white/10 bg-white/5 p-7">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <CheckList items={item.points} invert className="mt-5" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <TextLink href="/how-we-work#pricing" invert>
            {p.model.link}
          </TextLink>
        </div>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section id="faq">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>{p.faq.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{p.faq.title}</h2>
          </div>
          <Faq items={p.faq.items} />
        </div>
      </Section>

      <FinalCta eyebrow={p.final.eyebrow} title={p.final.title} text={p.final.text} />
    </>
  );
}
