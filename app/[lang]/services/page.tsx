import { notFound } from "next/navigation";

import { ServicesContent } from "@/components/site/pages/ServicesContent";
import { isLocalizedLang } from "@/lib/locales";
import { createPageMetadata, getServicesJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  return createPageMetadata("services", lang);
}

export default async function LocalizedServicesPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  const servicesJsonLd = getServicesJsonLd(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
