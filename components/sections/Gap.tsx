import { site } from "@/content/site";
import { Container, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Gap() {
  const { gap } = site;

  return (
    <section id="gap" className="border-b border-line-strong py-section">
      <Container>
        <SectionHead label={gap.label} heading={gap.heading} sub={gap.sub} />

        <div className="grid gap-x-[clamp(1.75rem,5vw,4rem)] lg:grid-cols-2">
          {gap.items.map((item, index) => (
            <Reveal key={item.value} delay={index * 60}>
              <div className="grid grid-cols-[5.25rem_1fr] items-start gap-5 border-t border-line py-7 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                <div className="font-display text-stat tabular">{item.value}</div>
                <div>
                  <p className="text-[0.95rem] text-ink">{item.body}</p>
                  <p className="mt-3 text-label font-semibold uppercase text-ink-muted">
                    {item.source}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
