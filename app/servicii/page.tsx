import { getServicii } from "@/lib/wordpress";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicii",
  description: "Soluții software complete — de la web development la cloud infrastructure",
};

export default async function ServiciiPage() {
  let servicii: any[] = [];
  try {
    servicii = await getServicii();
  } catch {
    servicii = [];
  }

  return (
    <div className="relative overflow-hidden">
      <div className="glow w-[500px] h-[500px] -top-32 -left-32 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {servicii.map((s: any) => (
              <div key={s.slug || s.databaseId} className="card p-8 group">
                <div className="flex items-start gap-5">
                  {s.acfServicii?.icon && (
                    <div className="w-12 h-12 bg-accent-dim rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <span className="text-2xl">{s.acfServicii.icon}</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-xl font-bold tracking-tight mb-2">{s.title}</h2>
                    {s.acfServicii?.shortDescription && (
                      <p className="text-sm text-muted leading-relaxed mb-5">{s.acfServicii.shortDescription}</p>
                    )}
                  </div>
                </div>

                {s.acfServicii?.features?.length > 0 && (
                  <ul className="space-y-2 mt-5 pt-5 border-t border-white/[0.06]">
                    {s.acfServicii.features.map((f: any, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                        <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7"/>
                        </svg>
                        {f.featureText}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/[0.06]">
                  {s.acfServicii?.price && (
                    <span className="font-heading text-2xl font-bold text-accent tracking-tight">{s.acfServicii.price}</span>
                  )}
                  <Link href="/contact" className="text-sm text-accent font-medium hover:text-accent-dark transition-colors flex items-center gap-1">
                    Solicită ofertă
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                  </Link>
                </div>
              </div>
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
