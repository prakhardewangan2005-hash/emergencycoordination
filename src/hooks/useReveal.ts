import { useEffect, useRef } from "react";

/**
 * Adds .in to children of [data-reveal-root] when they enter the viewport.
 * Use the .reveal class on any element to opt-in.
 */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const idx = Number(el.dataset.revealDelay ?? 0);
            window.setTimeout(() => el.classList.add("in"), idx);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
