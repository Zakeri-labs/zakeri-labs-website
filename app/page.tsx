import type { Metadata } from "next";

import { HomePage } from "@/components/site/home/HomePage";

export const metadata: Metadata = {
  title: {
    absolute: "Zakeri Labs | AI Website Growth Infrastructure Agency",
  },
  description:
    "Premium AI-ready websites, SEO structure, GEO/AEO visibility, lead capture, and conversion-focused web systems for modern businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zakeri Labs | AI Website Growth Infrastructure Agency",
    description: "We design and build premium websites that work as business growth systems.",
    url: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
