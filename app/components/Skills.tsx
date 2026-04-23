"use client";

import {
  PrimaryTechArsenal,
  DynamicUX,
  PerformanceCard,
  CloudInfrastructure,
  CertificationsCard,
} from "./bento";

export default function Skills() {
  return (
    <main>
      <section
        className="py-32 bg-[#0b0c10] relative overflow-hidden"
        id="skills"
      >
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute inset-0 scanline opacity-40 pointer-events-none"></div>
        <div className="absolute top-1/4 -left-20 w-150 h-150 bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-150 h-150 bg-purple-600/5 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
            <div className="space-y-4">
              <label className="text-primary font-label text-xs uppercase tracking-[0.4em] font-bold">
                Technical Ecosystem
              </label>
              <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">
                Modern Stack.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm text-lg leading-relaxed font-light">
              A high-fidelity technical infrastructure designed for scalability
              and immersive performance.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-6 min-h-250"
            id="skills-section"
          >
            <PrimaryTechArsenal />

            <DynamicUX />

            <PerformanceCard />

            <CloudInfrastructure />

            <CertificationsCard />
          </div>
        </div>
      </section>
    </main>
  );
}
