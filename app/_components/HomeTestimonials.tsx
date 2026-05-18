import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";

export default function HomeTestimonials() {
  return (
    <section className="py-32 relative bg-black border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Supported by many<br />companies around the world
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div className="card p-10 h-full bg-gradient-to-br from-dark-800 to-dark-950 flex flex-col justify-between">
              <div>
                <span className="bg-accent text-dark-950 text-xs px-3 py-1 rounded font-bold uppercase tracking-wider mb-8 inline-block">CEO's Words</span>
                <p className="text-2xl text-white font-medium leading-relaxed mb-10">
                  "Working with you was seamless from start to finish. The final design exceeded our expectations. Your attention to detail and ability to adaptable was outstanding throughout the entire process to the world."
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-dark-700 rounded-full overflow-hidden relative">
                    <Image src="https://i.pravatar.cc/150?img=68" alt="Emily R" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Emily R</h4>
                    <p className="text-muted text-sm">Co Founder of Metrilo</p>
                  </div>
                </div>
                <div className="text-white font-bold text-xl hidden sm:block">Setrex.</div>
              </div>
            </div>
          </FadeUp>

          <div className="flex flex-col gap-6">
            <FadeUp delay={0.2}>
              <div className="card p-8 bg-black border border-white/5 h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-5xl font-bold text-white">15+</h3>
                  <span className="bg-accent/20 text-accent text-[10px] px-2 py-1 rounded uppercase tracking-wider font-bold">Years of experiences</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="card p-8 bg-black border border-white/5 h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-5xl font-bold text-white">98%</h3>
                  <span className="bg-accent/20 text-accent text-[10px] px-2 py-1 rounded uppercase tracking-wider font-bold">Client satisfaction rate</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">We pride ourselves on delivering excellence, reflected in the high satisfaction of every client.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
