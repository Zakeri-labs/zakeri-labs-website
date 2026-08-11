"use client";

import {
  AppWindow,
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  Compass,
  HardHat,
  Inbox,
  MessageCircle,
  RefreshCw,
  Sparkles,
  Truck,
  Workflow,
} from "lucide-react";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { SectionBadge } from "@/components/site/SectionBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const SERVICES = [
  { icon: Compass, key: "servicesPage.1" },
  { icon: Workflow, key: "servicesPage.2" },
  { icon: Inbox, key: "servicesPage.3" },
  { icon: BarChart3, key: "servicesPage.4" },
  { icon: Sparkles, key: "servicesPage.5" },
  { icon: AppWindow, key: "servicesPage.6" },
  { icon: Bot, key: "servicesPage.7" },
  { icon: RefreshCw, key: "servicesPage.8" },
] as const;

const ENGAGEMENT = [
  "servicesPage.engagement.1",
  "servicesPage.engagement.2",
  "servicesPage.engagement.3",
  "servicesPage.engagement.4",
] as const;

const INDUSTRIES = [
  { icon: HardHat, key: "servicesPage.industry.1" },
  { icon: Truck, key: "servicesPage.industry.2" },
  { icon: Building2, key: "servicesPage.industry.3" },
] as const;

const OBJECTIONS = [
  "servicesPage.objection.1",
  "servicesPage.objection.2",
  "servicesPage.objection.3",
  "servicesPage.objection.4",
] as const;

export function ServicesContent() {
  const { t } = useI18n();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <nav aria-label={t("servicesPage.breadcrumbLabel")} className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li>
              <Link href="/" className="transition hover:text-foreground">
                {t("servicesPage.breadcrumbHome")}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground/80">
              {t("servicesPage.breadcrumbCurrent")}
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <SectionBadge>{t("servicesPage.badge")}</SectionBadge>
          <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
            {t("servicesPage.title")}
          </h1>
          <p className="mt-4 text-base text-muted-foreground">{t("servicesPage.desc")}</p>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold lg:text-3xl">
            {t("servicesPage.servicesTitle")}
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            {t("servicesPage.servicesDesc")}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <article key={service.key} id={`service-${index + 1}`}>
                <Card className="glass-card h-full border-0 p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{t(`${service.key}.title`)}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {t(`${service.key}.desc`)}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {["p1", "p2", "p3"].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs leading-relaxed text-foreground/85"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        <span>{t(`${service.key}.${point}`)}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>{t("servicesPage.engagementBadge")}</SectionBadge>
            <h2 className="mt-3 font-display text-3xl font-bold lg:text-4xl">
              {t("servicesPage.engagementTitle")}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">{t("servicesPage.engagementDesc")}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ENGAGEMENT.map((key, index) => (
              <article key={key}>
                <Card className="glass-card h-full border-0 p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/35 bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{t(`${key}.title`)}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {t(`${key}.desc`)}
                  </p>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionBadge>{t("servicesPage.industriesBadge")}</SectionBadge>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold lg:text-4xl">
              {t("servicesPage.industriesTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              {t("servicesPage.industriesDesc")}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <article key={industry.key}>
                <Card className="glass-card h-full border-0 p-6">
                  <industry.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 text-base font-semibold">{t(`${industry.key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`${industry.key}.desc`)}
                  </p>
                </Card>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
            {t("servicesPage.industriesSecondary")}
          </p>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionBadge>{t("servicesPage.objectionsBadge")}</SectionBadge>
          <h2 className="mt-3 font-display text-3xl font-bold lg:text-4xl">
            {t("servicesPage.objectionsTitle")}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {OBJECTIONS.map((key) => (
              <article key={key}>
                <Card className="glass-card h-full border-0 p-6">
                  <h3 className="text-base font-semibold">{t(`${key}.q`)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(`${key}.a`)}
                  </p>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="glass-card border-0 p-8 text-center lg:p-12">
            <SectionBadge>{t("servicesPage.ctaBadge")}</SectionBadge>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold lg:text-4xl">
              {t("servicesPage.ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              {t("servicesPage.ctaDesc")}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  {t("servicesPage.ctaPrimary")} <ArrowRight className="ms-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="me-2 h-4 w-4" /> {t("cta.whatsapp")}
                </a>
              </Button>
            </div>

            <nav
              aria-label={t("servicesPage.relatedLinks")}
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-border pt-6"
            >
              <Link
                href="/"
                className="text-xs text-muted-foreground transition hover:text-primary"
              >
                {t("servicesPage.linkHome")}
              </Link>
              <Link
                href="/about"
                className="text-xs text-muted-foreground transition hover:text-primary"
              >
                {t("servicesPage.linkAbout")}
              </Link>
              <Link
                href="/case-study"
                className="text-xs text-muted-foreground transition hover:text-primary"
              >
                {t("servicesPage.linkCases")}
              </Link>
            </nav>
          </Card>
        </div>
      </section>
    </>
  );
}
