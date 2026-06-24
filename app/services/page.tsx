import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  AppWindow,
  Search,
  Globe2,
  Sparkles,
  Bot,
  Inbox,
  PenTool,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website strategy, design, web applications, SEO, GEO/AEO, AI visibility, and lead capture systems.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services — Zakeri Labs",
    url: "/services",
  },
};

const SERVICES = [
  {
    icon: Compass,
    title: "Website Strategy",
    desc: "Plan the right structure, message, and conversion path.",
  },
  {
    icon: PenTool,
    title: "Website Design & Development",
    desc: "Build a premium, responsive, conversion-focused website.",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    desc: "Create portals, dashboards, booking systems, and custom tools.",
  },
  {
    icon: Search,
    title: "SEO Structure",
    desc: "Prepare your site for search visibility from the start.",
  },
  {
    icon: Globe2,
    title: "GEO / AEO Optimization",
    desc: "Structure content for AI search and answer engines.",
  },
  {
    icon: Sparkles,
    title: "AI Visibility",
    desc: "Help AI systems understand and recommend your business.",
  },
  {
    icon: Bot,
    title: "AI Workflow Solutions",
    desc: "Use AI to improve content, operations, and lead handling.",
  },
  {
    icon: Inbox,
    title: "Lead Capture Systems",
    desc: "Create clear paths from visitor interest to inquiry.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>Services</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
          Website, AI, and Search Systems for Modern Businesses
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Choose the capabilities your business needs to turn its website into a growth system.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Card key={i} className="glass-card border-0 p-6">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10">
              <s.icon className="h-5 w-5 text-primary" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button asChild size="lg">
          <Link href="/contact">
            Book a Growth Audit <ArrowRight className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
