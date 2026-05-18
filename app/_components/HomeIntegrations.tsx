import Link from "next/link";

export default function HomeIntegrations() {
  return (
    <section className="py-32 bg-[#0d0d10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 flex flex-col items-start gap-8">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Seamless Integration</h2>
          <p className="text-muted max-w-lg text-base leading-relaxed">Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.</p>
        </div>
        <Link href="/integrations" className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform">
          See All Integrations
        </Link>
      </div>

      {/* Infinite Loop Marquee Strip */}
      <div className="flex w-full overflow-hidden border-y border-white/[0.05] bg-black/50">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Original Items */}
          {[...Array(12)].map((_, i) => (
            <div key={`orig-${i}`} className="w-[120px] md:w-[150px] h-[100px] flex items-center justify-center border-r border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer group shrink-0">
              <span className="text-white/40 text-3xl group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {i % 3 === 0 ? "✹" : i % 3 === 1 ? "✺" : "✦"}
              </span>
            </div>
          ))}
          {/* Duplicated Items for seamless infinite loop */}
          {[...Array(12)].map((_, i) => (
            <div key={`dup-${i}`} className="w-[120px] md:w-[150px] h-[100px] flex items-center justify-center border-r border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer group shrink-0">
              <span className="text-white/40 text-3xl group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {i % 3 === 0 ? "✹" : i % 3 === 1 ? "✺" : "✦"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
