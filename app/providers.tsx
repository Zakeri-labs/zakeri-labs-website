"use client";

import { useEffect, type ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider, type Lang } from "@/lib/i18n";
import { contactEventFor, track } from "@/lib/track";

export function Providers({ children, initialLang }: { children: ReactNode; initialLang: Lang }) {
  // One delegated listener tracks every WhatsApp / email / phone link on the site.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const event = link && contactEventFor(link.getAttribute("href") ?? "");
      if (event) track(event, { page_path: window.location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <LanguageProvider initialLang={initialLang}>
      {children}
      <Toaster position="top-center" theme="dark" />
    </LanguageProvider>
  );
}
