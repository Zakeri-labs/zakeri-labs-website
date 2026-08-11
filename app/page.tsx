import { HomePage } from "@/components/site/home/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("home", "en");

export default function Page() {
  return <HomePage />;
}
