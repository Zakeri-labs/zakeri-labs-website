import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionBadge } from "@/components/site/SectionBadge";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Zakeri Labs" },
      {
        name: "description",
        content:
          "Website growth packages built around scope. Starter, Growth, and Advanced + AI options.",
      },
      { property: "og:title", content: "Pricing — Zakeri Labs" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const PACKAGES = [
  {
    name: "Starter Website Demo",
    best: "Fast validation and premium first impression.",
    features: ["Landing page", "Basic structure", "Mobile layout", "Contact CTA"],
    cta: "Request Starter Scope",
  },
  {
    name: "Growth Website",
    best: "Positioning, SEO, trust, and conversion.",
    features: [
      "Homepage + core pages",
      "Service structure",
      "Proof sections",
      "Lead capture system",
    ],
    cta: "Plan My Website",
    featured: true,
  },
  {
    name: "Advanced Website + AI",
    best: "Web apps, AI workflows, advanced integrations.",
    features: [
      "Custom structure",
      "AI planning",
      "GEO/AEO content",
      "Analytics path",
    ],
    cta: "Discuss Advanced Scope",
  },
];

function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <SectionBadge>Pricing</SectionBadge>
        <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-bold lg:text-5xl">
          Website Growth Packages Built Around Scope
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Start simple or build a full growth infrastructure system.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <Card
            key={i}
            className={`glass-card relative flex h-full flex-col border-0 p-8 ${
              p.featured ? "ring-1 ring-primary/40 shadow-[var(--shadow-elegant)]" : ""
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 start-6 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground/80">Best for:</span>{" "}
              {p.best}
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full" variant={p.featured ? "default" : "outline"}>
              <Link to="/contact">
                {p.cta} <ArrowRight className="ms-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-muted-foreground">
        Final pricing depends on scope, content, integrations, languages, and timeline.
      </p>
    </section>
  );
}
