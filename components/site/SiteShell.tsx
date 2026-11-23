import type { ReactNode } from "react";
import Script from "next/script";
import { IBM_Plex_Sans_Arabic, Inter, Plus_Jakarta_Sans } from "next/font/google";

import "@/app/globals.css";

import { Footer } from "@/components/site/Footer";
import { getPublishedArticles } from "@/lib/articles";
import { AiAgent } from "@/components/site/AiAgent";
import { CircuitCanvas } from "@/components/site/CircuitCanvas";
import { Header } from "@/components/site/Header";
import { navMenus } from "@/lib/content/detail";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { PageViewBeacon } from "@/components/site/PageViewBeacon";
import { RevealController } from "@/components/site/motion";
import { getDirection, type Lang } from "@/lib/locales";
import { getOrganizationJsonLd, getWebSiteJsonLd, jsonLdScript } from "@/lib/seo";
import { Providers } from "@/app/providers";

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
  // English pages never use it; /ar still gets it through the CSS, just without the preload hint
  preload: false,
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
/** Google Tag Manager container (GTM-XXXXXXX). Unset: nothing is loaded. */
const GTM_ID = /^GTM-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GTM_ID ?? "")
  ? process.env.NEXT_PUBLIC_GTM_ID
  : undefined;

/**
 * The site's <html> for one language. Each root layout passes its own `lang`, so no request
 * headers are read and every page can be prerendered and served from the CDN cache.
 */
export async function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  // Only names and links reach the client, not the full page copy.
  const menus = { en: navMenus("en"), ar: navMenus("ar") };
  const hasArticles = (await getPublishedArticles()).length > 0;

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
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <CircuitCanvas />
        <Providers initialLang={lang}>
          <RevealController />
          <div className="flex min-h-screen flex-col">
            <Header menus={menus} hasArticles={hasArticles} />
            <main className="flex-1 pb-16 lg:pb-0">{children}</main>
            <Footer hasArticles={hasArticles} menus={menus} />
            <AiAgent />
            <MobileBottomNav />
            <PageViewBeacon />
          </div>
        </Providers>
        {jsonLdScript(getOrganizationJsonLd(lang))}
        {jsonLdScript(getWebSiteJsonLd(lang))}
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
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
