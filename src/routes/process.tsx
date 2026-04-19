import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Signal" },
      { name: "description", content: "How I work: Discover, Define, Diverge, Converge, Prototype, Ship — applied to Signal and every project before it." },
      { property: "og:title", content: "Process — Signal" },
      { property: "og:description", content: "Six phases. One commitment to evidence over taste." },
    ],
  }),
  component: ProcessPage,
});

const PHASES = [
  { num: "01", name: "Discover", body: "Embed in the problem before defining it. Field observation, expert interviews, lived-experience listening sessions. The output is a question worth answering, not an answer." },
  { num: "02", name: "Define", body: "Translate research into jobs-to-be-done and a single strategic bet. Ruthlessly cut anything that isn't load-bearing for the bet." },
  { num: "03", name: "Diverge", body: "Generate three irreconcilable directions, not three variations on one. The point is to surface tradeoffs, not to find the obvious answer faster." },
  { num: "04", name: "Converge", body: "Choose the direction that makes the strategic bet most provable. Document why the other two were rejected — that document is the brief for v2." },
  { num: "05", name: "Prototype", body: "Build the highest-fidelity prototype the smallest test can validate. Motion, copy, and edge cases included — never abstract them away." },
  { num: "06", name: "Ship", body: "Define success in measurable terms before launch. Instrument everything. Reserve calendar for the post-launch review before the launch happens." },
];

function ProcessPage() {
  const ref = useReveal();
  return (
    <PageShell>
      <div ref={ref}>
        <section className="relative px-6 pt-40 md:pt-48">
          <div className="mx-auto max-w-[1280px]">
            <p className="kicker">How I work</p>
            <h1 className="display-xl mt-6 max-w-[1000px] text-balance">
              Six phases. One commitment to{" "}
              <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
                evidence over taste.
              </span>
            </h1>
          </div>
        </section>

        <section className="relative px-6 py-32 md:py-40">
          <div className="mx-auto max-w-[1100px]">
            <div className="relative space-y-16">
              {/* Connecting dotted path */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 200 100 Q 600 200 200 300 Q -200 400 200 500 Q 600 600 200 700 Q -200 800 200 900"
                  fill="none"
                  stroke="rgba(139,92,246,0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
              </svg>
              {PHASES.map((p, i) => (
                <div
                  key={p.num}
                  className={`relative flex flex-col gap-6 md:flex-row ${i % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"}`}
                >
                  <div className="floating-card reveal flex-1 !max-w-[520px] p-8" data-reveal-delay={i * 80}>
                    <div className={`flex items-center gap-4 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border-subtle bg-bg-raised">
                        <span className="font-mono text-[12px] text-violet">{p.num}</span>
                      </div>
                      <h3 className="text-[26px] font-semibold tracking-[-0.03em]">{p.name}</h3>
                    </div>
                    <p className="mt-5 text-[14.5px] leading-[1.7] text-text-secondary">{p.body}</p>
                  </div>
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
