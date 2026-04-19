import { Link } from "@tanstack/react-router";
import { SignalLogo } from "./SignalLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border-subtle/40 bg-bg-base px-6 pb-10 pt-28 md:pt-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <SignalLogo className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-[-0.02em]">signal</span>
          </div>
          <p className="mt-5 text-balance text-[18px] font-medium tracking-[-0.02em] text-text-primary">
            Coordination when it matters most.
          </p>
          <p className="mt-3 max-w-[420px] text-[14px] leading-[1.7] text-text-secondary">
            Signal is a student-led product case study exploring how design can reduce response
            latency in mass-emergency scenarios. Built with care by a sole designer.
          </p>
        </div>

        <FooterCol
          title="Explore"
          items={[
            { label: "Overview", to: "/" },
            { label: "Product", to: "/product" },
            { label: "Case Study", to: "/case-study" },
            { label: "Process", to: "/process" },
          ]}
        />
        <FooterCol
          title="Resources"
          items={[
            { label: "Research PDF", to: "/case-study" },
            { label: "Figma File", to: "/case-study" },
            { label: "Design System", to: "/case-study" },
            { label: "Motion Specs", to: "/case-study" },
          ]}
        />
        <FooterCol
          title="Connect"
          items={[
            { label: "LinkedIn", to: "/contact" },
            { label: "Dribbble", to: "/contact" },
            { label: "Read.cv", to: "/contact" },
            { label: "Email", to: "/contact" },
          ]}
        />
      </div>

      {/* Massive watermark */}
      <div className="pointer-events-none mt-16 select-none overflow-hidden">
        <div
          className="text-center font-display font-semibold leading-none tracking-[-0.06em] text-text-primary opacity-[0.06]"
          style={{ fontSize: "clamp(120px, 22vw, 280px)" }}
        >
          SIGNAL
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1280px] flex-col items-start justify-between gap-3 border-t border-border-subtle/40 pt-6 text-[12px] text-text-tertiary md:flex-row md:items-center">
        <p>© 2026 Signal Case Study · Designed &amp; prototyped by Your Name</p>
        <p className="font-mono">Last deployed drill: 19 Apr 2026</p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-text-tertiary">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it.label}>
            <Link
              to={it.to}
              className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
