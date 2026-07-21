"use client";

import { CaseStudyCard } from "@/components/site/CaseStudyCard";
import { SectionBadge } from "@/components/site/SectionBadge";
import { CASE_STUDIES } from "@/lib/case-studies";
import { useI18n } from "@/lib/i18n";

export function CaseStudiesContent() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>{t("cases.badge")}</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">{t("cases.pageTitle")}</h1>
        <p className="mt-4 text-base text-muted-foreground">{t("cases.desc")}</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.url} study={study} />
        ))}
      </div>
    </section>
  );
}
