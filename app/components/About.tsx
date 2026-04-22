import AnimatedNumber from "./AnimatedNumber";
import Image from "next/image";
export default function About() {
  return (
    <main>
      <section className="py-32 bg-surface" id="about">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
              <Image
                alt="Portrait of Abdullah "
                width={1000}
                height={1000}
                className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-4/5 w-full border border-white/5"
                data-alt="Professional portrait of a male developer in dark clothing, moody dramatic side lighting, high contrast, minimalist background"
                src="/name.png"
              />
            </div>
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <label className="text-tertiary font-label text-xs uppercase tracking-[0.3em] font-semibold">
                  Discovery
                </label>
                <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
                  Technical Precision meets Creative Vision.
                </h2>
              </div>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-light">
                <p>
                  Based at the intersection of robust engineering and modern
                  design, I specialize in building full-stack applications that
                  scale. My approach is rooted in clean code architecture—where
                  every function is intentional and every user flow is seamless.
                </p>
                <p>
                  With a deep focus on the JavaScript ecosystem and AI
                  integration, I transform complex business logic into
                  high-performance digital solutions that push the boundaries of
                  the modern web.
                </p>
              </div>
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8"
                id="stats-section"
              >
                <div className="space-y-1">
                  <div className="text-3xl font-headline font-bold text-primary">
                    <AnimatedNumber target={1} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant font-label">
                    Years Exp
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-headline font-bold text-primary">
                    <AnimatedNumber target={10} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant font-label">
                    Projects
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-headline font-bold text-primary">
                    <AnimatedNumber target={3} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-on-surface-variant font-label">
                    Certifications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
