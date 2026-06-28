import type { Metadata } from "next";
import { InsightsContent } from "@/components/site/pages/InsightsContent";

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

export default function InsightsPage() {
  return <InsightsContent />;
}
