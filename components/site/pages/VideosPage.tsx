"use client";

/* eslint-disable @next/next/no-img-element -- poster URLs come from Supabase Storage / YouTube */

import { useState } from "react";
import { Play } from "lucide-react";

import { FinalCta, PageHero, Reveal, Section } from "@/components/site/blocks";
import { VIDEOS } from "@/lib/content/videos";
import { useCopy, useI18n } from "@/lib/i18n";
import type { PublicVideo } from "@/lib/videos";
import { cn } from "@/lib/utils";

const FILTERS = ["all", "promo", "solution", "project_demo"] as const;

function VideoCard({ v }: { v: PublicVideo }) {
  const t = useCopy(VIDEOS);
  const { lang } = useI18n();
  const [playing, setPlaying] = useState(false);
  const title = v.title[lang];
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video bg-gradient-to-br from-ink to-violet/30">
        {playing && v.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : playing && v.src ? (
          <video
            src={v.src}
            poster={v.poster ?? undefined}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full bg-black"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${t.play}: ${title}`}
            className="group absolute inset-0 flex items-center justify-center"
          >
            {v.poster && (
              <img
                src={v.poster}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg transition group-hover:scale-110">
              <Play className="h-6 w-6 translate-x-0.5 rtl:-translate-x-0.5" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">
          {t.filters[v.category]}
        </span>
        <h3 className="mt-3 text-base font-bold">{title}</h3>
        {v.description[lang] && (
          <p dir="auto" className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {v.description[lang]}
          </p>
        )}
      </div>
    </article>
  );
}

export function VideosPage({ videos }: { videos: PublicVideo[] }) {
  const t = useCopy(VIDEOS);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");
  const shown = filter === "all" ? videos : videos.filter((v) => v.category === filter);
  const present = FILTERS.filter((f) => f === "all" || videos.some((v) => v.category === f));

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} />
      <Section>
        {videos.length === 0 ? (
          <p className="text-center text-muted-foreground">{t.empty}</p>
        ) : (
          <>
            {present.length > 2 && (
              <div role="group" aria-label={t.filterLabel} className="mb-8 flex flex-wrap gap-2">
                {present.map((f) => (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={filter === f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition",
                      filter === f
                        ? "bg-secondary text-primary"
                        : "text-foreground/75 hover:text-primary",
                    )}
                  >
                    {t.filters[f]}
                  </button>
                ))}
              </div>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((v) => (
                <Reveal key={v.id}>
                  <VideoCard v={v} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Section>
      <FinalCta eyebrow={t.final.eyebrow} title={t.final.title} text={t.final.text} />
    </>
  );
}
