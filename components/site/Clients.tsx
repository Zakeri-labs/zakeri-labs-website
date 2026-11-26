"use client";

import { Container, Eyebrow, Reveal } from "@/components/site/blocks";
import { HOME } from "@/lib/content/home";
import { useCopy } from "@/lib/i18n";

/** Real clients only (signed or delivered), Hossein 26 Nov 2026. Files: public/clients, ~128px tall. */
const CLIENTS = [
  { name: "Rovellux Properties", src: "/clients/rovellux.webp", w: 455, h: 128 },
  { name: "Darna", src: "/clients/darna.webp", w: 335, h: 112 },
  { name: "Orvello", src: "/clients/orvello.webp", w: 193, h: 120 },
  { name: "Sunrise Global", src: "/clients/sunrise-global.svg", w: 230, h: 56 },
  { name: "Ofogh", src: "/clients/ofogh.webp", w: 509, h: 128 },
  { name: "Safir Al-Salam Travel & Tourism", src: "/clients/safir.webp", w: 128, h: 128 },
  { name: "Iranian Carpet Trading", src: "/clients/iranian-carpet-trading.webp", w: 486, h: 128 },
  { name: "Aria Carpet", src: "/clients/aria-carpet.webp", w: 108, h: 128 },
  { name: "Secromed", src: "/clients/secromed.webp", w: 167, h: 128 },
  { name: "Hills Eli Mart", src: "/clients/elimart.webp", w: 132, h: 128 },
  { name: "Rahil Mostafaee", src: "/clients/rahil-mostafaee.webp", w: 86, h: 128 },
];

/** Same visual weight for wide and square marks: a square logo is drawn taller than a wordmark. */
const drawHeight = (w: number, h: number) => Math.min(76, Math.round(64 / Math.pow(w / h, 0.45)));

export function Clients({ id }: { id?: string }) {
  const c = useCopy(HOME).clients;
  return (
    <section id={id} className="relative py-20 lg:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">{c.title}</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">{c.text}</p>
        </Reveal>
        <ul className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {CLIENTS.map((l) => (
            <li
              key={l.name}
              className="group grid h-28 w-[calc(50%-6px)] place-items-center rounded-2xl bg-white px-5 sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
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
                style={{ height: drawHeight(l.w, l.h) }}
                className="w-auto max-w-full object-contain transition duration-300 [@media(hover:hover)]:opacity-70 [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
