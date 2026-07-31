import { site } from "@/content/site";
import { Button, Container, Label } from "@/components/ui";
import { rich } from "@/lib/rich";

export function CTA() {
  const { cta } = site;

  return (
    <section id="access" className="border-b border-line-strong bg-shell py-section">
      <Container>
        <Label className="mb-6">{cta.label}</Label>

        <h2 className="max-w-[17ch] font-display text-h2">{rich(cta.heading)}</h2>
        <p className="mt-5 max-w-[54ch] text-lede text-ink">{cta.sub}</p>

        <div className="mt-8 flex flex-wrap border-t border-line-strong">
          {cta.milestones.map((milestone, index) => (
            <span
              key={milestone}
              className={`py-4 pr-7 text-label font-semibold uppercase text-ink ${
                index === cta.milestones.length - 1 ? "" : "mr-7 border-r border-line"
              }`}
            >
              {milestone}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={cta.primary.href}>{cta.primary.label}</Button>
          <Button href={cta.secondary.href} variant="secondary">
            {cta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
