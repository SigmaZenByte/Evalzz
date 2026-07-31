import { Fragment, type ReactNode } from "react";

const EMPHASIS = /(\*[^*]+\*)/g;

/**
 * Renders the *asterisk* convention used throughout `content/site.ts`.
 *
 *   rich("The models work. The *coordination* does not.")
 *   → The models work. The <em>coordination</em> does not.
 *
 * The <em> is sienna italic serif — the single accent treatment in the
 * Desert Ink system. Change it here to change it everywhere.
 */
export function rich(text: string): ReactNode[] {
  return text
    .split(EMPHASIS)
    .filter(Boolean)
    .map((part, i) =>
      /^\*[^*]+\*$/.test(part) ? (
        <em key={i} className="text-sienna italic">
          {part.slice(1, -1)}
        </em>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
}
