import { PricingContent } from "@/components/site/pages/PricingContent";
import { createPageMetadata, getPricingJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata("pricing", "en");

const pricingJsonLd = getPricingJsonLd("en");

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <PricingContent />
    </>
  );
}
