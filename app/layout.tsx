import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { SITE } from "@/lib/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Zakeri Labs | AI Website Growth Infrastructure Agency",
    template: "%s | Zakeri Labs",
  },
  description:
    "Premium AI-ready websites, SEO structure, GEO/AEO visibility, lead capture, and conversion-focused web systems for modern businesses.",
  authors: [{ name: SITE.name }],
  openGraph: {
    siteName: SITE.name,
    type: "website",
    title: "Zakeri Labs | AI Website Growth Infrastructure Agency",
    description: "We design and build premium websites that work as business growth systems.",
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1224",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  description:
    "Premium AI-ready websites, SEO structure, GEO/AEO visibility, lead capture, and conversion-focused web systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pb-20 lg:pb-0">{children}</main>
            <Footer />
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
