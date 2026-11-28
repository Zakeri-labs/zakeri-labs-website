"use client";

import { useState } from "react";
import {
  Bot,
  Check,
  Clapperboard,
  Clock,
  Globe,
  MapPin,
  Megaphone,
  MessageCircle,
  Navigation,
  Phone,
  Share2,
  Star,
  Target,
  Users,
} from "lucide-react";

import { Cta, Reveal, Section, SectionHeading, TextLink } from "@/components/site/blocks";
import { PORTFOLIO } from "@/lib/content/portfolio";
import { useCopy, useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

const wa = (text: string) => `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`;
const PACKAGE_KEYS = ["starter", "growth", "professional", "advanced"];
const MENU_ICONS = [Clapperboard, Share2, Megaphone, MapPin, Globe, Bot, Users, Target];

/** Office map that loads Google Maps only on click: loading="lazy" alone still pulled ~450 KB of Maps JS. */
export function OfficeMap({ showLabel, title }: { showLabel: string; title: string }) {
  const { lang } = useI18n();
  const [show, setShow] = useState(false);
  return (
    <div className="card-surface overflow-hidden bg-secondary p-0">
      {show ? (
        <iframe
          title={title}
          src={`https://maps.google.com/maps?q=${SITE.office.lat},${SITE.office.lng}&z=16&hl=${lang}&output=embed`}
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-72 w-full border-0 sm:h-96"
        />
      ) : (
        <button
          type="button"
          onClick={() => setShow(true)}
          className="flex h-32 w-full flex-col items-center justify-center gap-2 text-sm font-semibold text-primary transition hover:bg-secondary/70"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-background/60">
            <MapPin className="h-6 w-6" />
          </span>
          {showLabel}
          <span className="text-xs font-normal text-muted-foreground">
            {SITE.office.area[lang]}
          </span>
        </button>
      )}
    </div>
  );
}

/** The four content packages, as in Zakeri's sales images; Professional is the recommended one. */
export function Packages() {
  const t = useCopy(PORTFOLIO).packages;
  return (
    <Section id="packages" tone="tint" className="pt-12 lg:pt-16">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {t.items.map((p, i) => {
          const top = i === 2;
          return (
            <li
              key={p.name}
              data-reveal
              className={cn(
                "card-surface relative flex h-full flex-col p-5 sm:p-6",
                top && "border-primary/70 ring-1 ring-primary/50",
              )}
            >
              {top && (
                <span className="absolute -top-3 start-5 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  <Star className="h-3 w-3 fill-current" /> {t.recommended}
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.tagline}</p>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-1.5">
                {p.was && (
                  <s
                    className="me-1 text-base text-foreground/60"
                    dir="ltr"
                    aria-label={`${t.was} ${p.was}`}
                  >
                    {p.was}
                  </s>
                )}
                <span className="text-4xl font-extrabold" dir="ltr">
                  {p.price}
                </span>
                <span className="text-sm font-semibold">{t.currency}</span>
                <span className="text-sm text-muted-foreground">/ {t.perMonth}</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={wa(t.whatsappText.replace("{name}", p.name).replace("{price}", p.price))}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  // the site-wide wa.me listener already sends whatsapp_contact_clicked; this one only names the package
                  track("package_whatsapp_clicked", {
                    package: PACKAGE_KEYS[i],
                    value: p.price,
                    currency: "OMR",
                  })
                }
                className={cn(
                  "mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  top
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-white/[0.04] hover:border-primary/60",
                )}
              >
                <MessageCircle className="h-4 w-4" /> {t.order}
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/** Short services list: the eight groups of Zakeri's «Our Services Menu». */
export function ServicesMenu() {
  const t = useCopy(PORTFOLIO).menu;
  return (
    <Section>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item, i) => {
          const Icon = MENU_ICONS[i % MENU_ICONS.length];
          return (
            <li key={item.title} data-reveal className="card-surface flex h-full gap-3 p-4 sm:p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-bold">{item.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <Reveal className="mt-8">
        <TextLink href="/services">{t.more}</TextLink>
      </Reveal>
    </Section>
  );
}

/** Office, hours and the WhatsApp CTA, so a lead from a seller's link can act on the spot. */
export function OfficeCta() {
  const t = useCopy(PORTFOLIO).office;
  const { lang } = useI18n();
  return (
    <Section tone="tint" className="py-10 lg:py-14">
      <Reveal className="card-surface grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} />
          <ul className="mt-6 space-y-4 text-sm sm:text-base">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <address className="not-italic leading-relaxed">{SITE.office.address[lang]}</address>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <span className="text-muted-foreground">{t.hours}: </span>
                {SITE.office.hours[lang]}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a
                href={`tel:+${SITE.phoneRaw}`}
                dir="ltr"
                className="font-semibold hover:text-primary"
              >
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <Cta href={wa(t.whatsappText)} icon="whatsapp">
            {t.whatsapp}
          </Cta>
          <a
            href={SITE.office.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-[15px] font-semibold transition hover:border-primary/60"
          >
            <Navigation className="h-4 w-4" /> {t.directions}
          </a>
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <OfficeMap showLabel={t.showMap} title={t.mapTitle} />
      </Reveal>
    </Section>
  );
}
