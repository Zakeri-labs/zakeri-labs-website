"use client";

import { Container, Eyebrow, Reveal } from "@/components/site/blocks";
import { HOME } from "@/lib/content/home";
import { useCopy } from "@/lib/i18n";

type Logo = {
  name: string;
  src: string;
  w: number;
  h: number;
  /** hand-tuned visual weight: the formula below only knows the shape, not how bold the mark is */
  scale?: number;
  /** marks with no readable name get it written under them */
  caption?: boolean;
  /** extra class for very light marks */
  tone?: string;
};

/** Real clients only (signed or delivered), Hossein 26 Nov 2026. Files: public/clients. */
const CLIENTS: Logo[] = [
  { name: "Rovellux Properties", src: "/clients/rovellux.webp", w: 455, h: 128, scale: 1.1 },
  { name: "Darna", src: "/clients/darna.webp", w: 335, h: 112, scale: 0.8 },
  { name: "Orvello", src: "/clients/orvello.webp", w: 193, h: 120, scale: 0.8, caption: true },
  { name: "Sunrise Global", src: "/clients/sunrise-global.svg", w: 230, h: 56 },
  { name: "Ofogh", src: "/clients/ofogh.webp", w: 509, h: 128 },
  { name: "Safir Al-Salam", src: "/clients/safir.webp", w: 192, h: 192, scale: 0.8, caption: true },
  {
    name: "Iranian Carpet Trading",
    src: "/clients/iranian-carpet-trading.webp",
    w: 486,
    h: 128,
    scale: 1.2,
  },
  { name: "Aria Carpet", src: "/clients/aria-carpet.webp", w: 162, h: 192 },
  { name: "Secromed", src: "/clients/secromed.webp", w: 251, h: 192 },
  { name: "Hills Eli Mart", src: "/clients/elimart.webp", w: 199, h: 192 },
  {
    name: "Rahil Mostafaee",
    src: "/clients/rahil-mostafaee.webp",
    w: 129,
    h: 192,
    tone: "[@media(hover:hover)]:brightness-75 [@media(hover:hover)]:contrast-150 [@media(hover:hover)]:group-hover:brightness-100 [@media(hover:hover)]:group-hover:contrast-100",
  },
];

/** Same visual weight for wide and square marks: a square logo is drawn taller than a wordmark. */
const drawHeight = (l: Logo) =>
  Math.round(Math.min(64, 52 / Math.pow(l.w / l.h, 0.45)) * (l.scale ?? 1));

export function Clients({ id }: { id?: string }) {
  const c = useCopy(HOME).clients;
  return (
    <section id={id} className="relative scroll-mt-20 py-14 lg:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-5xl">
            {c.title}
          </h2>
          <p className="mt-4 text-balance text-muted-foreground sm:text-lg">{c.text}</p>
        </Reveal>
        <ul aria-label={c.eyebrow} className="mt-10 flex flex-wrap justify-center gap-3">
          {CLIENTS.map((l) => (
            <li
              key={l.name}
              className="group flex h-20 w-[calc(50%-6px)] flex-col items-center justify-center gap-1 rounded-xl bg-white px-4 sm:h-24 sm:w-[calc(33.333%-8px)] lg:w-[calc(16.666%-10px)]"
            >
              {/* grey until hover on devices that can hover; always in colour on phones */}
              {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized webp, below the fold */}
              <img
                src={l.src}
                alt={l.name}
                title={l.name}
                width={l.w}
                height={l.h}
                loading="lazy"
                decoding="async"
                style={{ height: drawHeight(l) }}
                className={`w-auto max-w-full object-contain transition duration-300 [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-hover:grayscale-0 ${l.tone ?? ""}`}
              />
              {l.caption && (
                <span
                  aria-hidden
                  className="text-[11px] font-medium leading-none text-neutral-500"
                  dir="ltr"
                >
                  {l.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
