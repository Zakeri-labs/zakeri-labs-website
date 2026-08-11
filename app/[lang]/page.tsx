import { notFound } from "next/navigation";

import { HomePage } from "@/components/site/home/HomePage";
import { isLocalizedLang } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  return createPageMetadata("home", lang);
}

export default function LocalizedHomePage() {
  return <HomePage />;
}
