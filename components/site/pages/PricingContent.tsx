"use client";

import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FlaskConical,
  RefreshCw,
  Settings2,
} from "lucide-react";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { SectionBadge } from "@/components/site/SectionBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

const ENGAGEMENTS = [
  { icon: ClipboardCheck, key: "pricing.engagement.1" },
  { icon: FlaskConical, key: "pricing.engagement.2" },
  { icon: Settings2, key: "pricing.engagement.3" },
  { icon: RefreshCw, key: "pricing.engagement.4" },
] as const;

const COST_FACTORS = [
  "pricing.cost.1",
  "pricing.cost.2",
  "pricing.cost.3",
  "pricing.cost.4",
  "pricing.cost.5",
  "pricing.cost.6",
  "pricing.cost.7",
  "pricing.cost.8",
  "pricing.cost.9",
] as const;

const FIT_ITEMS = ["pricing.fit.yes.1", "pricing.fit.yes.2", "pricing.fit.yes.3"] as const;

const NOT_FIT_ITEMS = ["pricing.fit.no.1", "pricing.fit.no.2", "pricing.fit.no.3"] as const;

export function PricingContent() {
  const { t } = useI18n();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <SectionBadge>{t("pricing.badge")}</SectionBadge>
          <h1 className="mt-3 break-words font-display text-4xl font-bold lg:text-5xl">
            {t("pricing.title")}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {t("pricing.desc")}
          </p>
        </div>

        <section aria-labelledby="pricing-options-title" className="mt-14">
          <h2 id="pricing-options-title" className="font-display text-2xl font-bold lg:text-3xl">
            {t("pricing.options.title")}
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
            {t("pricing.options.desc")}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ENGAGEMENTS.map((engagement, index) => (
              <article key={engagement.key} id={`engagement-${index + 1}`}>
                <Card className="glass-card h-full border-0 p-6 lg:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
                      <engagement.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-primary" aria-hidden="true">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {t(`${engagement.key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(`${engagement.key}.purpose`)}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {["p1", "p2", "p3", "p4", "p5"].map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{t(`${engagement.key}.${point}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-s-2 border-primary ps-4 text-sm font-medium text-foreground">
                    {t(`${engagement.key}.outcome`)}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {t(`${engagement.key}.pricing`)}
                  </p>
                </Card>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="border-y border-border bg-background/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionBadge>{t("pricing.cost.badge")}</SectionBadge>
          <h2 className="mt-3 font-display text-2xl font-bold lg:text-3xl">
            {t("pricing.cost.title")}
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{t("pricing.cost.desc")}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {COST_FACTORS.map((factor) => (
              <li
                key={factor}
                className="flex items-start gap-2 rounded-lg border border-border p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm text-foreground/90">{t(factor)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Card className="glass-card border-0 p-7 lg:p-10">
          <SectionBadge>{t("pricing.why.badge")}</SectionBadge>
          <h2 className="mt-3 font-display text-2xl font-bold lg:text-3xl">
            {t("pricing.why.title")}
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t("pricing.why.desc")}
          </p>
        </Card>

        <section aria-labelledby="pricing-fit-title" className="mt-14">
          <SectionBadge>{t("pricing.fit.badge")}</SectionBadge>
          <h2 id="pricing-fit-title" className="mt-3 font-display text-2xl font-bold lg:text-3xl">
            {t("pricing.fit.title")}
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{t("pricing.fit.desc")}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article>
              <Card className="glass-card h-full border-0 p-6">
                <h3 className="text-lg font-semibold">{t("pricing.fit.yes.title")}</h3>
                <ul className="mt-5 space-y-3">
                  {FIT_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </article>
            <article>
              <Card className="glass-card h-full border-0 p-6">
                <h3 className="text-lg font-semibold">{t("pricing.fit.no.title")}</h3>
                <ul className="mt-5 space-y-3">
                  {NOT_FIT_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </article>
          </div>
        </section>

        <section aria-labelledby="pricing-cta-title" className="mt-14">
          <Card className="glass-card border-0 p-8 text-center lg:p-12">
            <SectionBadge>{t("pricing.cta.badge")}</SectionBadge>
            <h2
              id="pricing-cta-title"
              className="mx-auto mt-3 max-w-3xl font-display text-2xl font-bold lg:text-3xl"
            >
              {t("pricing.cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              {t("pricing.cta.desc")}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-auto whitespace-normal py-2 text-center">
                <Link href="/contact">
                  {t("pricing.cta.primary")} <ArrowRight className="ms-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-auto whitespace-normal py-2 text-center"
              >
                <Link href="/services">{t("pricing.cta.secondary")}</Link>
              </Button>
            </div>
            <Link
              href="/about"
              className="mt-5 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("pricing.cta.about")}
            </Link>
          </Card>
        </section>
      </section>
    </>
  );
}
