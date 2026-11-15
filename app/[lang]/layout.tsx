import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site/SiteShell";
import { isLocalizedLang, LOCALIZED_LANGUAGES } from "@/lib/locales";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALIZED_LANGUAGES.map((lang) => ({ lang }));
}

/** Root layout for /ar: its own <html lang dir> so Arabic pages prerender with RTL. */
export default async function LocalizedLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  return <SiteShell lang={lang}>{children}</SiteShell>;
}
