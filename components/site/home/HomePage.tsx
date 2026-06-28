"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
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
import { SITE } from "@/lib/site";

const fade = {
  initial: false,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Services />
      <CaseStudies />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

/* ---------- 1. HERO ---------- */
function Hero() {
  return (
    <section className="relative -mt-[68px] flex min-h-[100svh] items-center overflow-hidden">
      {/* Cinematic full-bleed background image */}
      <Image
        src="/hero-image.png"
        alt="Zakeri Labs – AI Website Growth Infrastructure"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Left gradient — keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/10" />
      {/* Top fade — blends behind the header */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/70 to-transparent" />
      {/* Bottom fade — blends into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 lg:px-8 lg:pb-32 lg:pt-44">
        <motion.div {...fade} className="max-w-xl lg:max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
            <Sparkles className="h-3 w-3" /> AI Website Growth Infrastructure
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Websites Built to Drive <span className="gradient-text">Traffic, Trust, Leads</span> &
            Search Visibility.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground">
            We design premium websites as growth systems — combining strategy, SEO, AI-ready
            content, conversion flow, and lead capture.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="shadow-[var(--shadow-elegant)]">
              <Link href="/contact">
                Book a Growth Audit <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#solution">
                <PlayCircle className="me-2 h-4 w-4" /> See the System
              </a>
            </Button>
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> For businesses that need more than
            a beautiful website.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 2. TRUST BAR ---------- */
function TrustBar() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const items = [
    { icon: Compass, label: "Website Strategy" },
    { icon: Target, label: "Conversion Strategy & Planning" },
    { icon: Search, label: "SEO-Ready Structure" },
    { icon: Bot, label: "AI Search / GEO / AEO Visibility" },
    { icon: Sparkles, label: "AI-Ready Content" },
    { icon: Inbox, label: "Lead Generation & Capture" },
    { icon: AppWindow, label: "Web Applications" },
    { icon: BarChart3, label: "Analytics Path" },
  ];
  return (
    <section className="border-y border-border bg-background/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} className="text-center">
          <SectionBadge>Built for Visibility, Trust, and Conversion</SectionBadge>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold sm:text-3xl">
            Built for Growth, Not Decoration
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Every page, section, and CTA is planned to help your website attract, explain, and
            convert.
          </p>
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
                className="glass-card flex h-24 w-40 shrink-0 flex-col items-center justify-center gap-2 p-4 text-center sm:w-44 lg:w-40"
              >
                <it.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-[11px] leading-tight text-muted-foreground">{it.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted-foreground/80">
          Every section, page, and CTA is planned around business growth — not decoration.
        </p>
      </div>
    </section>
  );
}

/* ---------- 3. PROBLEM + SOLUTION ---------- */
function ProblemSolution() {
  const problems = [
    {
      icon: TrendingUp,
      title: "No Qualified Traffic",
      desc: "The right people are not finding you.",
    },
    {
      icon: UserX,
      title: "No Trust Architecture",
      desc: "Visitors do not see enough proof to believe.",
    },
    {
      icon: RouteIcon,
      title: "No Conversion Path",
      desc: "Interest disappears without a clear next step.",
    },
    {
      icon: CircleAlert,
      title: "No AI/Search Visibility",
      desc: "Your business is not structured for modern discovery.",
    },
  ];
  const solutions = [
    {
      icon: Workflow,
      title: "Conversion-Focused Structure",
      desc: "Planned around visitor intent, decision flow and clear CTAs.",
    },
    {
      icon: Layers,
      title: "SEO-Ready Architecture",
      desc: "Structured for long-term search performance.",
    },
    {
      icon: Sparkles,
      title: "AI-Ready Content",
      desc: "Organized to be understood and surfaced by AI and search engines.",
    },
    {
      icon: ShieldCheck,
      title: "Trust-Building Sections",
      desc: "Proof, positioning, case studies, FAQs and authority signals.",
    },
    {
      icon: Inbox,
      title: "Lead Capture System",
      desc: "Forms, WhatsApp, offers and clear inquiry paths.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Improvement Path",
      desc: "Measurement, review and optimization for continuous growth.",
    },
  ];

  return (
    <section id="solution" className="py-20 lg:py-28">
      <div className="relative mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] lg:gap-6 lg:px-8">
        {/* Problem card */}
        <motion.div {...fade}>
          <Card className="glass-card relative flex h-full flex-col justify-between overflow-hidden border-0 p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-ember/80 to-transparent" />
            <div>
              <SectionBadge tone="ember">Growth Gaps</SectionBadge>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-[2rem]">
                Most Websites Look Fine,
                <br /> But Don&apos;t Create Growth.
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
                Find the Gaps in My Website <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="relative flex items-center justify-center lg:self-stretch"
        >
          <div className="relative flex min-h-16 w-full flex-col items-center justify-end lg:min-h-0 lg:w-28 lg:justify-center">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-ember/60 via-primary/60 to-primary/20 lg:hidden" />
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full border border-ember/70 bg-background lg:hidden" />
            <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-primary/70 bg-background lg:hidden" />
            {/* Arrow — extends 16px beyond each side of box so endpoints are visible */}
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
              className="relative z-10 hidden w-24 flex-col items-center gap-1 rounded-md border border-white/15 bg-background/20 py-2 shadow-[var(--shadow-elegant)] backdrop-blur-[2px] lg:flex"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ember">
                Diagnose
              </span>
              <ArrowDown className="h-3 w-3 text-muted-foreground" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Structure
              </span>
              <ArrowDown className="h-3 w-3 text-muted-foreground" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                Convert
              </span>
            </div>
            <div
              data-testid="growth-bridge-mobile"
              className="relative z-10 flex flex-col items-center gap-1 rounded-md border border-primary/20 bg-background/95 px-4 py-2 shadow-[var(--shadow-elegant)] backdrop-blur lg:hidden"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ember sm:tracking-[0.16em]">
                Diagnose
              </span>
              <ArrowDown className="h-3 w-3 text-muted-foreground" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:tracking-[0.16em]">
                Structure
              </span>
              <ArrowDown className="h-3 w-3 text-muted-foreground" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-primary sm:tracking-[0.16em]">
                Convert
              </span>
            </div>
            <div className="relative z-10 h-12 w-8 lg:hidden" aria-hidden="true">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-ember/80 bg-background shadow-[0_0_12px_rgba(255,105,75,0.45)]" />
              <span className="absolute bottom-3 top-2 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-ember via-primary/80 to-primary shadow-[0_0_14px_rgba(65,145,255,0.55)]" />
              <span className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[11px] border-x-transparent border-t-primary drop-shadow-[0_0_8px_rgba(65,145,255,0.75)]" />
            </div>
          </div>
        </motion.div>

        {/* Solution card */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="glass-card relative flex h-full flex-col justify-between overflow-hidden border-0 p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/80 to-transparent" />
            <div>
              <SectionBadge>Core Solution</SectionBadge>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-[2rem]">
                Website as Growth Infrastructure
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
                  Let&apos;s Build Your Growth Engine <ArrowRight className="ms-2 h-4 w-4" />
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
  const services = [
    {
      icon: Globe2,
      image: "/GEO-AEO-Ranking.png",
      title: "GEO & AEO Ranking",
      desc: "Improve how your business appears in Google, AI search, answer engines, and modern discovery platforms.",
      cta: "Improve Visibility",
    },
    {
      icon: Bot,
      image: "/AI-Solution.png",
      title: "AI Solution",
      desc: "Add practical AI workflows, automation systems, content processes, and customer-facing tools.",
      cta: "Explore AI Systems",
    },
    {
      icon: AppWindow,
      image: "/Website-Web Application.png",
      title: "Website & Web Application",
      desc: "Build premium websites, landing pages, portals, and lightweight web applications tailored to your offer.",
      cta: "Build the Platform",
    },
    {
      icon: Sparkles,
      image: "/AI-Visibility.png",
      title: "AI Visibility",
      desc: "Make your business easier for AI systems to understand, categorize, recommend, and explain.",
      cta: "Get AI-Ready",
    },
  ];
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fade} className="text-center">
          <SectionBadge>Growth Engines</SectionBadge>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold sm:text-4xl">
            The Engines Behind Every High-Performing Website
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Strategy, technology, and visibility working together to help your business attract the
            right audience, build trust faster, and turn visitors into leads.
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
              Explore All Services <ArrowRight className="ms-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. CASE STUDIES ---------- */
const cases = [
  {
    industry: "Real Estate",
    image: "/case-realestate.png",
    title: "Property Website Built for Trust and Lead Capture",
    desc: "Designed to present listings, developer credibility, project details, and inquiry paths in a more professional and conversion-focused way.",
  },
  {
    industry: "Clinic / Healthcare",
    image: "/case-clinic.png",
    title: "Clinic Website Built for Trust and Appointment Booking",
    desc: "Designed to present services, doctor credibility, patient trust signals, and clear booking paths.",
  },
  {
    industry: "B2B Consulting",
    image: "/case-consulting.png",
    title: "B2B Website Built for Credibility and Inquiries",
    desc: "Created to help a consulting business present services, company trust, and professional inquiry channels.",
  },
  {
    industry: "Personal Brand",
    image: "/case-personal.png",
    title: "Personal Brand Hub Built for Lead Generation",
    desc: "Organized scattered content, offers, and contact paths into one clear website funnel for audience conversions.",
  },
];

function CaseStudies() {
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
            <SectionBadge>Proof of Execution</SectionBadge>
            <h2 className="mt-3 font-display text-3xl font-bold lg:text-4xl">
              Websites We&apos;ve Designed and Deployed
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              Real projects, clear execution, and practical growth systems for businesses that need
              stronger websites, better positioning, and smarter search visibility.
            </p>
          </motion.div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline">
              <Link href="/insights">View All Case Studies</Link>
            </Button>
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

        {/* Scrollable card track — full width below header */}
        <div>
          <div
            ref={scrollRef}
            className="mt-8 flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cases.map((c, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="w-[82vw] shrink-0 sm:w-[300px]"
              >
                <Card className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border/40 bg-background p-0">
                  {/* Image — exact 4:3 ratio matches source images (1448×1086) */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-contain object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex shrink-0 flex-col px-4 pb-4 pt-2">
                    <span className="mb-1 w-fit rounded border border-primary/70 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      {c.industry}
                    </span>
                    <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                    <div className="mt-8 flex justify-center">
                      <Link
                        href="/insights"
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-background/40 px-2.5 py-1.5 text-[11px] font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
                      >
                        View Case Study <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    {
      quote:
        "The website finally explains what we do clearly and gives visitors a reason to contact us.",
      name: "Client Name Placeholder",
      role: "Founder / Managing Director",
      company: "Company Placeholder",
    },
    {
      quote:
        "The structure helped us move from a basic online presence to a more serious lead-generation system.",
      name: "Client Name Placeholder",
      role: "Marketing Lead",
      company: "Company Placeholder",
    },
    {
      quote:
        "The process was strategic, clear, and focused on business outcomes instead of just design.",
      name: "Client Name Placeholder",
      role: "Business Owner",
      company: "Company Placeholder",
    },
  ];
  return (
    <section className="pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map((t, i) => (
          <motion.div key={i} {...fade} transition={{ duration: 0.45, delay: i * 0.06 }}>
            <Card className="glass-card h-full border-0 p-6">
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
  return (
    <section id="contact" className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="glass-card grid gap-10 overflow-hidden border-0 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <SectionBadge>Start the Growth Audit</SectionBadge>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight lg:text-4xl">
              Ready to Turn Your Website Into a Growth Engine?
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              If your current website is not bringing qualified traffic, building trust, generating
              leads, or supporting search and AI visibility, it may be time to rebuild it as a
              business system.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book a Growth Audit <ArrowRight className="ms-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="me-2 h-4 w-4" /> Contact on WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              Best for businesses that need a premium website, stronger positioning, better search
              visibility, and a clear path to more qualified inquiries.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background/40 p-6">
            <h3 className="text-base font-semibold">Tell Us About Your Website</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Share your current website, business goal, and the growth problem you want to solve.
              We&apos;ll review the opportunity and suggest the best next step.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

// Force-import to keep tree-shake from killing referenced icons
void FileText;
