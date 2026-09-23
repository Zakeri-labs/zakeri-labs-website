"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  Building2,
  Check,
  Coins,
  Eye,
  Gauge,
  Loader2,
  MessageCircle,
  Search,
  Store,
  TrendingUp,
  Zap,
} from "lucide-react";

import { gsap, prefersReducedMotion } from "./motion";
import {
  CHALLENGES,
  COMMON,
  INTERESTS,
  SIZES,
  type Challenge,
  type Interest,
  type Size,
} from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

const SIZE_ICONS = { small: Store, medium: Building, large: Building2 } as const;
const CHALLENGE_ICONS = {
  costs: Coins,
  revenue: TrendingUp,
  productivity: Gauge,
  followup: Zap,
  value: Eye,
  visibility: Search,
} as const;

type Status = "idle" | "sending" | "sent" | "error";
const TOTAL = 4;

const tile =
  "group relative flex items-center gap-3 rounded-2xl border px-4 py-4 text-start transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const tileOn = "border-primary/70 bg-primary/15 shadow-[var(--shadow-lift)]";
const tileOff = "border-border bg-white/[0.03] hover:border-primary/40 hover:bg-white/[0.06]";
const field =
  "h-12 w-full rounded-xl border border-input bg-white/[0.04] px-4 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

/**
 * The site's contact flow: four short questions (size → challenge → focus →
 * contact), then an email to the team and a one-tap WhatsApp handoff.
 * `?interest=ai-video` (etc.) preselects the focus step.
 */
export function LeadWizard({ className }: { className?: string }) {
  const f = useCopy(COMMON).form;
  const { lang } = useI18n();
  const [step, setStep] = useState(0);
  const [size, setSize] = useState<Size | null>(null);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [interest, setInterest] = useState<Interest | null>(null);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const panel = useRef<HTMLDivElement>(null);
  const dirRef = useRef(1);
  const started = useRef(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("interest");
    if (q && (INTERESTS as readonly string[]).includes(q)) setInterest(q as Interest);
  }, []);

  // Slide each step in from the direction of travel.
  useEffect(() => {
    if (!panel.current || prefersReducedMotion()) return;
    const rtl = document.documentElement.dir === "rtl" ? -1 : 1;
    gsap.fromTo(
      panel.current.children,
      { opacity: 0, x: 40 * dirRef.current * rtl },
      { opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.04 },
    );
  }, [step, status]);

  const start = () => {
    if (started.current) return;
    started.current = true;
    track("contact_form_started", { page_path: window.location.pathname });
  };
  const go = (to: number) => {
    start();
    dirRef.current = to > step ? 1 : -1;
    setStep(to);
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          size,
          challenges,
          interest: interest ?? "not-sure",
          note,
          lang,
          page: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("contact_form_submitted", {
        interest_type: (interest ?? "not-sure").replace(/-/g, "_"),
        business_size: size ?? "",
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const summary = [
    size && f.size.options[size][0],
    challenges.map((c) => f.challenge.options[c]).join(", "),
    interest && f.interests[interest],
    note,
  ]
    .filter(Boolean)
    .join(" · ");
  const waHref = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
    `${lang === "ar" ? "مرحباً إدراك" : "Hi IDRAK"} — ${summary}`,
  )}`;

  if (status === "sent") {
    return (
      <div className={cn("relative", className)}>
        <div ref={panel} className="flex flex-col items-start gap-5 py-6">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-[var(--shadow-lift)]">
            <Check className="h-7 w-7" strokeWidth={3} />
          </span>
          <h3 className="text-3xl font-bold">{f.successTitle}</h3>
          <p className="max-w-md leading-relaxed text-muted-foreground">{f.successText}</p>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25d366] px-6 font-semibold text-white transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" /> {f.successWhatsapp}
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setStep(0);
              setSize(null);
              setChallenges([]);
              setNote("");
            }}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            {f.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  // Plain elements (not inner components) so they aren't remounted every render.
  const back = (
    <button
      type="button"
      onClick={() => go(step - 1)}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" /> {f.back}
    </button>
  );
  const next = (disabled?: boolean) => (
    <button
      type="button"
      disabled={disabled}
      onClick={() => go(step + 1)}
      className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-40 disabled:shadow-none"
    >
      {f.next} <ArrowRight className="h-4 w-4" />
    </button>
  );

  return (
    <div className={cn("relative", className)} onPointerDown={start}>
      {/* Progress */}
      <div className="mb-8">
        <div className="flex gap-1.5" aria-hidden>
          {Array.from({ length: TOTAL }, (_, i) => (
            <span key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-brand transition-all duration-500"
                style={{ width: i < step ? "100%" : i === step ? "50%" : "0%" }}
              />
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground rtl:tracking-normal">
          {f.stepOf.replace("{n}", String(step + 1)).replace("{total}", String(TOTAL))}
        </p>
      </div>

      <div ref={panel} key={step}>
        {step === 0 && (
          <>
            <h3 className="text-2xl font-bold sm:text-3xl">{f.size.q}</h3>
            <p className="mt-2 text-muted-foreground">{f.size.hint}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {SIZES.map((key) => {
                const Icon = SIZE_ICONS[key];
                const [label, hint] = f.size.options[key];
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={size === key}
                    onClick={() => {
                      setSize(key);
                      go(1);
                    }}
                    className={cn(tile, "flex-col items-start", size === key ? tileOn : tileOff)}
                  >
                    <Icon className="h-6 w-6 text-cyan" />
                    <span className="text-lg font-bold">{label}</span>
                    <span className="text-sm text-muted-foreground">{hint}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <h3 className="text-2xl font-bold sm:text-3xl">{f.challenge.q}</h3>
            <p className="mt-2 text-muted-foreground">{f.challenge.hint}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {CHALLENGES.map((key) => {
                const Icon = CHALLENGE_ICONS[key];
                const on = challenges.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={on}
                    onClick={() =>
                      setChallenges((list) => (on ? list.filter((c) => c !== key) : [...list, key]))
                    }
                    className={cn(tile, on ? tileOn : tileOff)}
                  >
                    <span
                      className={cn(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-xl transition",
                        on ? "bg-brand text-white" : "bg-white/5 text-cyan",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-semibold">{f.challenge.options[key]}</span>
                    {on && <Check className="ms-auto h-5 w-5 text-cyan" />}
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex items-center justify-between">
              {back}
              {next(!challenges.length)}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="text-2xl font-bold sm:text-3xl">{f.focus.q}</h3>
            <p className="mt-2 text-muted-foreground">{f.focus.hint}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {INTERESTS.map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={interest === key}
                  onClick={() => setInterest(interest === key ? null : key)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    interest === key
                      ? "border-primary bg-primary/20 text-foreground"
                      : "border-border bg-white/[0.03] text-foreground/75 hover:border-primary/40",
                  )}
                >
                  {f.interests[key]}
                </button>
              ))}
            </div>
            <label className="mt-6 block">
              <span className="text-sm font-semibold">
                {f.focus.note}{" "}
                <span className="font-normal text-muted-foreground">({f.optional})</span>
              </span>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={2000}
                rows={3}
                placeholder={f.focus.notePlaceholder}
                className={cn(field, "mt-2 h-auto py-3")}
              />
            </label>
            <div className="mt-8 flex items-center justify-between">
              {back}
              {next()}
            </div>
          </>
        )}

        {step === 3 && (
          <form onSubmit={submit}>
            <h3 className="text-2xl font-bold sm:text-3xl">{f.contact.q}</h3>
            <p className="mt-2 text-muted-foreground">{f.contact.hint}</p>
            {/* Honeypot: hidden from people, filled by bots. */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">
                  {f.contact.name} <span className="text-cyan">*</span>
                </span>
                <input
                  name="name"
                  required
                  maxLength={120}
                  autoComplete="name"
                  className={cn(field, "mt-2")}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">
                  {f.contact.phone} <span className="text-cyan">*</span>
                </span>
                <input
                  name="phone"
                  type="tel"
                  required
                  minLength={6}
                  maxLength={40}
                  dir="ltr"
                  autoComplete="tel"
                  placeholder="+968"
                  className={cn(field, "mt-2")}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">
                  {f.contact.company}{" "}
                  <span className="font-normal text-muted-foreground">({f.optional})</span>
                </span>
                <input
                  name="company"
                  maxLength={160}
                  autoComplete="organization"
                  className={cn(field, "mt-2")}
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">
                  {f.contact.email}{" "}
                  <span className="font-normal text-muted-foreground">({f.optional})</span>
                </span>
                <input
                  name="email"
                  type="email"
                  maxLength={200}
                  dir="ltr"
                  autoComplete="email"
                  className={cn(field, "mt-2")}
                />
              </label>
            </div>

            {status === "error" && (
              <div
                role="alert"
                className="mt-5 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm"
              >
                <p className="font-semibold text-destructive">{f.errorTitle}</p>
                <p className="mt-1 text-muted-foreground">
                  {f.errorText}{" "}
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-cyan hover:underline"
                  >
                    WhatsApp
                  </a>{" "}
                  ·{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-cyan hover:underline"
                  >
                    {SITE.email}
                  </a>
                </p>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              {back}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-7 font-semibold text-white shadow-[var(--shadow-lift)] transition hover:-translate-y-0.5 disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> {f.sending}
                  </>
                ) : (
                  <>
                    {f.submit} <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
