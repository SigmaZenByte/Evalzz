import { site } from "@/content/site";
import { Container, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Team() {
  const { team } = site;

  /* Left on bone so the paper cards lift — the CTA that follows is shell. */
  return (
    <section id="team" className="border-b border-line-strong py-section">
      <Container>
        <SectionHead label={team.label} heading={team.heading} wide />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member, index) => (
            <Reveal key={member.index} delay={index * 70} className="h-full">
              <article className="flex h-full flex-col border border-line-strong bg-paper p-6">
                <span className="font-display text-[1.25rem] text-sienna tabular">
                  {member.index}
                </span>

                <h3 className="mt-1.5 font-display text-[1.5rem] leading-tight">{member.name}</h3>

                <span className="mt-2 block text-label font-semibold uppercase text-ink-muted">
                  {member.role}
                </span>

                <ul className="mt-5 border-t border-line">
                  {member.facts.map((fact) => (
                    <li
                      key={fact}
                      className="border-b border-line py-3 text-[0.875rem] leading-snug text-ink"
                    >
                      {fact}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-[80ch] border-t border-line-strong pt-6 text-lede text-ink">
          {team.footnote}
        </p>
      </Container>
    </section>
  );
}
