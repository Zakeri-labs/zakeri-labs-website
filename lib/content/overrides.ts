import data from "@/content/pages.json";
import type { Lang } from "@/lib/locales";

/**
 * Page edits made in the admin panel (admin.omanai.tech → سایت → صفحه‌ها, Hossein 16 Nov 2026 for Sajjad).
 * The panel commits content/pages.json; the site is static, so an edit goes live with the next deploy.
 *
 * Shape: { "<page id>": { en: { "<dot.path>": "text" }, ar: {...}, noindex, canonical, ogImage } }.
 * A path names one string of that page's copy ("hero.title", "faq.2.a"); "seo.title" and "seo.description"
 * on a hub page override lib/seo.tsx. Unknown paths are ignored, so a renamed key never breaks the build.
 */
export type PageOverride = {
  en?: Record<string, string>;
  ar?: Record<string, string>;
  noindex?: boolean;
  canonical?: string;
  ogImage?: string;
};

const ALL = data as Record<string, PageOverride>;

/** Every page's copy as written in the code, before overrides: what the panel shows as «پیش‌فرض». */
export const DEFAULT_COPY: Record<string, Record<Lang, unknown>> = {};

const isBag = (v: unknown): v is Record<string, unknown> =>
  !!v &&
  typeof v === "object" &&
  (Array.isArray(v) || Object.getPrototypeOf(v) === Object.prototype);

/** Copies plain objects and arrays; anything else (images, functions) is shared as is. */
const clone = <T>(v: T): T =>
  Array.isArray(v)
    ? (v.map(clone) as T)
    : isBag(v)
      ? (Object.fromEntries(Object.entries(v).map(([k, x]) => [k, clone(x)])) as T)
      : v;

function set(root: unknown, path: string, value: string) {
  const keys = path.split(".");
  let at = root;
  for (const k of keys.slice(0, -1)) {
    if (!isBag(at) || !Object.hasOwn(at, k)) return;
    at = (at as Record<string, unknown>)[k];
  }
  const last = keys[keys.length - 1];
  // only an existing string is replaced: the page's structure stays the code's
  if (isBag(at) && typeof (at as Record<string, unknown>)[last] === "string")
    (at as Record<string, unknown>)[last] = value;
}

export function withOverrides<T extends Record<Lang, unknown>>(id: string, copy: T): T {
  DEFAULT_COPY[id] = copy;
  const o = ALL[id];
  if (!o?.en && !o?.ar) return copy;
  const out = clone(copy);
  for (const lang of ["en", "ar"] as const)
    for (const [path, value] of Object.entries(o[lang] ?? {}))
      if (!path.startsWith("seo.") || isBag((out[lang] as Record<string, unknown>)?.seo))
        set(out[lang], path, value);
  return out;
}

/** noindex, canonical, share image and (hub pages) SEO title and description of one page. */
export const pageMeta = (id: string) => {
  const o = ALL[id] ?? {};
  const text = (lang: Lang, key: string) => o[lang]?.[key]?.trim() || undefined;
  return {
    noindex: o.noindex || undefined,
    canonical: o.canonical?.trim() || undefined,
    ogImage: o.ogImage?.trim() || undefined,
    title: (lang: Lang) => text(lang, "seo.title"),
    description: (lang: Lang) => text(lang, "seo.description"),
  };
};

/** Every string of a copy object as "dot.path" → text. */
export function flatten(v: unknown, prefix = "", out: Record<string, string> = {}) {
  if (typeof v === "string") out[prefix] = v;
  else if (isBag(v))
    for (const [k, x] of Object.entries(v)) flatten(x, prefix ? `${prefix}.${k}` : k, out);
  return out;
}
