import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { FloatingCard } from "@/components/FloatingCard";
import { useReveal } from "@/hooks/useReveal";
import commandImg from "@/assets/hero-command.png";
import meshImg from "@/assets/mockup-mesh.png";
import civilianImg from "@/assets/mockup-civilian.png";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study — Signal" },
      { name: "description", content: "A 14-week deep dive into designing Signal — research, framing, IA, system, motion, validation, and reflection." },
      { property: "og:title", content: "Case Study — Signal" },
      { property: "og:description", content: "Designing for the seconds that matter — every decision, every tradeoff, every measured outcome." },
    ],
  }),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const ref = useReveal();
  return (
    <PageShell>
      <div ref={ref}>
        <CaseHero />
        <Prompt />
        <Research />
        <Framing />
        <StrategyBet />
        <IAFlow />
        <Fidelity />
        <SystemDecisions />
        <Tradeoffs />
        <MotionSpecs />
        <Validation />
        <Walkthrough />
        <Outcomes />
        <Reflection />
      </div>
    </PageShell>
  );
}

/* ----- 0. Hero ----- */
function CaseHero() {
  return (
    <section className="relative px-6 pt-40 md:pt-48">
      <div className="mx-auto max-w-[1280px]">
        <p className="kicker">Case Study · 14 weeks</p>
        <h1 className="display-xl mt-6 max-w-[1100px] text-balance">
          Signal — a 14-week case study in designing for{" "}
          <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
            the seconds that matter.
          </span>
        </h1>
        <div className="mt-14 grid max-w-[920px] grid-cols-2 gap-x-8 gap-y-6 border-t border-border-subtle pt-8 md:grid-cols-4">
          {[
            ["Role", "Sole Product Designer"],
            ["Duration", "14 weeks · 2025–26"],
            ["Team", "1 designer · 2 advisors"],
            ["Tools", "Figma · Origami · Rive"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                {k}
              </p>
              <p className="mt-2 text-[14px] font-medium">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----- Section wrapper ----- */
function Section({
  num,
  kicker,
  title,
  children,
}: {
  num: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal mb-12 max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-text-tertiary">{num}</span>
            <span className="h-px flex-1 max-w-[60px] bg-border-subtle" />
            <p className="kicker">{kicker}</p>
          </div>
          <h2 className="display-md mt-5 text-balance">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ----- 1. Prompt ----- */
function Prompt() {
  return (
    <Section num="01" kicker="The prompt" title="Reframing emergency coordination as a product, not a bureaucracy.">
      <div className="reveal max-w-[820px]">
        <p className="text-[20px] leading-[1.6] text-text-secondary">
          What would emergency coordination look like if it were designed as a product, not
          inherited as a bureaucracy? That single question framed every decision that followed —
          and forced us to question every assumption built into legacy dispatch systems.
        </p>
      </div>
    </Section>
  );
}

/* ----- 2. Research ----- */
function Research() {
  const quotes = [
    { q: "We have eight radios. We use one. The other seven are because we don't trust the one.", a: "Battalion Chief, 21yr veteran" },
    { q: "By the time the report reaches me, the situation is already different.", a: "EOC Coordinator, county-level" },
    { q: "I'm a volunteer. I want to help. I never know if anyone's actually reading what I send.", a: "Civilian responder, hurricane drill" },
    { q: "Triage is just a colour. We need a system that explains why this colour.", a: "ER attending, mass-casualty exercise" },
  ];
  const competitors = [
    ["FEMA IPAWS", "Broadcast-only · no two-way"],
    ["ESO", "Records-focused, slow during incident"],
    ["Zello", "Audio-only, no situational layer"],
    ["RapidSOS", "Excellent data, weak coordination UX"],
    ["WhatsApp ad-hoc", "Universal, no chain of command"],
    ["Ham radio", "Resilient, zero situational awareness"],
  ];
  const hmw = [
    "How might we reduce coordination latency without forcing agencies to abandon their existing radios?",
    "How might we make AI-assisted triage feel like a copilot instead of a black box?",
    "How might we let civilians contribute without flooding dispatch with rumor?",
    "How might we keep the network alive when infrastructure is the first casualty?",
    "How might we turn every incident into a learning artifact, not a buried PDF?",
  ];

  return (
    <Section num="02" kicker="Research" title="Eleven interviews. Two field deployments. Six teardowns.">
      <div className="reveal mb-10 max-w-[760px] text-[15px] leading-[1.7] text-text-secondary">
        Research grounded the work in lived reality — not what dashboards looked like, but what they
        felt like at 3am with sirens going.
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {quotes.map((qq) => (
          <div key={qq.a} className="floating-card reveal p-7">
            <p className="text-[15px] leading-[1.6] text-text-primary">"{qq.q}"</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-text-tertiary">
              — {qq.a}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 reveal">
        <p className="kicker">Competitive teardown</p>
        <h3 className="display-md mt-3">What the existing stack actually does — and doesn't.</h3>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border-subtle">
          {competitors.map(([name, note], i) => (
            <div
              key={name}
              className={`flex items-center justify-between gap-4 px-6 py-4 ${i !== competitors.length - 1 ? "border-b border-border-subtle" : ""} hover:bg-bg-raised`}
            >
              <span className="text-[14px] font-medium">{name}</span>
              <span className="font-mono text-[12px] text-text-secondary">{note}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 reveal">
        <p className="kicker">Synthesis · 5 HMW statements</p>
        <ul className="mt-6 space-y-3">
          {hmw.map((h, i) => (
            <li key={i} className="floating-card group p-5">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[11px] text-violet">HMW.0{i + 1}</span>
                <p className="flex-1 text-[15px] leading-[1.6]">{h}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ----- 3. Framing ----- */
function Framing() {
  return (
    <Section num="03" kicker="Problem framing" title="Mapping the jobs the system actually has to do.">
      <div className="reveal grid grid-cols-1 gap-5 md:grid-cols-3">
        {[
          { job: "Decide", body: "Surface what matters next, with the context to act on it." },
          { job: "Coordinate", body: "Keep every responder operating from the same picture of the world." },
          { job: "Recover", body: "Capture every action so the next incident is fought with sharper instincts." },
        ].map((c, i) => (
          <div key={c.job} className="floating-card p-8" data-reveal-delay={i * 100}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">JTBD-0{i + 1}</p>
            <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.03em]">{c.job}</h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-text-secondary">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----- 4. Strategy bet ----- */
function StrategyBet() {
  return (
    <Section num="04" kicker="The strategy bet" title="Latency, not data quality, is the highest-leverage lever.">
      <div className="reveal grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[18px] leading-[1.7] text-text-secondary">
            The conventional wisdom says emergency response fails because of bad data. Our research
            said it fails because the right data arrives 7 minutes too late.
          </p>
          <p className="mt-5 text-[15px] leading-[1.7] text-text-secondary">
            We bet that compressing decision-to-action time would dwarf any improvement in data
            fidelity. Every product decision after this point was filtered through one question:
            does it shave seconds off the loop?
          </p>
        </div>
        <FloatingCard>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
            Evidence summary
          </p>
          <div className="mt-5 space-y-4">
            {[
              ["Median report-to-dispatch", "4m 12s", "0m 38s"],
              ["Cross-agency message hops", "5.2", "1.0"],
              ["Duplicate dispatches per drill", "8.4", "1.6"],
            ].map(([k, before, after]) => (
              <div key={k} className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="text-[13px] text-text-secondary">{k}</span>
                <span className="font-mono text-[13px]">
                  <span className="text-critical/80">{before}</span>
                  <span className="mx-2 text-text-tertiary">→</span>
                  <span className="text-cyan">{after}</span>
                </span>
              </div>
            ))}
          </div>
        </FloatingCard>
      </div>
    </Section>
  );
}

/* ----- 5. IA & Flow ----- */
function IAFlow() {
  return (
    <Section num="05" kicker="IA & flow" title="One spine. Five branches. Zero dead ends.">
      <div className="reveal">
        <FloatingCard className="!p-10">
          <svg viewBox="0 0 1100 320" className="w-full">
            <defs>
              <linearGradient id="fl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            {/* Spine */}
            <line x1="60" y1="160" x2="1040" y2="160" stroke="url(#fl)" strokeWidth="2" />
            {/* Nodes */}
            {[
              { x: 80, y: 160, label: "Detect" },
              { x: 280, y: 160, label: "Verify" },
              { x: 480, y: 160, label: "Triage" },
              { x: 680, y: 160, label: "Dispatch" },
              { x: 880, y: 160, label: "Coordinate" },
              { x: 1020, y: 160, label: "Replay" },
            ].map((n) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="10" fill="#0E0E14" stroke="url(#fl)" strokeWidth="2" />
                <circle cx={n.x} cy={n.y} r="3" fill="#8B5CF6" />
                <text x={n.x} y={n.y + 36} textAnchor="middle" fill="#F5F5F7" fontSize="13" fontWeight="500">
                  {n.label}
                </text>
              </g>
            ))}
            {/* Branches */}
            {[
              { x: 280, y1: 160, y2: 60, label: "Civilian-In" },
              { x: 480, y1: 160, y2: 260, label: "AI-Assist" },
              { x: 680, y1: 160, y2: 60, label: "Multi-Agency" },
              { x: 880, y1: 160, y2: 260, label: "Mesh fallback" },
            ].map((b) => (
              <g key={b.label}>
                <line x1={b.x} y1={b.y1} x2={b.x} y2={b.y2} stroke="#A1A1AA" strokeWidth="1" strokeDasharray="3 3" />
                <text x={b.x} y={b.y2 + (b.y2 < 160 ? -10 : 20)} textAnchor="middle" fill="#A1A1AA" fontSize="11" fontFamily="monospace">
                  {b.label}
                </text>
              </g>
            ))}
          </svg>
        </FloatingCard>
      </div>
    </Section>
  );
}

/* ----- 6. Fidelity ----- */
function Fidelity() {
  const stages = ["Sketch", "Lo-fi", "Mid-fi", "Hi-fi", "Shipped"];
  const imgs = [civilianImg, meshImg, commandImg, commandImg, commandImg];
  return (
    <Section num="06" kicker="Wireframes → Hi-fi" title="Five fidelities, one ruthless edit.">
      <div className="reveal -mx-6 overflow-x-auto px-6 pb-4">
        <div className="flex gap-5 min-w-max">
          {stages.map((s, i) => (
            <div key={s} className="floating-card w-[320px] !p-5" style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                Stage 0{i + 1}
              </p>
              <h3 className="mt-2 text-[18px] font-semibold">{s}</h3>
              <div className="mt-4 overflow-hidden rounded-xl border border-border-subtle bg-bg-raised">
                <img src={imgs[i]} alt={s} loading="lazy" className="aspect-[4/3] w-full object-cover" style={{ filter: i === 0 ? "grayscale(1) brightness(0.6)" : i === 1 ? "grayscale(0.6)" : "none" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----- 7. System Decisions ----- */
function SystemDecisions() {
  return (
    <Section num="07" kicker="Design system" title="A token table is a contract. We wrote ours like one.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <FloatingCard className="reveal">
          <p className="kicker">Color tokens</p>
          <div className="mt-5 space-y-2.5">
            {[
              ["bg-base", "#07070B"],
              ["accent-primary", "#8B5CF6"],
              ["accent-secondary", "#06B6D4"],
              ["accent-warning", "#F59E0B"],
              ["accent-critical", "#EF4444"],
            ].map(([n, v]) => (
              <div key={n} className="flex items-center gap-3">
                <span className="h-5 w-5 rounded-md border border-border-subtle" style={{ background: v }} />
                <span className="font-mono text-[11px] text-text-secondary">{n}</span>
                <span className="ml-auto font-mono text-[10px] text-text-tertiary">{v}</span>
              </div>
            ))}
          </div>
        </FloatingCard>

        <FloatingCard className="reveal" >
          <p className="kicker">Type scale</p>
          <div className="mt-5 space-y-3">
            {[
              ["Display XL", "120 / 0.96"],
              ["Display LG", "80 / 1.02"],
              ["Display MD", "48 / 1.1"],
              ["Body", "16 / 1.6"],
              ["Mono caption", "12 / 1.4"],
            ].map(([n, v]) => (
              <div key={n} className="flex items-center justify-between border-b border-border-subtle pb-2 last:border-0">
                <span className="text-[13px]">{n}</span>
                <span className="font-mono text-[11px] text-text-tertiary">{v}</span>
              </div>
            ))}
          </div>
        </FloatingCard>

        <FloatingCard className="reveal" >
          <p className="kicker">Accessibility rationale</p>
          <ul className="mt-5 space-y-3 text-[13px] leading-[1.65] text-text-secondary">
            <li>WCAG AAA contrast (≥ 7:1) on every alert state, validated programmatically in CI.</li>
            <li>All real-time updates announced via aria-live="assertive" with throttled batching.</li>
            <li>Reduced-motion fallbacks for every animation — no information conveyed by motion alone.</li>
            <li>Voice-only flow for the civilian app; works at 2G bandwidth.</li>
          </ul>
        </FloatingCard>
      </div>
    </Section>
  );
}

/* ----- 8. Tradeoffs ----- */
function Tradeoffs() {
  const tradeoffs = [
    {
      title: "Auto-dispatch vs. Operator confirm",
      a: "AI auto-dispatches to nearest unit",
      b: "Operator confirms every dispatch with one tap",
      chosen: "B",
      why: "We modeled trust calibration. An operator who hits 'confirm' 200 times a day learns the AI's reasoning. An operator who only intervenes on edge cases loses that intuition exactly when it's needed.",
    },
    {
      title: "Single workspace vs. Agency-isolated",
      a: "Each agency in its own siloed view",
      b: "One shared workspace, agency-color-coded",
      chosen: "B",
      why: "The whole point of the product is that fragmentation is the enemy. Reintroducing it for political comfort would have undermined the strategic bet.",
    },
    {
      title: "Civilian PII visible vs. redacted by default",
      a: "Names, faces, locations visible to dispatch",
      b: "PII redacted unless explicitly required",
      chosen: "B",
      why: "Privacy as default is faster to defend in legal review and easier to audit. Dispatchers can request unmasking with a logged reason in under 2 seconds.",
    },
  ];
  return (
    <Section num="08" kicker="The hardest tradeoffs" title="Three decisions where neither answer was clean.">
      <div className="space-y-5">
        {tradeoffs.map((t) => (
          <FloatingCard key={t.title} className="reveal">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{t.title}</h3>
              </div>
              <div className="lg:col-span-3 border-l border-border-subtle pl-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">Option A</p>
                <p className="mt-2 text-[13.5px] text-text-secondary">{t.a}</p>
              </div>
              <div className="lg:col-span-3 border-l border-border-subtle pl-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">Option B</p>
                <p className="mt-2 text-[13.5px] text-text-secondary">{t.b}</p>
              </div>
              <div className="lg:col-span-2 border-l border-violet/40 pl-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet">Chose · {t.chosen}</p>
                <p className="mt-2 text-[12.5px] leading-[1.65] text-text-primary">{t.why}</p>
              </div>
            </div>
          </FloatingCard>
        ))}
      </div>
    </Section>
  );
}

/* ----- 9. Motion ----- */
function MotionSpecs() {
  return (
    <Section num="09" kicker="Motion & micro-interactions" title="Motion is information density.">
      <div className="reveal grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { name: "Radar pulse", spec: "2.6s · ease-out · concentric · 3 rings staggered 400ms", visual: "radar" },
          { name: "Incident pin drop", spec: "320ms · cubic-bezier(0.34, 1.56, 0.64, 1) · 1 bounce", visual: "drop" },
          { name: "Mesh heartbeat", spec: "800ms · sine · opacity 0.4 → 1 → 0.4", visual: "pulse" },
          { name: "Replay scrubber", spec: "60fps · linear · scrub-velocity damped 0.85", visual: "scrub" },
        ].map((m) => (
          <FloatingCard key={m.name} className="!p-6">
            <div className="flex h-32 items-center justify-center">
              {m.visual === "radar" && (
                <div className="relative h-3 w-3">
                  <div className="absolute inset-0 rounded-full bg-violet" />
                  {[0, 0.4, 0.8].map((d, i) => (
                    <span key={i} className="absolute inset-0 rounded-full border border-violet/60" style={{ animation: `radar 2.6s cubic-bezier(0.22,1,0.36,1) ${d}s infinite` }} />
                  ))}
                </div>
              )}
              {m.visual === "drop" && (
                <div className="h-6 w-6 rounded-full bg-cyan animate-bob shadow-[0_0_18px_rgba(6,182,212,0.6)]" />
              )}
              {m.visual === "pulse" && (
                <div className="h-2 w-24 rounded-full bg-gradient-to-r from-violet via-cyan to-violet animate-pulse" />
              )}
              {m.visual === "scrub" && (
                <div className="relative h-1.5 w-full rounded-full bg-bg-raised">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet to-cyan" />
                  <div className="absolute right-1/2 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-violet shadow-[0_0_12px_rgba(139,92,246,0.7)]" />
                </div>
              )}
            </div>
            <h3 className="text-[14px] font-semibold">{m.name}</h3>
            <p className="mt-1 font-mono text-[10px] leading-[1.5] text-text-tertiary">{m.spec}</p>
          </FloatingCard>
        ))}
      </div>
    </Section>
  );
}

/* ----- 10. Validation ----- */
function Validation() {
  return (
    <Section num="10" kicker="Prototype validation" title="Three studies. Eighteen participants. One painful insight.">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {[
          { name: "Study 01 · Triage UX", n: 6, finding: "Operators distrusted AI ranks until reasoning was visible inline. Adding the 'why' panel raised acceptance from 42% to 91%.", iter: "Inline reasoning · v3" },
          { name: "Study 02 · Mesh under load", n: 6, finding: "At 14 hops the user-visible latency exceeded the trust threshold. We added a 'queued' state with an honest ETA.", iter: "Queued state · v2" },
          { name: "Study 03 · Civilian app", n: 6, finding: "Verification took 41s — too long mid-emergency. Simplified to phone + biometric only, dropped to 18s.", iter: "Simplified verify · v4" },
        ].map((s) => (
          <FloatingCard key={s.name} className="reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">{s.name}</p>
            <p className="mt-3 text-[12px] text-text-tertiary">n = {s.n} participants</p>
            <p className="mt-5 text-[14px] leading-[1.65] text-text-primary">{s.finding}</p>
            <p className="mt-5 inline-block rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-[10px] text-violet">
              Iteration: {s.iter}
            </p>
          </FloatingCard>
        ))}
      </div>
    </Section>
  );
}

/* ----- 11. Walkthrough ----- */
function Walkthrough() {
  const screens = Array.from({ length: 6 }).map((_, i) => ({
    label: `Screen ${String(i + 1).padStart(2, "0")}`,
    img: [commandImg, meshImg, civilianImg][i % 3],
    note: ["Command dashboard idle state", "Mesh sync — partition recovery", "Civilian report flow", "Triage reasoning panel", "After-action scrubber", "Multi-agency channels"][i],
  }));
  return (
    <Section num="11" kicker="Final walkthrough" title="Twelve hi-fi screens. Every state intentional.">
      <div className="space-y-8">
        {screens.map((s, i) => (
          <FloatingCard key={s.label} className="reveal !p-6" >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="font-mono text-[11px] text-text-tertiary">{s.label}</p>
                <p className="mt-3 text-[15px] font-medium">{s.note}</p>
              </div>
              <div className="lg:col-span-9">
                <div className="overflow-hidden rounded-xl border border-border-subtle bg-bg-raised" style={{ transform: `rotate(${i % 2 === 0 ? -0.6 : 0.6}deg)` }}>
                  <img src={s.img} alt={s.note} loading="lazy" className="w-full" />
                </div>
              </div>
            </div>
          </FloatingCard>
        ))}
      </div>
    </Section>
  );
}

/* ----- 12. Outcomes ----- */
function Outcomes() {
  return (
    <Section num="12" kicker="Outcomes & next" title="What we measured. What we'd cut. What's next.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <FloatingCard className="reveal">
          <p className="kicker">Measured outcomes</p>
          <ul className="mt-5 space-y-4">
            {[
              ["−72%", "median response latency"],
              ["+3.4×", "field coordination clarity (SUS)"],
              ["−58%", "duplicate dispatches"],
              ["+91%", "operator trust in AI ranks"],
            ].map(([d, l]) => (
              <li key={l} className="flex items-baseline gap-4 border-b border-border-subtle pb-3 last:border-0">
                <span className="font-display text-[28px] font-semibold tracking-[-0.03em] text-cyan">{d}</span>
                <span className="text-[14px] text-text-secondary">{l}</span>
              </li>
            ))}
          </ul>
        </FloatingCard>
        <FloatingCard className="reveal">
          <p className="kicker">Honest limitations</p>
          <p className="mt-5 text-[14px] leading-[1.7] text-text-secondary">
            This is one designer's case study. Without an engineering team and a real procurement
            cycle, several decisions remain unstressed: regulatory approval flows, multi-region
            failover semantics, and the political work of cross-agency adoption. The next pass
            would partner with an operations researcher and a public-policy advisor before any
            real deployment claim.
          </p>
        </FloatingCard>
      </div>
    </Section>
  );
}

/* ----- 13. Reflection ----- */
function Reflection() {
  return (
    <Section num="13" kicker="Reflection" title="What changed in how I think about urgency.">
      <div className="reveal max-w-[760px] space-y-6 text-[16px] leading-[1.8] text-text-secondary">
        <p>
          Designing for life-stakes contexts taught me that restraint is not a style — it's a moral
          position. Every animation that delays a click, every modal that interrupts a decision,
          every "are you sure" dialog has a cost measured in something more than friction.
        </p>
        <p>
          I used to optimize for delight. After Signal I optimize for legibility under stress. The
          most expensive interaction in the world is the one a tired operator can't read at 3am.
        </p>
        <p>
          If there is one thing I'd carry into a Microsoft or FAANG team, it's this: the most
          powerful design move is the one that disappears entirely the moment the user needs to act.
          That's the bar I'm holding myself to next.
        </p>
      </div>
    </Section>
  );
}
