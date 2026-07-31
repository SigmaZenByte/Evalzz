# EVALZZ — landing page

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4
Visual direction: **Desert Ink** — bone, espresso, burnt sienna, deep olive · Instrument Serif + Instrument Sans

```bash
npm install
npm run dev          # http://localhost:3000
```

---

## Where to change things

Two files cover almost everything.

| I want to change… | Open |
| --- | --- |
| Any words on the page | `content/site.ts` |
| Any colour or type size | `app/globals.css` |
| The order of sections | `app/page.tsx` |
| One section's layout | `components/sections/<Name>.tsx` |

### 1. Copy — `content/site.ts`

Every headline, stat, source line and button label is in this one file. You should never need to open a component to change wording.

**Emphasis.** Wrap words in asterisks to get the sienna italic serif treatment:

```ts
heading: "The models work. The *coordination* does not."
```

**Lists.** Every group is a plain array. Add or delete entries and the grids reflow on their own:

```ts
pillars: [
  { title: "ADGM RegLab", body: "Governed-agent sandbox…" },
  { title: "Your new one", body: "…" },   // ← just add a line
],
```

`layers` (4) and `loop.steps` (5) are tuned to those counts; the rest take any number.

Before launch, three fields in `meta` matter: `url` (drives canonical links and share previews), `title`, `description`.

### 2. Design — `app/globals.css`

The whole system is the `@theme` block at the top. Change a value there and it updates site-wide.

```css
--color-sienna: #bf4b24;      /* display type, fills, buttons */
--color-sienna-deep: #ab3e1c; /* small text + links — 5.5:1 on bone */
--color-olive: #2e4f44;       /* the inverted band */
--text-display: clamp(2.875rem, 8vw, 6rem);
```

**One contrast rule to keep.** `sienna` is only legible at large sizes. Anything under ~24px uses `sienna-deep`. The palette comments note the measured ratio for each colour; all body text is AA or better on bone.

Fonts are loaded in `app/layout.tsx` via `next/font` — they're downloaded at build time and self-hosted, so there are no runtime requests to Google and no layout shift. To swap a family, change the import there; the CSS variables in `globals.css` pick it up automatically.

### 3. Structure

```
app/
  layout.tsx           fonts, metadata, <html> shell
  page.tsx             section order — reorder or delete lines here
  globals.css          ← the design system
  opengraph-image.tsx  auto-generated social share card
  icon.tsx             auto-generated favicon
content/site.ts        ← all copy
components/
  Nav.tsx              sticky header + mobile menu
  Reveal.tsx           scroll fade-in
  ui.tsx               Container, Label, Button, SectionHead, Footnote
  sections/            one file per band of the page
lib/rich.tsx           the *asterisk* → <em> helper
design-options/        the four original static mockups, kept for reference
```

Sections render in the order listed in `app/page.tsx`. To drop a section, delete its line there.

**Removing the motion.** Delete `components/Reveal.tsx`, remove the `<Reveal>` wrappers, and delete the scroll-reveal block at the bottom of `globals.css`. Nothing else depends on it. (It already no-ops for anyone with reduced-motion enabled, and content stays visible if JavaScript fails.)

---

## Deploying to Vercel

Zero config — Vercel detects Next.js and picks the right build settings.

**Via GitHub (recommended, gives you preview deploys per branch):**

```bash
git init
git add .
git commit -m "EVALZZ landing page"
gh repo create evalzz-landing --private --source=. --push
```

Then at [vercel.com/new](https://vercel.com/new), import the repo and deploy. Every later `git push` redeploys automatically.

**Via CLI (no repo needed):**

```bash
npm i -g vercel
vercel          # preview URL
vercel --prod   # production
```

**After the first deploy:** add your domain in Vercel → Project → Settings → Domains, then set `meta.url` in `content/site.ts` to that domain so share previews and canonical URLs resolve correctly.

---

## Notes

- `npm run build` runs a full type-check; `npm run typecheck` runs it alone.
- The whole page is statically prerendered — no server runtime, no cold starts.
- The share image at `/opengraph-image` is generated at build time. It fetches Instrument Serif from Google Fonts; if that's unreachable the card falls back to a default face rather than failing the build.
- **Placeholders still to replace:** `hello@evalzz.ai` (in `cta.primary.href` and `footer.columns`), `meta.url`, and the design-partner counts in `cta.milestones`. The figures marked as placeholder in the investor deck are not on this page.
