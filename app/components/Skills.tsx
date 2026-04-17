import { skills } from "../data/skills";
import { SkillCard } from "./SkillCard";

export default function Skills() {
  return (
    <main>
      <section
        className="py-32 bg-[#0b0c10] relative overflow-hidden"
        id="skills"
      >
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute inset-0 scanline opacity-40 pointer-events-none"></div>
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-6 min-h-[1000px]">
            <div className="md:col-span-8 md:row-span-4 rounded-[2rem] bento-card p-8 flex flex-col relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-900/80 flex items-center justify-center border border-white/10 shadow-lg">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        grid_view
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-3xl font-headline font-bold tracking-tight text-white">
                        Primary Tech Arsenal
                      </h3>
                      <span className="text-[10px] font-label uppercase tracking-[0.3em] text-on-surface-variant mt-1">
                        Version control system optimized
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
                    <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-tighter">
                      Systems Normal
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-grow">
                  {skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 rounded-[2rem] bento-card p-8 flex flex-col justify-between group overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    auto_awesome
                  </span>
                </div>
                <div className="w-12 h-6 rounded-full bg-neutral-900 border border-white/10 p-1 flex items-center">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(173,198,255,0.6)] animate-pulse ml-auto"></div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-2xl font-headline font-bold text-white tracking-tight">
                  Adaptive UI
                </h4>
                <p className="text-sm font-label uppercase tracking-[0.2em] text-on-surface-variant mt-1 font-semibold">
                  Intelligent Systems
                </p>
                <div className="mt-4 flex gap-1 items-end">
                  <div className="h-4 w-1 bg-primary/20 rounded-full"></div>
                  <div className="h-6 w-1 bg-primary/40 rounded-full"></div>
                  <div className="h-3 w-1 bg-primary/30 rounded-full"></div>
                  <div className="h-8 w-1 bg-primary/80 rounded-full"></div>
                  <div className="h-5 w-1 bg-primary/50 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 rounded-[2rem] bento-card p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform">
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="45"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="8"
                  ></circle>
                  <circle
                    className="transition-all duration-1000 group-hover:stroke-tertiary"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="45"
                    stroke="#adc6ff"
                    stroke-dasharray="283"
                    stroke-dashoffset="28"
                    stroke-width="8"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-headline font-bold text-white tracking-tighter">
                    99.9
                  </span>
                  <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                    Lighthouse
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-label uppercase tracking-[0.3em] text-on-surface-variant font-bold border-y border-white/5 py-2">
                  System Performance
                </p>
                <p className="text-xs text-on-surface-variant/80 font-light mt-2">
                  Critical Core Web Vitals optimization for enterprise scale.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 md:row-span-2 rounded-[2rem] bento-card p-8 flex flex-col justify-between group">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 rounded-3xl bg-neutral-950 flex items-center justify-center border border-white/5 relative shadow-2xl group-hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    database
                  </span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-tertiary shadow-[0_0_12px_rgba(0,229,75,0.8)]"></div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-headline font-bold text-white">
                      Backend Architecture
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[9px] font-label font-bold bg-white/5 border border-white/10 text-primary-fixed uppercase tracking-wider">
                      Distributed
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-sm font-light leading-relaxed max-w-md">
                    Highly concurrent API architecture leveraging asynchronous
                    event loops and microservices orchestration.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-[10px] font-label font-bold text-on-surface bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      REDIS_CLUSTER
                    </span>
                    <span className="text-[10px] font-label font-bold text-on-surface bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      POSTGRES_SQL
                    </span>
                    <span className="text-[10px] font-label font-bold text-on-surface bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      DOCKER_SWARM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 md:row-span-2 rounded-[2rem] bento-card p-8 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                  <h4 className="font-headline font-bold text-lg text-white">
                    CI/CD Pipeline
                  </h4>
                </div>
                <span className="text-[10px] font-label text-on-surface-variant/60 font-medium">
                  EST 2024
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-black/30 border border-white/5 rounded-2xl flex items-center justify-between group/item hover:bg-black/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-xl">
                      verified
                    </span>
                    <span className="text-sm font-label font-medium text-on-surface">
                      Automated Verification
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant/40 text-lg group-hover/item:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </div>
                <div className="p-3 bg-black/30 border border-white/5 rounded-2xl flex items-center justify-between group/item hover:bg-black/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-xl">
                      sync_alt
                    </span>
                    <span className="text-sm font-label font-medium text-on-surface">
                      Sync Orchestration
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant/40 text-lg group-hover/item:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[9px] font-label uppercase tracking-widest text-on-surface-variant font-bold">
                  Pipeline Status
                </span>
                <div className="flex gap-1">
                  <div className="w-4 h-1 bg-tertiary rounded-full"></div>
                  <div className="w-4 h-1 bg-tertiary rounded-full"></div>
                  <div className="w-4 h-1 bg-tertiary rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
