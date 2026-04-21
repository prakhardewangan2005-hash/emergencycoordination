/**
 * Continuous shimmering gold wave — sits just above the footer.
 * Two stacked SVG waves drift in opposite directions with a glowing
 * gold gradient, plus a soft halo behind for premium depth.
 */
export function GoldWave() {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative -mb-px h-[140px] w-full overflow-hidden md:h-[180px]"
    >
      {/* Soft gold halo */}
      <div className="absolute inset-x-0 bottom-0 h-[120px] bg-[radial-gradient(ellipse_at_center_bottom,rgba(251,191,36,0.28),rgba(245,158,11,0.12)_40%,transparent_72%)] blur-2xl" />

      {/* Wave 1 */}
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-full w-[200%]"
        style={{ animation: "wave-flow 14s linear infinite" }}
      >
        <defs>
          <linearGradient id="goldA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78350f" stopOpacity="0.0" />
            <stop offset="20%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#fde68a" stopOpacity="1" />
            <stop offset="80%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path
          d="M0,120 C240,60 480,180 720,110 C960,40 1200,160 1440,100 L1440,200 L0,200 Z"
          fill="url(#goldA)"
          opacity="0.55"
          style={{ filter: "drop-shadow(0 0 22px rgba(251,191,36,0.6))" }}
        />
      </svg>

      {/* Wave 2 — counter-drift, brighter highlight */}
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-full w-[200%]"
        style={{ animation: "wave-flow-rev 18s linear infinite", animationDelay: "-3s" }}
      >
        <defs>
          <linearGradient id="goldB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0" />
            <stop offset="50%" stopColor="#fef3c7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,140 C300,90 600,170 900,120 C1140,80 1320,150 1440,130 L1440,200 L0,200 Z"
          fill="url(#goldB)"
          opacity="0.45"
          style={{ filter: "drop-shadow(0 0 28px rgba(253,224,71,0.7))" }}
        />
      </svg>

      {/* Top-edge shimmer line */}
      <div
        className="absolute inset-x-0 bottom-[60px] h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(253,224,71,0.0) 10%, rgba(253,224,71,0.85) 50%, rgba(253,224,71,0.0) 90%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "wave-shimmer 4s ease-in-out infinite",
          filter: "blur(1px) drop-shadow(0 0 12px rgba(251,191,36,0.9))",
        }}
      />
    </div>
  );
}
