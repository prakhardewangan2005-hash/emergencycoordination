import { useEffect, useMemo, useState } from "react";

/**
 * Drifting "broken star" particles. Pure CSS animation,
 * positions randomized per mount. Respects reduced motion.
 */
export function AmbientParticles({ count = 14 }: { count?: number }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 90,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 10,
        size: 8 + Math.random() * 14,
        color: Math.random() > 0.55 ? "#8B5CF6" : "#06B6D4",
        rotate: Math.random() * 360,
      })),
    [count],
  );

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity: 0.18 }}
    >
      {stars.map((s) => (
        <svg
          key={s.id}
          width={s.size}
          height={s.size}
          viewBox="0 0 24 24"
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: 0,
            color: s.color,
            animation: `drift ${s.duration}s linear ${s.delay}s infinite`,
            transform: `rotate(${s.rotate}deg)`,
          }}
        >
          <path
            d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}
