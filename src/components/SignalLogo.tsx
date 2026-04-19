export function SignalLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="3" fill="url(#sg)" />
      <circle cx="16" cy="16" r="7" stroke="url(#sg)" strokeWidth="1.2" opacity="0.8" />
      <circle cx="16" cy="16" r="11" stroke="url(#sg)" strokeWidth="1" opacity="0.5" />
      <circle cx="16" cy="16" r="15" stroke="url(#sg)" strokeWidth="0.8" opacity="0.25" />
      <path d="M16 4 L16 8" stroke="url(#sg)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
