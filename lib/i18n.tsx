"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getDirection, getLangFromPathname, localizePathname, type Lang } from "@/lib/locales";

export type { Lang } from "@/lib/locales";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
};

const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname ? getLangFromPathname(pathname) : initialLang;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = getDirection(lang);
  }, [lang]);

  const setLang = useCallback(
    (l: Lang) => {
      const suffix = `${window.location.search}${window.location.hash}`;
      router.push(`${localizePathname(pathname || "/", l)}${suffix}`);
    },
    [pathname, router],
  );

  const value = useMemo<Ctx>(() => ({ lang, setLang, dir: getDirection(lang) }), [lang, setLang]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

/** Picks the current language's copy from a `{ en, ar }` content module. */
export function useCopy<T>(copy: Record<Lang, T>): T {
  return copy[useI18n().lang];
}
