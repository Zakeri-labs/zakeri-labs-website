"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";
import { HeroVisual } from "@/components/site/HeroVisual";
import { BrowserMockup } from "@/components/site/BrowserMockup";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";

const fade = {
  initial: { opacity: 0, y: 20 },
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
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        <motion.div {...fade}>
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

        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.1 }}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- 2. TRUST BAR ---------- */
function TrustBar() {
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

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {items.map((it, i) => (
            <motion.div
              key={i}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass-card flex flex-col items-center gap-2 p-4 text-center"
            >
              <it.icon className="h-5 w-5 text-primary" />
              <span className="text-[11px] leading-tight text-muted-foreground">{it.label}</span>
            </motion.div>
          ))}
        </div>

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
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Problem card */}
        <motion.div {...fade}>
          <Card className="glass-card relative h-full overflow-hidden border-0 p-8 lg:p-10">
            <SectionBadge tone="ember">Growth Gaps</SectionBadge>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight lg:text-4xl">
              Most Websites Look Fine —<br /> But Don&apos;t Create Growth.
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
            <Button
              asChild
              variant="outline"
              className="mt-8 border-ember/40 text-ember hover:bg-ember/10 hover:text-ember"
            >
              <Link href="/contact">
                Find the Gaps in My Website <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        </motion.div>

        {/* Solution card */}
        <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="glass-card relative h-full overflow-hidden border-0 p-8 lg:p-10">
            <SectionBadge>Core Solution</SectionBadge>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight lg:text-4xl">
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
            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-background/40 p-4">
              <p className="text-xs text-muted-foreground">
                Your website shouldn&apos;t just look good.
                <br /> It should grow your business.
              </p>
              <Button asChild size="sm">
                <Link href="/contact">Let&apos;s Build Your Growth Engine</Link>
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
      title: "GEO & AEO Ranking",
      desc: "Improve how your business appears in Google, AI search, answer engines, and modern discovery platforms.",
      cta: "Improve Visibility",
    },
    {
      icon: Bot,
      title: "AI Solution",
      desc: "Add practical AI workflows, automation systems, content processes, and customer-facing tools.",
      cta: "Explore AI Systems",
    },
    {
      icon: AppWindow,
      title: "Website & Web Application",
      desc: "Build premium websites, landing pages, portals, and lightweight web applications tailored to your offer.",
      cta: "Build the Platform",
    },
    {
      icon: Sparkles,
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
              <Card className="glass-card group h-full border-0 p-6 transition hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary transition group-hover:gap-2.5"
                >
                  {s.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
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
    title: "Property Website Built for Trust and Lead Capture",
    desc: "Designed to present listings, developer credibility, project details, and inquiry paths in a more professional and conversion-focused way.",
    hue: 210,
  },
  {
    industry: "Car Rental",
    title: "Rental Website Built for Fast Booking Intent",
    desc: "Structure prioritizes fleet options, pricing clarity, service areas, and direct contact paths for faster customer inquiries.",
    hue: 25,
  },
  {
    industry: "Steel / B2B Trading",
    title: "B2B Website Built for Credibility and Inquiries",
    desc: "Created to help a trading business present products, company trust, supplier confidence, and professional inquiry channels.",
    hue: 200,
  },
  {
    industry: "Education / Personal Brand",
    title: "Personal Brand Hub Built for Lead Generation",
    desc: "Organized scattered content, offers, and contact paths into one clear website funnel for audience conversions.",
    hue: 260,
  },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2.4fr] lg:items-end">
          <motion.div {...fade}>
            <SectionBadge>Proof of Execution</SectionBadge>
            <h2 className="mt-3 font-display text-3xl font-bold lg:text-4xl">
              Websites We&apos;ve Designed and Deployed
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Real projects, clear execution, and practical growth systems for businesses that need
              stronger websites, better positioning, and smarter search visibility.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link href="/insights">View All Case Studies</Link>
            </Button>
          </motion.div>

          <div className="-mx-4 overflow-x-auto px-4 lg:overflow-visible">
            <div className="grid min-w-[800px] grid-cols-4 gap-4 lg:min-w-0">
              {cases.map((c, i) => (
                <motion.div key={i} {...fade} transition={{ duration: 0.45, delay: i * 0.06 }}>
                  <Card className="glass-card flex h-full flex-col gap-4 border-0 p-3">
                    <div className="relative">
                      <BrowserMockup
                        hue={c.hue}
                        label={`${c.industry.toLowerCase().replace(/[\s/]/g, "-")}.preview`}
                      />
                      <span className="absolute left-3 top-9 rounded bg-primary/90 px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                        {c.industry}
                      </span>
                    </div>
                    <div className="px-1 pb-2">
                      <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                        {c.desc}
                      </p>
                      <Link
                        href="/insights"
                        className="mt-4 inline-flex items-center gap-1 rounded-md border border-border bg-background/40 px-2.5 py-1.5 text-[11px] font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
                      >
                        View Case Study <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
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
