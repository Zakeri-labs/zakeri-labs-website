"use client";

import Link from "next/link";
import { Compass, Sparkles, Target, Search, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";
import { useI18n } from "@/lib/i18n";

const BELIEFS = [
  { icon: Compass, key: "about.1" },
  { icon: Sparkles, key: "about.2" },
  { icon: Target, key: "about.3" },
  { icon: Search, key: "about.4" },
  { icon: TrendingUp, key: "about.5" },
];

export function AboutContent() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>{t("about.badge")}</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">{t("about.title")}</h1>
        <p className="mt-4 text-base text-muted-foreground">{t("about.desc")}</p>
      </div>

      <Card className="glass-card mt-12 border-0 p-8 lg:p-10">
        <p className="text-base leading-relaxed text-foreground/90">{t("about.intro")}</p>
      </Card>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold lg:text-3xl">{t("about.beliefs")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BELIEFS.map((b, i) => (
            <Card key={i} className="glass-card border-0 p-6">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
                <b.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{t(`${b.key}.title`)}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{t(`${b.key}.desc`)}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            {t("cta.work")} <ArrowRight className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
