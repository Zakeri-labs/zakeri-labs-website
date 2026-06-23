export function BrowserMockup({
  label,
  hue = 220,
  children,
}: {
  label?: string;
  hue?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface-2/60 shadow-[var(--shadow-elegant)]">
      <div className="flex items-center gap-1.5 border-b border-border bg-background/40 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ember/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-500/60" />
        <span className="ms-2 truncate text-[10px] text-muted-foreground">
          {label ?? "preview.zakerilabs.app"}
        </span>
      </div>
      <div
        className="relative aspect-[16/10] w-full"
        style={{
          background: `radial-gradient(circle at 30% 20%, hsl(${hue} 70% 35% / 0.45), transparent 60%), linear-gradient(135deg, hsl(${hue} 50% 18%), hsl(${
            hue + 20
          } 40% 12%))`,
        }}
      >
        {children ?? <PlaceholderUI hue={hue} />}
      </div>
    </div>
  );
}

function PlaceholderUI({ hue }: { hue: number }) {
  return (
    <div className="absolute inset-0 p-3">
      <div className="flex h-full gap-2">
        <div className="flex w-1/3 flex-col gap-1.5">
          <div className="h-3 w-2/3 rounded bg-white/15" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-5/6 rounded bg-white/10" />
          <div className="mt-2 h-6 w-24 rounded" style={{ background: `hsl(${hue} 80% 60%)` }} />
        </div>
        <div className="flex-1 rounded-md bg-white/5">
          <div className="m-2 grid grid-cols-2 gap-1.5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-video rounded bg-white/8" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
