import type { Metadata } from "next";
import { ContactContent } from "@/components/site/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Share your current website, goal, and main growth challenge. Book a growth audit with Zakeri Labs.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Zakeri Labs",
    url: "/contact",
  },
};

// English FAQ kept here for the canonical FAQ structured-data (SEO).
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
