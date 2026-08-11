import { AboutContent } from "@/components/site/pages/AboutContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("about", "en");

export default function AboutPage() {
  return <AboutContent />;
}
