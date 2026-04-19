import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { FloatingCard } from "@/components/FloatingCard";
import { useReveal } from "@/hooks/useReveal";
import meshImg from "@/assets/mockup-mesh.png";
import civilianImg from "@/assets/mockup-civilian.png";
import commandImg from "@/assets/hero-command.png";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — Signal" },
      { name: "description", content: "A guided tour through the six core modules of Signal: command dashboard, AI triage, multi-agency channels, offline mesh, civilian reporting, and after-action replay." },
      { property: "og:title", content: "Product — Signal" },
      { property: "og:description", content: "Six modules engineered to compress emergency-response coordination latency from minutes to seconds." },
    ],
  }),
  component: ProductPage,
});

const MODULES = [
  { id: "command", label: "Command Dashboard" },
  { id: "triage", label: "Triage AI" },
  { id: "mesh", label: "Mesh Network" },
  { id: "civilian", label: "Civilian Reporting" },
  { id: "replay", label: "After-Action Replay" },
];

function ProductPage() {
  const ref = useReveal();
  const [active, setActive] = useState("command");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    MODULES.forEach((m) => {
      const el = document.getElementById(m.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <PageShell>
      <div ref={ref}>
        {/* Hero */}
        <section className="relative px-6 pt-40 md:pt-48">
          <div className="mx-auto max-w-[1280px]">
            <p className="kicker">Product</p>
            <h1 className="display-xl mt-6 max-w-[1000px] text-balance">
              The operational layer for the seconds that matter.
            </h1>
            <p className="mt-8 max-w-[640px] text-[18px] leading-[1.7] text-text-secondary">
              Signal is built as five composable modules. Each one solves a specific failure mode of
              legacy emergency coordination — and together they form a single source of truth.
            </p>
          </div>
        </section>

        {/* Side nav + modules */}
        <section className="relative px-6 py-32">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                  Modules
                </p>
                <ul className="space-y-1">
                  {MODULES.map((m) => (
                    <li key={m.id}>
                      <a
                        href={`#${m.id}`}
                        className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors ${active === m.id ? "bg-bg-raised text-text-primary" : "text-text-secondary hover:text-text-primary"}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all ${active === m.id ? "bg-violet shadow-[0_0_8px_rgba(139,92,246,0.8)]" : "bg-text-tertiary/50"}`}
                        />
                        {m.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-32 lg:col-span-9">
              <Module
                id="command"
                kicker="01 · Command"
                title="Live Incident Map"
                body="Every incident, every responder, every resource — surfaced in one geospatial view that updates in under 600ms. Designed for operators who can't afford to context-switch."
                callouts={[
                  "Incident pins color-coded by severity, sized by responder count",
                  "One-tap dispatch with predicted ETA based on current traffic and unit position",
                  "Agency-color responder avatars, live position via secure GNSS",
                ]}
                specs={[
                  ["Update latency", "≤ 600ms p95"],
                  ["WCAG", "AAA contrast on alerts"],
                  ["Offline behavior", "Last state cached, queue replays on sync"],
                ]}
                image={commandImg}
              />
              <Module
                id="triage"
                kicker="02 · Triage"
                title="AI Triage Queue"
                body="Severity-weighted sorting surfaces the highest-stakes incidents first. The model explains its reasoning in plain language, and dispatchers always make the final call."
                callouts={[
                  "Multi-factor scoring: severity, latency-to-respond, demographic vulnerability",
                  "Reasoning panel exposes the top 3 features driving each rank",
                  "Manual override always one keystroke away — Signal is a copilot, not a pilot",
                ]}
                specs={[
                  ["Inference latency", "≤ 120ms per incident"],
                  ["Auditability", "Every rank logged with feature attribution"],
                  ["Override rate target", "≥ 8% (designed to be questioned)"],
                ]}
                image={commandImg}
                reverse
              />
              <Module
                id="mesh"
                kicker="03 · Resilience"
                title="Offline Mesh Fallback"
                body="When towers drop — and they always drop — devices form a peer-to-peer Bluetooth and LoRa mesh. Messages queue locally, hop through nearby responders, and replicate to the cloud the moment connectivity returns."
                callouts={[
                  "Up to 14 hops with sub-second store-and-forward",
                  "Critical-priority messages preempt low-priority traffic",
                  "Conflict-free replicated data types (CRDTs) prevent state divergence",
                ]}
                specs={[
                  ["Range per hop", "≤ 1.2km LoRa, 90m BT"],
                  ["Battery cost", "+11% over 8h shift"],
                  ["Sync correctness", "Provable convergence under partition"],
                ]}
                image={meshImg}
              />
              <Module
                id="civilian"
                kicker="04 · Civilian"
                title="Civilian Signal-In"
                body="Verified public reporting with automatic geotag, photo EVI, and bot-filtered noise. Civilians become trustworthy sensors — without flooding dispatch with rumors."
                callouts={[
                  "Phone-number + biometric verification before any report enters the queue",
                  "Computer-vision pre-screen filters duplicate, staged, or unrelated photos",
                  "Real-time status updates back to the reporter — closes the trust loop",
                ]}
                specs={[
                  ["False-positive rate", "< 4% in pilot drill"],
                  ["Time to verified", "≤ 18s median"],
                  ["Accessibility", "Voice-only flow, low-bandwidth fallback"],
                ]}
                image={civilianImg}
                reverse
              />
              <Module
                id="replay"
                kicker="05 · Reflection"
                title="After-Action Replay"
                body="Every incident is recoverable as a timestamped, scrubbable timeline. Post-incident reviews go from weeks of report-stitching to a single afternoon."
                callouts={[
                  "Scrub through any incident at 0.25× to 8× speed with synced audio + map state",
                  "Annotation layer for trainers, exportable as searchable PDF",
                  "Differential view: compare two drills side-by-side to track improvement",
                ]}
                specs={[
                  ["Retention", "7 years, encrypted at rest"],
                  ["Export formats", "PDF, JSON, CSV, IPAWS-compatible"],
                  ["Privacy", "Civilian PII auto-redacted by default"],
                ]}
                image={commandImg}
              />
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function Module({
  id,
  kicker,
  title,
  body,
  callouts,
  specs,
  image,
  reverse,
}: {
  id: string;
  kicker: string;
  title: string;
  body: string;
  callouts: string[];
  specs: [string, string][];
  image: string;
  reverse?: boolean;
}) {
  return (
    <article id={id} className="scroll-mt-32">
      <div className={`grid grid-cols-1 gap-10 lg:grid-cols-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>
        <div className={`reveal lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
          <p className="kicker">{kicker}</p>
          <h2 className="display-md mt-4">{title}</h2>
          <p className="mt-5 text-[15px] leading-[1.7] text-text-secondary">{body}</p>
          <ul className="mt-8 space-y-3">
            {callouts.map((c) => (
              <li key={c} className="flex items-start gap-3 text-[13.5px] leading-[1.6] text-text-primary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet shadow-[0_0_6px_currentColor]" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className={`reveal lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
          <FloatingCard className="!p-6">
            <div className="tilt-card">
              <div className="tilt-inner">
                <img src={image} alt={title} loading="lazy" className="w-full" />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border-subtle pt-5">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                    {k}
                  </p>
                  <p className="mt-1 text-[12.5px] font-medium text-text-primary">{v}</p>
                </div>
              ))}
            </div>
          </FloatingCard>
        </div>
      </div>
    </article>
  );
}
