import type { Metadata } from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | IDRAK AI Solutions",
  robots: { index: false },
};

/** With two root layouts (English and /ar), unmatched URLs render this standalone page. */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="hero-glow flex min-h-screen items-center justify-center px-4">
          <div className="max-w-md text-center">
            <p className="font-display text-8xl font-extrabold">
              <span className="gradient-text">404</span>
            </p>
            <h1 className="mt-4 text-2xl font-bold">Page not found · الصفحة غير موجودة</h1>
            <p className="mt-3 text-muted-foreground">
              The page you’re looking for doesn’t exist or has been moved.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                href="/"
                className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
              >
                Go home
              </Link>
              <Link
                href="/ar"
                className="rounded-full border border-input bg-surface px-6 py-3 font-semibold"
              >
                الرئيسية
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
