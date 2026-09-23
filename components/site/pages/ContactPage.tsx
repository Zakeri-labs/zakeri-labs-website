"use client";

import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import {
  Container,
  Cta,
  Eyebrow,
  Faq,
  Reveal,
  Section,
  SectionHeading,
  Steps,
  TextLink,
} from "@/components/site/blocks";
import { LeadWizard } from "@/components/site/LeadWizard";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { COMMON } from "@/lib/content/common";
import { CONTACT } from "@/lib/content/contact";
import { useCopy, useI18n } from "@/lib/i18n";
import { SITE, whatsappUrl } from "@/lib/site";

export function ContactPage() {
  const k = useCopy(CONTACT);
  const c = useCopy(COMMON);
  const { lang } = useI18n();

  return (
    <>
      {/* ---------- Hero + form ---------- */}
      <section className="hero-glow relative overflow-hidden">
        <Container className="pb-20 pt-12 lg:pb-28 lg:pt-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            <Eyebrow>{k.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              {k.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">{k.hero.intro}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{k.hero.support}</p>
          </div>

          <Reveal className="mt-10">
            <div className="flex flex-col gap-2 rounded-2xl bg-ink px-6 py-5 text-white sm:flex-row sm:items-center sm:gap-6">
              <p className="shrink-0 text-lg font-bold">
                <span className="text-cyan">{k.message.title}</span>
              </p>
              <p className="text-sm leading-relaxed text-white/70">{k.message.text}</p>
            </div>
          </Reveal>

          <div id="contact-form" className="mt-10 grid scroll-mt-24 gap-6 lg:grid-cols-[1.6fr_1fr]">
            <Reveal className="card-surface p-6 sm:p-9">
              <h2 className="text-2xl font-bold">{k.form.title}</h2>
              <div className="mt-6">
                <LeadWizard />
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-6">
              <div className="card-surface p-6 sm:p-8">
                <Eyebrow>{k.direct.eyebrow}</Eyebrow>
                <h2 className="mt-3 text-2xl font-bold">{k.direct.title}</h2>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a href={`tel:+${SITE.phoneRaw}`} className="group flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">
                          {k.direct.phone}
                        </span>
                        <span className="font-semibold group-hover:text-primary" dir="ltr">
                          {SITE.phone}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="group flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">
                          {k.direct.email}
                        </span>
                        <span className="break-all font-semibold group-hover:text-primary">
                          {SITE.email}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="font-semibold">{k.direct.location}</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-[1.25rem] border border-[#25d366]/25 bg-[#25d366]/10 p-6 sm:p-8">
                <MessageCircle className="h-7 w-7 text-[#25d366]" />
                <p className="mt-4 leading-relaxed text-foreground/80">{k.direct.whatsappText}</p>
                <a
                  href={whatsappUrl(lang)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 font-semibold text-white transition hover:bg-[#1fb857]"
                >
                  <MessageCircle className="h-4 w-4" /> {k.direct.whatsappCta}
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------- What happens next ---------- */}
      <Section tone="tint">
        <SectionHeading eyebrow={k.next.eyebrow} title={k.next.title} />
        <Steps items={k.next.steps} className="mt-12" />
        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <p className="text-muted-foreground">{k.next.linkText}</p>
          <TextLink href="/how-we-work">{c.cta.howWeWork}</TextLink>
        </Reveal>
      </Section>

      {/* ---------- Not sure ---------- */}
      <Section>
        <SectionHeading eyebrow={k.unsure.eyebrow} title={k.unsure.title} />
        <Reveal className="mt-10">
          <div className="card-surface overflow-hidden">
            <div className="hidden grid-cols-2 gap-6 border-b border-border bg-muted/60 px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground md:grid rtl:tracking-normal">
              <span>{k.unsure.problemLabel}</span>
              <span>{k.unsure.areaLabel}</span>
            </div>
            <ul className="divide-y divide-border">
              {k.unsure.rows.map((row) => (
                <li
                  key={row.problem}
                  className="grid gap-2 px-6 py-5 md:grid-cols-2 md:items-center md:gap-6"
                >
                  <span className="font-medium">{row.problem}</span>
                  <LocalizedLink
                    href={row.href}
                    className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                  >
                    <ArrowRight className="h-4 w-4 shrink-0" /> {row.area}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-muted-foreground">{k.unsure.note}</p>
          <Cta href="#contact-form" className="shrink-0">
            {c.cta.discuss}
          </Cta>
        </Reveal>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section id="faq" tone="tint">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>{k.faq.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{k.faq.title}</h2>
          </div>
          <Faq items={k.faq.items} />
        </div>
      </Section>
    </>
  );
}
