import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/Logo.png"
        alt=""
        width={32}
        height={32}
        aria-hidden
        className="h-8 w-8 rounded-md object-cover shadow-[var(--shadow-glow)]"
      />
      <span className="font-display text-base font-semibold tracking-tight">Zakeri Labs</span>
    </span>
  );
}
