"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Coins,
  Gauge,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { openAgent } from "@/components/site/AiAgent";
import { Container, Cta, Eyebrow, Reveal, TextLink } from "@/components/site/blocks";
import { LeadWizard } from "@/components/site/LeadWizard";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import {
  gsap,
  prefersReducedMotion,
  ScrollTrigger,
  SplitText,
  useGSAP,
  useMagnetic,
} from "@/components/site/motion";
import { ProjectCard } from "@/components/site/ProjectCard";
import { COMMON } from "@/lib/content/common";
import { HOME } from "@/lib/content/home";
import { useCopy, useI18n } from "@/lib/i18n";
import { IMG } from "@/lib/images";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ImgKey = keyof typeof IMG;

export function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Statement />
      <Solutions />
      <Products />
      <Work />
      <AiDemo />
      <Founder />
      <How />
      <Final />
    </>
  );
}

/* ================================================================ Hero */

function Hero() {
  const h = useCopy(HOME).hero;
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  const root = useRef<HTMLElement>(null);
  const ribbon = useRef<HTMLDivElement>(null);
  const cta = useRef<HTMLDivElement>(null);
  useMagnetic(cta, 0.3);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      // Arabic letters join, so split Arabic by words and Latin by characters.
      const ar = lang === "ar";
      const split = SplitText.create(".hero-title-a", {
        type: ar ? "words" : "words,chars",
        mask: ar ? "words" : "chars",
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(ar ? self.words : self.chars, {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            ease: "expo.out",
            stagger: ar ? 0.08 : 0.022,
            delay: 0.15,
          }),
      });

      gsap.from(".hero-title-b", { yPercent: 110, duration: 1.2, ease: "expo.out", delay: 0.45 });

      gsap
        .timeline({ delay: 0.5 })
        .from(".hero-fade", { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.1 })
        .from(
          ribbon.current,
          { scale: 0.6, opacity: 0, rotate: -25, duration: 1.6, ease: "expo.out" },
          0,
        )
        .from(
          ".hero-chip",
          { scale: 0, opacity: 0, duration: 0.8, ease: "back.out(2)", stagger: 0.12 },
          0.6,
        );

      // Scroll away: the ribbon drifts up and shrinks, the copy lifts.
      gsap.to(ribbon.current, {
        yPercent: -30,
        scale: 0.7,
        rotate: 18,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-copy", {
        yPercent: -18,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "20% top", end: "bottom top", scrub: true },
      });

      // Chips bob on their own clocks.
      gsap.utils.toArray<HTMLElement>(".hero-chip").forEach((el, i) =>
        gsap.to(el, {
          y: i % 2 ? 14 : -14,
          duration: 2.6 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }),
      );

      // Ribbon follows the pointer in 3D.
      let onMove: ((e: PointerEvent) => void) | undefined;
      if (!window.matchMedia("(pointer: coarse)").matches) {
        const rx = gsap.quickTo(".hero-ribbon-inner", "rotationX", {
          duration: 1,
          ease: "power3.out",
        });
        const ry = gsap.quickTo(".hero-ribbon-inner", "rotationY", {
          duration: 1,
          ease: "power3.out",
        });
        const mx = gsap.quickTo(".hero-ribbon-inner", "x", { duration: 1.2, ease: "power3.out" });
        onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          ry(nx * 24);
          rx(-ny * 18);
          mx(nx * 30);
        };
        window.addEventListener("pointermove", onMove);
      }
      return () => {
        if (onMove) window.removeEventListener("pointermove", onMove);
        split.revert();
      };
    },
    { scope: root, dependencies: [lang] },
  );

  const chipIcons = [TrendingUp, Coins, Gauge];
  const chipPos = ["start-0 top-[14%]", "end-0 top-[46%]", "start-[12%] bottom-[8%]"];

  return (
    <section
      ref={root}
      className="relative -mt-[72px] flex min-h-[100svh] items-center overflow-hidden pt-[72px]"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <Container className="relative grid items-center gap-8 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-10">
        <div className="hero-copy relative z-10">
          <p className="hero-fade inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-cyan backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> {h.eyebrow}
          </p>
          <h1 className="hero-title mt-7 text-[2.55rem] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-7xl xl:text-[5.6rem]">
            <span className="hero-title-a block">{h.titleA}</span>
            {/* Clipped gradient text can't be split per character, so it rises as one line. */}
            <span className="block overflow-hidden pb-3">
              <span className="hero-title-b gradient-text block">{h.titleB}</span>
            </span>
          </h1>
          <p className="hero-fade mt-7 max-w-xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            {h.intro}
          </p>
          <div className="hero-fade mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div ref={cta} className="inline-flex">
              <Cta href="#contact" className="min-h-14 w-full px-8 text-base sm:w-auto">
                {c.cta.discuss}
              </Cta>
            </div>
            <Cta
              href="#solutions"
              variant="outline"
              icon="none"
              className="min-h-14 px-8 text-base"
            >
              {c.cta.explore}
            </Cta>
          </div>
          <ul className="hero-fade mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {h.support.map((line) => (
              <li key={line} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan" /> {line}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={ribbon}
          className="relative mx-auto aspect-square w-full max-w-[560px] [perspective:1000px]"
        >
          <div className="hero-ribbon-inner relative h-full w-full [transform-style:preserve-3d]">
            <Image
              src={IMG.hero}
              alt={h.imageAlt}
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="float-mask h-full w-full animate-[float_8s_ease-in-out_infinite] object-contain motion-reduce:animate-none"
            />
          </div>
          {h.chips.map((chip, i) => {
            const Icon = chipIcons[i];
            return (
              <span
                key={chip}
                className={cn(
                  "hero-chip absolute inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1333]/80 px-4 py-2.5 text-sm font-semibold shadow-[var(--shadow-lift)] backdrop-blur-md",
                  chipPos[i],
                )}
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand">
                  <Icon className="h-3.5 w-3.5 text-white" />
                </span>
                {chip}
              </span>
            );
          })}
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground lg:flex">
        {h.scroll}
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_1.8s_ease-in-out_infinite] bg-brand" />
        </span>
      </div>
    </section>
  );
}

/* ============================================================== Ticker */

function Ticker() {
  const items = useCopy(HOME).ticker;
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const loop = gsap.fromTo(
        track.current,
        { xPercent: 0 },
        { xPercent: -50, duration: 40, ease: "none", repeat: -1 },
      );
      // Scroll speed nudges the ticker, then it eases back to cruising.
      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const dir = self.direction || 1;
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 300, 6);
          gsap.to(loop, { timeScale: boost * dir, duration: 0.2, overwrite: true });
          gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.2 });
        },
      });
      return () => st.kill();
    },
    { scope: track },
  );

  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div ref={track} className="flex w-max gap-10" dir="ltr">
        {[...row, ...row].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-10 font-display text-2xl font-bold text-foreground/80 sm:text-3xl"
          >
            {item}
            <Sparkles className="h-5 w-5 text-cyan" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

/* =========================================================== Statement */

function Statement() {
  const s = useCopy(HOME).statement;
  const { lang } = useI18n();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const split = SplitText.create(".statement-text", { type: "words" });
      gsap.fromTo(
        split.words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: ".statement-text",
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        },
      );
      return () => split.revert();
    },
    { scope: root, dependencies: [lang] },
  );

  const icons = [TrendingUp, Coins, Gauge];
  return (
    <section ref={root} className="relative py-28 lg:py-40">
      <Container>
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <p className="statement-text mt-8 max-w-5xl font-display text-3xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-[3.6rem]">
          {s.text}
        </p>
        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
          {s.outcomes.map((o, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={o.title} className="relative">
                <div className="mb-6 h-px w-full bg-gradient-to-r from-cyan/60 via-violet/40 to-transparent rtl:bg-gradient-to-l" />
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-cyan" />
                  <span className="font-display text-sm font-bold text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-3xl font-bold">{o.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{o.text}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================== Solutions */

const TAB_SECONDS = 7;

function Solutions() {
  const s = useCopy(HOME).solutions;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const inView = useRef(false);
  const tab = s.tabs[active];

  // Animate the stage in whenever the tab changes.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        ".sol-img",
        { opacity: 0, scale: 0.85, rotate: -6 },
        { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "expo.out" },
      );
      gsap.fromTo(
        ".sol-copy > *",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.07 },
      );
    },
    { scope: stage, dependencies: [active] },
  );

  // Auto-advance only while the section is on screen and not hovered.
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: stage.current,
      start: "top 85%",
      end: "bottom 15%",
      onToggle: (self) => (inView.current = self.isActive),
    });
    return () => st.kill();
  }, []);
  useEffect(() => {
    if (!bar.current || prefersReducedMotion()) return;
    const tween = gsap.fromTo(
      bar.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: TAB_SECONDS,
        ease: "none",
        paused,
        onComplete: () => {
          if (inView.current) setActive((i) => (i + 1) % s.tabs.length);
        },
      },
    );
    return () => {
      tween.kill();
    };
  }, [active, paused, s.tabs.length]);

  return (
    <section id="solutions" className="relative scroll-mt-20 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              {s.title}
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">{s.intro}</p>
          </div>
          <TextLink href="/services">{s.more}</TextLink>
        </div>

        <div
          className="mt-14 grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            role="tablist"
            aria-label={s.eyebrow}
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0"
          >
            {s.tabs.map((t, i) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative shrink-0 overflow-hidden rounded-2xl px-5 py-4 text-start transition lg:py-5",
                  i === active ? "bg-white/[0.06]" : "hover:bg-white/[0.03]",
                )}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={cn(
                      "font-display text-sm font-bold",
                      i === active ? "text-cyan" : "text-muted-foreground",
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "whitespace-nowrap text-lg font-bold transition lg:text-xl",
                      i === active
                        ? "text-foreground"
                        : "text-foreground/45 group-hover:text-foreground/80",
                    )}
                  >
                    {t.label}
                  </span>
                </span>
                {i === active && (
                  <span
                    ref={bar}
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-brand rtl:origin-right"
                  />
                )}
              </button>
            ))}
          </div>

          <div
            ref={stage}
            role="tabpanel"
            className="relative grid items-center gap-8 md:grid-cols-[1.1fr_1fr]"
          >
            <div className="sol-img relative mx-auto aspect-square w-full max-w-[520px] md:scale-110">
              <div className="pointer-events-none absolute inset-[15%] -z-10 rounded-full bg-violet/30 blur-3xl" />
              <Image
                key={tab.key}
                src={IMG[tab.image as ImgKey]}
                alt=""
                placeholder="blur"
                sizes="(min-width: 1024px) 30vw, 80vw"
                className="float-mask h-full w-full animate-[float_7s_ease-in-out_infinite] object-contain motion-reduce:animate-none"
              />
            </div>
            <div className="sol-copy">
              <h3 className="text-3xl font-bold leading-tight sm:text-4xl">{tab.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{tab.text}</p>
              <ul className="mt-6 space-y-3">
                {tab.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Cta href={tab.href}>{tab.cta}</Cta>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================ Products */

function Products() {
  const p = useCopy(HOME).products;
  const c = useCopy(COMMON);
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>(".prod-img").forEach((el, i) =>
        gsap.fromTo(
          el,
          { yPercent: 14, rotate: i ? 6 : -6 },
          {
            yPercent: -10,
            rotate: 0,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        ),
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} id="products" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-[500px] max-w-5xl rounded-full bg-violet/15 blur-[120px]" />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">{p.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {p.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{p.intro}</p>
        </div>
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-10">
          {p.items.map((item) => (
            <LocalizedLink
              key={item.title}
              href={item.href}
              className="group relative block text-center"
            >
              <div className="prod-img relative mx-auto aspect-square w-full max-w-[460px]">
                <div className="pointer-events-none absolute inset-[18%] -z-10 rounded-full bg-cyan/20 blur-3xl transition group-hover:bg-cyan/35" />
                <Image
                  src={IMG[item.image as ImgKey]}
                  alt=""
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="float-mask h-full w-full object-contain transition duration-700 group-hover:scale-105"
                />
              </div>
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan rtl:tracking-normal">
                  {c.productTag} · {item.tag}
                </p>
                <h3 className="mt-3 text-3xl font-bold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.subtitle}</p>
                <ul className="mt-6 flex flex-wrap justify-center gap-2">
                  {item.points.map((pt) => (
                    <li
                      key={pt}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 font-semibold text-cyan transition group-hover:gap-3">
                  {c.cta.products} <ArrowRight className="h-4 w-4" />
                </span>
              </Reveal>
            </LocalizedLink>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ================================================================ Work */

function Work() {
  const w = useCopy(HOME).work;
  const half = Math.ceil(PROJECTS.length / 2);
  const rows = [PROJECTS.slice(0, half), PROJECTS.slice(half)];
  return (
    <section id="work" className="relative overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>{w.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl">{w.title}</h2>
          </div>
          <Cta href="/selected-work" variant="outline" className="shrink-0 self-start md:self-end">
            {w.cta}
          </Cta>
        </div>
      </Container>
      <div
        className="mt-14 space-y-5 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
        dir="ltr"
      >
        {rows.map((row, r) => (
          <div key={r} className="group flex overflow-hidden">
            <div
              className="flex w-max gap-5 pe-5 group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
              style={{
                animation: `marquee ${row.length * 7}s linear infinite`,
                animationDirection: r ? "reverse" : "normal",
              }}
            >
              {[...row, ...row].map((p, i) => (
                <div
                  key={`${p.url}-${i}`}
                  className="w-[300px] shrink-0 sm:w-[360px]"
                  aria-hidden={i >= row.length}
                >
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================= AI demo */

function AiDemo() {
  const d = useCopy(HOME).demo;
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".demo-phone", start: "top 70%" },
      });
      gsap.utils.toArray<HTMLElement>(".demo-bubble").forEach((b) => {
        if (b.dataset.role === "ai") {
          tl.fromTo(".demo-typing", { opacity: 0 }, { opacity: 1, duration: 0.25 }).to(
            ".demo-typing",
            { opacity: 0, duration: 0.2, delay: 0.8 },
          );
        }
        tl.fromTo(
          b,
          { opacity: 0, y: 16, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.8)" },
          "+=0.25",
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>{d.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {d.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{d.text}</p>
          <button
            type="button"
            onClick={() => openAgent(d.ask)}
            className="mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-[var(--shadow-lift)] transition hover:-translate-y-0.5"
          >
            <Bot className="h-5 w-5" /> {d.cta}
          </button>
        </Reveal>

        <div className="relative mx-auto w-full max-w-md">
          <Image
            src={IMG.agent}
            alt=""
            placeholder="blur"
            sizes="300px"
            className="float-mask pointer-events-none absolute -end-24 -top-24 -z-10 w-72 animate-[float_9s_ease-in-out_infinite] opacity-80"
          />
          <div className="demo-phone rounded-[2.5rem] border border-white/10 bg-[#0b1026]/90 p-3 shadow-[0_40px_100px_-30px_rgb(123_107_255/0.6)] backdrop-blur">
            <div className="rounded-[2rem] bg-[#0b141a] p-4">
              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#25d366]/20 text-[#25d366]">
                  <Bot className="h-5 w-5" />
                </span>
                <div className="text-start">
                  <p className="text-sm font-semibold">IDRAK AI</p>
                  <p className="text-[11px] text-emerald-400">online</p>
                </div>
              </div>
              <div className="flex min-h-[320px] flex-col justify-end gap-2.5 pt-4">
                {d.chat.map((m, i) => (
                  <div
                    key={i}
                    data-role={m.role}
                    className={cn(
                      "demo-bubble max-w-[82%] rounded-2xl px-3.5 py-2 text-[14px] leading-snug",
                      m.role === "ai"
                        ? "rounded-ss-sm bg-[#1f2c34] text-start"
                        : "ms-auto rounded-se-sm bg-[#005c4b]",
                    )}
                  >
                    {m.text}
                  </div>
                ))}
                <div className="demo-typing flex w-14 gap-1 rounded-2xl bg-[#1f2c34] px-3 py-3 opacity-0">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/60"
                      style={{ animationDelay: `${i * 120}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">{d.label}</p>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================= Founder */

function Founder() {
  const f = useCopy(HOME).founder;
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute inset-x-8 bottom-0 top-1/4 -z-10 rounded-full bg-brand opacity-30 blur-3xl" />
          <Image
            src={IMG.founder}
            alt={f.imageAlt}
            placeholder="blur"
            sizes="(min-width: 1024px) 35vw, 90vw"
            className="w-full [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]"
          />
        </Reveal>
        <Reveal>
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-extrabold sm:text-6xl">{f.name}</h2>
          <p className="mt-3 font-semibold text-cyan">{f.role}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{f.text}</p>
          <blockquote className="mt-10 text-3xl font-bold leading-tight sm:text-4xl">
            <p>{f.quoteA}</p>
            <p className="gradient-text">{f.quoteB}</p>
          </blockquote>
          <div className="mt-10">
            <Cta href="/about#founder" variant="outline">
              {f.cta}
            </Cta>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ================================================================= How */

function How() {
  const h = useCopy(HOME).how;
  const c = useCopy(COMMON);
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        ".how-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".how-steps",
            start: "top 75%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );
      gsap.from(".how-dot", {
        scale: 0.3,
        opacity: 0.2,
        ease: "back.out(3)",
        duration: 0.6,
        stagger: 0.25,
        scrollTrigger: { trigger: ".how-steps", start: "top 70%" },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center">{h.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {h.title}
          </h2>
        </div>
        <ol className="how-steps relative mt-20 grid gap-12 md:grid-cols-4 md:gap-6">
          <span className="how-line absolute start-0 top-[22px] hidden h-px w-full origin-left bg-brand md:block rtl:origin-right" />
          {h.steps.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span className="how-dot relative z-10 mx-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-background font-display font-bold text-cyan shadow-[0_0_30px_-4px] shadow-primary">
                {i + 1}
              </span>
              <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
        <Reveal className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-foreground/80">{h.note}</p>
          <TextLink href="/how-we-work">
            {c.cta.howWeWork} <ArrowUpRight className="h-4 w-4" />
          </TextLink>
        </Reveal>
      </Container>
    </section>
  );
}

/* =============================================================== Final */

function Final() {
  const f = useCopy(HOME).final;
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 lg:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#10183f] via-[#0b1130] to-[#140c35] p-6 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -end-32 -top-32 h-96 w-96 rounded-full bg-violet/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -start-20 h-96 w-96 rounded-full bg-cyan/15 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Eyebrow>{f.eyebrow}</Eyebrow>
              <h2 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                {f.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
            <div id="contact-form">
              <LeadWizard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
