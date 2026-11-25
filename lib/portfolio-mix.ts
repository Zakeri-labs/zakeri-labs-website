/**
 * Samples of one business are not shown side by side (Hossein, 25 Nov 2026: "mixed is better"): keeping the given
 * order, the next card is the first one whose business is not among the last two placed.
 */
export function mixBusinesses<T extends { title: { en: string } }>(list: T[]): T[] {
  // "Iranian Carpet Trading, Muscat" and "Iranian Carpet Trading" are one business
  const key = (v: T) => v.title.en.split(" · ")[0].split(",")[0].trim().toLowerCase();
  const left = [...list];
  const out: T[] = [];
  while (left.length) {
    const recent = out.slice(-2).map(key);
    let i = left.findIndex((v) => !recent.includes(key(v)));
    if (i < 0) i = left.findIndex((v) => key(v) !== recent[recent.length - 1]);
    out.push(...left.splice(Math.max(i, 0), 1));
  }
  return out;
}
