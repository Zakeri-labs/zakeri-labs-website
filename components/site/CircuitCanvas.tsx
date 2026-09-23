"use client";

import { useEffect, useRef } from "react";

import { prefersReducedMotion } from "./motion";

type Pt = { x: number; y: number };
type Pulse = { path: Pt[]; len: number; t: number; speed: number; color: string };

const COLORS = ["45,226,211", "47,141,255", "154,92,255"];
const GRID = 44;

/** A random orthogonal trace on the grid: runs, then turns 90°. */
function trace(w: number, h: number): Pt[] {
  let x = Math.round((Math.random() * w) / GRID) * GRID;
  let y = Math.round((Math.random() * h) / GRID) * GRID;
  const pts: Pt[] = [{ x, y }];
  let horizontal = Math.random() > 0.35;
  for (let i = 0; i < 4 + Math.floor(Math.random() * 4); i++) {
    const step = GRID * (2 + Math.floor(Math.random() * 6)) * (Math.random() > 0.5 ? 1 : -1);
    if (horizontal) x += step;
    else y += step;
    pts.push({ x, y });
    horizontal = !horizontal;
  }
  return pts;
}

const lengthOf = (p: Pt[]) =>
  p.slice(1).reduce((sum, pt, i) => sum + Math.abs(pt.x - p[i].x) + Math.abs(pt.y - p[i].y), 0);

function pointAt(path: Pt[], d: number): Pt {
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1];
    const b = path[i];
    const seg = Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
    if (d <= seg) {
      const k = seg ? d / seg : 0;
      return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
    }
    d -= seg;
  }
  return path[path.length - 1];
}

/**
 * Site-wide animated circuit: faint orthogonal traces with light pulses running
 * along them, brighter around the cursor. Fixed behind all content; pauses when
 * the tab is hidden and renders a single still frame for reduced motion.
 */
export function CircuitCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const mouse = { x: -9999, y: -9999 };
    let traces: Pt[][] = [];
    let pulses: Pulse[] = [];
    let stat: HTMLCanvasElement;
    let raf = 0;
    let w = 0;
    let h = 0;

    const spawn = (): Pulse => {
      const path = traces[Math.floor(Math.random() * traces.length)];
      return {
        path,
        len: lengthOf(path),
        t: 0,
        speed: 1.2 + Math.random() * 2.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    };

    const build = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(12, Math.round((w * h) / 26000));
      traces = Array.from({ length: count }, () => trace(w, h));

      // Traces + pads are static: draw once, blit every frame.
      stat = document.createElement("canvas");
      stat.width = w * dpr;
      stat.height = h * dpr;
      const s = stat.getContext("2d")!;
      s.setTransform(dpr, 0, 0, dpr, 0, 0);
      s.strokeStyle = "rgba(123,107,255,0.16)";
      s.lineWidth = 1;
      s.fillStyle = "rgba(123,107,255,0.35)";
      for (const t of traces) {
        s.beginPath();
        s.moveTo(t[0].x, t[0].y);
        t.slice(1).forEach((p) => s.lineTo(p.x, p.y));
        s.stroke();
        for (const p of [t[0], t[t.length - 1]]) {
          s.beginPath();
          s.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
          s.fill();
        }
      }
      pulses = Array.from({ length: Math.max(8, Math.round(count * 0.45)) }, () => {
        const p = spawn();
        p.t = Math.random() * p.len;
        return p;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(stat, 0, 0, w, h);

      // Cursor spotlight lifts the traces underneath it.
      if (mouse.x > -999) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        g.addColorStop(0, "rgba(123,107,255,0.12)");
        g.addColorStop(1, "rgba(123,107,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(mouse.x - 220, mouse.y - 220, 440, 440);
      }

      for (const p of pulses) {
        const head = pointAt(p.path, p.t);
        const near = Math.hypot(head.x - mouse.x, head.y - mouse.y) < 240;
        // Trail: a few fading samples behind the head.
        for (let i = 0; i < 14; i++) {
          const q = pointAt(p.path, Math.max(0, p.t - i * 5));
          const a = (1 - i / 14) * (near ? 0.95 : 0.6);
          ctx.fillStyle = `rgba(${p.color},${a})`;
          ctx.fillRect(q.x - 1.2, q.y - 1.2, 2.4, 2.4);
        }
        ctx.shadowColor = `rgba(${p.color},0.9)`;
        ctx.shadowBlur = near ? 18 : 10;
        ctx.fillStyle = `rgba(${p.color},1)`;
        ctx.beginPath();
        ctx.arc(head.x, head.y, near ? 2.6 : 1.9, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const tick = () => {
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t > p.len + 70) pulses[i] = spawn();
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    build();
    const reduced = prefersReducedMotion();
    if (reduced) draw();
    else raf = requestAnimationFrame(tick);

    const onResize = () => {
      // Mobile URL bars resize the viewport while scrolling; don't reshuffle for that.
      if (Math.abs(window.innerWidth - w) < 2 && Math.abs(window.innerHeight - h) < 160) return;
      build();
      if (reduced) draw();
    };
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70 [mask-image:radial-gradient(120%_90%_at_50%_30%,#000_40%,transparent_100%)]"
    />
  );
}
