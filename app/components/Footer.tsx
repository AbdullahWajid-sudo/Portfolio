import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-neutral-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
        <div className="text-lg font-black text-blue-200 font-headline">
          Abdullah Wajid
        </div>
        <div className="text-neutral-500 font-label text-sm tracking-wide">
          © 2026 Abdullah Wajid Built with architectural precision.
        </div>
        <div className="flex gap-8">
          <a
            className="text-neutral-500 hover:text-green-400 transition-colors font-label uppercase tracking-widest text-[10px]"
            href="https://github.com/AbdullahWajid-sudo"
          >
            GitHub
          </a>
          <a
            className="text-neutral-500 hover:text-green-400 transition-colors font-label uppercase tracking-widest text-[10px]"
            href="https://www.linkedin.com/in/abdullah-wajid/"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </footer>
  );
}
