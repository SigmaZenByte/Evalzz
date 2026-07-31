import { site } from "@/content/site";
import { Container } from "@/components/ui";

export function Footer() {
  const { footer, meta } = site;

  return (
    <footer className="py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-display text-[1.625rem]">
              Eval<span className="text-sienna">zz</span>
            </div>
            <p className="mt-2 max-w-[34ch] text-[0.9rem] text-ink">{footer.blurb}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <span className="block text-label font-semibold uppercase text-ink-muted">
                {column.title}
              </span>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className="text-[0.9rem] text-ink transition-colors hover:text-sienna-deep"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-line pt-6 text-[0.78rem] leading-relaxed text-ink-muted">
          {footer.sources}
        </p>

        <div className="mt-5 flex flex-wrap justify-between gap-4 text-[0.8rem] text-ink-muted">
          <span>{footer.legal}</span>
          <span>{footer.location}</span>
          <span>{footer.stage}</span>
        </div>

        <span className="sr-only">{meta.name}</span>
      </Container>
    </footer>
  );
}
