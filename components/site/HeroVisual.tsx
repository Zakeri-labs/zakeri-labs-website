import { TrendingUp, Search, Users } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative h-[420px] w-full lg:h-[520px]">
      {/* Wireframe globe */}
      <svg viewBox="0 0 500 500" aria-hidden className="absolute inset-0 h-full w-full opacity-40">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(220 90% 70% / 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="280" r="220" fill="url(#g1)" />
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="250"
            cy="280"
            rx={220 - i * 12}
            ry={40 + i * 14}
            fill="none"
            stroke="hsl(220 90% 70% / 0.18)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <ellipse
            key={`v${i}`}
            cx="250"
            cy="280"
            rx={30 + i * 22}
            ry="220"
            fill="none"
            stroke="hsl(220 90% 70% / 0.12)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Floating cards */}
      <MockCard
        className="absolute left-1/2 top-2 w-[260px] -translate-x-1/2 lg:left-12 lg:translate-x-0"
        title="Website Performance"
        icon={<TrendingUp className="h-4 w-4 text-primary" />}
      >
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">28.6K</span>
          <span className="text-xs text-emerald-400">+24.8%</span>
        </div>
        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
          Sessions
        </p>
        <Sparkline />
      </MockCard>

      <MockCard
        className="absolute bottom-20 start-2 w-[200px] animate-float-slow lg:start-0"
        title="Leads Generated"
        icon={<Users className="h-4 w-4 text-primary" />}
      >
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">642</span>
          <span className="text-xs text-emerald-400">+18.2%</span>
        </div>
        <Bars />
      </MockCard>

      <MockCard
        className="absolute bottom-6 end-2 w-[220px] animate-float-slow lg:end-4"
        title="Search Visibility"
        icon={<Search className="h-4 w-4 text-primary" />}
      >
        <div className="mt-2 flex items-center gap-3">
          <Donut />
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Top Keywords
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-foreground">156</span>
              <span className="text-xs text-emerald-400">+32.7%</span>
            </div>
          </div>
        </div>
      </MockCard>
    </div>
  );
}

function MockCard({
  className = "",
  title,
  icon,
  children,
}: {
  className?: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`glass-card p-3.5 shadow-[var(--shadow-elegant)] ${className}`}>
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs font-medium text-foreground/90">{title}</span>
      </div>
      {children}
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 200 50" className="mt-2 h-12 w-full">
      <defs>
        <linearGradient id="sp" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(220 90% 65%)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(220 90% 65%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 L25 32 L50 35 L75 22 L100 26 L125 14 L150 18 L175 8 L200 12 L200 50 L0 50 Z"
        fill="url(#sp)"
      />
      <path
        d="M0 40 L25 32 L50 35 L75 22 L100 26 L125 14 L150 18 L175 8 L200 12"
        fill="none"
        stroke="hsl(220 90% 70%)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Bars() {
  const heights = [30, 50, 35, 65, 45, 80, 60];
  return (
    <div className="mt-2 flex h-12 items-end gap-1">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${h}%`,
            background: "linear-gradient(180deg, hsl(220 90% 70%), hsl(220 90% 50%))",
          }}
        />
      ))}
    </div>
  );
}

function Donut() {
  return (
    <svg viewBox="0 0 40 40" className="h-12 w-12 -rotate-90">
      <circle cx="20" cy="20" r="16" fill="none" stroke="hsl(220 30% 30%)" strokeWidth="5" />
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="none"
        stroke="hsl(220 90% 65%)"
        strokeWidth="5"
        strokeDasharray="100"
        strokeDashoffset="33"
        strokeLinecap="round"
      />
    </svg>
  );
}
