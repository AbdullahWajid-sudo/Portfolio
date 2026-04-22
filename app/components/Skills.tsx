"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCircleWithNumber } from "./AnimatedCircleWithNumber";
import { skills } from "../data/skills";
import { SkillCard } from "./SkillCard";
import Image from "next/image";

export default function Skills() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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
            <div className="md:col-span-8 md:row-span-4 rounded-3xl sm:rounded-4xl bento-card p-6 sm:p-8 flex flex-col relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-120 h-120 bg-purple-500/20 blur-[70px] rounded-full z-0"></div>
              <div className="relative z-10 flex flex-col h-full ">
                <div className="flex justify-between items-start gap-4 mb-8 sm:mb-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                      grid_view
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
                    <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-tighter">
                      System Normal
                    </span>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <h4 className="text-2xl font-headline font-bold text-white tracking-tight">
                    Primary Tech Arsenal
                  </h4>
                  <p className="text-sm font-label uppercase tracking-[0.2em] text-on-surface-variant mt-1 font-semibold z-10">
                    Version control system optimized
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 z-10">
                  {skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 rounded-4xl bento-card p-8 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    auto_awesome
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
                  <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-tighter">
                    UI / UX
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-2xl font-headline font-bold text-white tracking-tight">
                  Dynamic UX
                </h4>
                <p className="text-sm font-label uppercase tracking-[0.2em] text-on-surface-variant mt-1 font-semibold z-10">
                  CONTEXT-AWARE INTERFACES
                </p>
                <div className="mt-4 space-y-2 z-10">
                  <p className="text-m text-on-surface-variant/80 font-light leading-relaxed"></p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                      <span className="text-[12px] font-label font-bold text-on-surface">
                        GSAP
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                      <span className="text-[12px] font-label font-bold text-on-surface">
                        FRAMER
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                      <span className="text-[12px] font-label font-bold text-on-surface">
                        RESPONSIVE
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-20 right-7 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-all duration-500">
                  <span
                    className="material-symbols-outlined text-[200px] scale-[3] md:scale-[5] block"
                    style={{
                      fontVariationSettings: "'wght' 100",
                      lineHeight: 1, // Crucial to prevent clipping
                    }}
                  >
                    token
                  </span>
                </div>
                <div className="absolute bottom-11 right-23 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-all duration-500">
                  <span
                    className="material-symbols-outlined text-[200px] scale-[3] md:scale-[5] block"
                    style={{
                      fontVariationSettings: "'wght' 100",
                      lineHeight: 1, // Crucial to prevent clipping
                    }}
                  >
                    token
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:row-span-2 rounded-4xl bento-card p-8 flex flex-col relative overflow-hidden group">
              <div className="flex justify-between items-start mb-6">
                <div></div>
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
                  <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-tighter">
                    Performance
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col items-center justify-center text-center grow">
                <AnimatedCircleWithNumber
                  targetProgress={99.9}
                  duration={1000}
                />
                <div className="space-y-2">
                  <p className="text-[11px] font-label uppercase tracking-[0.3em] text-on-surface-variant font-bold border-y border-white/5 py-2">
                    FRICTIONLESS SPEED
                  </p>
                  <p className="text-xs text-on-surface-variant/80 font-light mt-2">
                    Optimized for maximum retention through ultra-fast rendering
                    and perfect Lighthouse execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 md:row-span-2 rounded-4xl bento-card p-8 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    cloud
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
                  <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-tighter">
                    Cloud
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-2xl font-headline font-bold text-white tracking-tight">
                  Cloud Infrastructure
                </h4>
                <p className="text-sm font-label uppercase tracking-[0.2em] text-on-surface-variant mt-1 font-semibold z-10">
                  SERVERLESS ARCHITECTURES
                </p>
                <div className="mt-4 space-y-2 z-10">
                  <p className="text-m text-on-surface-variant/80 font-light leading-relaxed">
                    Leveraging serverless architectures and real-time databases
                    to build scalable, secure, and highly responsive web
                    applications.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                      <span className="text-[12px] font-label font-bold text-on-surface">
                        FIREBASE
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                      <span className="text-[12px] font-label font-bold text-on-surface">
                        SUPABASE
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
                      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                      <span className="text-[12px] font-label font-bold text-on-surface">
                        SERVERLESS
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-20 right-7 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-all duration-500">
                  <span
                    className="material-symbols-outlined text-[200px] scale-[3] md:scale-[5] block"
                    style={{
                      fontVariationSettings: "'wght' 100",
                      lineHeight: 1,
                    }}
                  >
                    cloud_queue
                  </span>
                </div>
                <div className="absolute bottom-10 right-20 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-all duration-500">
                  <span
                    className="material-symbols-outlined text-[200px] scale-[3] md:scale-[5] block"
                    style={{
                      fontVariationSettings: "'wght' 100",
                      lineHeight: 1,
                    }}
                  >
                    cloud_queue
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 md:row-span-2 rounded-4xl bento-card p-8 flex flex-col justify-between overflow-hidden group relative">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
                  <h4 className="font-headline font-bold text-lg text-white">
                    Certifications
                  </h4>
                </div>
                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
                  <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-tighter">
                    Verified
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="space-y-4">
                <div className="cert-carousel relative overflow-hidden rounded-4xl border border-white/10 bg-black/20">
                  <div className="cert-carousel-track flex gap-4 px-3 py-4">
                    {[
                      "/certification/c1.webp",
                      "/certification/c2.webp",
                      "/certification/c3.webp",
                      "/certification/c4.webp",
                    ]
                      .concat([
                        "/certification/c1.webp",
                        "/certification/c2.webp",
                        "/certification/c3.webp",
                        "/certification/c4.webp",
                      ])
                      .map((src, idx) => (
                        <div
                          key={`${src}-${idx}`}
                          className="cert-card group shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 cursor-pointer"
                          onClick={() => setSelectedCert(src)}
                        >
                          <Image
                            width={400}
                            height={300}
                            src={src}
                            alt={`Certification ${(idx % 4) + 1}`}
                            className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-3xl shadow-2xl transition-transform duration-400 ease-out group-hover:scale-105"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-10 right-0 text-white hover:text-primary transition-colors flex items-center gap-2 font-label uppercase tracking-widest text-xs sm:text-sm"
                >
                  Close
                  <span className="material-symbols-outlined">close</span>
                </button>
                <Image
                  width={800}
                  height={600}
                  src={selectedCert}
                  alt="Enlarged Certification"
                  className="max-w-[95vw] max-h-[80vh] md:max-w-4xl object-contain rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
