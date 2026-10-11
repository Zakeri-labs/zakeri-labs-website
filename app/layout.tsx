import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import Script from "next/script";
import { IBM_Plex_Sans_Arabic, Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/site/Footer";
import { getPublishedArticles } from "@/lib/articles";
import { AiAgent } from "@/components/site/AiAgent";
import { CircuitCanvas } from "@/components/site/CircuitCanvas";
import { Header } from "@/components/site/Header";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { PageViewBeacon } from "@/components/site/PageViewBeacon";
import { RevealController } from "@/components/site/motion";
import { getDirection, isLang } from "@/lib/locales";
import { getOrganizationJsonLd, getWebSiteJsonLd, jsonLdScript } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { Providers } from "./providers";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  authors: [{ name: SITE.name }],
  applicationName: SITE.name,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b1a",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const requestHeaders = await headers();
  const requestedLang = requestHeaders.get("x-zakeri-locale") ?? "en";
  const lang = isLang(requestedLang) ? requestedLang : "en";

  // The content panel brings its own UI; skip the site chrome around it.
  if (requestHeaders.get("x-zakeri-path")?.startsWith("/keystatic")) {
    return (
      <html lang="en" style={{ background: "Canvas", colorScheme: "light dark" }}>
        <body style={{ background: "Canvas", color: "CanvasText" }}>{children}</body>
      </html>
    );
  }

  return (
    <html
      lang={lang}
      dir={getDirection(lang)}
      className={`${jakarta.variable} ${inter.variable} ${arabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Flags JS before first paint so [data-reveal] content only hides when it can be revealed. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>
        <CircuitCanvas />
        <Providers initialLang={lang}>
          <RevealController />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pb-16 lg:pb-0">{children}</main>
            <Footer hasArticles={(await getPublishedArticles()).length > 0} />
            <AiAgent />
            <MobileBottomNav />
            <PageViewBeacon />
          </div>
        </Providers>
        {jsonLdScript(getOrganizationJsonLd(lang))}
        {jsonLdScript(getWebSiteJsonLd(lang))}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
