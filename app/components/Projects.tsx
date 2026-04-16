export default function Projects() {
  return (
    <main>
      <section className="py-32 bg-background" id="projects">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center space-y-4">
            <label className="text-primary font-label text-xs uppercase tracking-[0.3em] font-semibold">
              Portfolio
            </label>
            <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tight">
              Selected Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
                <img
                  alt="Project One"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Modern dashboard interface on a laptop screen, vibrant blue data visualizations, sleek dark mode UI design, high-end tech aesthetic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADQ-4HLqt0lllSwTRWulNB-elLFoBOK-pkGTZ6lQ2UKRo28pgkqR48Ijl-txs1ZCtRSZP3T3Co_ljyVoytuKQdvmXjySexoLj52-61oRD3OhregMzr2NiGdZZx8YLjrbZpCWvbVbKORZQFvD1AbwoX29mNtDLiIIA1wkP_fJGZFJed2hxtbeIf8UrKAZvG5jcFeNdJ059Yrql0MbW329elqiMxqWdRkLiMxLChQgx8_EsZolvmdzlw5uHK84YAvc3Yh_hhhnHJX6Q"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <button className="bg-on-surface text-background px-6 py-2 rounded-full font-headline font-bold">
                    View Case Study
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-2xl font-headline font-bold">
                    Quantum Finance Platform
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-surface-container-lowest text-[10px] text-tertiary font-label uppercase tracking-wider rounded">
                      Next.js
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-[10px] text-tertiary font-label uppercase tracking-wider rounded">
                      Chart.js
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary-fixed-dim">
                  arrow_outward
                </span>
              </div>
            </div>

            <div className="group relative space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
                <img
                  alt="Project Two"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Digital grid lines over a black background, glowing neon blue highlights, futuristic cyber security aesthetic, technical and precise"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjyYfxOyTOX2azA0msT_fxfwuywlcndD-ohDia3PhPNB5c_HvzaShugE6g9xBHZwbLN4ISiDJJxaargz5oPPRQz8iu7Nu8wkPY-3ujPTYGf9_Dr0XvaMwWqQUP7cSuuq7BOJ9b-btpo0QfAJmZ3jQN0Umj3X6YJAZQAmOSe81lyxFJlciEM5mLI23_37T65poSQj3wjj_BcXG9JfRVSmyCxwQDh2GBAmr936-IBqKXXaxFzw2E-JXwka7cL4j1qrtEMcxKggq2Gz4"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <button className="bg-on-surface text-background px-6 py-2 rounded-full font-headline font-bold">
                    View Case Study
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-2xl font-headline font-bold">
                    Cyber Security Protocol
                  </h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-surface-container-lowest text-[10px] text-tertiary font-label uppercase tracking-wider rounded">
                      Three.js
                    </span>
                    <span className="px-2 py-1 bg-surface-container-lowest text-[10px] text-tertiary font-label uppercase tracking-wider rounded">
                      Node.js
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary-fixed-dim">
                  arrow_outward
                </span>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center">
            <button className="text-primary font-headline font-bold border-b border-primary/30 pb-2 hover:text-primary-fixed transition-colors">
              View All Archives
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
