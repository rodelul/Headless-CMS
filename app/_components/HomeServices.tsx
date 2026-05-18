import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { Service } from "@/types/wordpress";

interface HomeServicesProps {
  servicii: Service[];
}

export default function HomeServices({ servicii }: HomeServicesProps) {
  if (!servicii || servicii.length === 0) return null;

  return (
    <section className="py-32 relative bg-black border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="label-accent mb-4">Ce facem</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                Serviciile Noastre
              </h2>
            </div>
            <Link href="/servicii" className="px-6 py-3 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Vezi toate serviciile <span className="text-lg">→</span>
            </Link>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicii.map((s: Service, i: number) => (
            <FadeUp key={s.slug} delay={i * 0.1}>
              <div className="card p-8 h-full flex flex-col group cursor-pointer bg-dark-800/40">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                  <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(204,255,0,0.5)] text-accent">
                    ✦
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-white">{s.title}</h3>
                {s.acfServicii?.shortDescription && (
                  <p className="text-muted leading-relaxed mb-8 flex-1">{s.acfServicii.shortDescription}</p>
                )}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    {s.acfServicii?.price && (
                      <>
                        <span className="text-[10px] uppercase tracking-widest text-dark-500 font-bold mb-0.5">De la</span>
                        <span className="text-xl font-bold text-white tracking-tight">{s.acfServicii.price}</span>
                      </>
                    )}
                  </div>
                  <Link
                    href={s.acfServicii?.link || "/contact"}
                    className="text-accent text-sm font-bold flex items-center gap-1 group/btn"
                  >
                    Details
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
