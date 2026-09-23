"use client";

import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { COMMON } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ---------- Layout ---------- */

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}

type Tone = "plain" | "tint" | "ink";
const TONES: Record<Tone, string> = {
  plain: "",
  tint: "bg-gradient-to-b from-secondary/70 to-background",
  ink: "bg-ink text-white",
};

export function Section({
  id,
  tone = "plain",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 lg:py-28", TONES[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Type ---------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary rtl:tracking-normal",
        className,
      )}
    >
      <span className="h-px w-6 bg-brand" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  className,
  invert,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  className?: string;
  invert?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={cn(invert && "text-cyan")}>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("space-y-4 text-base leading-relaxed text-muted-foreground", className)}>
      {children}
    </div>
  );
}

/* ---------- Actions ---------- */

type CtaVariant = "primary" | "outline" | "light" | "ghost";
const CTA_STYLES: Record<CtaVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[var(--shadow-lift)] hover:-translate-y-0.5 hover:bg-primary/90",
  outline:
    "border border-input bg-surface text-foreground hover:border-primary/50 hover:text-primary",
  light: "bg-white text-ink hover:-translate-y-0.5 hover:bg-white/90",
  ghost: "border border-white/25 text-white hover:border-white/60 hover:bg-white/10",
};

export function Cta({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  icon?: "arrow" | "whatsapp" | "none";
  className?: string;
}) {
  const external = href.startsWith("http");
  const cls = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-[15px] font-semibold leading-tight transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    CTA_STYLES[variant],
    className,
  );
  const content = (
    <>
      {icon === "whatsapp" && <MessageCircle className="h-4 w-4 shrink-0" />}
      <span>{children}</span>
      {icon === "arrow" && <ArrowRight className="h-4 w-4 shrink-0" />}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <LocalizedLink href={href} className={cls}>
      {content}
    </LocalizedLink>
  );
}

export function TextLink({
  href,
  children,
  invert,
}: {
  href: string;
  children: ReactNode;
  invert?: boolean;
}) {
  return (
    <LocalizedLink
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold transition",
        invert ? "text-cyan hover:text-white" : "text-primary hover:text-foreground",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
    </LocalizedLink>
  );
}

/** "Let's Discuss Your Business" + WhatsApp — the site's standard pair. */
export function CtaPair({
  primaryHref = "/contact",
  invert,
}: {
  primaryHref?: string;
  invert?: boolean;
}) {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Cta href={primaryHref} variant={invert ? "light" : "primary"}>
        {c.cta.discuss}
      </Cta>
      <Cta href={whatsappUrl(lang)} variant={invert ? "ghost" : "outline"} icon="whatsapp">
        {c.cta.whatsapp}
      </Cta>
    </div>
  );
}

/* ---------- Content pieces ---------- */

export function Advantage({
  text,
  invert,
  className,
}: {
  text: string;
  invert?: boolean;
  className?: string;
}) {
  const c = useCopy(COMMON);
  return (
    <div
      className={cn(
        "relative flex items-start gap-4 overflow-hidden rounded-2xl border p-5",
        invert
          ? "border-white/15 bg-white/5"
          : "border-primary/15 bg-gradient-to-br from-secondary to-surface",
        className,
      )}
    >
      <Image
        src="/brand/idrak-mark.svg"
        alt=""
        width={36}
        height={38}
        className="h-9 w-auto shrink-0"
      />
      <div>
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.14em] rtl:tracking-normal",
            invert ? "text-cyan" : "text-primary",
          )}
        >
          {c.advantage}
        </p>
        <p
          className={cn("mt-1 font-medium leading-snug", invert ? "text-white" : "text-foreground")}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export function CheckList({
  items,
  invert,
  className,
}: {
  items: string[];
  invert?: boolean;
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
              invert ? "bg-cyan/20 text-cyan" : "bg-primary/10 text-primary",
            )}
          >
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className={cn("leading-snug", invert ? "text-white/85" : "text-foreground/85")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Chips({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** A horizontal process diagram: step → step → step. Wraps on narrow screens. */
export function Flow({
  steps,
  className,
  invert,
}: {
  steps: { label: string; icon?: React.ComponentType<{ className?: string }> }[];
  className?: string;
  invert?: boolean;
}) {
  return (
    <ol className={cn("flex flex-wrap items-center gap-x-2 gap-y-3", className)}>
      {steps.map((step, i) => (
        <li key={step.label} className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold",
              invert
                ? "border-white/15 bg-white/5 text-white"
                : "border-border bg-surface text-foreground shadow-[var(--shadow-soft)]",
            )}
          >
            {step.icon && (
              <step.icon className={cn("h-4 w-4", invert ? "text-cyan" : "text-primary")} />
            )}
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight
              className={cn("h-4 w-4 shrink-0", invert ? "text-white/40" : "text-primary/50")}
              aria-hidden
            />
          )}
        </li>
      ))}
    </ol>
  );
}

/** Numbered process steps (01 → 04). */
export function Steps({
  items,
  className,
}: {
  items: { title: string; text: string; tag?: string }[];
  className?: string;
}) {
  return (
    <ol className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.06}>
          <li className="card-surface relative h-full p-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-extrabold text-primary/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step.tag && (
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary rtl:tracking-normal">
                  {step.tag}
                </span>
              )}
            </div>
            <h3 className="mt-4 text-lg font-bold leading-snug">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="card-surface divide-y divide-border px-5 sm:px-8"
    >
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`faq-${i}`} className="border-0">
          <AccordionTrigger className="py-5 text-start text-base font-semibold hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pe-8 text-[15px] leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function Visual({
  src,
  alt,
  priority,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-white bg-surface shadow-[var(--shadow-lift)] ring-1 ring-border",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        placeholder="blur"
        sizes={sizes}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/** Image beside content; flips sides with `reverse` (and naturally in RTL). */
export function Split({
  visual,
  children,
  reverse,
  className,
}: {
  visual: ReactNode;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", className)}>
      <Reveal className={cn(reverse && "lg:order-2")}>{visual}</Reveal>
      <div>{children}</div>
    </div>
  );
}

/** Closing call-to-action band used at the bottom of most pages. */
export function FinalCta({
  id = "contact",
  eyebrow,
  title,
  text,
  primaryHref,
  aside,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  text: string;
  primaryHref?: string;
  aside?: ReactNode;
}) {
  return (
    <section id={id} className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full bg-violet/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 end-1/3 h-72 w-72 rounded-full bg-cyan/25 blur-3xl" />
            <div
              className={cn("relative grid gap-12", aside && "lg:grid-cols-[1fr_1.05fr] lg:gap-16")}
            >
              <div className="max-w-2xl">
                <Eyebrow className="text-cyan">{eyebrow}</Eyebrow>
                <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>
                <div className="mt-8">
                  <CtaPair primaryHref={primaryHref} invert />
                </div>
              </div>
              {aside}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** Page-level hero for inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  support,
  actions,
  visual,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  support?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <section className="hero-glow relative overflow-hidden">
      <Container
        className={cn(
          "grid items-center gap-12 pb-16 pt-12 lg:pb-24 lg:pt-20",
          visual && "lg:grid-cols-[1.05fr_1fr]",
        )}
      >
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">{intro}</p>
          {support && (
            <div className="mt-4 text-base leading-relaxed text-muted-foreground">{support}</div>
          )}
          {actions && <div className="mt-8">{actions}</div>}
        </div>
        {visual && (
          <div className="delay-150 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
            {visual}
          </div>
        )}
      </Container>
    </section>
  );
}

/** Small banner pointing from services / work pages to the Products page. */
export function ProductsBanner({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  const c = useCopy(COMMON);
  return (
    <Section className="py-12 lg:py-16">
      <Reveal>
        <div className="grid items-center gap-8 rounded-[2rem] border border-primary/15 bg-gradient-to-br from-secondary via-surface to-surface p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{text}</p>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: c.products.construction, href: "/products#construction-reporting" },
              { name: c.products.clinic, href: "/products#clinic-crm" },
            ].map((p) => (
              <LocalizedLink
                key={p.href}
                href={p.href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold transition hover:border-primary/40"
              >
                <span className="flex items-center gap-3">
                  <span className="rounded-md bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white rtl:tracking-normal">
                    {c.productTag}
                  </span>
                  {p.name}
                </span>
                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5" />
              </LocalizedLink>
            ))}
            <Cta href="/products" variant="outline" className="mt-1 self-start">
              {c.cta.products}
            </Cta>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
