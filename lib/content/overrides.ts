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
  /** Lists whose length the panel changed: "faq" → 7. Rows are removed from the end or added as blank copies of the last row. */
  rows?: Record<string, number>;
};

const ALL = data as unknown as Record<string, PageOverride>;

/** Replacements for the key visuals in lib/images.ts, by image key (reserved entry "_images"). */
export const IMAGE_OVERRIDES = ((data as Record<string, unknown>)._images ?? {}) as Record<
  string,
  { src: string; width: number; height: number }
>;

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
  // only an existing string is replaced: the page's structure stays the code's (plus rows the panel added)
  if (isBag(at) && typeof (at as Record<string, unknown>)[last] === "string")
    (at as Record<string, unknown>)[last] = value;
}

/** A copy of a list item with every string emptied: the shape of a row the panel adds. */
const blank = <T>(v: T): T =>
  typeof v === "string"
    ? ("" as T)
    : Array.isArray(v)
      ? (v.map(blank) as T)
      : isBag(v)
        ? (Object.fromEntries(Object.entries(v).map(([k, x]) => [k, blank(x)])) as T)
        : v;

/** Makes the array at `path` exactly `n` long; anything that is not a non-empty array is left alone. */
function resize(root: unknown, path: string, n: number) {
  let at = root;
  for (const k of path.split(".")) {
    if (!isBag(at) || !Object.hasOwn(at, k)) return;
    at = (at as Record<string, unknown>)[k];
  }
  if (!Array.isArray(at) || !at.length || n < 1 || n > 40) return;
  const last = at[at.length - 1];
  while (at.length < n) at.push(blank(clone(last)));
  at.length = n;
}

export function withOverrides<T extends Record<Lang, unknown>>(id: string, copy: T): T {
  DEFAULT_COPY[id] = copy;
  const o = ALL[id];
  if (!o?.en && !o?.ar && !o?.rows) return copy;
  const out = clone(copy);
  for (const lang of ["en", "ar"] as const)
    for (const [path, n] of Object.entries(o.rows ?? {})) resize(out[lang], path, n);
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
