"use client";

import { Globe } from "lucide-react";

import { COMMON } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";

/** Two languages, so a single toggle instead of a menu. */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const c = useCopy(COMMON);
  const other = lang === "en" ? "ar" : "en";
  return (
    <button
      type="button"
      onClick={() => setLang(other)}
      lang={other}
      aria-label={`${c.language}: ${c.switchTo}`}
      className={`inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface px-3 text-sm font-medium text-foreground/80 transition hover:border-primary/40 hover:text-primary ${className}`}
    >
      <Globe className="h-4 w-4" />
      {c.switchTo}
    </button>
  );
}
