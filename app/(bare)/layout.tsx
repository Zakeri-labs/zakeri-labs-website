import type { ReactNode } from "react";

/** The Keystatic content panel brings its own UI, so no site chrome around it. */
export default function BareLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ background: "Canvas", colorScheme: "light dark" }}>
      <body style={{ background: "Canvas", color: "CanvasText" }}>{children}</body>
    </html>
  );
}
