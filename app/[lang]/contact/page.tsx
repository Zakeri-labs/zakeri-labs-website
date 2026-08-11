import { notFound } from "next/navigation";

import { ContactContent } from "@/components/site/pages/ContactContent";
import { isLocalizedLang } from "@/lib/locales";
import { createPageMetadata, getFaqJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  return createPageMetadata("contact", lang);
}

export default async function LocalizedContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  const faqJsonLd = getFaqJsonLd(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
