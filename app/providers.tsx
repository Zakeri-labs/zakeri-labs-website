"use client";

import { type ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/lib/i18n";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <Toaster position="top-center" theme="dark" />
    </LanguageProvider>
  );
}
