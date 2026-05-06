import { getHomepageData, formatDate, cleanExcerpt, getFeaturedImageUrl } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const data = await getHomepageData();

  const acf = data.page?.acfHome || {};
  const posts = data.posts?.nodes || [];
  const servicii = data.servicii?.nodes || [];
  const testimoniale = data.testimoniale?.nodes || [];
  const features = data.features?.nodes || [];

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
        {/* Background glows */}
        <div className="glow w-[500px] h-[500px] -top-48 -right-48 opacity-40" />
        <div className="glow w-[400px] h-[400px] bottom-0 left-[20%] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(110,231,183,0.05),transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="label-accent mb-6 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              Software development & consulting
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              {acf.heroTitle || (
                <>Construim software care <span className="text-accent">transformă</span> businessuri</>
              )}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-xl animate-fade-up opacity-0" style={{ animationDelay: "350ms", animationFillMode: "forwards" }}>
              {acf.heroSubtitle || "Soluții digitale personalizate, de la idee la produs finit. Echipa ta de tech, fără overhead-ul unei echipe interne."}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
              <Link href={acf.heroCtaLink || "/contact"} className="btn-primary">
                {acf.heroCtaText || "Începe un proiect"}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </Link>
              <Link href="/servicii" className="btn-secondary">
                Servicii
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-up opacity-0" style={{ animationDelay: "650ms", animationFillMode: "forwards" }}>
            {[
              { value: "50+", label: "Proiecte livrate" },
              { value: "99%", label: "Clienți mulțumiți" },
              { value: "8+", label: "Ani experiență" },
              { value: "24/7", label: "Suport tehnic" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-heading text-3xl sm:text-4xl font-bold text-accent tracking-tighter">{stat.value}</span>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICII ========== */}
      {servicii.length > 0 && (
        <section className="py-24 bg-dark-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="label-accent mb-3">Ce facem</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tighter">Serviciile noastre</h2>
              <Link href="/servicii" className="text-sm text-accent hover:text-accent-dark transition-colors">
                Vezi toate →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicii.map((s: any, i: number) => (
                <div key={s.slug} className="card p-7 group">
                  {s.acfServicii?.icon && (
                    <div className="w-11 h-11 bg-accent-dim rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <span className="text-xl">{s.acfServicii.icon}</span>
                    </div>
                  )}
                  <h3 className="font-heading text-lg font-semibold mb-2 tracking-tight">{s.title}</h3>
                  {s.acfServicii?.shortDescription && (
                    <p className="text-sm text-muted leading-relaxed">{s.acfServicii.shortDescription}</p>
                  )}
                  {s.acfServicii?.price && (
                    <p className="mt-4 text-2xl font-bold text-accent font-heading tracking-tight">{s.acfServicii.price}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== FEATURES ========== */}
      {features.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <div className="glow w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="label-accent mb-3">De ce noi</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tighter">De ce să ne alegi</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f: any) => (
                <div key={f.databaseId || f.title} className="text-center px-4">
                  {f.acfFeature?.icon && (
                    <div className="w-14 h-14 bg-accent-dim rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <span className="text-2xl">{f.acfFeature.icon}</span>
                    </div>
                  )}
                  <h3 className="font-heading text-lg font-semibold mb-3 tracking-tight">{f.title}</h3>
                  {f.acfFeature?.description && (
                    <p className="text-sm text-muted leading-relaxed">{f.acfFeature.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== BLOG ========== */}
      {posts.length > 0 && (
        <section className="py-24 bg-dark-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="label-accent mb-3">Blog</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tighter">Ultimele articole</h2>
              <Link href="/blog" className="text-sm text-accent hover:text-accent-dark transition-colors">
                Vezi toate →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {posts.map((post: any) => {
                const imageUrl = getFeaturedImageUrl(post);
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="card overflow-hidden group">
                    <div className="relative aspect-video overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-700" />
                      )}
                    </div>
                    <div className="p-5">
                      {post.categories?.nodes?.[0] && (
                        <span className="text-[10px] text-accent bg-accent-dim px-2.5 py-1 rounded-md font-medium">
                          {post.categories.nodes[0].name}
                        </span>
                      )}
                      <h3 className="font-heading text-base font-semibold mt-3 mb-2 tracking-tight leading-snug group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted">{formatDate(post.date)}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========== TESTIMONIALE ========== */}
      {testimoniale.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="label-accent mb-3">Testimoniale</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tighter">Ce spun clienții</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimoniale.map((t: any) => (
                <div key={t.databaseId || t.title} className="card p-7">
                  {t.acfTestimoniale?.rating && (
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < t.acfTestimoniale.rating ? "text-accent" : "text-dark-600"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
                    &ldquo;{t.acfTestimoniale?.testimonialText}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-accent-dim rounded-full flex items-center justify-center text-accent text-xs font-semibold">
                      {(t.acfTestimoniale?.clientName || t.title || "?").charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.acfTestimoniale?.clientName || t.title}</p>
                      {t.acfTestimoniale?.clientRole && (
                        <p className="text-xs text-muted">{t.acfTestimoniale.clientRole}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== CTA FINAL ========== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="glow w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter">
            {acf.ctaTitle || (<>Hai să construim <span className="text-accent">împreună</span></>)}
          </h2>
          <p className="mt-5 text-lg text-muted max-w-lg mx-auto">
            {acf.ctaDescription || "Discută cu noi despre proiectul tău — prima consultanță e gratuită."}
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Contactează-ne
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
