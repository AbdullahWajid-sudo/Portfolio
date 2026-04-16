export default function Skills() {
  return (
    <main>
      <section
        className="py-32 bg-surface-container-low relative overflow-hidden"
        id="skills"
      >
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
            <div className="space-y-4">
              <label className="text-tertiary font-label text-xs uppercase tracking-[0.3em] font-semibold">
                Stack
              </label>
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
                Technical Prowess.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed">
              A curated selection of modern technologies used to build resilient
              digital architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card border border-white/5 p-8 rounded-xl hover:bg-surface-container-highest transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="terminal"
                >
                  terminal
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">
                React / Next.js
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Building dynamic, SEO-optimized user interfaces with server-side
                excellence.
              </p>
            </div>

            <div className="glass-card border border-white/5 p-8 rounded-xl hover:bg-surface-container-highest transition-all group">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-tertiary"
                  data-icon="database"
                >
                  database
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">
                Node.js Ecosystem
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Scalable backend architectures using Express and modern database
                paradigms.
              </p>
            </div>

            <div className="glass-card border border-white/5 p-8 rounded-xl hover:bg-surface-container-highest transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="deployed_code"
                >
                  deployed_code
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">
                Three.js / WebGL
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Creating immersive 3D web experiences and interactive
                visualizations.
              </p>
            </div>

            <div className="glass-card border border-white/5 p-8 rounded-xl hover:bg-surface-container-highest transition-all group">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-tertiary"
                  data-icon="palette"
                >
                  palette
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-3">
                Tailwind / GSAP
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Precision styling and performant animations for polished UI
                delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
