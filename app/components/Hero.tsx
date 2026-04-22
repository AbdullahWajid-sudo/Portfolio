"use client";

import { TypeAnimation } from "react-type-animation";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <main>
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg"
        id="home"
      >
        <div className="w-full max-w-300 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-label text-tertiary">
                Available for high-impact builds
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter text-glow">
                I CREATE
              </h1>
              <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter text-glow text-primary min-h-45 md:min-h-45">
                <div className="block w-120">
                  <TypeAnimation
                    sequence={[
                      "AI Web Apps.",
                      2000,
                      "Smart Interfaces.",
                      2000,
                      "Next-Gen Apps.",
                      2000,
                      "Scalable Systems.",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </h1>
            </div>
            <p className="text-on-surface-variant text-lg max-w-md font-light leading-relaxed">
              Crafting high-performance digital systems that blend speed,
              intelligence, and refined design.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                className="bg-primary text-on-primary-fixed px-8 py-4 rounded-lg font-headline font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(173,198,255,0.3)] hover:scale-105 transition-transform"
                href="/Abdullah Resume.pdf"
                download="Abdullah Resume.pdf"
              >
                My Resume
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
              </a>
            </div>
          </div>
          <div className="block relative">
            <div className="w-full aspect-square relative">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-[100px]"></div>
              <Hero3D />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-background to-transparent"></div>
      </section>
    </main>
  );
}
