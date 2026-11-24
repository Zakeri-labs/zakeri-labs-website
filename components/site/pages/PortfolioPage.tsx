"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { getImageProps } from "next/image";
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
  Search,
  Smartphone,
  Volume2,
} from "lucide-react";

import { Eyebrow, FinalCta, Reveal, Section, SectionHeading } from "@/components/site/blocks";
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
/** A wide film is still a portrait card in the grid (cover crop); it plays in its own shape. */
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
      data-sample={v.id}
      title={title}
      onClick={onPlay}
      aria-label={`${t.play}: ${title}${v.code ? ` (#${v.code})` : ""}`}
      className="group relative block aspect-[3/4] w-full overflow-hidden rounded-xl bg-gradient-to-br from-ink to-violet/30 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:aspect-[9/16]"
    >
      {v.poster && (
        <Image
          src={v.poster}
          alt=""
          fill
          priority={eager}
          sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, calc(50vw - 22px)"
          className="object-cover transition duration-500 group-hover:scale-[1.05] motion-reduce:transition-none"
        />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/40 transition group-hover:via-black/25" />
      {v.code && (
        <span className="absolute start-2 top-2 rounded-full bg-black/55 px-2.5 py-0.5 text-xs font-bold tracking-wide text-white ring-1 ring-white/25 sm:start-2.5 sm:top-2.5 sm:px-2">
          <span dir="ltr">#{v.code}</span>
        </span>
      )}
      <span className="absolute end-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white sm:end-2.5 sm:top-2.5 sm:h-auto sm:w-auto sm:p-1">
        {wide ? (
          <Clapperboard className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
        ) : (
          <Play className="h-4 w-4 sm:h-3.5 sm:w-3.5" fill="currentColor" />
        )}
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-12 sm:from-black/80 sm:via-transparent sm:p-3 sm:pt-8">
        {/* the business only: the full title is in the button's label */}
        <span className="line-clamp-2 text-start text-[15px] font-bold leading-snug text-white sm:text-sm sm:font-semibold">
          {title.split(" · ")[0]}
        </span>
        {/* phones show two large cards per row, so there is room for the industry tag */}
        {v.industry && (
          <span className="mt-0.5 block truncate text-[13px] font-medium text-white/80 sm:hidden">
            {t.industries[v.industry]}
          </span>
        )}
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
  // autoplay fell back to muted: a "tap for sound" pill shows over the video
  const [needSound, setNeedSound] = useState(false);
  useEffect(() => {
    setCopied(false);
    setNeedSound(false);
  }, [v]);
  const video = useRef<HTMLVideoElement | null>(null);
  // Phones block autoplay with sound (always on iOS, and a direct /portfolio/C16 link has no tap
  // at all): then start muted and offer the pill. Stable, so a re-render
  // (e.g. "copy link") does not restart a video the visitor paused.
  const autoplay = useCallback((el: HTMLVideoElement | null) => {
    video.current = el;
    el?.play().catch((e: DOMException) => {
      if (e.name !== "NotAllowedError") return;
      el.muted = true;
      el.play().then(
        () => setNeedSound(true),
        () => {},
      );
    });
  }, []);
  const unmute = () => {
    const el = video.current;
    if (!el) return;
    el.muted = false;
    el.play().catch(() => {});
    setNeedSound(false);
  };

  // "Teeb Al Arab Perfumes · Arabic Instagram reel": the business, then what was made for it
  const [client, ...restOfTitle] = (v?.title[lang] ?? "").split(" · ");
  const kind = restOfTitle.join(" · ");
  const ratio = v?.width && v.height ? v.width / v.height : 16 / 9;
  const tall = !!v && isVertical(v);
  // the cover goes through the image optimizer, not the raw 1080x1920 JPEG
  const poster = v?.poster
    ? getImageProps({ src: v.poster, alt: "", width: 414, height: Math.round(414 / ratio) }).props
        .src
    : undefined;

  const whatsapp = v
    ? `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
        v.code ? t.sample.whatsappText.replace("{code}", v.code) : t.sample.whatsappTextNoCode,
      )}`
    : "";
  const copy = async () => {
    if (!v) return;
    try {
      await navigator.clipboard.writeText(SITE.url + samplePath(v, lang));
    } catch {
      // clipboard blocked (old browser, in-app webview): the address bar already holds this link
    }
    setCopied(true);
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
      {dir === 1 ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
    </button>
  );
  return (
    // Radix Dialog: focus trap, Esc and click-outside close
    <Dialog open={!!v} onOpenChange={(open) => !open && onClose()}>
      {v && (
        <DialogContent
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            // opened from a direct link: there was no cover click, so go to that sample's cover
            (
              opener.current ?? document.querySelector<HTMLElement>(`[data-sample="${v.id}"]`)
            )?.focus();
          }}
          onKeyDown={(e) => {
            // arrows move between samples unless the video itself is using them to seek
            if ((e.target as HTMLElement).tagName === "VIDEO" || !onStep) return;
            const rtl = lang === "ar";
            if (e.key === "ArrowRight") onStep(rtl ? -1 : 1);
            if (e.key === "ArrowLeft") onStep(rtl ? 1 : -1);
          }}
          className={cn(
            // phone: a full-screen sheet that never scrolls as a whole: video on top, details scroll
            // under it, so the close button stays on screen. md and up: side by side, like a desktop post.
            // sm:rounded-none beats ui/dialog's sm:rounded-lg: square below md, the old 16px (rounded-lg) from md.
            "left-0 top-0 flex h-dvh w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-none border-0 sm:rounded-none bg-ink p-0 text-white md:left-1/2 md:top-1/2 md:h-auto md:max-h-[94dvh] md:w-fit md:max-w-[94vw] md:-translate-x-1/2 md:-translate-y-1/2 md:flex-row md:rounded-lg md:border md:border-white/10",
            // the close cross of ui/dialog, made a real 44px target that shows on any frame
            "[&>button]:right-2 rtl:[&>button]:left-2 rtl:[&>button]:right-auto [&>button]:top-2 [&>button]:z-20 [&>button]:grid [&>button]:h-11 [&>button]:w-11 [&>button]:place-items-center [&>button]:rounded-full [&>button]:bg-black/55 [&>button]:opacity-100 [&>button]:ring-1 [&>button]:ring-white/30",
          )}
        >
          {/* Arrows sit on this black band, so beside a reel they are in the side bars, not on it.
              A wide or square film gets a 56px top bar on phones for the close button. */}
          <div
            className={cn(
              "relative flex shrink-0 items-center justify-center bg-black",
              !tall && "pt-14 md:pt-0",
            )}
          >
            <div
              // The box is always the video's own shape (no bars): on a phone as wide as the screen
              // until it is 60% of the screen tall (details and the WhatsApp button stay in view);
              // on desktop it leaves room for the 22rem details column.
              style={{ "--r": ratio, aspectRatio: ratio } as React.CSSProperties}
              className="relative w-[min(100%,calc(60dvh*var(--r)))] shrink-0 md:w-[min(calc(94vw-22rem),60rem,calc(86dvh*var(--r)))]"
            >
              {v.youtubeId ? (
                <iframe
                  key={v.id}
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&playsinline=1&rel=0`}
                  title={v.title[lang]}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <video
                  key={v.id}
                  src={v.src ?? undefined}
                  poster={poster}
                  onVolumeChange={(e) => !e.currentTarget.muted && setNeedSound(false)}
                  preload="none"
                  controls
                  playsInline
                  ref={autoplay}
                  className="absolute inset-0 h-full w-full"
                />
              )}
              {needSound && (
                <button
                  type="button"
                  onClick={unmute}
                  className="absolute left-1/2 top-3 z-10 inline-flex min-h-11 -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-black/70 px-4 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Volume2 className="h-4 w-4" />
                  {t.sample.tapForSound}
                </button>
              )}
            </div>
            {onStep && step(-1)}
            {onStep && step(1)}
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain p-4 pb-0 sm:p-5 sm:pb-0 md:w-[22rem] md:flex-none md:shrink-0 md:pb-5 md:pt-14">
            <DialogTitle className="text-start text-lg font-bold leading-snug">
              {client}
            </DialogTitle>
            {kind && <p className="mt-1 text-start text-sm text-white/65">{kind}</p>}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
              {v.code && (
                <span className="rounded-full bg-brand px-2.5 py-1 text-white">
                  <span className="sr-only">{t.sample.code} </span>
                  <span dir="ltr">#{v.code}</span>
                </span>
              )}
              {v.industry && (
                <span className="rounded-full border border-white/20 px-2.5 py-1 text-white/80">
                  {t.industries[v.industry]}
                </span>
              )}
              <span className="text-white/60">{t.filters[kindOf(v)]}</span>
            </div>
            <DialogDescription
              className={cn(
                "mt-4 text-start text-sm leading-relaxed text-white/75",
                !v.description[lang] && "sr-only",
              )}
            >
              {v.description[lang] || v.title[lang]}
            </DialogDescription>
            {/* phones: the main action stays pinned to the bottom of the sheet while the details scroll */}
            <div className="sticky bottom-0 z-10 -mx-4 mt-5 bg-ink px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:-mx-5 sm:px-5 md:static md:mx-0 md:mt-auto md:bg-transparent md:px-0 md:pb-0 md:pt-6">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label={`WhatsApp: ${t.sample.whatsapp}`}
                onClick={() => track("whatsapp_contact_clicked", { sample: v.code ?? v.id })}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1fae5b] px-5 text-sm font-semibold text-white transition hover:bg-[#189a4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {t.sample.whatsapp}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pb-[max(1rem,env(safe-area-inset-bottom))] md:mt-2 md:pb-0">
              <LocalizedLink
                href={`/contact?interest=ai-video${v.code ? `&sample=${v.code}` : ""}`}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <CalendarCheck className="h-4 w-4 shrink-0" />
                {t.sample.meeting}
              </LocalizedLink>
              <button
                type="button"
                onClick={copy}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
  videos: all,
  initial,
}: {
  videos: PublicVideo[];
  /** Code of the sample to open at once: the /portfolio/<code> route. */
  initial?: string;
}) {
  const t = useCopy(PORTFOLIO);
  const { lang } = useI18n();
  // Zakeri, 24 Nov 2026: the gallery shows reels only for now; a shared film link (/portfolio/S5) still opens.
  const videos = all.filter((v) => kindOf(v) === "reel");
  const [filter, setFilter] = useState<Industry | "all">("all");
  const [open, setOpen] = useState<PublicVideo | null>(
    () => (initial && all.find((v) => v.code === initial)) || null,
  );
  const present = INDUSTRIES.filter((k) => videos.some((v) => v.industry === k));
  const [query, setQuery] = useState("");
  const words = query.trim().toLowerCase().replace(/^#/, "").split(/\s+/).filter(Boolean);
  const shown = videos.filter((v) => {
    if (filter !== "all" && v.industry !== filter) return false;
    if (!words.length) return true;
    const hay = [
      v.title.en,
      v.title.ar,
      v.description[lang],
      v.code,
      v.industry && t.industries[v.industry],
    ]
      .join(" ")
      .toLowerCase();
    return words.every((w) => hay.includes(w));
  });

  // ?v=<id or code> opens that video (links sent before codes); ?industry=<slug> opens that tab.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const id = q.get("v");
    const v = id && all.find((x) => x.id === id || x.code === normalizeCode(id));
    if (v) setOpen(v);
    const industry = q.get("industry");
    if (isIndustry(industry) && videos.some((x) => x.industry === industry)) setFilter(industry);
  }, [all, videos]);

  const listUrl = (f: Industry | "all") =>
    localizePathname("/portfolio", lang) + (f === "all" ? "" : `?industry=${f}`);
  const grid = useRef<HTMLUListElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  // Opened from a card: the player gets its own history entry, so the phone's Back button closes it.
  // A direct /portfolio/<code> link has no entry under it to go back to, so it keeps replaceState.
  const pushed = useRef(false);
  useEffect(() => {
    const onPop = () => {
      if (!pushed.current) return;
      pushed.current = false;
      setOpen(null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const show = (v: PublicVideo | null) => {
    if (!v && pushed.current) return window.history.back(); // popstate closes it
    if (v && !open) opener.current = document.activeElement as HTMLElement | null;
    setOpen(v);
    const url = v ? samplePath(v, lang) : listUrl(filter);
    if (v && !open) {
      window.history.pushState(null, "", url);
      pushed.current = true;
    } else window.history.replaceState(null, "", url);
    if (v)
      track("portfolio_video_play", {
        video_id: v.id,
        video_title: v.title.en,
        video_kind: kindOf(v),
        video_code: v.code ?? "",
        video_industry: v.industry ?? "",
      });
  };
  const tabs = useRef<HTMLDivElement>(null);
  const pick = (f: Industry | "all") => {
    setFilter(f);
    window.history.replaceState(null, "", listUrl(f));
    // a short tab must not leave the visitor below the grid
    const top = grid.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) window.scrollBy({ top: top - 150 });
  };
  // the picked tab stays in sight in the swipeable row (also for a ?industry= link)
  useEffect(() => {
    tabs.current
      ?.querySelector('[aria-pressed="true"]')
      ?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [filter]);
  // The open sample may sit outside the current tab (a direct link): then there is nothing to step to.
  const at = open ? shown.indexOf(open) : -1;
  const step =
    at >= 0 && shown.length > 1
      ? (dir: 1 | -1) => show(shown[(at + dir + shown.length) % shown.length])
      : undefined;

  // Tiles of a newly picked tab come in together; the first paint is left alone (LCP).
  const first = useRef(true);
  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      if (prefersReducedMotion() || !grid.current) return;
      gsap.fromTo(
        // only the first rows: a stagger over 300 tiles would leave the last ones blank for seconds
        Array.from(grid.current.children).slice(0, 12),
        { autoAlpha: 0, y: 18, scale: 0.96 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out", stagger: 0.035 },
      );
    },
    { dependencies: [filter], scope: grid },
  );

  return (
    <>
      {/* Short header, not the full PageHero: like a profile, the grid starts on the first screen */}
      <Section className="pb-3 pt-0 sm:pb-4 sm:pt-8 lg:pb-6 lg:pt-12">
        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
        <h1 className="mt-2 max-w-3xl text-xl font-extrabold leading-tight sm:mt-3 sm:text-4xl">
          {t.hero.title}
        </h1>
        {/* phones: no intro and no stats line, so the first row of tiles is on the first screen (375x548) */}
        <p className="mt-2 hidden max-w-2xl text-sm leading-relaxed text-foreground/75 sm:block sm:text-base">
          {t.hero.intro}
        </p>
        {videos.length > 0 && (
          <p className="mt-2 hidden text-sm font-medium text-foreground/70 sm:block">
            {t.stats
              .replace("{samples}", String(videos.length))
              .replace("{industries}", String(present.length))}
          </p>
        )}
      </Section>

      <Section className="pt-0 lg:pt-0">
        {videos.length === 0 ? (
          <p className="text-center text-muted-foreground">{t.empty}</p>
        ) : (
          <>
            <label className="relative mb-1 block sm:mb-2 sm:max-w-md">
              <span className="sr-only">{t.search}</span>
              <Search className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.search}
                enterKeyHint="search"
                className="h-11 w-full rounded-full sm:h-12 border border-border bg-white/[0.04] pe-4 ps-11 text-base text-foreground placeholder:text-foreground/45 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            {present.length > 0 && (
              // One swipeable row, like the tabs of a profile; it stays under the header while scrolling
              <div
                ref={tabs}
                role="group"
                aria-label={t.filterLabel}
                className="sticky top-[72px] z-30 -mx-4 mb-2 flex gap-2 overflow-x-auto bg-background/85 px-4 py-2 backdrop-blur sm:py-3 sm:static sm:bg-transparent sm:backdrop-blur-none [scrollbar-width:none] sm:mx-0 sm:mb-6 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
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
            {/* Profile-style grid: every sample is a 9:16 card, like a reels tab (phones: two large 3:4 cards per row).
                ponytail: every tile is rendered (covers lazy-load); add a plain "show more" (slice) when it passes ~100 samples. */}
            <ul
              ref={grid}
              data-grid
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-3"
            >
              {shown.map((v, i) => (
                <li key={v.id}>
                  <Tile v={v} onPlay={() => show(v)} eager={!initial && i < 2} />
                </li>
              ))}
            </ul>
            {shown.length === 0 && (
              <p role="status" className="py-10 text-center text-muted-foreground">
                {t.noResults}
              </p>
            )}
          </>
        )}
      </Section>

      <Section tone="tint">
        <SectionHeading
          eyebrow={t.service.eyebrow}
          title={t.service.title}
          intro={t.service.intro}
        />
        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {t.service.items.map((item, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            return (
              <Reveal key={item.title} className="card-surface h-full p-4 sm:p-6">
                {/* phones: icon beside the title, so six cards are not four screens of scrolling */}
                <div className="flex items-center gap-3 sm:block">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold sm:mt-4">{item.title}</h3>
                </div>
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
