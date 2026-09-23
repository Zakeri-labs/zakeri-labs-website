"use client";

import { ArrowRight, Eye, HeartHandshake, Lightbulb, Scale, Target, Users } from "lucide-react";

import {
  Cta,
  Eyebrow,
  FinalCta,
  PageHero,
  Prose,
  Reveal,
  Section,
  SectionHeading,
  Split,
  Steps,
  TextLink,
  Visual,
} from "@/components/site/blocks";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { ABOUT } from "@/lib/content/about";
import { COMMON } from "@/lib/content/common";
import { useCopy } from "@/lib/i18n";
import { IMG } from "@/lib/images";

export function AboutPage() {
  const a = useCopy(ABOUT);
  const c = useCopy(COMMON);

  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        intro={a.hero.intro}
        support={
          <>
            <p>{a.hero.support}</p>
            <p className="mt-4 font-semibold text-foreground">{a.hero.line}</p>
          </>
        }
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href="/services">{a.hero.primary}</Cta>
            <Cta href="#founder" variant="outline" icon="none">
              {a.hero.secondary}
            </Cta>
          </div>
        }
        visual={
          <Visual src={IMG.value} alt={a.hero.imageAlt} priority className="aspect-[992/603]" />
        }
      />

      {/* ---------- Who we are ---------- */}
      <Section id="who-we-are" tone="tint">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={a.who.eyebrow} title={a.who.title} />
          <Reveal>
            <Prose className="text-lg">
              {a.who.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Signature statement ---------- */}
      <section className="py-20 lg:py-24">
        <Reveal className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{a.statement.quote}</span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {a.statement.text}
          </p>
        </Reveal>
      </section>

      {/* ---------- Point of view ---------- */}
      <Section tone="tint">
        <SectionHeading eyebrow={a.view.eyebrow} title={a.view.title} intro={a.view.intro} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {a.view.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="card-surface h-full p-7">
                <span className="font-display text-3xl font-extrabold text-primary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Founder ---------- */}
      <Section id="founder">
        <Split
          visual={
            <Visual
              src={IMG.founder}
              alt={a.founder.imageAlt}
              className="mx-auto aspect-[848/941] max-w-md lg:max-w-none"
            />
          }
        >
          <Reveal>
            <Eyebrow>{a.founder.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">{a.founder.name}</h2>
            <p className="mt-3 font-semibold text-primary">{a.founder.label}</p>
            <Prose className="mt-6">
              {a.founder.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Prose>
            <blockquote className="mt-8 rounded-2xl bg-ink p-7 text-white">
              <p className="text-xl font-semibold leading-snug sm:text-2xl">“{a.founder.quote}”</p>
              <footer className="mt-4 text-sm text-white/60">— {a.founder.name}</footer>
            </blockquote>
          </Reveal>
        </Split>
      </Section>

      {/* ---------- What we focus on ---------- */}
      <Section tone="tint">
        <SectionHeading eyebrow={a.focus.eyebrow} title={a.focus.title} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {a.focus.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <LocalizedLink
                href={item.href}
                className="group card-surface flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-primary/30"
              >
                <h3 className="text-lg font-bold leading-snug">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <ArrowRight className="mt-5 h-5 w-5 text-primary" />
              </LocalizedLink>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">{a.focus.products}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Cta href="/services">{c.cta.services}</Cta>
            <Cta href="/products" variant="outline">
              {c.cta.products}
            </Cta>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Principles ---------- */}
      <Section>
        <SectionHeading eyebrow={a.principles.eyebrow} title={a.principles.title} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {a.principles.items.map((item, i) => {
            const Icon = [Target, Scale, Lightbulb, Users, Eye][i];
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="card-surface h-full p-6">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-bold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ---------- Oman ---------- */}
      <Section tone="tint">
        <Split
          reverse
          visual={
            <Visual
              src={IMG.challenge}
              alt={a.oman.imageAlt}
              className="aspect-[805/941] max-h-[560px]"
            />
          }
        >
          <SectionHeading eyebrow={a.oman.eyebrow} title={a.oman.title} />
          <Prose className="mt-6 text-lg">
            {a.oman.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
          <HeartHandshake className="mt-8 h-8 w-8 text-primary" aria-hidden />
        </Split>
      </Section>

      {/* ---------- How we work (summary) ---------- */}
      <Section>
        <SectionHeading eyebrow={a.how.eyebrow} title={a.how.title} center />
        <Steps items={a.how.steps} className="mt-12" />
        <div className="mt-10 text-center">
          <TextLink href="/how-we-work">{c.cta.howWeWork}</TextLink>
        </div>
      </Section>

      <FinalCta eyebrow={a.final.eyebrow} title={a.final.title} text={a.final.text} />
    </>
  );
}
