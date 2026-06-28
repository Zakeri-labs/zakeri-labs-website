import type { Metadata } from "next";
import { AboutContent } from "@/components/site/pages/AboutContent";

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

export default function AboutPage() {
  return <AboutContent />;
}
