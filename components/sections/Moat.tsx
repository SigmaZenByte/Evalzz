import { Fragment } from "react";
import { site } from "@/content/site";
import { Container, Label } from "@/components/ui";

/* The one inverted band on the page. Sienna would vibrate against olive, so
   emphasis here switches to apricot — hence the local rich() variant. */
function richOnDark(text: string) {
  return text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, i) =>
      /^\*[^*]+\*$/.test(part) ? (
        <em key={i} className="text-apricot italic">
          {part.slice(1, -1)}
        </em>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
}

export function Moat() {
  const { moat } = site;

  return (
    <section className="bg-olive py-section text-olive-on">
      <Container>
        <Label tone="olive">{moat.label}</Label>
        <p className="mt-5 max-w-[20ch] font-display text-h2">{richOnDark(moat.heading)}</p>
        <p className="mt-6 max-w-[52ch] text-olive-ink">{moat.body}</p>
      </Container>
    </section>
  );
}
