import { notFound } from "next/navigation";

import { PricingContent } from "@/components/site/pages/PricingContent";
import { isLocalizedLang } from "@/lib/locales";
import { createPageMetadata, getPricingJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  return createPageMetadata("pricing", lang);
}

export default async function LocalizedPricingPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  const pricingJsonLd = getPricingJsonLd(lang);

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
