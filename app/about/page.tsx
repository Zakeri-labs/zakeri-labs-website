import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Sparkles, Target, Search, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";

export const metadata: Metadata = {
  title: "About",
  description:
    "We build websites as growth infrastructure. Strategy, design, technology, AI, and search structure.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Zakeri Labs",
    url: "/about",
  },
};

const BELIEFS = [
  { icon: Compass, title: "Strategy Before Design", desc: "Start with the business goal." },
  {
    icon: Sparkles,
    title: "Clarity Before Complexity",
    desc: "Make the offer easy to understand.",
  },
  { icon: Target, title: "Conversion Before Decoration", desc: "Design should support action." },
  { icon: Search, title: "Search Before Publishing", desc: "Visibility must be planned early." },
  {
    icon: TrendingUp,
    title: "Improvement After Launch",
    desc: "Growth continues after the site goes live.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>About Us</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
          We Build Websites as Growth Infrastructure
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          We combine strategy, design, technology, AI, search structure, and conversion thinking.
        </p>
      </div>

      <Card className="glass-card mt-12 border-0 p-8 lg:p-10">
        <p className="text-base leading-relaxed text-foreground/90">
          We are not a traditional website provider. We build structured digital systems that help
          businesses explain value, earn trust, improve visibility, and generate inquiries.
        </p>
      </Card>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold lg:text-3xl">Core Beliefs</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BELIEFS.map((b, i) => (
            <Card key={i} className="glass-card border-0 p-6">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
                <b.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-5 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{b.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            Work With Us <ArrowRight className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
