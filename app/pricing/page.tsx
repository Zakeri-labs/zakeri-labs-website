import type { Metadata } from "next";
import { PricingContent } from "@/components/site/pages/PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Website growth packages built around scope. Starter, Growth, and Advanced + AI options.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing — Zakeri Labs",
    url: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
