import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { isLocalizedLang, LOCALIZED_LANGUAGES } from "@/lib/locales";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALIZED_LANGUAGES.map((lang) => ({ lang }));
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();

  return children;
}
