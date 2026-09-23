"use client";

import {
  ArrowRight,
  BarChart3,
  Clapperboard,
  Coins,
  Gauge,
  Globe,
  HardHat,
  Megaphone,
  MessageCircle,
  Search,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Workflow,
} from "lucide-react";

import {
  Advantage,
  Chips,
  CheckList,
  Container,
  Cta,
  Eyebrow,
  FinalCta,
  Flow,
  Prose,
  Reveal,
  Section,
  SectionHeading,
  Split,
  Steps,
  TextLink,
  Visual,
} from "@/components/site/blocks";
import { ContactForm } from "@/components/site/ContactForm";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { ProjectCard } from "@/components/site/ProjectCard";
import { COMMON } from "@/lib/content/common";
import { HOME } from "@/lib/content/home";
import { useCopy } from "@/lib/i18n";
import { IMG } from "@/lib/images";
import { FEATURED } from "@/lib/projects";

export function HomePage() {
  const h = useCopy(HOME);
  const c = useCopy(COMMON);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero-glow relative overflow-hidden">
        <Container className="grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28 lg:pt-16">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface px-3.5 py-1.5 text-xs font-semibold text-primary shadow-[var(--shadow-soft)]">
              <Sparkles className="h-3.5 w-3.5" /> {h.hero.eyebrow}
            </p>
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1.02] sm:text-6xl xl:text-[4.5rem]">
              {h.hero.titleA}
              <span className="gradient-text">{h.hero.titleB}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75 sm:text-xl">
              {h.hero.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Cta href="/contact">{c.cta.discuss}</Cta>
              <Cta href="#services" variant="outline" icon="none">
                {c.cta.explore}
              </Cta>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
              {h.hero.support.map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-lg delay-150 lg:max-w-none animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <Visual src={IMG.hero} alt={h.hero.imageAlt} priority className="aspect-[877/941]" />
            <div className="absolute -bottom-5 start-4 end-4 flex flex-wrap justify-center gap-2 sm:start-8 sm:end-auto sm:justify-start">
              {h.hero.chips.map((chip, i) => {
                const Icon = [TrendingUp, Coins, Gauge][i];
                return (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-white bg-surface/95 px-3.5 py-2 text-sm font-semibold shadow-[var(--shadow-lift)] backdrop-blur"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    {chip}
                  </span>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Business value ---------- */}
      <Section id="value">
        <SectionHeading
          eyebrow={h.value.eyebrow}
          title={h.value.title}
          intro={h.value.intro}
          center
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {h.value.outcomes.map((o, i) => {
            const Icon = [TrendingUp, Coins, Gauge][i];
            return (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="card-surface h-full p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-[var(--shadow-lift)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">{o.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{o.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 text-center">
          <p className="inline-block rounded-full bg-secondary px-6 py-3 font-semibold text-foreground">
            {h.value.closing}
          </p>
        </Reveal>
      </Section>

      {/* ---------- Services & products at a glance ---------- */}
      <Section id="services" tone="tint">
        <SectionHeading eyebrow={h.glance.eyebrow} title={h.glance.title} intro={h.glance.intro} />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground rtl:tracking-normal">
              {h.glance.servicesLabel}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {h.glance.services.map((s, i) => {
                const Icon = [Workflow, Clapperboard, Megaphone, Globe][i];
                return (
                  <Reveal key={s.title} delay={i * 0.05}>
                    <LocalizedLink
                      href={s.href}
                      className="group card-surface flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-lift)]"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                      <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                      <span className="mt-5 text-sm font-semibold text-primary">
                        {h.glance.learnMore} <ArrowRight className="inline h-4 w-4" />
                      </span>
                    </LocalizedLink>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground rtl:tracking-normal">
              {h.glance.productsLabel}
            </p>
            <div className="flex h-[calc(100%-2.25rem)] flex-col gap-4 rounded-[1.25rem] bg-ink p-4">
              {h.glance.products.map((p, i) => {
                const Icon = [HardHat, Stethoscope][i];
                return (
                  <LocalizedLink
                    key={p.title}
                    href={p.href}
                    className="group flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-white transition hover:border-cyan/50 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-cyan" />
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rtl:tracking-normal">
                        {c.productTag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{p.text}</p>
                    <span className="mt-5 text-sm font-semibold text-cyan">
                      {h.glance.learnMore} <ArrowRight className="inline h-4 w-4" />
                    </span>
                  </LocalizedLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Cta href="/services">{c.cta.allServices}</Cta>
          <Cta href="/products" variant="outline">
            {c.cta.products}
          </Cta>
        </div>
      </Section>

      {/* ---------- Business challenge ---------- */}
      <Section id="business-challenge">
        <Split
          visual={
            <Visual
              src={IMG.challenge}
              alt={h.challenge.imageAlt}
              className="aspect-[805/941] max-h-[640px]"
            />
          }
        >
          <SectionHeading
            eyebrow={h.challenge.eyebrow}
            title={h.challenge.title}
            intro={h.challenge.intro}
          />
          <ol className="mt-10 space-y-6">
            {h.challenge.questions.map((q, i) => (
              <Reveal key={q.q} delay={i * 0.06}>
                <li className="flex gap-5">
                  <span className="font-display text-4xl font-extrabold leading-none text-primary/25">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold leading-snug">{q.q}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{q.a}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10">
            <Cta href="/contact">{h.challenge.cta}</Cta>
          </div>
        </Split>
      </Section>

      {/* ---------- Custom business automation ---------- */}
      <Section id="automation" tone="tint">
        <Split
          reverse
          visual={
            <Visual
              src={IMG.automation}
              alt={h.automation.imageAlt}
              className="aspect-[1071/518]"
            />
          }
        >
          <SectionHeading
            eyebrow={h.automation.eyebrow}
            title={h.automation.title}
            intro={h.automation.text}
          />
          <p className="mt-6 inline-flex rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-white">
            {h.automation.label}
          </p>
          <CheckList items={h.automation.benefits} className="mt-6" />
          <Advantage text={h.automation.advantage} className="mt-8" />
          <div className="mt-8">
            <Cta href="/contact?interest=automation">{h.automation.cta}</Cta>
          </div>
        </Split>
      </Section>

      {/* ---------- WhatsApp sales ---------- */}
      <Section id="whatsapp">
        <Split
          visual={
            <Visual src={IMG.whatsapp} alt={h.whatsapp.imageAlt} className="aspect-[1014/676]" />
          }
        >
          <SectionHeading
            eyebrow={h.whatsapp.eyebrow}
            title={h.whatsapp.title}
            intro={h.whatsapp.text}
          />
          <Flow
            className="mt-8"
            steps={h.whatsapp.flow.map((label, i) => ({
              label,
              icon: i === 0 ? MessageCircle : i === 4 ? BarChart3 : undefined,
            }))}
          />
          <p className="mt-6 leading-relaxed text-muted-foreground">{h.whatsapp.support}</p>
          <Advantage text={h.whatsapp.advantage} className="mt-8" />
          <div className="mt-8">
            <Cta href="/services#whatsapp">{h.whatsapp.cta}</Cta>
          </div>
        </Split>
      </Section>

      {/* ---------- AI video ---------- */}
      <Section id="ai-video" tone="tint">
        <Split
          reverse
          visual={
            <Visual
              src={IMG.aiVideo}
              alt={h.video.imageAlt}
              className="aspect-[870/941] max-h-[640px]"
            />
          }
        >
          <SectionHeading eyebrow={h.video.eyebrow} title={h.video.title} intro={h.video.text} />
          <p className="mt-8 text-sm font-bold text-foreground">{h.video.suitableLabel}</p>
          <Chips items={h.video.suitable} className="mt-3" />
          <p className="mt-6 leading-relaxed text-muted-foreground">{h.video.support}</p>
          <Advantage text={h.video.advantage} className="mt-8" />
          <div className="mt-8">
            <Cta href="/contact?interest=ai-video">{h.video.cta}</Cta>
          </div>
        </Split>
      </Section>

      {/* ---------- Content ---------- */}
      <Section id="content">
        <Split
          visual={
            <Visual src={IMG.content} alt={h.content.imageAlt} className="aspect-[1050/806]" />
          }
        >
          <SectionHeading eyebrow={h.content.eyebrow} title={h.content.title} />
          <Prose className="mt-5">
            {h.content.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
          <Flow className="mt-8" steps={h.content.flow.map((label) => ({ label }))} />
          <Advantage text={h.content.advantage} className="mt-8" />
          <div className="mt-8">
            <Cta href="/services#content">{h.content.cta}</Cta>
          </div>
        </Split>
      </Section>

      {/* ---------- Web, SEO & GEO ---------- */}
      <Section id="web" tone="tint">
        <Split
          reverse
          visual={<Visual src={IMG.web} alt={h.web.imageAlt} className="aspect-[899/777]" />}
        >
          <SectionHeading eyebrow={h.web.eyebrow} title={h.web.title} intro={h.web.text} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {h.web.items.map((item, i) => {
              const Icon = [Search, Sparkles][i];
              return (
                <div key={item.title} className="card-surface p-5">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
          <Advantage text={h.web.advantage} className="mt-8" />
          <div className="mt-8">
            <Cta href="/contact?interest=web">{h.web.cta}</Cta>
          </div>
        </Split>
      </Section>

      {/* ---------- Ready-made products (dark band) ---------- */}
      <Section id="products" tone="ink" className="overflow-hidden">
        <div className="pointer-events-none absolute -top-40 end-0 h-96 w-96 rounded-full bg-violet/30 blur-3xl" />
        <SectionHeading eyebrow={h.products.eyebrow} title={h.products.title} invert />
        <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
          {[
            {
              p: h.products.construction,
              img: IMG.construction,
              href: "/products#construction-reporting",
            },
            { p: h.products.clinic, img: IMG.clinic, href: "/products#clinic-crm" },
          ].map(({ p, img, href }, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]">
                <Visual
                  src={img}
                  alt={p.imageAlt}
                  className="aspect-[16/10] rounded-none border-0 ring-0"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan rtl:tracking-normal">
                    {p.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 text-lg font-medium text-white/80">{p.subtitle}</p>
                  {"steps" in p ? (
                    <>
                      <p className="mt-5 text-white/70">{p.text}</p>
                      <ol className="mt-6 space-y-3">
                        {p.steps.map((s, n) => (
                          <li
                            key={s}
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold"
                          >
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-sm">
                              {n + 1}
                            </span>
                            {s}
                          </li>
                        ))}
                      </ol>
                    </>
                  ) : (
                    <>
                      <CheckList items={p.before} invert className="mt-6" />
                      <p className="mt-6 text-sm font-bold uppercase tracking-wider text-cyan rtl:tracking-normal">
                        {p.afterLabel}
                      </p>
                      <CheckList items={p.after} invert className="mt-3" />
                    </>
                  )}
                  <Advantage text={p.advantage} invert className="mt-8" />
                  <div className="mt-6">
                    <TextLink href={href} invert>
                      {h.glance.learnMore}
                    </TextLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="relative mt-12">
          <Cta href="/products" variant="light">
            {c.cta.idrakProducts}
          </Cta>
        </div>
      </Section>

      {/* ---------- Founder ---------- */}
      <Section id="about">
        <Split
          visual={
            <Visual
              src={IMG.founder}
              alt={h.founder.imageAlt}
              className="mx-auto aspect-[848/941] max-w-md lg:max-w-none"
            />
          }
        >
          <Reveal>
            <Eyebrow>{h.founder.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">{h.founder.name}</h2>
            <p className="mt-3 text-lg font-semibold text-primary">{h.founder.role}</p>
            <Prose className="mt-6 text-lg">
              {h.founder.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
            <blockquote className="mt-8 border-s-4 border-primary ps-6 text-2xl font-bold leading-snug sm:text-3xl">
              <p>{h.founder.quoteA}</p>
              <p className="gradient-text">{h.founder.quoteB}</p>
            </blockquote>
            <div className="mt-10">
              <Cta href="/about#founder" variant="outline">
                {h.founder.cta}
              </Cta>
            </div>
          </Reveal>
        </Split>
      </Section>

      {/* ---------- Selected work ---------- */}
      <Section id="work" tone="tint">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={h.work.eyebrow} title={h.work.title} intro={h.work.intro} />
          <Cta href="/selected-work" variant="outline" className="shrink-0 self-start md:self-end">
            {h.work.cta}
          </Cta>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((p, i) => (
            <Reveal key={p.url} delay={(i % 3) * 0.06}>
              <ProjectCard project={p} large />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- How we work ---------- */}
      <Section id="how-we-work">
        <SectionHeading eyebrow={h.how.eyebrow} title={h.how.title} intro={h.how.intro} center />
        <Steps items={h.how.steps} className="mt-14" />
        <Reveal className="mt-10 flex flex-col items-center gap-5 text-center">
          <p className="max-w-2xl font-medium text-foreground/80">{h.how.note}</p>
          <TextLink href="/how-we-work">{c.cta.howWeWork}</TextLink>
        </Reveal>
      </Section>

      {/* ---------- Final CTA + form ---------- */}
      <FinalCta
        eyebrow={h.final.eyebrow}
        title={h.final.title}
        text={h.final.text}
        primaryHref="#contact-form"
        aside={
          <div id="contact-form" className="rounded-[1.5rem] bg-surface p-6 text-foreground sm:p-8">
            <h3 className="text-xl font-bold">{h.final.formTitle}</h3>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        }
      />
    </>
  );
}
