import type { Metadata } from "next";
import { CaseStudiesContent } from "@/components/site/pages/InsightsContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "A selection of websites designed and deployed by Zakeri Labs.",
  alternates: {
    canonical: "/case-study",
  },
  openGraph: {
    title: "Case Studies — Zakeri Labs",
    url: "/case-study",
  },
};

export default function CaseStudyPage() {
  return <CaseStudiesContent />;
}
