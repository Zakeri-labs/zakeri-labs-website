"use client";

import {
  ArrowRight,
  Bot,
  Clapperboard,
  Globe,
  Layers,
  Megaphone,
  MessageCircle,
  Search,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import {
  Advantage,
  CheckList,
  Chips,
  Cta,
  Eyebrow,
  Faq,
  FinalCta,
  Flow,
  PageHero,
  ProductsBanner,
  Prose,
  Reveal,
  Section,
  SectionHeading,
  Split,
  Steps,
  Visual,
} from "@/components/site/blocks";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { COMMON } from "@/lib/content/common";
import { SERVICES } from "@/lib/content/services";
import { useCopy } from "@/lib/i18n";
import { IMG } from "@/lib/images";

export function ServicesPage() {
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
            src={IMG.glance}
            alt={s.hero.imageAlt}
            priority
            className="mx-auto aspect-[518/749] max-h-[560px] max-w-sm"
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
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.overview.cards.map((card, i) => {
            const Icon = [Workflow, Clapperboard, Megaphone, Globe][i];
            return (
              <Reveal key={card.title} delay={i * 0.05}>
                <LocalizedLink
                  href={card.href}
                  className="group card-surface flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold leading-snug">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {card.cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </LocalizedLink>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------- Automation ---------- */}
      <Section id="automation">
        <Split
          reverse
          visual={
            <Visual
              src={IMG.automation}
              alt={s.automation.imageAlt}
              className="aspect-[1071/518]"
            />
          }
        >
          <SectionHeading
            eyebrow={s.automation.eyebrow}
            title={s.automation.title}
            intro={s.automation.intro}
          />
          <Prose className="mt-5">
            {s.automation.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Split>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {s.automation.benefits.map((b, i) => {
            const Icon = [Zap, Layers, Bot][i];
            return (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="card-surface h-full p-6">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="text-sm font-bold text-foreground">{s.automation.applicationsLabel}</p>
            <Chips items={s.automation.applications} className="mt-3" />
          </Reveal>
          <Reveal>
            <Advantage text={s.automation.advantage} />
          </Reveal>
        </div>
        <div className="mt-8">
          <Cta href="/contact?interest=automation">{s.automation.cta}</Cta>
        </div>

        {/* Featured automation use case: WhatsApp */}
        <div id="whatsapp" className="mt-20 scroll-mt-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-secondary via-surface to-[#e8fbf9] p-6 sm:p-10 lg:p-14">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white rtl:tracking-normal">
                    <Sparkles className="h-3.5 w-3.5 text-cyan" /> {s.whatsapp.label}
                  </p>
                  <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                    {s.whatsapp.title}
                  </h2>
                  <h3 className="mt-3 text-xl font-semibold text-primary">{s.whatsapp.subtitle}</h3>
                  <Prose className="mt-5">
                    {s.whatsapp.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </Prose>
                </div>
                <Visual
                  src={IMG.whatsapp}
                  alt={s.whatsapp.imageAlt}
                  className="aspect-[1014/676]"
                />
              </div>
              <Flow
                className="mt-10"
                steps={s.whatsapp.flow.map((label, i) => ({
                  label,
                  icon: i === 0 ? MessageCircle : undefined,
                }))}
              />
              <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                {s.whatsapp.support}
              </p>
              <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center">
                <Advantage text={s.whatsapp.advantage} className="lg:flex-1" />
                <Cta href="/contact?interest=whatsapp" className="shrink-0">
                  {s.whatsapp.cta}
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- AI video ---------- */}
      <Section id="ai-video" tone="tint">
        <Split
          visual={
            <Visual
              src={IMG.aiVideo}
              alt={s.video.imageAlt}
              className="aspect-[870/941] max-h-[620px]"
            />
          }
        >
          <SectionHeading eyebrow={s.video.eyebrow} title={s.video.title} intro={s.video.intro} />
          <p className="mt-5 leading-relaxed text-muted-foreground">{s.video.main}</p>
          <p className="mt-6 rounded-2xl border border-border bg-surface px-5 py-4 font-medium">
            {s.video.benefit}
          </p>
          <Advantage text={s.video.advantage} className="mt-6" />
        </Split>
        <Reveal className="mt-14">
          <h3 className="text-lg font-bold">{s.video.suitableLabel}</h3>
        </Reveal>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {s.video.suitable.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="card-surface h-full p-5">
                <h4 className="font-bold leading-snug">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Cta href="/contact?interest=ai-video">{s.video.cta}</Cta>
        </div>
      </Section>

      {/* ---------- Content ---------- */}
      <Section id="content">
        <Split
          reverse
          visual={
            <Visual src={IMG.content} alt={s.content.imageAlt} className="aspect-[1050/806]" />
          }
        >
          <SectionHeading
            eyebrow={s.content.eyebrow}
            title={s.content.title}
            intro={s.content.intro}
          />
          <Prose className="mt-5">
            {s.content.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
          <Flow className="mt-8" steps={s.content.flow.map((label) => ({ label }))} />
        </Split>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="card-surface p-7">
            <h3 className="text-lg font-bold">{s.content.includesLabel}</h3>
            <CheckList
              items={s.content.includes}
              className="mt-5 grid gap-3 space-y-0 sm:grid-cols-2"
            />
          </Reveal>
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-2xl bg-ink p-7 text-white">
              <Sparkles className="h-6 w-6 text-cyan" />
              <p className="mt-4 text-lg font-medium leading-relaxed">{s.content.aiNote}</p>
            </div>
            <Advantage text={s.content.advantage} />
          </Reveal>
        </div>
        <div className="mt-10">
          <Cta href="/contact?interest=content">{s.content.cta}</Cta>
        </div>
      </Section>

      {/* ---------- Web ---------- */}
      <Section id="web" tone="tint">
        <Split visual={<Visual src={IMG.web} alt={s.web.imageAlt} className="aspect-[899/777]" />}>
          <SectionHeading eyebrow={s.web.eyebrow} title={s.web.title} intro={s.web.intro} />
          <p className="mt-5 leading-relaxed text-muted-foreground">{s.web.main}</p>
          <Advantage text={s.web.advantage} className="mt-8" />
        </Split>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {s.web.columns.map((col, i) => {
            const Icon = [Globe, Search, Sparkles][i];
            return (
              <Reveal key={col.title} delay={i * 0.06}>
                <div className="card-surface h-full p-6">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-xl font-bold">{col.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{col.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10">
          <Cta href="/contact?interest=web">{s.web.cta}</Cta>
        </div>
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
