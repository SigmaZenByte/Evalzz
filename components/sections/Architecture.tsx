import { site } from "@/content/site";
import { Container, Footnote, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Architecture() {
  const { architecture } = site;

  return (
    <section id="architecture" className="border-b border-line-strong py-section">
      <Container>
        <SectionHead
          label={architecture.label}
          heading={architecture.heading}
          sub={architecture.sub}
        />

        <div className="border-t border-line-strong">
          {architecture.layers.map((layer, index) => (
            <Reveal key={layer.index} delay={index * 60}>
              <div className="grid items-baseline gap-2.5 border-b border-line py-7 lg:grid-cols-[180px_1fr_1.15fr] lg:gap-x-[clamp(1.25rem,4vw,3.5rem)] lg:py-8">
                <div>
                  <span className="font-display text-[1.625rem] text-sienna tabular">
                    {layer.index}
                  </span>
                  <span className="mt-0.5 block text-label font-semibold uppercase text-ink-muted">
                    {layer.tag}
                  </span>
                </div>
                <h3 className="font-display text-h3">{layer.title}</h3>
                <p className="max-w-[52ch] text-[0.97rem] text-ink">{layer.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Footnote>{architecture.footnote}</Footnote>
      </Container>
    </section>
  );
}
