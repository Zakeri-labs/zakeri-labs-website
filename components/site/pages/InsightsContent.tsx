"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";
import { useI18n } from "@/lib/i18n";

const ARTICLES = [
  { key: "insights.1", hue: 220 },
  { key: "insights.2", hue: 260 },
  { key: "insights.3", hue: 200 },
  { key: "insights.4", hue: 30 },
  { key: "insights.5", hue: 350 },
  { key: "insights.6", hue: 280 },
];

export function InsightsContent() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>{t("insights.badge")}</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">{t("insights.title")}</h1>
        <p className="mt-4 text-base text-muted-foreground">{t("insights.desc")}</p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((a, i) => (
          <Card
            key={i}
            className="glass-card group cursor-pointer overflow-hidden border-0 p-0 transition hover:shadow-[var(--shadow-elegant)]"
          >
            <div
              className="aspect-[16/9] w-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, hsl(${a.hue} 80% 60% / 0.45), transparent 60%), linear-gradient(135deg, hsl(${a.hue} 40% 18%), hsl(${a.hue + 20} 30% 12%))`,
              }}
            />
            <div className="p-5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                {t("insights.tag")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">
                {t(`${a.key}.title`)}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">{t(`${a.key}.excerpt`)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary transition group-hover:gap-2">
                {t("insights.read")} <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
