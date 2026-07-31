"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Container } from "@/components/ui";

export function Nav() {
  const [open, setOpen] = useState(false);

  /* Lock the page behind the mobile panel, and close it on Escape. */
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-line-strong bg-bone/92 backdrop-blur-md">
      <Container>
        <div className="flex h-17 items-center justify-between gap-6">
          <a href="#top" className="font-display text-[1.625rem] tracking-[0.02em]">
            Eval<span className="text-sienna">zz</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {site.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.875rem] text-ink transition-colors hover:text-sienna-deep"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={site.nav.cta.href}
              className="hidden bg-espresso px-4.5 py-2.5 text-[0.85rem] font-medium text-bone transition-colors hover:bg-sienna sm:inline-block"
            >
              {site.nav.cta.label}
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-5 bg-espresso transition-transform duration-200 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-5 bg-espresso transition-transform duration-200 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bone md:hidden">
          <Container>
            <div className="flex flex-col py-2">
              {site.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 font-display text-[1.375rem]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.nav.cta.href}
                onClick={() => setOpen(false)}
                className="my-4 bg-sienna px-5 py-3.5 text-center text-[0.9rem] font-medium text-sienna-on"
              >
                {site.nav.cta.label}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </nav>
  );
}
