import type { ReactNode } from "react";

export function FloatingCard({
  children,
  className = "",
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  return (
    <div className={`floating-card p-7 md:p-8 ${className}`} style={tilt ? { transform: "perspective(1400px)" } : undefined}>
      {children}
    </div>
  );
}
