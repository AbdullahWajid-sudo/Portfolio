"use client";

import { useEffect, useState } from "react";

const sections = ["home", "about","skills", "projects", "contact"];
export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", 
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-blue-200 font-headline">
          Abdullah Wajid
        </div>
        <div className="hidden md:flex items-center gap-8">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`transition ${
                active === sec
                  ? "text-blue-200 border-b-2 border-blue-200 pb-1 font-headline tracking-tight"
                  : "text-neutral-400 hover:text-blue-100 transition-colors font-headline tracking-tight"
              }`}
            >
              {sec.toUpperCase()}
            </a>
          ))}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded font-headline font-bold scale-95 active:scale-90 transition-transform hover:bg-white/5 transition-all duration-300">
          Hire Me
        </button>
      </div>
    </nav>
  );
}
