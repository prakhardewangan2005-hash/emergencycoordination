import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { FloatingCard } from "@/components/FloatingCard";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Signal" },
      { name: "description", content: "Get in touch. For full-time, internships, collaborations, or just to talk about life-stakes design." },
      { property: "og:title", content: "Contact — Signal" },
      { property: "og:description", content: "Reach out for full-time, internships, or collaborations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <PageShell>
      <section className="relative px-6 pt-40 md:pt-48 pb-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="kicker">Contact</p>
          <h1 className="mt-6 text-balance">
            <a
              href="mailto:hello@signal-cs.design"
              className="group inline-block font-display font-semibold tracking-[-0.04em]"
              style={{ fontSize: "clamp(36px, 7vw, 96px)", lineHeight: 1 }}
            >
              <span className="bg-gradient-to-r from-text-primary via-text-primary to-text-primary bg-clip-text">
                hello@signal-cs.design
              </span>
              <span className="mt-3 block h-[3px] w-0 rounded-full bg-gradient-to-r from-violet to-cyan transition-all duration-500 group-hover:w-full" />
            </a>
          </h1>
          <p className="mt-8 text-[16px] leading-[1.7] text-text-secondary">
            Open to product design roles — full-time and internship — at Microsoft, Meta, Apple,
            Amazon, Netflix, and Google. Also open to collaborations on life-stakes products.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-12">
          <FloatingCard className="lg:col-span-7">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="relative h-3 w-3">
                  <div className="absolute inset-0 rounded-full bg-cyan shadow-[0_0_24px_8px_rgba(6,182,212,0.7)]" />
                  {[0, 0.4, 0.8].map((d, i) => (
                    <span key={i} className="absolute inset-0 rounded-full border border-cyan/60" style={{ animation: `radar 2.6s cubic-bezier(0.22,1,0.36,1) ${d}s infinite` }} />
                  ))}
                </div>
                <h3 className="mt-10 text-[22px] font-semibold">Signal received.</h3>
                <p className="mt-2 text-[14px] text-text-secondary">I'll respond within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field label="Name" id="name" />
                <Field label="Email" id="email" type="email" />
                <Field label="Message" id="message" textarea />
                <button type="submit" className="btn-violet w-full justify-center !py-3.5">
                  Send signal <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </FloatingCard>

          <div className="space-y-4 lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
              Find me
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "LinkedIn", href: "#" },
                { name: "Dribbble", href: "#" },
                { name: "Read.cv", href: "#" },
                { name: "Email", href: "mailto:hello@signal-cs.design" },
              ].map((s, i) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="floating-card group flex items-center gap-3 !p-5"
                  style={{ animation: `bob 4s ease-in-out ${i * 0.3}s infinite` }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet to-cyan text-[13px] font-semibold">
                    {s.name[0]}
                  </span>
                  <span className="text-[14px] font-medium">{s.name}</span>
                </a>
              ))}
            </div>
            <div className="floating-card !p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                Response time
              </p>
              <p className="mt-3 text-[14px] leading-[1.6]">
                I read every message. Response within 48 hours, usually same day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  id,
  type = "text",
  textarea,
}: {
  label: string;
  id: string;
  type?: string;
  textarea?: boolean;
}) {
  const Cmp = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
        {label}
      </span>
      <Cmp
        id={id}
        name={id}
        type={textarea ? undefined : type}
        rows={textarea ? 5 : undefined}
        required
        className="w-full rounded-xl border border-border-subtle bg-bg-raised px-4 py-3 text-[14px] text-text-primary outline-none transition-colors placeholder:text-text-tertiary focus:border-violet/60"
      />
    </label>
  );
}
