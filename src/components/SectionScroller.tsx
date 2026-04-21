import { useEffect, useState } from "react";

export type ScrollSection = { id: string; label: string };

/**
 * Vertical scroll-spy rail. Lists section labels, highlights the one
 * currently in view, and smooth-scrolls to a section on click.
 * Pass exactly the top sections you want to track (e.g. the first 4).
 */
export function SectionScroller({ sections }: { sections: ScrollSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    if (!sections.length) return;
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    if (!targets.length) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId) setActive(bestId);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  if (!sections.length) return null;

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-3 rounded-full border border-border-subtle/60 bg-bg-base/60 px-2 py-3 backdrop-blur-md">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="group relative flex items-center justify-end">
              {/* Label tooltip */}
              <span
                className={`pointer-events-none absolute right-7 whitespace-nowrap rounded-full border border-border-subtle/60 bg-bg-raised/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-md transition-all duration-200 ${
                  isActive
                    ? "translate-x-0 text-text-primary opacity-100"
                    : "translate-x-1 text-text-tertiary opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              >
                {s.label}
              </span>
              <button
                type="button"
                onClick={() => handleClick(s.id)}
                aria-label={`Scroll to ${s.label}`}
                aria-current={isActive ? "true" : undefined}
                className="relative flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "h-2.5 w-2.5 bg-violet shadow-[0_0_14px_rgba(139,92,246,0.85)]"
                      : "h-1.5 w-1.5 bg-text-tertiary/60 group-hover:bg-text-secondary"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
