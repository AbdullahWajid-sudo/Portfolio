export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-blue-200 font-headline">
          Abdullah Wajid
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-blue-200 border-b-2 border-blue-200 pb-1 font-headline tracking-tight"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-neutral-400 hover:text-blue-100 transition-colors font-headline tracking-tight"
            href="#about"
          >
            About
          </a>
          <a
            className="text-neutral-400 hover:text-blue-100 transition-colors font-headline tracking-tight"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-neutral-400 hover:text-blue-100 transition-colors font-headline tracking-tight"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-neutral-400 hover:text-blue-100 transition-colors font-headline tracking-tight"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded font-headline font-bold scale-95 active:scale-90 transition-transform hover:bg-white/5 transition-all duration-300">
          Hire Me
        </button>
      </div>
    </nav>
  );
}
