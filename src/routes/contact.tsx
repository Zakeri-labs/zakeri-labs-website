import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/site/SectionBadge";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";

const FAQ = [
  {
    q: "Do you only design websites?",
    a: "No. We build websites with strategy, SEO, AI visibility, conversion flow, and lead capture.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. We can audit and rebuild the parts that affect trust, visibility, and conversion.",
  },
  {
    q: "Do you support multilingual websites?",
    a: "Yes. We support English, Arabic, and Persian with proper LTR and RTL layouts.",
  },
  {
    q: "Can you help with SEO and AI visibility?",
    a: "Yes. We structure content for search engines, answer engines, and AI-assisted discovery.",
  },
  {
    q: "Is this suitable for small businesses?",
    a: "Yes, if the business needs better positioning, trust, and lead generation.",
  },
  {
    q: "How do we start?",
    a: "Start with a growth audit. We review your current website and define the best structure.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zakeri Labs" },
      {
        name: "description",
        content:
          "Share your current website, goal, and main growth challenge. Book a growth audit with Zakeri Labs.",
      },
      { property: "og:title", content: "Contact — Zakeri Labs" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>Contact</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">
          Let's Discuss Your Website Growth System
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Share your current website, goal, and main growth challenge.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card className="glass-card border-0 p-6 lg:p-8">
          <h2 className="text-lg font-semibold">Tell Us About Your Website</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            We'll review the opportunity and suggest the best next step.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="glass-card border-0 p-6">
            <h3 className="text-sm font-semibold">Direct Channels</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                <span className="text-foreground/90">{SITE.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                <span className="text-foreground/90">{SITE.email}</span>
              </li>
            </ul>
            <Button asChild className="mt-5 w-full" variant="outline">
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="me-2 h-4 w-4" /> Contact on WhatsApp
              </a>
            </Button>
          </Card>
          <Card className="glass-card border-0 p-6">
            <h3 className="text-sm font-semibold">Response Time</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              We typically respond within one business day with a short growth
              opportunity review.
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <SectionBadge>FAQ</SectionBadge>
        <h2 className="mt-3 font-display text-3xl font-bold lg:text-4xl">
          Common Questions
        </h2>
        <Card className="glass-card mt-6 border-0 p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
