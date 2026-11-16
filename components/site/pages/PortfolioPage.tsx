"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Clapperboard,
  Languages,
  Mic,
  PenLine,
  Play,
  Smartphone,
} from "lucide-react";

import { FinalCta, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { PORTFOLIO } from "@/lib/content/portfolio";
import { useCopy, useI18n } from "@/lib/i18n";
import { track } from "@/lib/track";
import type { PublicVideo } from "@/lib/videos";
import { cn } from "@/lib/utils";

const KINDS = ["reel", "promo", "solution", "project_demo"] as const;
type Kind = (typeof KINDS)[number];
const SERVICE_ICONS = [PenLine, Clapperboard, Mic, Smartphone, Languages, CheckCircle2];

const isVertical = (v: PublicVideo) => !!v.width && !!v.height && v.height > v.width;
/** One chip per video: a vertical video is a reel, a wide one goes by its category. */
const kindOf = (v: PublicVideo): Kind => (isVertical(v) ? "reel" : v.category);

function Cover({ v, onPlay }: { v: PublicVideo; onPlay: () => void }) {
  const t = useCopy(PORTFOLIO);
  const { lang } = useI18n();
  const title = v.title[lang];
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`${t.play}: ${title}`}
      className="group block w-full rounded-2xl text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span
        className={cn(
          "relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink to-violet/30 shadow-[var(--shadow-lift)] transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/50",
          isVertical(v) ? "aspect-[9/16]" : "aspect-video",
        )}
      >
        {v.poster && (
          <Image
            src={v.poster}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        )}
        <span className="absolute inset-0 bg-black/10 transition group-hover:bg-black/30" />
        <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/50 backdrop-blur transition group-hover:scale-110 group-hover:bg-brand">
          <Play className="h-5 w-5 translate-x-0.5 rtl:-translate-x-0.5" fill="currentColor" />
        </span>
      </span>
      <span className="mt-3 block px-1">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary rtl:tracking-normal">
          {t.filters[kindOf(v)]}
        </span>
        <span className="mt-1 line-clamp-2 block text-sm font-bold leading-snug group-hover:text-primary sm:text-base">
          {title}
        </span>
      </span>
    </button>
  );
}

/** The player opens only on a click, so no video byte is loaded before that. */
function Lightbox({
  v,
  onClose,
  opener,
}: {
  v: PublicVideo | null;
  onClose: () => void;
  /** The cover that opened the player: focus goes back to it on close. */
  opener: React.RefObject<HTMLElement | null>;
}) {
  const { lang } = useI18n();
  return (
    // Radix Dialog: focus trap, Esc and click-outside close
    <Dialog open={!!v} onOpenChange={(open) => !open && onClose()}>
      {v && (
        <DialogContent
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            opener.current?.focus();
          }}
          className={cn(
            "max-h-[94vh] gap-0 overflow-y-auto border-white/10 bg-ink p-0 text-white sm:rounded-2xl",
            isVertical(v) ? "w-[min(92vw,26rem)] max-w-none" : "w-[min(94vw,68rem)] max-w-none",
          )}
        >
          <div
            className={cn(
              "relative w-full bg-black",
              isVertical(v) ? "aspect-[9/16] max-h-[78vh]" : "aspect-video",
            )}
          >
            {v.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                title={v.title[lang]}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <video
                src={v.src ?? undefined}
                poster={v.poster ?? undefined}
                preload="none"
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full"
              />
            )}
          </div>
          <div className="p-4 pe-12 sm:p-5 sm:pe-12">
            <DialogTitle className="text-base font-bold sm:text-lg">{v.title[lang]}</DialogTitle>
            <DialogDescription
              dir="auto"
              className={cn(
                "mt-1.5 text-sm leading-relaxed text-white/70",
                !v.description[lang] && "sr-only",
              )}
            >
              {v.description[lang] || v.title[lang]}
            </DialogDescription>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

export function PortfolioPage({ videos }: { videos: PublicVideo[] }) {
  const t = useCopy(PORTFOLIO);
  const [filter, setFilter] = useState<Kind | "all">("all");
  const [open, setOpen] = useState<PublicVideo | null>(null);
  const present = KINDS.filter((k) => videos.some((v) => kindOf(v) === k));
  const shown = filter === "all" ? videos : videos.filter((v) => kindOf(v) === filter);

  // /portfolio?v=<id> opens that video: one link to send for one film.
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("v");
    const v = id && videos.find((x) => x.id === id);
    if (v) setOpen(v);
  }, [videos]);

  const opener = useRef<HTMLElement | null>(null);
  const show = (v: PublicVideo | null) => {
    if (v) opener.current = document.activeElement as HTMLElement | null;
    setOpen(v);
    window.history.replaceState(null, "", v ? `?v=${v.id}` : window.location.pathname);
    if (v)
      track("portfolio_video_play", {
        video_id: v.id,
        video_title: v.title.en,
        video_kind: kindOf(v),
      });
  };

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} />

      <Section className="pt-0 lg:pt-0">
        {videos.length === 0 ? (
          <p className="text-center text-muted-foreground">{t.empty}</p>
        ) : (
          <>
            {present.length > 1 && (
              <div role="group" aria-label={t.filterLabel} className="mb-8 flex flex-wrap gap-2">
                {(["all", ...present] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={filter === f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      "min-h-10 rounded-full border px-4 text-sm font-semibold transition",
                      filter === f
                        ? "border-primary bg-primary/20 text-foreground"
                        : "border-border bg-white/[0.03] text-foreground/75 hover:border-primary/40",
                    )}
                  >
                    {t.filters[f]}
                  </button>
                ))}
              </div>
            )}
            {/* CSS columns: reels stay 9:16 and films 16:9 without gaps between rows */}
            <ul className="columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
              {shown.map((v) => (
                <li key={v.id} className="mb-6 break-inside-avoid">
                  <Cover v={v} onPlay={() => show(v)} />
                </li>
              ))}
            </ul>
          </>
        )}
      </Section>

      <Section tone="tint">
        <SectionHeading
          eyebrow={t.service.eyebrow}
          title={t.service.title}
          intro={t.service.intro}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.service.items.map((item, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            return (
              <Reveal key={item.title} className="card-surface h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-8 max-w-2xl text-muted-foreground">{t.service.note}</Reveal>
      </Section>

      <FinalCta
        eyebrow={t.final.eyebrow}
        title={t.final.title}
        text={t.final.text}
        primaryHref="/contact?interest=ai-video"
      />
      <Lightbox v={open} onClose={() => show(null)} opener={opener} />
    </>
  );
}
