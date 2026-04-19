import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { FloatingCard } from "@/components/FloatingCard";
import { useReveal } from "@/hooks/useReveal";
import portrait from "@/assets/portrait-bust.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Signal" },
      { name: "description", content: "About the designer behind Signal — a product designer obsessed with life-stakes interfaces, evidence-based craft, and quiet design." },
      { property: "og:title", content: "About — Signal" },
      { property: "og:description", content: "Origin, philosophy, and the work that shaped how I design today." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const ref = useReveal();
  return (
    <PageShell>
      <div ref={ref}>
        <section className="relative px-6 pt-40 md:pt-48 pb-24">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="tilt-card relative">
                <div className="tilt-inner relative">
                  <div className="absolute inset-x-12 -bottom-6 h-24 rounded-full bg-violet/40 blur-3xl" />
                  <img src={portrait} alt="Abstract portrait of the designer" className="relative w-full" loading="eager" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="kicker">About</p>
              <h1 className="display-lg mt-5 text-balance">
                I design for the moments people don't talk about afterward — because everything just worked.
              </h1>
              <div className="mt-10 space-y-6 text-[16px] leading-[1.8] text-text-secondary">
                <p>
                  I started as a generative-art kid who got obsessed with how interfaces shape the
                  decisions people make under pressure. Somewhere along the way I realized the most
                  interesting design problems weren't on consumer apps — they were on the screens
                  doctors, dispatchers, pilots, and operators looked at when seconds mattered.
                </p>
                <p>
                  My philosophy is straightforward: clarity before cleverness, evidence before
                  taste, and quiet design over loud design. A product is well-designed if its user
                  forgets it exists in the moment they need it most. I treat every project as a
                  contract with the person on the other side of the screen.
                </p>
                <p>
                  Signal is the project that crystallized why I want to work on life-stakes
                  products. The interface is invisible at the moment of action — and that's the
                  whole point. Designing for ambiguity, urgency, and consequence is the work I want
                  to do for the rest of my career.
                </p>
                <p>
                  My influences are an unfashionable mix: Edward Tufte taught me that data has a
                  shape and the shape has a moral weight. Dieter Rams taught me restraint as
                  discipline, not aesthetic. Julie Zhuo taught me that craft and management are the
                  same skill at different fidelities. Michael Bierut taught me that typography is
                  the cheapest way to be taken seriously.
                </p>
                <p>
                  Today I'm chasing roles where I can apply this thinking at scale — full-time and
                  internship product design at Microsoft, Meta, Apple, Amazon, Netflix, and Google.
                  If you build software people rely on, I'd like to talk.
                </p>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { kicker: "Currently reading", body: "Designing Disorder, Sennett & Sendra" },
                  { kicker: "Currently building", body: "A field-research toolkit for emergency UX" },
                  { kicker: "Currently learning", body: "Origami Studio · spring physics" },
                ].map((c) => (
                  <FloatingCard key={c.kicker} className="!p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                      {c.kicker}
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.55] text-text-primary">{c.body}</p>
                  </FloatingCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
