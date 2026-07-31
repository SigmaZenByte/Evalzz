import { site } from "@/content/site";
import { Container, Footnote, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Governance() {
  const { governance } = site;

  return (
    <section id="governance" className="border-b border-line-strong py-section">
      <Container>
        <SectionHead label={governance.label} heading={governance.heading} />

        <div className="grid gap-10 md:grid-cols-2 md:gap-[clamp(1.5rem,4vw,3.5rem)]">
          {governance.rules.map((rule, index) => (
            <Reveal key={rule.index} delay={index * 80}>
              <div className="border-t-2 border-sienna pt-6">
                <span className="font-display text-[1.875rem] text-sienna tabular">
                  {rule.index}
                </span>
                <h3 className="mt-1 font-display text-h3">{rule.title}</h3>
                <p className="mt-3.5 max-w-[46ch] text-ink">{rule.body}</p>
                <p className="mt-5 border-t border-line pt-4 font-display text-[1.25rem] italic text-olive">
                  {rule.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Footnote>{governance.footnote}</Footnote>
      </Container>
    </section>
  );
}
