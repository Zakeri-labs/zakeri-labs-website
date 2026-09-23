"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { COMMON } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { INDUSTRY_LABELS, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const SERVICE = { en: "Web Design", ar: "تصميم مواقع" };

export function ProjectCard({ project, large }: { project: Project; large?: boolean }) {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  return (
    <article className="group card-surface flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden
        className="relative block aspect-[16/9] overflow-hidden bg-ink"
      >
        <Image
          src={project.image}
          alt=""
          placeholder="blur"
          sizes={
            large
              ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              : "(min-width: 1024px) 25vw, 50vw"
          }
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
      </a>
      <div className={cn("flex flex-1 flex-col", large ? "p-6" : "p-5")}>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full bg-secondary px-2.5 py-1 text-primary">
            {INDUSTRY_LABELS[project.industry][lang]}
          </span>
          <span className="text-muted-foreground">{SERVICE[lang]}</span>
        </div>
        <h3 className={cn("mt-3 font-bold", large ? "text-xl" : "text-base")} dir="ltr">
          <span className={lang === "ar" ? "block text-end" : ""}>{project.name}</span>
        </h3>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary hover:underline"
        >
          {c.cta.viewProject}
          <span className="sr-only">: {project.name}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
