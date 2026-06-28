import type { Metadata } from "next";
import { ServicesContent } from "@/components/site/pages/ServicesContent";

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

export default function ServicesPage() {
  return <ServicesContent />;
}
