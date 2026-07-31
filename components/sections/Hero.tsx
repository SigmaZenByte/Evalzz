import { site } from "@/content/site";
import { Button, Container, Label } from "@/components/ui";
import { rich } from "@/lib/rich";

export function Hero() {
  const { hero, signals } = site;

  return (
    <header id="top" className="border-b border-line-strong">
      <Container className="pt-[clamp(3.25rem,8vw,6.25rem)] pb-[clamp(3rem,7vw,5.5rem)]">
        <Label className="mb-8">{hero.eyebrow}</Label>

        <div className="grid items-end gap-[clamp(1.5rem,5vw,4.5rem)] lg:grid-cols-[1.35fr_0.85fr]">
          <h1 className="font-display text-display">{rich(hero.headline)}</h1>

          <div>
            <p className="max-w-[46ch] border-t border-line-strong pt-5 text-lede text-ink lg:border-t-2 lg:border-espresso lg:pt-3.5">
              {hero.lede}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={hero.primary.href}>{hero.primary.label}</Button>
              <Button href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* ── Numbers band ──────────────────────────────────────────────────
          Hairlines come from `gap-px` over a `bg-line` grid, so they stay
          correct at every breakpoint without nth-child rules. The -mx-5 pull
          cancels the cells' px-5, keeping text flush with the container edge.
          Both must stay equal, and ≤ the smallest gutter (20px) or the band
          overflows the viewport on mobile. */}
      <div className="border-t border-line-strong bg-shell">
        <Container>
          <div className="-mx-5 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {signals.map((signal) => (
              <div key={signal.value} className="bg-shell px-5 py-8">
                <div className="font-display text-stat text-sienna tabular">{signal.value}</div>
                <p className="mt-2.5 max-w-[26ch] text-[0.845rem] leading-snug text-ink">
                  {signal.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
