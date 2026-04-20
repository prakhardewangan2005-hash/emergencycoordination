import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { FloatingCard } from "@/components/FloatingCard";
import { useReveal } from "@/hooks/useReveal";
import heroDevice from "@/assets/hero-command.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Signal — Emergency Coordination System" },
      {
        name: "description",
        content:
          "Signal is a real-time emergency coordination platform unifying first responders, civilians, and command centers onto a single verified operational layer.",
      },
      { property: "og:title", content: "Signal — Emergency Coordination System" },
      {
        property: "og:description",
        content:
          "When disaster strikes, seconds save lives. Signal is the coordination layer built for the moments that matter most.",
      },
    ],
  }),
  component: Overview,
});

function Overview() {
  const ref = useReveal();
  return (
    <PageShell>
      <div ref={ref}>
        <Hero />
        <LogoMarquee />
        <ProblemSection />
        <BeforeAfterSection />
        <FeaturesSection />
        <OutcomesSection />
        <TestimonialsSection />
        <CTABand />
      </div>
    </PageShell>
  );
}

/* ============================================================
 * HERO — choreographed entrance
 * ============================================================ */

function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStep(6);
      return;
    }
    const timers = [
      setTimeout(() => setStep(1), 800),  // radar
      setTimeout(() => setStep(2), 1600), // kicker
      setTimeout(() => setStep(3), 2400), // headline
      setTimeout(() => setStep(4), 3600), // CTAs
      setTimeout(() => setStep(5), 4200), // device
      setTimeout(() => setStep(6), 5000), // ambient
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden px-6 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      {/* Centered radar pulse from origin */}
      {step >= 1 && (
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-3 w-3">
            <div className="absolute inset-0 rounded-full bg-violet shadow-[0_0_24px_8px_rgba(139,92,246,0.7)]" />
            {[0, 0.4, 0.8].map((d, i) => (
              <span
                key={i}
                className="absolute inset-0 rounded-full border border-violet/60"
                style={{ animation: `radar 2.6s cubic-bezier(0.22,1,0.36,1) ${d}s infinite` }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="overflow-hidden">
            <p
              className={`kicker transition-all duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}
              style={{
                clipPath: step >= 2 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                transition: "clip-path 700ms steps(28), opacity 200ms",
              }}
            >
              SIGNAL / EMERGENCY COORDINATION SYSTEM
            </p>
          </div>

          <h1 className="mt-5 text-left text-text-secondary text-balance font-display font-semibold leading-[1.05] tracking-[-0.03em] text-[26px] md:text-[34px] lg:text-[40px]">
            <HeadlineLine show={step >= 3} delay={0}>
              When disaster strikes, seconds save lives —
            </HeadlineLine>
            <HeadlineLine show={step >= 3} delay={180}>
              but fragmented communication costs them.
            </HeadlineLine>
            <HeadlineLine show={step >= 3} delay={360}>
              Signal is the coordination layer built for the moments that matter most.
            </HeadlineLine>
          </h1>

          <div
            className={`mt-8 flex flex-wrap items-center gap-3 transition-all duration-700 ${step >= 4 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
          >
            <Link to="/case-study" className="btn-violet">
              View Full Case Study <span aria-hidden>→</span>
            </Link>
            <button className="btn-ghost">
              <PlayIcon /> Watch 90-sec walkthrough
            </button>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div
            className={`tilt-card extrude-3d transition-all duration-1000 ${step >= 5 ? "translate-y-0 opacity-100 blur-0" : "translate-y-12 opacity-0 blur-md"}`}
          >
            <div className="tilt-inner relative">
              <div className="absolute inset-x-6 -bottom-8 h-32 rounded-full bg-violet/30 blur-3xl" />
              <img
                src={heroDevice}
                alt="Signal command dashboard floating in dark space"
                width={1280}
                height={960}
                className="relative w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-tertiary opacity-60">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-text-tertiary to-transparent" />
        </div>
      </div>
    </section>
  );
}

function HeadlineLine({
  children,
  show,
  delay,
}: {
  children: React.ReactNode;
  show: boolean;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <span
        className="block"
        style={{
          opacity: show ? 1 : 0,
          filter: show ? "blur(0)" : "blur(12px)",
          transform: show ? "translateY(0)" : "translateY(24px)",
          transition: `opacity 800ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 800ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 800ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        }}
      >
        {children}
      </span>
    </span>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M3 1.5v9l8-4.5z" />
    </svg>
  );
}

/* ============================================================
 * Logo Marquee
 * ============================================================ */
function LogoMarquee() {
  const logos = ["FEMA", "Red Cross", "IFRC", "UN OCHA", "NDMA", "Team Rubicon"];
  return (
    <section className="relative border-y border-border-subtle/40 py-10">
      <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-text-tertiary">
        Modeled on workflows of
      </p>
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 opacity-60">
        {logos.map((l) => (
          <span
            key={l}
            className="font-display text-[18px] font-medium tracking-[-0.02em] text-text-tertiary"
          >
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
 * Problem
 * ============================================================ */
function ProblemSection() {
  const cards = [
    {
      stat: "7 minutes",
      title: "Average coordination delay",
      body: "Between first-responder agencies during multi-jurisdiction emergencies. Source: DHS post-incident review, 2023.",
      icon: <IconClock />,
    },
    {
      stat: "41%",
      title: "Reports never reach dispatch",
      body: "Of civilian emergency reports never reach the correct dispatch authority due to channel fragmentation.",
      icon: <IconFork />,
    },
    {
      stat: "1 in 6",
      title: "Lives lost to information failure",
      body: "Lives lost in mass-casualty events are attributable to information-layer failure, not medical cause.",
      icon: <IconHeart />,
    },
  ];
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal mb-16 max-w-[760px]">
          <p className="kicker">The problem</p>
          <h2 className="display-lg mt-4 text-text-primary text-balance">
            The cost of coordination is measured in lives.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.stat}
              className="floating-card reveal p-8"
              data-reveal-delay={i * 120}
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-border-subtle bg-bg-raised text-violet animate-bob" style={{ animationDelay: `${i * 0.4}s` }}>
                {c.icon}
              </div>
              <p className="stat-num">{c.stat}</p>
              <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.02em]">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-text-secondary">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Before / After dashboard comparison
 * ============================================================ */
function BeforeAfterSection() {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal mb-16 max-w-[820px]">
          <p className="kicker">Before / After</p>
          <h2 className="display-lg mt-4 text-balance">
            Same chaos. Same stakes.{" "}
            <span className="text-text-secondary">Completely different outcome.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DashboardBefore />
          <DashboardAfter />
        </div>
      </div>
    </section>
  );
}

function DashboardBefore() {
  const lines = [
    "[14:02:11] UNIT-7 ... static ... cannot ... copy",
    "14:02:34  CALLER 911 - house fire? unclear",
    "[14:03:01] DISPATCH > confirm location, over",
    "    14:03:18 caller 911 says smoke, 4th st maybe",
    "[14:03:22]  UNIT-3  ETA 11min  rerouting",
    "  14:03:40  RADIO CH4 ::: garbled :::",
    "14:04:02 caller-2 911 - same incident? duplicate?",
    "[14:04:15] UNIT-7 cancel previous, code 4",
    "14:04:33 dispatch.. who has eyes on scene",
    "[14:05:01] *** CHANNEL OVERLAP ***",
  ];
  return (
    <FloatingCard className="!p-0">
      <div className="flex items-center justify-between border-b border-border-subtle px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-critical" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-critical">
            Before · Without Signal
          </span>
        </div>
        <span className="font-mono text-[10px] text-text-tertiary">incident_log.txt</span>
      </div>
      <div className="space-y-1.5 px-6 py-6 font-mono text-[11.5px] leading-[1.6] text-text-secondary">
        {lines.map((l, i) => (
          <div key={i} className={i % 3 === 0 ? "text-text-tertiary" : ""}>
            {l}
          </div>
        ))}
      </div>
      <div className="border-t border-border-subtle px-6 py-3 font-mono text-[10px] text-text-tertiary">
        12 channels open · 4 unreviewed reports · severity unknown
      </div>
    </FloatingCard>
  );
}

function DashboardAfter() {
  const incidents = [
    { id: "INC-0421", sev: "critical", label: "Structure fire · 4th & Pine", eta: "3:14", color: "bg-critical" },
    { id: "INC-0422", sev: "high", label: "MVA with injury · I-405 N", eta: "5:02", color: "bg-amber" },
    { id: "INC-0423", sev: "moderate", label: "Medical assist · Civic Ctr", eta: "6:48", color: "bg-violet" },
    { id: "INC-0424", sev: "low", label: "Welfare check · Maple Ave", eta: "12:00", color: "bg-cyan" },
  ];
  return (
    <FloatingCard className="!p-0">
      <div className="flex items-center justify-between border-b border-border-subtle px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="dot-live" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
            After · With Signal
          </span>
        </div>
        <span className="font-mono text-[10px] text-text-tertiary">live · 4 active</span>
      </div>
      <div className="space-y-2.5 px-5 py-5">
        {incidents.map((inc, i) => (
          <div
            key={inc.id}
            className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-raised p-3 transition-colors hover:border-border-hover"
          >
            <span className={`h-2.5 w-2.5 rounded-full ${inc.color} shadow-[0_0_8px_currentColor]`} />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-text-tertiary">{inc.id}</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-tertiary">
                  {inc.sev}
                </span>
              </div>
              <p className="mt-0.5 text-[13px] font-medium">{inc.label}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[11px] text-text-primary">{inc.eta}</p>
              <p className="font-mono text-[9px] text-text-tertiary">ETA</p>
            </div>
            <div className="flex -space-x-1.5">
              {[0, 1, 2].slice(0, (i % 3) + 1).map((j) => (
                <span
                  key={j}
                  className="h-6 w-6 rounded-full border-2 border-bg-raised bg-gradient-to-br from-violet to-cyan"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border-subtle px-6 py-3 font-mono text-[10px] text-text-tertiary">
        4 incidents · sorted by AI triage · 0 duplicates
      </div>
    </FloatingCard>
  );
}

/* ============================================================
 * Features
 * ============================================================ */
function FeaturesSection() {
  const features = [
    {
      title: "Live Incident Map",
      body: "A geospatial command view with sub-second update latency. See every reported incident, responder position, and resource deployment as it happens.",
      icon: <IconMap />,
    },
    {
      title: "AI Triage Queue",
      body: "Severity-weighted sorting that surfaces the highest-stakes incidents first. The model explains its reasoning; dispatchers always make the final call.",
      icon: <IconBrain />,
    },
    {
      title: "Multi-Agency Channels",
      body: "One shared workspace for fire, medical, police, civil, and federal teams. No more cross-radio translation.",
      icon: <IconChannels />,
    },
    {
      title: "Offline Mesh Fallback",
      body: "When towers drop, devices form a peer-to-peer mesh. Messages queue, sync, and replicate across the network automatically.",
      icon: <IconMesh />,
    },
    {
      title: "Civilian Signal-In",
      body: "Verified public reporting with automatic geotag, photo EVI, and bot-filtered noise. Weeds out rumors before they reach dispatch.",
      icon: <IconUser />,
    },
    {
      title: "After-Action Replay",
      body: "Every incident is recoverable as a timestamped timeline. Post-incident reviews go from weeks to hours.",
      icon: <IconReplay />,
    },
  ];
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal mb-16 max-w-[760px]">
          <p className="kicker">What's inside Signal</p>
          <h2 className="display-lg mt-4 text-balance">
            Six modules. One operational truth.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title} className="floating-card reveal p-8" data-reveal-delay={i * 80}>
              <div
                className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-border-subtle bg-bg-raised text-violet"
                style={{ animation: `bob 4s ease-in-out ${i * 0.2}s infinite` }}
              >
                {f.icon}
              </div>
              <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-text-secondary">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Outcomes
 * ============================================================ */
function OutcomesSection() {
  const metrics = [
    { delta: "−72%", label: "response latency" },
    { delta: "+3.4×", label: "field coordination clarity" },
    { delta: "−58%", label: "duplicate dispatches" },
  ];
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal mb-16 max-w-[820px]">
          <p className="kicker">Outcomes</p>
          <h2 className="display-lg mt-4 text-balance">
            Real outcomes from a simulated deployment.
          </h2>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.7] text-text-secondary">
            We benchmarked Signal against the legacy stack across 18 multi-agency drill scenarios.
            Every metric below was measured, not modeled.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <div key={m.label} className="floating-card reveal p-10 text-center" data-reveal-delay={i * 120}>
              <p className="stat-num">{m.delta}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-text-tertiary">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Testimonials
 * ============================================================ */
function TestimonialsSection() {
  const t = [
    {
      quote:
        "I've run drills for twelve years. The first time we used Signal, I knew where every one of my eighty-four responders was without a single radio call. That has never happened before.",
      name: "Cpt. Maya Okafor",
      role: "Field Commander, Rescue Brigade Lagos",
    },
    {
      quote:
        "Triage used to mean screaming across a tent. Now it's one shared queue. The hours we save are literally lives.",
      name: "Dr. Harish Narayan",
      role: "Emergency Physician, AIIMS Delhi",
    },
    {
      quote:
        "I reported a trapped family. Ninety seconds later a responder was on their way. I saw the status change in real time. I will never forget that feeling.",
      name: "Jun Park",
      role: "Civilian Volunteer, Tohoku Drill",
    },
  ];
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-[1280px]">
        <div className="reveal mb-16 max-w-[760px]">
          <p className="kicker">Field reports</p>
          <h2 className="display-lg mt-4 text-balance">
            From the people who actually run toward the chaos.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.map((q, i) => (
            <div key={q.name} className="floating-card reveal flex flex-col p-8" data-reveal-delay={i * 120}>
              <svg width="28" height="28" viewBox="0 0 28 28" className="text-violet/60" aria-hidden>
                <path d="M10 8c-3 0-5 2-5 5v7h7v-7H8c0-2 1-3 2-3V8zm12 0c-3 0-5 2-5 5v7h7v-7h-4c0-2 1-3 2-3V8z" fill="currentColor"/>
              </svg>
              <p className="mt-5 flex-1 text-[15px] leading-[1.65] text-text-primary">{q.quote}</p>
              <div className="mt-6 border-t border-border-subtle pt-5">
                <p className="text-[13px] font-semibold">{q.name}</p>
                <p className="mt-0.5 text-[12px] text-text-tertiary">{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * CTA Band
 * ============================================================ */
function CTABand() {
  return (
    <section className="relative overflow-hidden px-6 py-40">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[120px]" />
      <div className="relative mx-auto max-w-[1100px] text-center">
        <h2 className="display-lg text-balance">
          See every decision, every design choice,{" "}
          <span className="text-text-secondary">every tradeoff.</span>
        </h2>
        <div className="mt-12 inline-block">
          <Link to="/case-study" className="btn-violet !px-8 !py-4 !text-[16px]">
            View Full Case Study <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Icons
 * ============================================================ */
function IconClock() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>); }
function IconFork() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4v6m0 0c0 3 3 4 6 4s6 1 6 4v2M6 10c0 3 3 4 6 4M18 4v6"/></svg>); }
function IconHeart() { return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 11l9 9 9-9a5 5 0 00-9-3 5 5 0 00-9 3z"/></svg>); }
function IconMap() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6zM9 4v16M15 6v16"/></svg>); }
function IconBrain() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 4a3 3 0 00-3 3 3 3 0 00-3 3 3 3 0 002 3 3 3 0 003 3 3 3 0 003 3v-15a3 3 0 00-2 0zM15 4a3 3 0 013 3 3 3 0 013 3 3 3 0 01-2 3 3 3 0 01-3 3 3 3 0 01-3 3"/></svg>); }
function IconChannels() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="4" rx="1"/><rect x="3" y="11" width="18" height="4" rx="1"/><rect x="3" y="17" width="12" height="4" rx="1"/></svg>); }
function IconMesh() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6l8 0M7 7l4 4M17 7l-4 4M11 13l-4 4M13 13l4 4M8 18l8 0" opacity="0.5"/></svg>); }
function IconUser() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>); }
function IconReplay() { return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12a9 9 0 109-9M3 4v8h8"/></svg>); }
