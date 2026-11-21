/** Industry tabs of /portfolio. Labels live in lib/content/portfolio.ts (editable from the panel). */
export const INDUSTRIES = [
  "food",
  "beauty",
  "fashion",
  "retail",
  "automotive",
  "real-estate",
  "health",
  "fitness",
  "hospitality",
  "education",
  "services",
  "tech",
] as const;
export type Industry = (typeof INDUSTRIES)[number];

export const isIndustry = (v: unknown): v is Industry =>
  typeof v === "string" && (INDUSTRIES as readonly string[]).includes(v);

/** Sample code as typed by people: "#c81", " C81 " -> "C81"; null when it is not a code. */
export function normalizeCode(v: string | null | undefined): string | null {
  const c = v?.trim().replace(/^#/, "").toUpperCase() ?? "";
  return /^[A-Z][0-9]{1,4}$/.test(c) ? c : null;
}
