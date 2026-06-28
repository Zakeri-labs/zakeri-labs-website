"use client";

import Link from "next/link";
import {
  Compass,
  AppWindow,
  Search,
  Globe2,
  Sparkles,
  Bot,
  Inbox,
  PenTool,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";
import { useI18n } from "@/lib/i18n";

const SERVICES = [
  { icon: Compass, key: "servicesPage.1" },
  { icon: PenTool, key: "servicesPage.2" },
  { icon: AppWindow, key: "servicesPage.3" },
  { icon: Search, key: "servicesPage.4" },
  { icon: Globe2, key: "servicesPage.5" },
  { icon: Sparkles, key: "servicesPage.6" },
  { icon: Bot, key: "servicesPage.7" },
  { icon: Inbox, key: "servicesPage.8" },
];

export function ServicesContent() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>{t("servicesPage.badge")}</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
          {t("servicesPage.title")}
        </h1>
        <p className="mt-4 text-base text-muted-foreground">{t("servicesPage.desc")}</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Card key={i} className="glass-card border-0 p-6">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
              <s.icon className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{t(`${s.key}.title`)}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {t(`${s.key}.desc`)}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            {t("cta.audit")} <ArrowRight className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
