import { site } from "@/content/site";
import { Container, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function AbuDhabi() {
  const { abuDhabi } = site;

  return (
    <section id="abu-dhabi" className="border-b border-line-strong py-section">
      <Container>
        <SectionHead label={abuDhabi.label} heading={abuDhabi.heading} />

        <div className="grid gap-x-[clamp(1.25rem,3vw,2.5rem)] gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {abuDhabi.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 60}>
              <div className="border-t border-line-strong pt-5">
                <h3 className="font-display text-[1.4375rem] text-sienna">{pillar.title}</h3>
                <p className="mt-2 text-[0.92rem] text-ink">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
