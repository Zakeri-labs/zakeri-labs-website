"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { COMMON, INTERESTS, TIMELINES, type Interest } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { SITE, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/track";

type Status = "idle" | "sending" | "sent" | "error";

const field = "h-11 rounded-xl bg-background";

/**
 * The one contact form used across the site. `extended` adds the optional
 * country and timeline questions (contact and how-we-work pages).
 * `?interest=ai-video` (etc.) in the URL preselects the interest.
 */
export function ContactForm({
  extended = false,
  submitLabel,
}: {
  extended?: boolean;
  submitLabel?: string;
}) {
  const c = useCopy(COMMON);
  const f = c.form;
  const { lang } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const [interest, setInterest] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const started = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  // The success card is shorter than the form, so bring it into view.
  useEffect(() => {
    if (status === "sent")
      successRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [status]);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("interest");
    if (fromUrl && (INTERESTS as readonly string[]).includes(fromUrl)) setInterest(fromUrl);
  }, []);

  function onStart() {
    if (started.current) return;
    started.current = true;
    track("contact_form_started", { page_path: window.location.pathname });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!interest) {
      form.querySelector<HTMLButtonElement>("#cf-interest")?.focus();
      return;
    }
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, interest, timeline, lang, page: window.location.pathname }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("contact_form_submitted", { interest_type: interest.replace(/-/g, "_") });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={successRef}
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl bg-secondary/60 p-8"
      >
        <CheckCircle2 className="h-10 w-10 text-primary" />
        <h3 className="text-2xl font-bold">{f.successTitle}</h3>
        <p className="leading-relaxed text-muted-foreground">{f.successText}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-primary hover:underline"
        >
          {f.sendAnother}
        </button>
      </div>
    );
  }

  const required = <span className="text-primary"> *</span>;
  const optional = <span className="font-normal text-muted-foreground"> ({f.optional})</span>;

  return (
    <form onSubmit={onSubmit} onFocus={onStart} className="space-y-5" aria-describedby="cf-note">
      <p id="cf-note" className="text-xs text-muted-foreground">
        {f.requiredNote}
      </p>
      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cf-name">
            {f.name}
            {required}
          </Label>
          <Input
            id="cf-name"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            className={field}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-company">
            {f.company}
            {required}
          </Label>
          <Input
            id="cf-company"
            name="company"
            autoComplete="organization"
            required
            maxLength={160}
            className={field}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-email">
            {f.email}
            {required}
          </Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            dir="ltr"
            className={field}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cf-phone">
            {f.phone}
            {optional}
          </Label>
          <Input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            dir="ltr"
            className={field}
          />
        </div>
        {extended && (
          <div className="space-y-2">
            <Label htmlFor="cf-country">
              {f.country}
              {optional}
            </Label>
            <Input
              id="cf-country"
              name="country"
              autoComplete="country-name"
              maxLength={80}
              className={field}
            />
          </div>
        )}
        <div className={extended ? "space-y-2" : "space-y-2 sm:col-span-2"}>
          <Label htmlFor="cf-interest">
            {f.interest}
            {required}
          </Label>
          {/* Radix's hidden native <select> can emit "" while its options are still
              registering (e.g. right after the ?interest= prefill); never a user choice. */}
          <Select value={interest} onValueChange={(v) => v && setInterest(v)} required>
            <SelectTrigger id="cf-interest" className={field} aria-required="true">
              <SelectValue placeholder={f.interestPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {INTERESTS.map((key: Interest) => (
                <SelectItem key={key} value={key}>
                  {f.interests[key]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="cf-message">
            {f.message}
            {required}
          </Label>
          <Textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            placeholder={f.messagePlaceholder}
            className="rounded-xl bg-background"
          />
        </div>
        {extended && (
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="cf-timeline">
              {f.timeline}
              {optional}
            </Label>
            <Select value={timeline} onValueChange={(v) => v && setTimeline(v)}>
              <SelectTrigger id="cf-timeline" className={field}>
                <SelectValue placeholder={f.timelinePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {TIMELINES.map((key) => (
                  <SelectItem key={key} value={key}>
                    {f.timelines[key]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm"
        >
          <p className="font-semibold text-destructive">{f.errorTitle}</p>
          <p className="mt-1 text-muted-foreground">
            {f.errorText}{" "}
            <a
              href={whatsappUrl(lang)}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              {c.cta.whatsappShort}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-primary hover:underline">
              {SITE.email}
            </a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition hover:bg-primary/90 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> {f.sending}
          </>
        ) : (
          <>
            {submitLabel ?? f.submit} <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
