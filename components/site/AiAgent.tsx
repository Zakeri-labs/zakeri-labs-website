"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUp, MessageCircle, X } from "lucide-react";

import { gsap, prefersReducedMotion } from "./motion";
import { COMMON } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { IMG } from "@/lib/images";
import { whatsappUrl } from "@/lib/site";
import { track } from "@/lib/track";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

export const OPEN_AGENT_EVENT = "idrak:open-agent";

/** Opens the assistant from anywhere, optionally sending a first question. */
export function openAgent(question?: string) {
  window.dispatchEvent(new CustomEvent(OPEN_AGENT_EVENT, { detail: question }));
}

/**
 * The floating dock (AI assistant + WhatsApp) and the chat panel. Replies
 * stream from /api/chat, which only knows what the website says.
 */
export function AiAgent() {
  const c = useCopy(COMMON);
  const a = c.agent;
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    const history: Msg[] = [...msgs, { role: "user", content: q }];
    setMsgs([...history, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    setFailed(false);
    track("ai_agent_message", { page_path: window.location.pathname });
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang, messages: history.slice(-12) }),
      });
      if (!res.ok || !res.body) throw new Error(String(res.status));
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMsgs([...history, { role: "assistant", content: answer }]);
      }
      if (!answer) throw new Error("empty");
    } catch {
      setMsgs(history);
      setFailed(true);
    } finally {
      setBusy(false);
    }
  }

  // External "open" requests (e.g. the homepage demo section).
  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      setTeaser(false);
      const q = (e as CustomEvent<string | undefined>).detail;
      if (q) setTimeout(() => send(q), 350);
    };
    window.addEventListener(OPEN_AGENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_AGENT_EVENT, onOpen);
  });

  // One gentle nudge per session.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("agent-teaser") === "1";
    } catch {
      // Storage blocked: show the nudge anyway.
    }
    if (seen) return;
    const t = setTimeout(() => setTeaser(true), 9000);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!teaser) return;
    try {
      sessionStorage.setItem("agent-teaser", "1");
    } catch {
      // Storage blocked: the nudge may reappear next page load; harmless.
    }
  }, [teaser]);

  useEffect(() => {
    if (!open) return;
    track("ai_agent_opened", { page_path: window.location.pathname });
    if (panel.current && !prefersReducedMotion()) {
      gsap.fromTo(
        panel.current,
        { opacity: 0, y: 24, scale: 0.96, transformOrigin: "bottom right" },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" },
      );
    }
    setTimeout(() => inputRef.current?.focus(), 100);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    list.current?.scrollTo({ top: list.current.scrollHeight });
  }, [msgs]);

  return (
    <>
      {/* ---------- Dock ---------- */}
      <div className="fixed bottom-20 end-4 z-40 flex flex-col items-end gap-3 lg:bottom-6 lg:end-6">
        {teaser && !open && (
          <button
            type="button"
            onClick={() => {
              setOpen(true);
              setTeaser(false);
            }}
            className="animate-in fade-in slide-in-from-bottom-2 max-w-64 rounded-2xl rounded-ee-sm border border-white/10 bg-card/95 px-4 py-3 text-start text-sm leading-snug shadow-[var(--shadow-lift)] backdrop-blur"
          >
            {a.teaser}
          </button>
        )}
        {!open && (
          <button
            type="button"
            onClick={() => {
              setOpen(true);
              setTeaser(false);
            }}
            aria-label={a.open}
            className="group relative flex items-center gap-2 rounded-full border border-white/15 bg-card/90 p-1.5 font-semibold sm:pe-5 shadow-[var(--shadow-lift)] backdrop-blur transition hover:-translate-y-0.5"
          >
            <span className="absolute -inset-1 -z-10 animate-pulse rounded-full bg-brand opacity-30 blur-md" />
            <span className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={IMG.agent}
                alt=""
                fill
                sizes="40px"
                className="scale-[1.6] object-cover"
              />
            </span>
            <span className="hidden text-sm sm:inline">{a.open}</span>
          </button>
        )}
        <a
          href={whatsappUrl(lang)}
          target="_blank"
          rel="noreferrer"
          aria-label={c.cta.whatsapp}
          className="hidden h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_32px_-8px_rgb(37_211_102/0.6)] transition hover:-translate-y-0.5 lg:grid"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>

      {/* ---------- Panel ---------- */}
      {open && (
        <div
          ref={panel}
          role="dialog"
          aria-label={a.title}
          className="fixed bottom-20 end-4 z-50 flex h-[min(640px,calc(100dvh-7rem))] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f26]/95 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl lg:bottom-6 lg:end-6"
        >
          <div className="relative flex items-center gap-3 border-b border-white/10 px-5 py-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_0%_0%,rgb(123_107_255/0.25),transparent)]" />
            <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-primary/40">
              <Image
                src={IMG.agent}
                alt=""
                fill
                sizes="44px"
                className="scale-[1.6] object-cover"
              />
            </span>
            <div className="relative">
              <p className="font-bold">{a.title}</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
                {a.status}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={a.close}
              className="relative ms-auto grid h-9 w-9 place-items-center rounded-full hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div ref={list} className="flex-1 space-y-3 overflow-y-auto px-5 py-5" aria-live="polite">
            <Bubble role="assistant">{a.greeting}</Bubble>
            {msgs.map((m, i) => (
              <Bubble key={i} role={m.role}>
                {m.content || <Typing />}
              </Bubble>
            ))}
            {failed && (
              <Bubble role="assistant">
                {a.error}{" "}
                <a
                  href={whatsappUrl(lang)}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-cyan underline"
                >
                  WhatsApp
                </a>
              </Bubble>
            )}
            {!msgs.length && (
              <div className="flex flex-col items-start gap-2 pt-2">
                {a.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-2 text-start text-sm transition hover:bg-primary/20"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-white/10 p-3"
          >
            <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 focus-within:border-primary/60">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                maxLength={1000}
                placeholder={a.placeholder}
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-3 py-2 text-[15px] placeholder:text-muted-foreground/70 focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label={a.send}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white transition disabled:opacity-40"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2 px-1 text-[11px] text-muted-foreground">
              <span>{a.disclaimer}</span>
              <a
                href={whatsappUrl(lang)}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cyan hover:underline"
              >
                {a.human}
              </a>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({ role, children }: { role: Msg["role"]; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-[14.5px] leading-relaxed",
        role === "user"
          ? "ms-auto rounded-ee-sm bg-primary text-primary-foreground"
          : "rounded-es-sm border border-white/10 bg-white/[0.05]",
      )}
    >
      {children}
    </div>
  );
}

function Typing() {
  return (
    <span className="inline-flex gap-1 py-1" aria-label="…">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </span>
  );
}
