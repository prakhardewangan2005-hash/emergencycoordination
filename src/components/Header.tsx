import { Link, useRouterState } from "@tanstack/react-router";
import { SignalLogo } from "./SignalLogo";

type NavItem = { to: string; label: string; live?: boolean };
const NAV: NavItem[] = [
  { to: "/", label: "Overview" },
  { to: "/product", label: "Product", live: true },
  { to: "/case-study", label: "Case Study" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { location } = useRouterState();
  const path = location.pathname;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 md:pt-8">
      <nav
        aria-label="Primary"
        className="glass-pill pointer-events-auto flex w-full max-w-[1180px] items-center justify-between gap-4 rounded-full px-3 py-2 md:px-4 md:py-2.5"
      >
        <Link to="/" className="flex items-center gap-2 pl-2 pr-1">
          <SignalLogo className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-text-primary">signal</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to as "/"}
                  className="group relative flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-medium text-text-secondary transition-all duration-220 hover:text-text-primary"
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-[6px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-violet shadow-[0_0_10px_rgba(139,92,246,0.6)] transition-all duration-220 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </span>
                  {item.live ? (
                    <span className="ml-0.5 inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-cyan">
                      <span className="dot-live h-1 w-1" /> Live
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to="/case-study" className="btn-violet hidden md:inline-flex">
          View Full Case Study
          <span aria-hidden>→</span>
        </Link>
      </nav>
    </header>
  );
}
