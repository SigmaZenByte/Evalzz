import type { ReactNode } from "react";
import { rich } from "@/lib/rich";

/* ══════════════════════════════════════════════════════════════════════════
   Shared primitives. Everything visual is composed from these four.
   ══════════════════════════════════════════════════════════════════════════ */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-page px-gutter ${className}`}>{children}</div>;
}

/* ── Micro label: 11px, 600, +20% tracking, caps ─────────────────────────
   Desert Ink uses letterspaced caps instead of a monospace face.          */
export function Label({
  children,
  tone = "sienna",
  className = "",
}: {
  children: ReactNode;
  tone?: "sienna" | "muted" | "olive";
  className?: string;
}) {
  const tones = {
    sienna: "text-sienna-deep",
    muted: "text-ink-muted",
    olive: "text-olive-label",
  } as const;

  return (
    <span className={`block text-label font-semibold uppercase ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark";
}) {
  const base =
    "inline-block border px-6 py-3.5 text-[0.9rem] font-medium transition-colors duration-150";
  const variants = {
    primary: "border-transparent bg-sienna text-sienna-on hover:bg-sienna-deep",
    secondary: "border-line-strong text-espresso hover:border-espresso hover:bg-paper",
    onDark: "border-olive-light text-olive-on hover:border-apricot hover:text-apricot",
  } as const;

  return (
    <a href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </a>
  );
}

/* ── Section header: label in the left rail, heading + sub on the right ── */
export function SectionHead({
  label,
  heading,
  sub,
  wide = false,
}: {
  label: string;
  heading: string;
  sub?: string;
  /** Lets a longer, two-sentence heading run wider before it wraps. */
  wide?: boolean;
}) {
  return (
    <div className="mb-12 grid gap-3 md:mb-14 md:grid-cols-[180px_1fr] md:gap-x-[clamp(1.5rem,4vw,3.5rem)]">
      <Label className="md:pt-3">{label}</Label>
      <div>
        <h2 className={`font-display text-h2 ${wide ? "max-w-[30ch]" : "max-w-[19ch]"}`}>
          {rich(heading)}
        </h2>
        {sub ? <p className="mt-4 max-w-[54ch] text-ink text-lede">{sub}</p> : null}
      </div>
    </div>
  );
}

/* ── Quiet closing line used at the foot of several sections ───────────── */
export function Footnote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-10 max-w-[62ch] border-t border-line pt-5 text-[0.9rem] text-ink-muted">
      {children}
    </p>
  );
}
