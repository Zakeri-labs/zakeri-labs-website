export const LANGUAGES = ["en", "ar"] as const;
export const LOCALIZED_LANGUAGES = ["ar"] as const;

export type Lang = (typeof LANGUAGES)[number];
export type LocalizedLang = (typeof LOCALIZED_LANGUAGES)[number];

export const RTL_LANGUAGES: readonly Lang[] = ["ar"];

export function isLang(value: string): value is Lang {
  return LANGUAGES.includes(value as Lang);
}

export function isLocalizedLang(value: string): value is LocalizedLang {
  return LOCALIZED_LANGUAGES.includes(value as LocalizedLang);
}

export function getLangFromPathname(pathname: string): Lang {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment === "ar" ? "ar" : "en";
}

function splitPathSuffix(pathname: string): [string, string] {
  const queryIndex = pathname.indexOf("?");
  const hashIndex = pathname.indexOf("#");
  const suffixIndex = [queryIndex, hashIndex]
    .filter((index) => index >= 0)
    .reduce((smallest, index) => Math.min(smallest, index), pathname.length);

  return [pathname.slice(0, suffixIndex), pathname.slice(suffixIndex)];
}

export function stripLangFromPathname(pathname: string): string {
  const [path, suffix] = splitPathSuffix(pathname);
  const segments = path.split("/").filter(Boolean);

  if (segments[0] === "ar") {
    segments.shift();
  }

  const basePath = segments.length > 0 ? `/${segments.join("/")}` : "/";
  return `${basePath}${suffix}`;
}

export function localizePathname(pathname: string, lang: Lang): string {
  const englishPath = stripLangFromPathname(pathname);
  const [path, suffix] = splitPathSuffix(englishPath);

  if (lang === "en") return englishPath;
  if (path === "/") return `/${lang}${suffix}`;
  return `/${lang}${path}${suffix}`;
}

export function getDirection(lang: Lang): "ltr" | "rtl" {
  return RTL_LANGUAGES.includes(lang) ? "rtl" : "ltr";
}
