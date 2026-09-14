import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";

import "./globals.css";

import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Header } from "@/components/site/Header";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { getDirection, isLang } from "@/lib/locales";
import { getOrganizationJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Business systems and automation consulting for growing businesses in Oman that need clearer workflows, better management visibility, and less manual follow-up.",
  authors: [{ name: SITE.name }],
  openGraph: {
    siteName: SITE.name,
    type: "website",
    title: SITE.name,
    description:
      "Turn manual, scattered operations into visible workflows, management visibility, and practical automation for growing businesses in Oman.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "Clearer workflows, better management visibility, and practical automation for growing businesses in Oman.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1224",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const requestHeaders = await headers();
  const requestedLang = requestHeaders.get("x-zakeri-locale") ?? "en";
  const lang = isLang(requestedLang) ? requestedLang : "en";
  const dir = getDirection(lang);
  const organizationJsonLd = getOrganizationJsonLd(lang);

  return (
    <html lang={lang} dir={dir} className="dark" suppressHydrationWarning>
      <body>
        <Providers initialLang={lang}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pb-20 lg:pb-0">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <MobileBottomNav />
          </div>
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
