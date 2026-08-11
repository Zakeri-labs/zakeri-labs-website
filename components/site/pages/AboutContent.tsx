"use client";

import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Eye,
  Gauge,
  Network,
  Search,
  Settings,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { SectionBadge } from "@/components/site/SectionBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

const APPROACH_STEPS = [
  { icon: Search, key: "about.approach.1" },
  { icon: Workflow, key: "about.approach.2" },
  { icon: Settings, key: "about.approach.3" },
  { icon: Zap, key: "about.approach.4" },
  { icon: Bot, key: "about.approach.5" },
  { icon: TrendingUp, key: "about.approach.6" },
];

const PRINCIPLES = [
  { icon: Target, key: "about.principles.1" },
  { icon: Workflow, key: "about.principles.2" },
  { icon: Eye, key: "about.principles.3" },
  { icon: Users, key: "about.principles.4" },
  { icon: Gauge, key: "about.principles.5" },
  { icon: Bot, key: "about.principles.6" },
  { icon: CheckCircle2, key: "about.principles.7" },
];

const DIFFERENTIATORS = [
  { icon: Workflow, key: "about.difference.1" },
  { icon: Settings, key: "about.difference.2" },
  { icon: Network, key: "about.difference.3" },
  { icon: Bot, key: "about.difference.4" },
];

export function AboutContent() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section aria-labelledby="about-page-title" className="max-w-4xl">
        <SectionBadge>{t("about.badge")}</SectionBadge>
        <h1
          id="about-page-title"
          className="mt-3 break-words font-display text-4xl font-bold lg:text-5xl"
        >
          {t("about.title")}
        </h1>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground">{t("about.desc")}</p>
      </section>

      <section aria-labelledby="about-actual-title" className="mt-14">
        <SectionBadge>{t("about.actual.badge")}</SectionBadge>
        <h2 id="about-actual-title" className="mt-3 font-display text-2xl font-bold lg:text-3xl">
          {t("about.actual.title")}
        </h2>
        <Card className="glass-card mt-6 border-0 p-7 lg:p-10">
          <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
            <p>{t("about.actual.desc")}</p>
            <p>{t("about.actual.response")}</p>
            <p className="border-s-2 border-primary ps-4 font-medium text-foreground">
              {t("about.actual.note")}
            </p>
          </div>
        </Card>
      </section>

      <section aria-labelledby="about-approach-title" className="mt-14">
        <SectionBadge>{t("about.approach.badge")}</SectionBadge>
        <h2 id="about-approach-title" className="mt-3 font-display text-2xl font-bold lg:text-3xl">
          {t("about.approach.title")}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{t("about.approach.desc")}</p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {APPROACH_STEPS.map((step, index) => (
            <li key={step.key}>
              <Card className="glass-card h-full border-0 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-primary" aria-hidden="true">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold">{t(`${step.key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`${step.key}.desc`)}</p>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="about-principles-title" className="mt-14">
        <SectionBadge>{t("about.principles.badge")}</SectionBadge>
        <h2
          id="about-principles-title"
          className="mt-3 font-display text-2xl font-bold lg:text-3xl"
        >
          {t("about.principles.title")}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <article key={principle.key}>
              <Card className="glass-card h-full border-0 p-6">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
                  <principle.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{t(`${principle.key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`${principle.key}.desc`)}</p>
              </Card>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-difference-title" className="mt-14">
        <SectionBadge>{t("about.difference.badge")}</SectionBadge>
        <h2
          id="about-difference-title"
          className="mt-3 font-display text-2xl font-bold lg:text-3xl"
        >
          {t("about.difference.title")}
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{t("about.difference.desc")}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((item) => (
            <article key={item.key}>
              <Card className="glass-card h-full border-0 p-5">
                <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{t(`${item.key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`${item.key}.desc`)}</p>
              </Card>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-oman-title" className="mt-14">
        <Card className="glass-card border-0 p-7 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionBadge>{t("about.oman.badge")}</SectionBadge>
              <h2
                id="about-oman-title"
                className="mt-3 font-display text-2xl font-bold lg:text-3xl"
              >
                {t("about.oman.title")}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("about.oman.desc")}</p>
            </div>
            <div className="space-y-4">
              <article className="rounded-lg border border-border bg-background/30 p-5">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="text-sm font-semibold">{t("about.oman.primary")}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t("about.oman.primaryList")}</p>
              </article>
              <article className="rounded-lg border border-border bg-background/30 p-5">
                <h3 className="text-sm font-semibold">{t("about.oman.secondary")}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t("about.oman.secondaryList")}
                </p>
              </article>
            </div>
          </div>
        </Card>
      </section>

      <section aria-labelledby="about-cta-title" className="mt-14">
        <Card className="glass-card border-0 p-8 text-center lg:p-12">
          <SectionBadge>{t("about.cta.badge")}</SectionBadge>
          <h2
            id="about-cta-title"
            className="mx-auto mt-3 max-w-3xl font-display text-2xl font-bold lg:text-3xl"
          >
            {t("about.cta.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            {t("about.cta.desc")}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-auto whitespace-normal py-2 text-center">
              <Link href="/contact">
                {t("about.cta.primary")} <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-auto whitespace-normal py-2 text-center"
            >
              <Link href="/services">{t("about.cta.secondary")}</Link>
            </Button>
          </div>
          <Link
            href="/"
            className="mt-5 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {t("about.cta.home")}
          </Link>
        </Card>
      </section>
    </div>
  );
}
