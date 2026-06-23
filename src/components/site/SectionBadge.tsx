export function SectionBadge({
  children,
  tone = "primary",
}: {
  children: React.ReactNode;
  tone?: "primary" | "ember";
}) {
  const color = tone === "ember" ? "text-ember" : "text-primary";
  return (
    <span
      className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${color}`}
    >
      {children}
    </span>
  );
}
