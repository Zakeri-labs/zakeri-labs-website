import { notFound } from "next/navigation";

import { AboutContent } from "@/components/site/pages/AboutContent";
import { isLocalizedLang } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  return createPageMetadata("about", lang);
}

export default function LocalizedAboutPage() {
  return <AboutContent />;
}
