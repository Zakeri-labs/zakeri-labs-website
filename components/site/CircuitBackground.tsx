/**
 * Animated printed-circuit-board background.
 * Orthogonal traces + pads tiled as an SVG pattern, with glowing signal
 * pulses sweeping along the horizontal trace rows. Purely decorative.
 */
// Bright "patches" (#000 = fully visible) over a faint 0.1 base. With default
// mask compositing the layers add up, so centers stay at full strength while
// the gaps drop to ~10%, giving an uneven, less crowded look.
const VARIED_MASK = [
  "radial-gradient(38% 30% at 15% 24%, #000 0%, transparent 72%)",
  "radial-gradient(42% 32% at 85% 36%, #000 0%, transparent 72%)",
  "radial-gradient(46% 38% at 55% 60%, #000 0%, transparent 72%)",
  "radial-gradient(40% 34% at 22% 80%, #000 0%, transparent 72%)",
  "radial-gradient(36% 30% at 80% 86%, #000 0%, transparent 72%)",
  "linear-gradient(rgba(0,0,0,0.2) 0 0)",
].join(", ");

export function CircuitBackground() {
  // Pulse rows use percentage y so they spread across the full section height,
  // not just the top.
  const pulses = [
    { y: "8%", dur: 5.5, delay: 0, color: "var(--primary)" },
    { y: "20%", dur: 7, delay: 1.2, color: "var(--cyan)" },
    { y: "34%", dur: 6.2, delay: 2.4, color: "var(--ember)" },
    { y: "48%", dur: 8, delay: 0.6, color: "var(--primary)" },
    { y: "62%", dur: 6.8, delay: 3, color: "var(--cyan)" },
    { y: "76%", dur: 7.4, delay: 1.8, color: "var(--primary)" },
    { y: "90%", dur: 6, delay: 3.6, color: "var(--ember)" },
  ];

  // Mobile-only pulses: dense rows (every ~4%) with short cycle time (~1.4s)
  // so a pulse crosses any visible area within ~1.5s of the user arriving.
  // strokeDasharray "60 800" → period 860px → at ~600px/s → repeats every ~1.4s per row.
  // With 22 rows and ~6 visible at once, probability of seeing a pulse ≈ 98%.
  const mobilePulses = [
    { y: "2%", dur: 1.3, delay: 0.2, color: "var(--cyan)" },
    { y: "6%", dur: 1.6, delay: 0.7, color: "var(--primary)" },
    { y: "10%", dur: 1.4, delay: 1.1, color: "var(--ember)" },
    { y: "15%", dur: 1.7, delay: 0.4, color: "var(--cyan)" },
    { y: "19%", dur: 1.3, delay: 1.5, color: "var(--primary)" },
    { y: "24%", dur: 1.5, delay: 0.9, color: "var(--ember)" },
    { y: "28%", dur: 1.6, delay: 0.1, color: "var(--cyan)" },
    { y: "33%", dur: 1.4, delay: 1.3, color: "var(--primary)" },
    { y: "38%", dur: 1.7, delay: 0.6, color: "var(--ember)" },
    { y: "43%", dur: 1.3, delay: 1.0, color: "var(--cyan)" },
    { y: "47%", dur: 1.5, delay: 0.3, color: "var(--primary)" },
    { y: "52%", dur: 1.6, delay: 1.7, color: "var(--ember)" },
    { y: "56%", dur: 1.4, delay: 0.8, color: "var(--cyan)" },
    { y: "61%", dur: 1.7, delay: 1.2, color: "var(--primary)" },
    { y: "66%", dur: 1.3, delay: 0.5, color: "var(--ember)" },
    { y: "71%", dur: 1.5, delay: 1.6, color: "var(--cyan)" },
    { y: "75%", dur: 1.6, delay: 0.2, color: "var(--primary)" },
    { y: "80%", dur: 1.4, delay: 1.4, color: "var(--ember)" },
    { y: "85%", dur: 1.7, delay: 0.7, color: "var(--cyan)" },
    { y: "89%", dur: 1.3, delay: 1.0, color: "var(--primary)" },
    { y: "94%", dur: 1.5, delay: 0.4, color: "var(--ember)" },
    { y: "98%", dur: 1.6, delay: 1.8, color: "var(--cyan)" },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden opacity-50"
      style={{
        // Organic, non-uniform visibility: bright patches at the radial centers
        // (full intensity, like before) fading to a very faint base in between,
        // so the board feels varied rather than a busy uniform grid.
        maskImage: VARIED_MASK,
        WebkitMaskImage: VARIED_MASK,
      }}
    >
      <svg className="h-full w-full" preserveAspectRatio="xMidYMin slice">
        <defs>
          <pattern id="pcb-traces" width="120" height="120" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="var(--primary)" strokeWidth="1.1" strokeOpacity="0.16">
              {/* main orthogonal traces */}
              <path d="M0 30 H120 M0 90 H120 M30 0 V120 M90 0 V120" />
              {/* corner turns / branches */}
              <path d="M30 30 H60 V60 M90 30 V60 H60 M30 90 H60 V60 M90 90 V60" />
            </g>
            {/* pads */}
            <g fill="none" stroke="var(--primary)" strokeOpacity="0.22">
              <circle cx="30" cy="30" r="3" />
              <circle cx="90" cy="30" r="3" />
              <circle cx="30" cy="90" r="3" />
              <circle cx="90" cy="90" r="3" />
            </g>
            {/* vias */}
            <g fill="var(--primary)" fillOpacity="0.18">
              <circle cx="60" cy="60" r="1.6" />
              <circle cx="0" cy="0" r="1.6" />
              <circle cx="120" cy="120" r="1.6" />
            </g>
          </pattern>

          <filter id="pcb-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#pcb-traces)" />

        {/* glowing signal pulses travelling along trace rows */}
        <g filter="url(#pcb-glow)">
          {pulses.map((p, i) => (
            <line
              key={i}
              x1="0"
              y1={p.y}
              x2="100%"
              y2={p.y}
              stroke={p.color}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray="70 4000"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-4070"
                dur={`${p.dur}s`}
                begin={`${p.delay}s`}
                repeatCount="indefinite"
              />
            </line>
          ))}
          {/* mobile-only dense rows: short cycle (~1.4s) so a pulse is nearly
              always crossing when the user scrolls to any empty space */}
          {mobilePulses.map((p, i) => (
            <line
              key={`m-${i}`}
              className="lg:hidden"
              x1="0"
              y1={p.y}
              x2="100%"
              y2={p.y}
              stroke={p.color}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="60 800"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-860"
                dur={`${p.dur}s`}
                begin={`${p.delay}s`}
                repeatCount="indefinite"
              />
            </line>
          ))}
        </g>
      </svg>
    </div>
  );
}
