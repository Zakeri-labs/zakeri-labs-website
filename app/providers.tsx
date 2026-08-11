"use client";

import { type ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider, type Lang } from "@/lib/i18n";

export function Providers({ children, initialLang }: { children: ReactNode; initialLang: Lang }) {
  return (
    <LanguageProvider initialLang={initialLang}>
      {children}
      <Toaster position="top-center" theme="dark" />
    </LanguageProvider>
  );
}
