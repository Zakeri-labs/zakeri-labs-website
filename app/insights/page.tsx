import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Short strategic insights on websites, AI search, and growth systems for business owners.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights — Zakeri Labs",
    url: "/insights",
  },
};

const ARTICLES = [
  {
    title: "Why a Website Needs a Growth System",
    excerpt: "Design alone does not create leads.",
    hue: 220,
  },
  {
    title: "What AI Search Means for Business Websites",
    excerpt: "Discovery is changing.",
    hue: 260,
  },
  {
    title: "How to Build Trust on a Landing Page",
    excerpt: "Trust comes from clarity and proof.",
    hue: 200,
  },
  { title: "SEO vs AEO vs GEO", excerpt: "Modern visibility needs more than keywords.", hue: 30 },
  {
    title: "Why Most Websites Don't Convert",
    excerpt: "Weak offers and unclear CTAs lose leads.",
    hue: 350,
  },
  {
    title: "Plan Before You Design",
    excerpt: "Strategy creates better websites than decoration.",
    hue: 280,
  },
];

export default function InsightsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>Insights</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
          Ideas on Websites, AI Search, and Growth Systems
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Short strategic insights for business owners who want better website performance.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((a, i) => (
          <Card
            key={i}
            className="glass-card group cursor-pointer overflow-hidden border-0 p-0 transition hover:shadow-[var(--shadow-elegant)]"
          >
            <div
              className="aspect-[16/9] w-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, hsl(${a.hue} 80% 60% / 0.45), transparent 60%), linear-gradient(135deg, hsl(${a.hue} 40% 18%), hsl(${a.hue + 20} 30% 12%))`,
              }}
            />
            <div className="p-5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Insight
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{a.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{a.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary transition group-hover:gap-2">
                Read <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
