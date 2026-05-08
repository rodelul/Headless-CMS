import { getServicii, getPageBySlug, getSeoMetadata } from "@/lib/wordpress";
import { Service } from "@/types/wordpress";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeUp from "@/components/animations/FadeUp";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug("servicii").catch(() => null);
  if (pageData?.seo) {
    return getSeoMetadata(pageData.seo);
  }
  return {
    title: "Servicii",
    description: "Soluții software complete — de la web development la cloud infrastructure",
  };
}

export default async function ServiciiPage() {
  let servicii: Service[] = [];
  try {
    servicii = await getServicii();
  } catch {
    servicii = [];
  }

  return (
    <div className="relative overflow-hidden">
      <div className="glow w-[500px] h-[500px] -top-32 -left-32 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
        <div className="max-w-3xl mb-16">
          <p className="label-accent mb-4">Servicii</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter mb-6">
            Soluții complete pentru businessul tău digital
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            De la concept la deploy. Fiecare serviciu e adaptat nevoilor tale specifice.
          </p>
        </div>

        {servicii.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicii.map((s: Service, index: number) => (
              <FadeUp key={s.slug || s.databaseId} delay={index * 0.1}>
                <div className="card p-10 group h-full flex flex-col hover:border-accent/20 transition-all duration-300">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                      <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(204,255,0,0.5)] text-accent">
                        ✦
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-2xl font-bold tracking-tight mb-3 text-white group-hover:text-accent transition-colors">{s.title}</h2>
                      {s.acfServicii?.shortDescription && (
                        <p className="text-muted leading-relaxed">{s.acfServicii.shortDescription}</p>
                      )}
                    </div>
                  </div>

                  {(s.acfServicii?.features?.length ?? 0) > 0 && (
                    <ul className="space-y-3 mb-8 pt-8 border-t border-white/5">
                      {s.acfServicii?.features?.map((f: any, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted">
                          <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                          </svg>
                          {f.featureText}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto">
                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                      {s.acfServicii?.price ? (
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest text-dark-500 font-bold mb-1">Pornind de la</span>
                          <span className="font-heading text-3xl font-bold text-white tracking-tight">{s.acfServicii.price}</span>
                        </div>
                      ) : <div />}
                      
                      <Link 
                        href={s.acfServicii?.link || "/contact"} 
                        className="btn-primary py-3 px-8 text-sm relative z-10"
                      >
                        Solicită ofertă
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        ) : (
          <div className="card p-16 text-center">
            <p className="text-muted text-lg mb-2">Serviciile vor apărea aici</p>
            <p className="text-sm text-dark-600">Adaugă servicii din WordPress admin.</p>
          </div>
        )}
      </div>
    </div>
  );
}
