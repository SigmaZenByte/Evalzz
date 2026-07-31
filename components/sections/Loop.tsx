import { site } from "@/content/site";
import { Container, Footnote, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function Loop() {
  const { loop } = site;

  return (
    <section id="loop" className="border-b border-line-strong py-section">
      <Container>
        <SectionHead label={loop.label} heading={loop.heading} sub={loop.sub} />

        <Reveal>
          <div className="grid gap-px border border-line-strong bg-line sm:grid-cols-2 lg:grid-cols-5">
            {loop.steps.map((step) => (
              <div
                key={step.name}
                className={`flex flex-col p-6 ${step.gated ? "bg-shell" : "bg-paper"}`}
              >
                <div className="font-display text-[1.375rem] text-sienna">{step.name}</div>
                <p className="mt-2 flex-1 text-[0.85rem] leading-snug text-ink">{step.body}</p>
                <span
                  className={`mt-5 flex items-center gap-2 text-label font-semibold uppercase ${
                    step.gated ? "text-olive" : "text-ink-muted"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${step.gated ? "bg-olive" : "bg-ink-muted"}`}
                  />
                  {step.gated ? "Human-gated" : "Autonomous"}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Loop-back marker */}
        <div className="mt-3 flex items-center gap-3 text-label font-semibold uppercase text-ink-muted">
          <svg
            width="22"
            height="10"
            viewBox="0 0 22 10"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M21 1v4a4 4 0 0 1-4 4H1m0 0 3.5-3M1 9l3.5 3"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Learn feeds back into Sense — the model rewrites itself
        </div>

        <Footnote>{loop.footnote}</Footnote>
      </Container>
    </section>
  );
}
