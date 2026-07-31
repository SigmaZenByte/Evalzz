/* ══════════════════════════════════════════════════════════════════════════
   EVALZZ — SITE CONTENT
   ──────────────────────────────────────────────────────────────────────────
   Every word on the landing page lives in this file. Edit here; the layout
   updates itself. You should not need to open a component to change copy.

   EMPHASIS
   Wrap words in *asterisks* to render them as sienna italic serif:
       "The models work. The *coordination* does not."
   Works in any headline or heading field.

   ADDING / REMOVING ITEMS
   Every list below is a plain array. Add or delete entries freely — the grids
   reflow on their own. (`layers` and `loop.steps` look best at 4 and 5.)
   ══════════════════════════════════════════════════════════════════════════ */

export type Action = { label: string; href: string };
export type NavLink = { label: string; href: string };
export type Signal = { value: string; label: string };
export type Datapoint = { value: string; body: string; source: string };
export type Layer = { index: string; tag: string; title: string; body: string };
export type LoopStep = { name: string; body: string; gated: boolean };
export type Rule = { index: string; title: string; body: string; outcome: string };
export type Pillar = { title: string; body: string };

export const site = {
  /* ── Metadata: browser tab, search results, link previews ─────────────── */
  meta: {
    name: "EVALZZ",
    /* Set this to your real domain before launch — it drives canonical URLs
       and social link previews. */
    url: "https://evalzz.ai",
    title: "EVALZZ — The AI brain that powers the hybrid workforce",
    description:
      "One live model of your policy, process and intent — with a human gate before anything executes. Governed agent orchestration for regulated enterprises.",
    /* Shown on the generated share image (app/opengraph-image.tsx). */
    ogHeadline: "The AI brain that powers the hybrid workforce.",
    ogFooter: "Pre-seed · Hub71, Abu Dhabi",
  },

  /* ── Navigation ───────────────────────────────────────────────────────── */
  nav: {
    links: [
      { label: "The gap", href: "#gap" },
      { label: "Architecture", href: "#architecture" },
      { label: "Governance", href: "#governance" },
      { label: "Abu Dhabi", href: "#abu-dhabi" },
    ] satisfies NavLink[],
    cta: { label: "Request access", href: "#access" } satisfies Action,
  },

  /* ── Hero ─────────────────────────────────────────────────────────────── */
  hero: {
    eyebrow: "Pre-seed · Hub71, Abu Dhabi · 2026",
    headline: "The AI brain that powers the *hybrid workforce*.",
    lede: "The enterprise stack was built for humans. The next decade runs on humans and agents. EVALZZ holds one live model of your policy, process and intent — and a human gate before anything executes.",
    primary: { label: "Become a design partner", href: "#access" } satisfies Action,
    secondary: { label: "See the architecture", href: "#architecture" } satisfies Action,
  },

  /* ── Numbers band directly under the hero ─────────────────────────────── */
  signals: [
    { value: "40%", label: "of enterprise apps embed task-specific agents by end-2026 — from under 5%" },
    { value: "88%", label: "of organisations already use AI in at least one business function" },
    { value: "61%", label: "of enterprises have already put money into agentic AI" },
    { value: "20%", label: "have a mature AI governance model" },
  ] satisfies Signal[],

  /* ── The failure ──────────────────────────────────────────────────────── */
  gap: {
    label: "The failure",
    heading: "The models work. The *coordination* does not.",
    sub: "Every number below is a coordination failure, not a capability failure. That is the gap EVALZZ closes.",
    items: [
      {
        value: "95%",
        body: "Of enterprise GenAI pilots deliver no measurable impact on the P&L.",
        source: "MIT NANDA, 2025",
      },
      {
        value: "42%",
        body: "Of multi-agent failures come from agent-to-agent miscommunication — not model error.",
        source: "Stanford, 2025",
      },
      {
        value: "40%",
        body: "Of agentic AI projects will be cancelled by end-2027 — cost, unclear value, weak risk controls.",
        source: "Gartner, Jun 2025",
      },
      {
        value: "23%",
        body: "Of organisations have actually scaled an agentic system into production.",
        source: "Adoption data, 2026",
      },
    ] satisfies Datapoint[],
  },

  /* ── The product: four layers ─────────────────────────────────────────── */
  architecture: {
    label: "The product",
    heading: "One connected layer. *Four jobs.*",
    sub: "We do not sell the platform. We earn it — the customer asks for each layer down.",
    layers: [
      {
        index: "01",
        tag: "we land here",
        title: "Hybrid workforce",
        body: "One agent. One job. Narrow, specialised agents doing one team's real work — one workflow, weeks not quarters.",
      },
      {
        index: "02",
        tag: "more context",
        title: "AI OS",
        body: "Permissions-aware connectors across ERP, CRM, docs, ticketing and identity, delivering the right context at the moment of action.",
      },
      {
        index: "03",
        tag: "provable behaviour",
        title: "Orchestration",
        body: "Pre-checks every action against policy and intent, verifies the outcome, and writes an immutable audit log.",
      },
      {
        index: "04",
        tag: "whole company",
        title: "Company brain",
        body: "One live model of policy, process and intent — sharpened by every human-approved decision.",
      },
    ] satisfies Layer[],
    footnote: "Every agent we deploy is also a sensor. Acquisition and moat-building are the same activity.",
  },

  /* ── The loop ─────────────────────────────────────────────────────────── */
  loop: {
    label: "The loop",
    heading: "A live loop, not a *document dump.*",
    sub: "A static knowledge base goes stale in weeks. A looped, human-verified one gets sharper.",
    steps: [
      { name: "Sense", body: "Ingest every artifact — rules, procedures, live activity.", gated: false },
      { name: "Compare", body: "Detect where reality has drifted from intent. Flag with evidence.", gated: false },
      { name: "Act", body: "Propose the company's own validated procedure for that case.", gated: true },
      { name: "Human", body: "A human approves before anything executes.", gated: true },
      { name: "Learn", body: "Record the outcome, update the model, rewrite the procedure.", gated: true },
    ] satisfies LoopStep[],
    footnote: "Learn is where value compounds — every approved outcome adds data no competitor has.",
  },

  /* ── Governance ───────────────────────────────────────────────────────── */
  governance: {
    label: "Governance",
    heading: "Two rules make this buyable in a *regulated market.*",
    rules: [
      {
        index: "01",
        title: "Cite or abstain",
        body: "The brain only proposes actions it can ground in retrieved policy. If it cannot cite, it abstains.",
        outcome: "The reviewer never sees a guess.",
      },
      {
        index: "02",
        title: "Oversight where it counts",
        body: "Sensing and comparing run free. Nothing executes without approval.",
        outcome: "The human reviews decisions, not noise.",
      },
    ] satisfies Rule[],
    footnote:
      "Gartner names inadequate risk controls a top-three cause of agentic project cancellation. The human gate is what turns a pilot into production.",
  },

  /* ── The moat (inverted olive band) ───────────────────────────────────── */
  moat: {
    label: "The moat",
    heading: "A rival can copy the connectors. They cannot copy four years of your company's *verified corrections*.",
    body: "The correction data does not transfer. It is generated by one company's own approved decisions — and it compounds with every agent deployed.",
  },

  /* ── Abu Dhabi ────────────────────────────────────────────────────────── */
  abuDhabi: {
    label: "Abu Dhabi",
    heading: "Sovereign capital, compute and regulated demand in *one market.*",
    pillars: [
      { title: "ADGM RegLab", body: "Governed-agent sandbox inside a regulated environment — our credibility asset." },
      { title: "Anchor buyers", body: "ADNOC, Mubadala portfolio, M42, TAQA — global-scale demand in one market." },
      { title: "Sovereign AI", body: "In-country deployment for buyers who cannot send data offshore." },
      { title: "Talent", body: "MBZUAI and TII pipeline for retrieval and agent research." },
    ] satisfies Pillar[],
  },

  /* ── Closing call to action ───────────────────────────────────────────── */
  cta: {
    label: "Design partners",
    heading: "Three design partners. One governed agent in *production.*",
    sub: "We are selecting a small number of design partners for the first correction ledger. One team, one named owner, one small provable purchase.",
    milestones: ["3 paid design partners", "1 governed agent live", "First correction ledger"],
    primary: { label: "Request access", href: "mailto:hello@evalzz.ai?subject=Design%20partner%20enquiry" } satisfies Action,
    secondary: { label: "Read the thesis", href: "#gap" } satisfies Action,
  },

  /* ── Footer ───────────────────────────────────────────────────────────── */
  footer: {
    blurb: "Governed agent orchestration for regulated enterprises.",
    columns: [
      {
        title: "Company",
        links: [
          { label: "Request access", href: "#access" },
          { label: "hello@evalzz.ai", href: "mailto:hello@evalzz.ai" },
        ] satisfies NavLink[],
      },
      {
        title: "Product",
        links: [
          { label: "Architecture", href: "#architecture" },
          { label: "Governance", href: "#governance" },
        ] satisfies NavLink[],
      },
    ],
    legal: "EVALZZ © 2026",
    location: "Hub71 · Abu Dhabi",
    stage: "Pre-seed",
    /* Figures cited across the page. Keep in sync with the deck. */
    sources:
      "Sources: Gartner (2025, 2026) · MIT NANDA, State of AI in Business (2025) · Stanford (2025) · Grand View Research (Jun 2026) · Mordor Intelligence (2026) · IBM adoption surveys (2026) · Hub71 and Startup Genome (2026).",
  },
} as const;

export type Site = typeof site;
