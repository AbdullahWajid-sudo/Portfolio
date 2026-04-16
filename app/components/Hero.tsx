export default function Hero() {
  return (
    <main>
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg"
        id="home"
      >
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-label text-tertiary">
                Available for projects
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-glow">
              I BUILD <br /> <span className="text-primary">DIGITAL</span>{" "}
              <br /> EXPERIENCES.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md font-light leading-relaxed">
              Architecting high-performance web applications with a focus on
              immersive aesthetics and technical precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary-fixed px-8 py-4 rounded-lg font-headline font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(173,198,255,0.3)] hover:scale-105 transition-transform">
                Explore My Work
                <span className="material-symbols-outlined text-lg">
                  arrow_outward
                </span>
              </button>
              <button className="glass-card border border-white/10 text-on-surface px-8 py-4 rounded-lg font-headline font-bold hover:bg-white/5 transition-all">
                About Me
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="w-full aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px]"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-[80%] h-[80%] border border-primary/30 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-[70%] h-[70%] border border-primary/20 rounded-xl rotate-45 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[120px] text-primary/40">
                      language
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>
    </main>
  );
}
