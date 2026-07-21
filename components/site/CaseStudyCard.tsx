"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const { t } = useI18n();

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border/40 bg-background p-0">
      <a
        href={study.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={study.title}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <Image
          src={study.image}
          alt={study.title}
          fill
          className="object-contain object-top transition duration-500 group-hover:scale-105"
        />
      </a>
      <div className="flex shrink-0 flex-1 flex-col px-4 pb-4 pt-2">
        <span className="mb-1 w-fit rounded border border-primary/70 px-2 py-0.5 text-[10px] font-semibold text-primary">
          {study.industry}
        </span>
        <h3 className="text-sm font-semibold leading-snug">{study.title}</h3>
        <div className="mt-auto flex justify-center pt-8">
          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-border bg-background/40 px-2.5 py-1.5 text-[11px] font-medium text-foreground transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t("cases.view")} <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </Card>
  );
}
