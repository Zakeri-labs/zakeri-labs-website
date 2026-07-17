"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Target,
  Search,
  TrendingUp,
  Compass,
  Sparkles,
  FileText,
  Inbox,
  AppWindow,
  BarChart3,
  CircleAlert,
  UserX,
  Route as RouteIcon,
  Bot,
  CheckCircle2,
  Layers,
  Workflow,
  Globe2,
  MessageCircle,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";
import { BrowserMockup } from "@/components/site/BrowserMockup";
import { ContactForm } from "@/components/site/ContactForm";
import { CircuitBackground } from "@/components/site/CircuitBackground";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

const fade = {
  "data-aos": "fade-up",
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const flipUp = {
  "data-aos": "flip-up",
  initial: { opacity: 0, rotateX: 12, y: 42 },
  whileInView: { opacity: 1, rotateX: 0, y: 0 },
  viewport: { once: true, amount: 0.25, margin: "-80px" },
  transition: { duration: 1.05, ease: "easeOut" as const },
  style: { transformPerspective: 1200, transformOrigin: "center bottom" },
};

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative">
        <CircuitBackground />
        <div className="relative z-10">
          <TrustBar />
          <ProblemSolution />
          <Services />
          <CaseStudies />
          <Testimonials />
          <FinalCTA />
        </div>
      </div>
    </>
  );
}

/* ---------- 1. HERO ---------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative -mt-[68px] flex min-h-[100svh] items-center overflow-hidden">
      {/* Cinematic full-bleed background image — separate crop for mobile */}
      <Image
        src="/hero-image-mobile.png"
        alt="Zakeri Labs – AI Website Growth Infrastructure"
        fill
        priority
        className="object-cover object-[68%_top] lg:hidden"
      />
      <Image
        src="/hero-image.png"
        alt="Zakeri Labs – AI Website Growth Infrastructure"
        fill
        priority
        className="hidden object-cover object-top rtl:-scale-x-100 lg:block lg:translate-y-12"
      />

      {/* Side gradient — keeps text readable; lighter on desktop, flips to the right edge in RTL */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10 rtl:bg-gradient-to-l lg:via-background/45 lg:to-transparent" />
      {/* Top fade — blends behind the header */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/70 to-transparent" />
      {/* Bottom fade — blends into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 sm:px-8 lg:px-8 lg:pb-32 lg:pt-44">
        <motion.div
          {...fade}
          className="w-[54%] max-w-[12rem] sm:w-auto sm:max-w-[16rem] md:max-w-sm lg:max-w-2xl"
        >
          <span className="inline-flex max-w-[12rem] items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium leading-tight text-primary sm:max-w-none">
            <Sparkles className="h-3 w-3" /> {t("hero.badge")}
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-[3.5rem]">
            {t("hero.titlePre")}
            <span className="gradient-text">{t("hero.titleHl")}</span>
            {t("hero.titlePost")}
          </h1>
          <p className="mt-5 text-base text-muted-foreground">{t("hero.desc")}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="w-full px-4 shadow-[var(--shadow-elegant)] sm:w-auto sm:px-8"
            >
              <Link href="/contact">
                {t("cta.audit")} <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full px-4 sm:w-auto sm:px-8">
              <a href="#solution">
                <PlayCircle className="me-2 h-4 w-4" /> {t("cta.system")}
              </a>
            </Button>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> {t("hero.note")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 2. TRUST BAR ---------- */
function TrustBar() {
  const { t } = useI18n();
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const items = [
    { icon: Compass, label: t("trust.item.strategy") },
    { icon: Target, label: t("trust.item.conversion") },
    { icon: Search, label: t("trust.item.seo") },
    { icon: Bot, label: t("trust.item.aiSearch") },
    { icon: Sparkles, label: t("trust.item.aiContent") },
    { icon: Inbox, label: t("trust.item.lead") },
    { icon: AppWindow, label: t("trust.item.webapp") },
    { icon: BarChart3, label: t("trust.item.analytics") },
  ];
  return (
    <section className="border-y border-border bg-background/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} className="text-center">
          <SectionBadge>{t("trust.badge")}</SectionBadge>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold sm:text-3xl">
            {t("trust.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">{t("trust.desc")}</p>
        </motion.div>

        <motion.div
          {...fade}
          className="marquee-frame mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          onMouseEnter={() => setIsMarqueePaused(true)}
          onMouseLeave={() => setIsMarqueePaused(false)}
        >
          <div
            className="marquee-track animate-marquee flex w-max gap-3"
            style={{ animationPlayState: isMarqueePaused ? "paused" : "running" }}
          >
            {[...items, ...items].map((it, i) => (
              <div
                key={`${it.label}-${i}`}
                aria-hidden={i >= items.length}
                className="glass-card flex h-24 w-40 shrink-0 flex-col items-center justify-center gap-2 p-4 text-center transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)] sm:w-44 lg:w-40"
              >
                <it.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-[11px] leading-tight text-muted-foreground">{it.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted-foreground/80">{t("trust.foot")}</p>
      </div>
    </section>
  );
}

/* ---------- 3. PROBLEM + SOLUTION ---------- */
function ProblemSolution() {
  const { t } = useI18n();
  const problems = [
    { icon: TrendingUp, title: t("problem.1.title"), desc: t("problem.1.desc") },
    { icon: UserX, title: t("problem.2.title"), desc: t("problem.2.desc") },
    { icon: RouteIcon, title: t("problem.3.title"), desc: t("problem.3.desc") },
    { icon: CircleAlert, title: t("problem.4.title"), desc: t("problem.4.desc") },
  ];
  const solutions = [
    { icon: Workflow, title: t("solution.1.title"), desc: t("solution.1.desc") },
    { icon: Layers, title: t("solution.2.title"), desc: t("solution.2.desc") },
    { icon: Sparkles, title: t("solution.3.title"), desc: t("solution.3.desc") },
    { icon: ShieldCheck, title: t("solution.4.title"), desc: t("solution.4.desc") },
    { icon: Inbox, title: t("solution.5.title"), desc: t("solution.5.desc") },
    { icon: BarChart3, title: t("solution.6.title"), desc: t("solution.6.desc") },
  ];

  return (
    <section id="solution" className="py-20 lg:py-28">
      <div className="relative mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] lg:gap-6 lg:px-8">
        {/* Problem card */}
        <motion.div {...fade}>
          <Card className="glass-card relative flex h-full flex-col justify-between overflow-hidden border-0 p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-ember/80 to-transparent" />
            <div>
              <SectionBadge tone="ember">{t("problem.badge")}</SectionBadge>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-[2rem]">
                {t("problem.title1")}
                <br /> {t("problem.title2")}
              </h2>
              <ul className="mt-7 space-y-5">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-ember/30 bg-ember/10">
                      <p.icon className="h-4 w-4 text-ember" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{p.title}</p>
                      <p className="text-xs text-muted-foreground">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mt-8 w-full justify-between border-ember/40 text-ember hover:bg-ember/10 hover:text-ember sm:w-auto sm:text-sm"
            >
              <Link href="/contact">
                {t("problem.cta")} <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="relative flex items-center justify-center lg:self-stretch"
        >
          <div className="relative flex min-h-16 w-full flex-col items-center justify-center lg:min-h-0 lg:w-28">
            {/* Mobile connector — vertical, behind the box (top → bottom) */}
            <div
              className="absolute -inset-y-4 left-1/2 z-0 w-8 -translate-x-1/2 lg:hidden"
              aria-hidden="true"
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-ember/80 bg-background shadow-[0_0_12px_rgba(255,105,75,0.45)]" />
              <span className="absolute bottom-3 top-2 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-ember via-primary/80 to-primary shadow-[0_0_14px_rgba(65,145,255,0.55)]" />
              <span className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[11px] border-x-transparent border-t-primary drop-shadow-[0_0_8px_rgba(65,145,255,0.75)]" />
            </div>
            {/* Desktop arrow — extends 16px beyond each side of box so endpoints are visible */}
            <div
              data-testid="growth-card-connector"
              className="absolute -inset-x-4 top-1/2 z-0 hidden h-8 -translate-y-1/2 lg:block"
              aria-hidden="true"
            >
              <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-ember/80 bg-background shadow-[0_0_12px_rgba(255,105,75,0.45)]" />
              <span className="absolute left-2 right-3 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-ember via-primary/80 to-primary shadow-[0_0_14px_rgba(65,145,255,0.55)]" />
              <span className="absolute right-0 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[11px] border-y-transparent border-l-primary drop-shadow-[0_0_8px_rgba(65,145,255,0.75)]" />
            </div>
            {/* Box — z-10, sits on top of arrow, 4px top padding */}
            <div
              data-testid="growth-bridge-desktop"
              className="relative z-10 hidden w-24 flex-col items-center gap-1 rounded-md border border-white/15 bg-background/30 py-2 shadow-[var(--shadow-elegant)] backdrop-blur-[2px] lg:flex"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ember">
                {t("bridge.diagnose")}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {t("bridge.structure")}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                {t("bridge.convert")}
              </span>
            </div>
            <div
              data-testid="growth-bridge-mobile"
              className="relative z-10 flex w-24 flex-col items-center gap-1 rounded-md border border-white/15 bg-background/30 py-2 shadow-[var(--shadow-elegant)] backdrop-blur-[2px] lg:hidden"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ember sm:tracking-[0.16em]">
                {t("bridge.diagnose")}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:tracking-[0.16em]">
                {t("bridge.structure")}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary sm:tracking-[0.16em]">
                {t("bridge.convert")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Solution card */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="glass-card relative flex h-full flex-col justify-between overflow-hidden border-0 p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/80 to-transparent" />
            <div>
              <SectionBadge>{t("solution.badge")}</SectionBadge>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-[2rem]">
                {t("solution.title")}
              </h2>
              <ul className="mt-7 space-y-4">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10">
                      <s.icon className="h-4 w-4 text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.title}</p>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-8">
              <span className="animate-heartbeat absolute inset-0 rounded-md bg-primary blur-md" />
              <Button
                asChild
                variant="outline"
                size="sm"
                className="relative w-full justify-between border-primary/40 text-primary hover:bg-primary/10 hover:text-primary sm:text-sm"
              >
                <Link href="/contact">
                  {t("solution.cta")} <ArrowRight className="ms-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 4. SERVICES ---------- */
function Services() {
  const { t } = useI18n();
  const services = [
    {
      icon: Globe2,
      image: "/GEO-AEO-Ranking.png",
      title: t("engines.1.title"),
      desc: t("engines.1.desc"),
      cta: t("engines.1.cta"),
    },
    {
      icon: Bot,
      image: "/AI-Solution.png",
      title: t("engines.2.title"),
      desc: t("engines.2.desc"),
      cta: t("engines.2.cta"),
    },
    {
      icon: AppWindow,
      image: "/Website-Web Application.png",
      title: t("engines.3.title"),
      desc: t("engines.3.desc"),
      cta: t("engines.3.cta"),
    },
    {
      icon: Sparkles,
      image: "/AI-Visibility.png",
      title: t("engines.4.title"),
      desc: t("engines.4.desc"),
      cta: t("engines.4.cta"),
    },
  ];
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} className="text-center">
          <SectionBadge>{t("engines.badge")}</SectionBadge>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold sm:text-4xl">
            {t("engines.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            {t("engines.desc")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div key={i} {...fade} transition={{ duration: 0.45, delay: i * 0.06 }}>
              <Card className="glass-card group flex h-full flex-col overflow-hidden border-0 p-0 transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <div className="relative aspect-square w-full overflow-hidden bg-background">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-contain object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link
                    href="/services"
                    className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary transition group-hover:gap-2.5"
                  >
                    {s.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/services">
              {t("engines.cta")} <ArrowRight className="ms-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. CASE STUDIES ---------- */
type CaseStudyContentKey =
  | "cases.1"
  | "cases.2"
  | "cases.3"
  | "cases.4"
  | "cases.5"
  | "cases.6"
  | "cases.7"
  | "cases.8";

type CaseStudy = {
  image: string;
  url: string;
  contentKey: CaseStudyContentKey;
};

const caseStudies: CaseStudy[] = [
  {
    image: "/case-1.png",
    url: "https://rahil--mostafaee.zakeri.dev/",
    contentKey: "cases.1",
  },
  {
    image: "/case-2.png",
    url: "https://negar-derakhshan.zakeri.dev/",
    contentKey: "cases.2",
  },
  {
    image: "/case-3.png",
    url: "https://dr-arefeh-lotfi.zakeri.dev/",
    contentKey: "cases.3",
  },
  {
    image: "/case-4.png",
    url: "https://tabasom.zakeri.dev/",
    contentKey: "cases.4",
  },
  {
    image: "/case-5.png",
    url: "https://anfal-saleh.zakeri.dev/",
    contentKey: "cases.5",
  },
  {
    image: "/case-6.png",
    url: "https://farhad-lotfi.zakeri.dev/",
    contentKey: "cases.6",
  },
  {
    image: "/case-7.png",
    url: "https://himangharani.zakeri.dev/",
    contentKey: "cases.7",
  },
  {
    image: "/case-8.png",
    url: "https://mahmud-haghzade.zakeri.dev/",
    contentKey: "cases.8",
  },
];

function CaseStudies() {
  const { t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth + 16 : 320;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="case-studies" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row — full width with arrows on the right */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <motion.div {...fade}>
            <SectionBadge>{t("cases.badge")}</SectionBadge>
            <h2 className="mt-3 font-display text-3xl font-bold lg:text-4xl">{t("cases.title")}</h2>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{t("cases.desc")}</p>
          </motion.div>

          <div
            dir="ltr"
            className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end"
          >
            <Button asChild variant="outline">
              <Link href="/insights">{t("cases.viewAll")}</Link>
            </Button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/80 text-foreground shadow-sm backdrop-blur transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/80 text-foreground shadow-sm backdrop-blur transition hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable card track — full width below header */}
        <div>
          <div
            ref={scrollRef}
            id="case-studies-track"
            className="mt-8 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {caseStudies.map((c, i) => (
              <div
                key={i}
                className="w-[82vw] shrink-0 snap-start sm:w-[calc((100%_-_1rem)_/_2)] lg:w-[calc((100%_-_3rem)_/_4)]"
              >
                <Card className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border/40 bg-background p-0">
                  {/* Image — exact 4:3 ratio matches source images (1448×1086) */}
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(`${c.contentKey}.title`)}
                    className="relative block aspect-[4/3] w-full overflow-hidden bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <Image
                      src={c.image}
                      alt={t(`${c.contentKey}.title`)}
                      fill
                      className="object-contain object-top transition duration-500 group-hover:scale-105"
                    />
                  </a>
                  {/* Content */}
                  <div className="flex shrink-0 flex-col px-4 pb-4 pt-2">
                    <span className="mb-1 w-fit rounded border border-primary/70 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      {t(`${c.contentKey}.industry`)}
                    </span>
                    <h3 className="text-sm font-semibold leading-snug">
                      {t(`${c.contentKey}.title`)}
                    </h3>
                    <div className="mt-8 flex justify-center">
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-background/40 px-2.5 py-1.5 text-[11px] font-medium text-foreground transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {t("cases.view")} <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. TESTIMONIALS ---------- */
function Testimonials() {
  const { t } = useI18n();
  const items = [
    {
      quote: t("testimonials.1.quote"),
      name: t("testimonials.namePlaceholder"),
      role: t("testimonials.1.role"),
      company: t("testimonials.companyPlaceholder"),
    },
    {
      quote: t("testimonials.2.quote"),
      name: t("testimonials.namePlaceholder"),
      role: t("testimonials.2.role"),
      company: t("testimonials.companyPlaceholder"),
    },
    {
      quote: t("testimonials.3.quote"),
      name: t("testimonials.namePlaceholder"),
      role: t("testimonials.3.role"),
      company: t("testimonials.companyPlaceholder"),
    },
  ];
  return (
    <section className="pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map((t, i) => (
          <motion.div key={i} {...fade} transition={{ duration: 0.45, delay: i * 0.06 }}>
            <Card className="glass-card group h-full border-0 p-6 transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
              <Quote className="h-5 w-5 text-primary" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span
                  aria-hidden
                  className="grid h-9 w-9 place-items-center rounded-full bg-surface-2 text-xs text-muted-foreground"
                >
                  {t.name.slice(0, 1)}
                </span>
                <div className="text-xs">
                  <p className="font-medium text-foreground">{t.name}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                  <p className="text-muted-foreground/70">{t.company}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- 7. FINAL CTA ---------- */
function FinalCTA() {
  const { t } = useI18n();
  return (
    <section id="contact" className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...flipUp}>
          <Card className="glass-card grid gap-10 overflow-hidden border-0 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <SectionBadge>{t("finalcta.badge")}</SectionBadge>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight lg:text-4xl">
                {t("finalcta.title")}
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">{t("finalcta.desc")}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    {t("cta.audit")} <ArrowRight className="ms-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="me-2 h-4 w-4" /> {t("cta.whatsapp")}
                  </a>
                </Button>
              </div>
              <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                {t("finalcta.note")}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background/40 p-6">
              <h3 className="text-base font-semibold">{t("finalcta.formTitle")}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{t("finalcta.formDesc")}</p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Force-import to keep tree-shake from killing referenced icons
void FileText;
