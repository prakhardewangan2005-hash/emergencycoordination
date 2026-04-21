import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AmbientParticles } from "./AmbientParticles";
import { GoldWave } from "./GoldWave";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-bg-base text-text-primary">
      <AmbientParticles />
      <Header />
      <main className="relative z-10">{children}</main>
      <GoldWave />
      <Footer />
    </div>
  );
}
