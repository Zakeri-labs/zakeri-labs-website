import assert from "node:assert/strict";

import { mixBusinesses } from "./portfolio-mix.ts";

const v = (n: string) => ({ title: { en: `${n} · Arabic Instagram reel` } });
const order = (names: string) =>
  mixBusinesses([...names].map(v))
    .map((x) => x.title.en[0])
    .join("");

assert.equal(order("AAAABCD"), "ABCADAA", "one business is spread out, the rest keep their order");
assert.equal(order("ABC"), "ABC", "already mixed: unchanged");
assert.equal(order(""), "");
const one = mixBusinesses([v("Carpet, Muscat"), { title: { en: "Carpet · reel" } }, v("B")]).map(
  (x) => x.title.en[0],
);
assert.deepEqual(one, ["C", "B", "C"], "the same business written two ways");
console.log("portfolio mix ok");
