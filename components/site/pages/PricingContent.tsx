"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";
import { useI18n } from "@/lib/i18n";

const PACKAGES = [
  { key: "pricing.1", features: ["f1", "f2", "f3", "f4"] },
  { key: "pricing.2", features: ["f1", "f2", "f3", "f4"], featured: true },
  { key: "pricing.3", features: ["f1", "f2", "f3", "f4"] },
];

export function PricingContent() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <SectionBadge>{t("pricing.badge")}</SectionBadge>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold lg:text-5xl">
          {t("pricing.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          {t("pricing.desc")}
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <Card
            key={i}
            className={`glass-card relative flex h-full flex-col border-0 p-8 ${
              p.featured ? "ring-1 ring-primary/40 shadow-[var(--shadow-elegant)]" : ""
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 start-6 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                {t("pricing.popular")}
              </span>
            )}
            <h3 className="font-display text-xl font-semibold">{t(`${p.key}.name`)}</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">{t("pricing.bestFor")}</span>{" "}
              {t(`${p.key}.best`)}
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {t(`${p.key}.${f}`)}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full" variant={p.featured ? "default" : "outline"}>
              <Link href="/contact">
                {t(`${p.key}.cta`)} <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">{t("pricing.foot")}</p>
    </section>
  );
}
