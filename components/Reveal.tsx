"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades content up as it scrolls into view.
 *
 * Progressive enhancement: the hidden state is applied by CSS only when the
 * `.js` class is present on <html> (set by an inline script in layout.tsx
 * before first paint). Without JavaScript the content renders normally, and
 * `prefers-reduced-motion` disables the effect entirely.
 *
 * To remove all motion from the site: delete this file, drop the <Reveal>
 * wrappers, and remove the reveal block from app/globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
