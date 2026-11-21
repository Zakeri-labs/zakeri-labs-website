"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Languages,
  Link2,
  MessageCircle,
  Mic,
  PenLine,
  Play,
  Smartphone,
} from "lucide-react";

import { FinalCta, PageHero, Reveal, Section, SectionHeading } from "@/components/site/blocks";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { gsap, prefersReducedMotion, useGSAP } from "@/components/site/motion";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { PORTFOLIO } from "@/lib/content/portfolio";
import { useCopy, useI18n } from "@/lib/i18n";
import { INDUSTRIES, isIndustry, normalizeCode, type Industry } from "@/lib/industries";
import { localizePathname, type Lang } from "@/lib/locales";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";
import type { PublicVideo } from "@/lib/videos";
import { cn } from "@/lib/utils";

const SERVICE_ICONS = [PenLine, Clapperboard, Mic, Smartphone, Languages, CheckCircle2];

const isVertical = (v: PublicVideo) => !!v.width && !!v.height && v.height > v.width;
/** Label of a tile: a vertical video is a reel, a wide one goes by its category. */
const kindOf = (v: PublicVideo) => (isVertical(v) ? "reel" : v.category);
/** A wide film takes two columns so its frame is not cut down to a portrait tile. */
const isWide = (v: PublicVideo) => !!v.width && !!v.height && v.width > v.height;

/** Link to send for one sample: /portfolio/C81, or ?v=<id> for a video that has no code yet. */
const samplePath = (v: PublicVideo, lang: Lang) =>
  localizePathname("/portfolio", lang) + (v.code ? `/${v.code}` : `?v=${v.id}`);

function Tile({ v, onPlay, eager }: { v: PublicVideo; onPlay: () => void; eager: boolean }) {
  const t = useCopy(PORTFOLIO);
  const { lang } = useI18n();
  const title = v.title[lang];
  const wide = isWide(v);
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`${t.play}: ${title}${v.code ? ` (#${v.code})` : ""}`}
      className={cn(
        "group relative block w-full grow overflow-hidden rounded-md bg-gradient-to-br from-ink to-violet/30 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rounded-xl",
        wide ? "aspect-[3/2]" : "aspect-[3/4]",
      )}
    >
      {v.poster && (
        <Image
          src={v.poster}
          alt=""
          fill
          priority={eager}
          sizes={
            wide
              ? "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 66vw"
              : "(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 33vw"
          }
          className="object-cover transition duration-500 group-hover:scale-[1.05] motion-reduce:transition-none"
        />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/40 transition group-hover:via-black/25" />
      {v.code && (
        <span
          dir="ltr"
          className="absolute start-1.5 top-1.5 rounded-full bg-black/55 px-2 py-0.5 text-[11px] font-bold tracking-wide text-white ring-1 ring-white/25 backdrop-blur sm:start-2.5 sm:top-2.5 sm:text-xs"
        >
          #{v.code}
        </span>
      )}
      <span className="absolute end-1.5 top-1.5 text-white drop-shadow sm:end-2.5 sm:top-2.5">
        {wide ? (
          <Clapperboard className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" fill="currentColor" />
        )}
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-6 sm:p-3 sm:pt-8">
        <span className="line-clamp-2 block text-[11px] font-semibold leading-snug text-white sm:text-sm">
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
  onStep,
  opener,
}: {
  v: PublicVideo | null;
  onClose: () => void;
  /** Moves to the previous (-1) or next (1) sample of the current tab; absent when there is one. */
  onStep?: (dir: 1 | -1) => void;
  /** The cover that opened the player: focus goes back to it on close. */
  opener: React.RefObject<HTMLElement | null>;
}) {
  const t = useCopy(PORTFOLIO);
  const { lang } = useI18n();
  const [copied, setCopied] = useState(false);
  useEffect(() => setCopied(false), [v]);

  const whatsapp = v
    ? `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
        v.code ? t.sample.whatsappText.replace("{code}", v.code) : t.sample.whatsappTextNoCode,
      )}`
    : "";
  const copy = async () => {
    if (!v) return;
    try {
      await navigator.clipboard.writeText(window.location.origin + samplePath(v, lang));
      setCopied(true);
    } catch {
      // clipboard blocked (old browser, no https): the address bar already holds the link
    }
  };
  const step = (dir: 1 | -1) => (
    <button
      type="button"
      onClick={() => onStep?.(dir)}
      aria-label={dir === 1 ? t.sample.next : t.sample.previous}
      className={cn(
        "absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        dir === 1 ? "end-2" : "start-2",
      )}
    >
      {dir === 1 ? (
        <ChevronRight className="h-5 w-5 rtl:rotate-180" />
      ) : (
        <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
      )}
    </button>
  );
  return (
    // Radix Dialog: focus trap, Esc and click-outside close
    <Dialog open={!!v} onOpenChange={(open) => !open && onClose()}>
      {v && (
        <DialogContent
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            opener.current?.focus();
          }}
          onKeyDown={(e) => {
            // arrows move between samples unless the video itself is using them to seek
            if ((e.target as HTMLElement).tagName === "VIDEO" || !onStep) return;
            const rtl = lang === "ar";
            if (e.key === "ArrowRight") onStep(rtl ? -1 : 1);
            if (e.key === "ArrowLeft") onStep(rtl ? 1 : -1);
          }}
          className={cn(
            "max-h-[94dvh] gap-0 overflow-y-auto border-white/10 bg-ink p-0 text-white sm:rounded-2xl",
            isVertical(v) ? "w-[min(92vw,26rem)] max-w-none" : "w-[min(94vw,68rem)] max-w-none",
          )}
        >
          <div
            className={cn(
              "relative w-full bg-black",
              isVertical(v) ? "aspect-[9/16] max-h-[62dvh] sm:max-h-[68dvh]" : "aspect-video",
            )}
          >
            {v.youtubeId ? (
              <iframe
                key={v.id}
                src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                title={v.title[lang]}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <video
                key={v.id}
                src={v.src ?? undefined}
                poster={v.poster ?? undefined}
                preload="none"
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full"
              />
            )}
            {onStep && step(-1)}
            {onStep && step(1)}
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2 pe-10 text-xs font-semibold">
              {v.code && (
                <span dir="ltr" className="rounded-full bg-brand px-2.5 py-1 text-white">
                  <span className="sr-only">{t.sample.code} </span>#{v.code}
                </span>
              )}
              {v.industry && (
                <span className="rounded-full border border-white/20 px-2.5 py-1 text-white/80">
                  {t.industries[v.industry]}
                </span>
              )}
              <span className="text-white/60">{t.filters[kindOf(v)]}</span>
            </div>
            <DialogTitle className="mt-3 text-base font-bold sm:text-lg">
              {v.title[lang]}
            </DialogTitle>
            <DialogDescription
              dir="auto"
              className={cn(
                "mt-1.5 text-sm leading-relaxed text-white/70",
                !v.description[lang] && "sr-only",
              )}
            >
              {v.description[lang] || v.title[lang]}
            </DialogDescription>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => track("whatsapp_contact_clicked", { sample: v.code ?? v.id })}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1fae5b] px-5 text-sm font-semibold text-white transition hover:bg-[#189a4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {t.sample.whatsapp}
              </a>
              <LocalizedLink
                href={`/contact?interest=ai-video${v.code ? `&sample=${v.code}` : ""}`}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-5 text-sm font-semibold text-ink transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <CalendarCheck className="h-4 w-4 shrink-0" />
                {t.sample.meeting}
              </LocalizedLink>
              <button
                type="button"
                onClick={copy}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
                <span aria-live="polite">{copied ? t.sample.copied : t.sample.copy}</span>
              </button>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

export function PortfolioPage({
  videos,
  initial,
}: {
  videos: PublicVideo[];
  /** Code of the sample to open at once: the /portfolio/<code> route. */
  initial?: string;
}) {
  const t = useCopy(PORTFOLIO);
  const { lang } = useI18n();
  const [filter, setFilter] = useState<Industry | "all">("all");
  const [open, setOpen] = useState<PublicVideo | null>(
    () => (initial && videos.find((v) => v.code === initial)) || null,
  );
  const present = INDUSTRIES.filter((k) => videos.some((v) => v.industry === k));
  const shown = filter === "all" ? videos : videos.filter((v) => v.industry === filter);

  // ?v=<id or code> opens that video (links sent before codes); ?industry=<slug> opens that tab.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const id = q.get("v");
    const v = id && videos.find((x) => x.id === id || x.code === normalizeCode(id));
    if (v) setOpen(v);
    const industry = q.get("industry");
    if (isIndustry(industry) && videos.some((x) => x.industry === industry)) setFilter(industry);
  }, [videos]);

  const listUrl = (f: Industry | "all") =>
    localizePathname("/portfolio", lang) + (f === "all" ? "" : `?industry=${f}`);
  const opener = useRef<HTMLElement | null>(null);
  const show = (v: PublicVideo | null) => {
    if (v && !open) opener.current = document.activeElement as HTMLElement | null;
    setOpen(v);
    window.history.replaceState(null, "", v ? samplePath(v, lang) : listUrl(filter));
    if (v)
      track("portfolio_video_play", {
        video_id: v.id,
        video_title: v.title.en,
        video_kind: kindOf(v),
        video_code: v.code ?? "",
        video_industry: v.industry ?? "",
      });
  };
  const pick = (f: Industry | "all") => {
    setFilter(f);
    window.history.replaceState(null, "", listUrl(f));
  };
  // The open sample may sit outside the current tab (a direct link): then there is nothing to step to.
  const at = open ? shown.indexOf(open) : -1;
  const step =
    at >= 0 && shown.length > 1
      ? (dir: 1 | -1) => show(shown[(at + dir + shown.length) % shown.length])
      : undefined;

  // Tiles of a newly picked tab come in together; the first paint is left alone (LCP).
  const grid = useRef<HTMLUListElement>(null);
  const first = useRef(true);
  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      if (prefersReducedMotion() || !grid.current) return;
      gsap.fromTo(
        grid.current.children,
        { autoAlpha: 0, y: 18, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out", stagger: 0.035 },
      );
    },
    { dependencies: [filter], scope: grid },
  );

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} />

      <Section className="pt-0 lg:pt-0">
        {videos.length === 0 ? (
          <p className="text-center text-muted-foreground">{t.empty}</p>
        ) : (
          <>
            {present.length > 0 && (
              // One swipeable row, like the tabs of a profile; it stays under the header while scrolling
              <div
                role="group"
                aria-label={t.filterLabel}
                className="sticky top-16 z-30 -mx-4 mb-4 flex gap-2 overflow-x-auto bg-background/85 px-4 py-3 backdrop-blur [scrollbar-width:none] sm:mx-0 sm:mb-6 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
              >
                {(["all", ...present] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={filter === f}
                    onClick={() => pick(f)}
                    className={cn(
                      "min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      filter === f
                        ? "border-primary bg-primary/20 text-foreground"
                        : "border-border bg-white/[0.03] text-foreground/75 hover:border-primary/40",
                    )}
                  >
                    {f === "all" ? t.filters.all : t.industries[f]}
                    <span className="ms-1.5 text-xs font-medium text-foreground/50">
                      {f === "all" ? videos.length : videos.filter((v) => v.industry === f).length}
                    </span>
                  </button>
                ))}
              </div>
            )}
            {/* Profile-style grid: portrait tiles, a wide film takes two columns, dense flow fills the gaps.
                ponytail: every tile is rendered (covers lazy-load); page the list when it passes ~300 samples. */}
            <ul
              ref={grid}
              className="grid grid-flow-dense grid-cols-3 gap-1 sm:gap-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-3"
            >
              {shown.map((v, i) => (
                <li key={v.id} className={cn("flex flex-col", isWide(v) && "col-span-2")}>
                  <Tile v={v} onPlay={() => show(v)} eager={i < 6} />
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
      <Lightbox v={open} onClose={() => show(null)} onStep={step} opener={opener} />
    </>
  );
}
