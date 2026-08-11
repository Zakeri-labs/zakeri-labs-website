"use client";

import { ArrowRight } from "lucide-react";

import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { SectionBadge } from "@/components/site/SectionBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getCaseStudies } from "@/lib/case-studies";
import { useI18n } from "@/lib/i18n";

export function CaseStudiesContent() {
  const { lang, t } = useI18n();
  const caseStudies = getCaseStudies(lang);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section aria-labelledby="selected-work-title" className="max-w-3xl">
        <SectionBadge>{t("cases.badge")}</SectionBadge>
        <h1 id="selected-work-title" className="mt-3 font-display text-4xl font-bold lg:text-5xl">
          {t("cases.pageTitle")}
        </h1>
        <p className="mt-4 text-base text-muted-foreground">{t("cases.desc")}</p>
      </section>

      <section aria-labelledby="selected-projects-title" className="mt-12">
        <h2 id="selected-projects-title" className="font-display text-2xl font-bold lg:text-3xl">
          {t("cases.projectsTitle")}
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.url} study={study} />
          ))}
        </div>
      </section>

      <section aria-labelledby="selected-work-cta-title" className="mt-16">
        <Card className="glass-card border-0 p-8 text-center lg:p-12">
          <SectionBadge>{t("cases.ctaBadge")}</SectionBadge>
          <h2
            id="selected-work-cta-title"
            className="mx-auto mt-3 max-w-3xl font-display text-2xl font-bold lg:text-3xl"
          >
            {t("cases.ctaTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            {t("cases.ctaDesc")}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-auto whitespace-normal py-2 text-center">
              <LocalizedLink href="/contact">
                {t("cases.ctaPrimary")} <ArrowRight className="ms-2 h-4 w-4" aria-hidden="true" />
              </LocalizedLink>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-auto whitespace-normal py-2 text-center"
            >
              <LocalizedLink href="/services">{t("cases.ctaSecondary")}</LocalizedLink>
            </Button>
          </div>
          <nav aria-label={t("cases.relatedLinks")} className="mt-5 flex justify-center gap-5">
            <LocalizedLink
              href="/about"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("cases.linkAbout")}
            </LocalizedLink>
            <LocalizedLink
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t("cases.linkHome")}
            </LocalizedLink>
          </nav>
        </Card>
      </section>
    </div>
  );
}
