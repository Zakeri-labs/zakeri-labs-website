"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export { gsap, ScrollTrigger, SplitText, useGSAP };

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fades up every `[data-reveal]` element as it scrolls into view. One
 * controller for the whole site; it rescans on route changes and when new
 * nodes appear, so nothing marked for reveal can stay hidden.
 */
export function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const triggers: ScrollTrigger[] = [];

    const scan = () => {
      const fresh = gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-reveal-bound])");
      if (!fresh.length) return false;
      fresh.forEach((el) => el.setAttribute("data-reveal-bound", ""));
      if (reduced) {
        gsap.set(fresh, { opacity: 1, y: 0 });
        return true;
      }
      triggers.push(
        ...ScrollTrigger.batch(fresh, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
            }),
        }),
      );
      return true;
    };

    scan();
    let queued = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(queued);
      // Only re-measure when reveal targets were actually added (not on every
      // streamed chat token or marquee tick).
      queued = requestAnimationFrame(() => scan() && ScrollTrigger.refresh());
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(queued);
      triggers.forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}

/** Pulls an element a little toward the cursor — for primary buttons. */
export function useMagnetic<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  strength = 0.25,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || window.matchMedia("(pointer: coarse)").matches) return;
    const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - r.left - r.width / 2) * strength);
      y((e.clientY - r.top - r.height / 2) * strength);
    };
    const leave = () => {
      x(0);
      y(0);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [ref, strength]);
}
