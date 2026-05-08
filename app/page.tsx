import { getHomepageData, getFaqs, formatDate, getFeaturedImageUrl, getSeoMetadata } from "@/lib/wordpress";
import { Post, Service, Faq } from "@/types/wordpress";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import Accordion from "@/components/animations/Accordion";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData();
  return getSeoMetadata(data?.page?.seo);
}

export default async function HomePage() {
  const [data, fetchedFaqs] = await Promise.all([
    getHomepageData(),
    getFaqs().catch(() => [])
  ]);

  const acf = data.page?.acfHome || {};
  const posts = data.posts?.nodes || [];
  const servicii = data.servicii?.nodes || [];
  const testimoniale = data.testimoniale?.nodes || [];
  const features = data.features?.nodes || [];
  const faqs = fetchedFaqs.length > 0 ? fetchedFaqs : [
    { title: "How do we get started?", content: "Simply reach out via our contact page, and we will schedule a discovery call to discuss your project requirements." },
    { title: "What is your typical turnaround time?", content: "Turnaround times vary based on project scope, but we typically deliver MVP versions within 4-8 weeks." },
    { title: "Do you offer ongoing support?", content: "Yes, we provide flexible maintenance and support packages to ensure your platform runs smoothly." }
  ];

  return (
    <>
      {/* ========== HERO (CURRENT) ========== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-dark-950 z-0" />
        <div className="absolute inset-0 bg-grid z-0 opacity-40" />
        <div className="mesh-bg opacity-50 z-0 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeUp delay={0.1} yOffset={30}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">
                Software development & consulting
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} yOffset={40}>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] text-white">
              {acf.heroTitle ? (
                <span dangerouslySetInnerHTML={{ __html: acf.heroTitle }} />
              ) : (
                <>
                  <span className="text-gradient">Turn your big idea</span><br />
                  <span className="text-accent drop-shadow-[0_0_25px_rgba(204,255,0,0.4)]">into a stunning website</span>
                </>
              )}
            </h1>
          </FadeUp>

          <FadeUp delay={0.4} yOffset={30}>
            <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto font-medium">
              {acf.heroSubtitle || "Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services."}
            </p>
          </FadeUp>

          <FadeUp delay={0.5} yOffset={20}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href={acf.heroCtaLink || "/contact"} className="btn-primary group">
                {acf.heroCtaText || "Get Started Now"}
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link href="/servicii" className="btn-secondary">
                See Pricing
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ========== INTEGRATIONS MARQUEE (SETREX) ========== */}
      <section className="py-32 bg-dark-950 overflow-hidden">
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
        <div className="flex w-full overflow-hidden border-y border-white/[0.05] bg-dark-900/50">
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

      {/* ========== CUSTOM MODULAR PRODUCTS (SETREX GRID) ========== */}
      <section className="py-32 relative bg-dark-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                Custom-designed modular products at a world-class standard
              </h2>
              <p className="text-muted text-lg">Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(features.length > 0 ? features : [
              { title: "Project Planning", acfFeature: { description: "Create, assign, and manage tasks with a drag-and-drop interface or calendar views.", icon: "👨‍💻" } },
              { title: "Team Collaboration", acfFeature: { description: "Powerful Team Collaboration Tools to boost Streamline Communication for you.", icon: "👥" } },
              { title: "Live Insights", acfFeature: { description: "Track performance instantly with accurate insights for smarter business decisions.", icon: "📊" } },
              { title: "Easy to Use", acfFeature: { description: "Intuitive design lets anyone navigate, manage, and operate effortlessly.", icon: "👍" } },
              { title: "Limitless Flexibility", acfFeature: { description: "Adaptable platform empowers teams to customize workflows and scale effortlessly.", icon: "⚙️" } },
              { title: "Secure at Scale", acfFeature: { description: "Advanced security measures protect data while supporting growth across all operations.", icon: "🔒" } }
            ]).map((f: any, i: number) => (
              <FadeUp key={f.databaseId || f.title || i} delay={i * 0.1}>
                <div className="card p-8 h-full bg-dark-900/50 hover:bg-dark-800/80 border border-white/5">
                  {f.acfFeature?.link && (
                    <div className="w-12 h-12 mb-6 text-accent flex items-center justify-start relative">
                      <Image 
                        src={f.acfFeature.link} 
                        alt={f.title} 
                        fill 
                        className="object-contain"
                      />
                    </div>
                  )}
                  <h3 className="font-heading text-xl font-bold mb-3 text-white">{f.title}</h3>
                  {f.acfFeature?.description && (
                    <p className="text-muted leading-relaxed text-sm">{f.acfFeature.description}</p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ========== UI MOCKUPS / EASE OF USE (SETREX) ========== */}
      <section className="py-32 relative bg-dark-900 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
                Create with ease like never before.
              </h2>
              <p className="text-muted text-lg">Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FadeUp delay={0.1} className="lg:col-span-2">
              <div className="card p-10 flex flex-col md:flex-row items-center gap-10 bg-dark-800/40">
                <div className="flex-1">
                  <span className="bg-accent/20 text-accent text-xs px-3 py-1 rounded font-bold uppercase tracking-wider mb-4 inline-block">Overview of Interface</span>
                  <h3 className="font-heading text-4xl font-bold text-white mb-4">Designed with an intuitive experience users love.</h3>
                  <p className="text-muted leading-relaxed">An intuitive interface means can quickly understand how to perform tasks without the need for extensive training or guidance.</p>
                </div>
                <div className="flex-1 w-full bg-dark-950 rounded-2xl border border-white/5 p-6 min-h-[300px] relative overflow-hidden flex flex-col gap-4 shadow-2xl">
                  {/* Fake Mockup UI */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="w-full h-12 bg-white/5 rounded border border-white/5"></div>
                  <div className="w-3/4 h-12 bg-white/5 rounded border border-white/5"></div>
                  <div className="flex gap-4 mt-auto">
                    <div className="w-1/2 h-20 bg-white/5 rounded border border-white/5"></div>
                    <div className="w-1/2 h-20 bg-white/5 rounded border border-white/5"></div>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="card p-10 bg-dark-800/40 min-h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-dark-950 font-bold text-3xl shadow-[0_0_50px_rgba(204,255,0,0.5)] z-10">M</div>
                {/* Orbital dots */}
                <div className="absolute w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]"></div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="card p-10 bg-dark-800/40 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden text-center">
                <h3 className="text-8xl font-black text-white/5 absolute">24/7</h3>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-accent text-dark-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform cursor-pointer shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    Support
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ========== SERVICII RESTORED ========== */}
      {servicii.length > 0 && (
        <section className="py-32 relative bg-dark-900 border-t border-white/[0.02]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                <div>
                  <span className="label-accent mb-4">Ce facem</span>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                    Serviciile Noastre
                  </h2>
                </div>
                <Link href="/servicii" className="text-sm font-bold text-accent hover:text-white transition-colors flex items-center gap-2">
                  Vezi toate serviciile <span className="text-lg">→</span>
                </Link>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicii.map((s: Service, i: number) => (
                <FadeUp key={s.slug} delay={i * 0.1}>
                  <div className="card p-8 h-full flex flex-col group cursor-pointer bg-dark-800/40">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 relative overflow-hidden p-3">
                      {s.acfServicii?.link ? (
                        <Image 
                          src={s.acfServicii.link} 
                          alt={s.title} 
                          fill 
                          className="object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                          ✦
                        </span>
                      )}
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
      )}

      {/* ========== OLD BLOG SECTION RESTORED ========== */}
      {posts.length > 0 && (
        <section className="py-32 bg-dark-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeUp>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                  <span className="label-accent mb-4">Blog</span>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white">
                    Ultimele Articole
                  </h2>
                </div>
                <Link href="/blog" className="text-sm font-bold text-accent hover:text-white transition-colors flex items-center gap-2">
                  Vezi toate articolele <span className="text-lg">→</span>
                </Link>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post: Post, i: number) => {
                const imageUrl = getFeaturedImageUrl(post);
                return (
                  <FadeUp key={post.slug} delay={i * 0.1}>
                    <Link href={`/blog/${post.slug}`} className="card overflow-hidden group block">
                      <div className="relative aspect-video overflow-hidden bg-dark-900 border-b border-white/5">
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
                      <div className="p-6">
                        {post.categories?.nodes?.[0] && (
                          <span className="text-[10px] text-accent bg-accent/10 px-3 py-1 rounded border border-accent/20 font-bold uppercase tracking-wider mb-4 inline-block">
                            {post.categories.nodes[0].name}
                          </span>
                        )}
                        <h3 className="font-heading text-xl font-bold mb-3 tracking-tight text-white group-hover:text-accent transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted font-medium">{formatDate(post.date)}</p>
                      </div>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ========== OLD TESTIMONIALS RESTORED (Setrex Stats style) ========== */}
      <section className="py-32 relative bg-dark-900 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-20">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                Supported by many<br/>companies around the world
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
                <div className="card p-8 bg-dark-950 border border-white/5 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-5xl font-bold text-white">15+</h3>
                    <span className="bg-accent/20 text-accent text-[10px] px-2 py-1 rounded uppercase tracking-wider font-bold">Years of experiences</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">Delivering timeless, functional spaces through innovation, precision, and client-focused design excellence.</p>
                </div>
              </FadeUp>
              <FadeUp delay={0.3}>
                <div className="card p-8 bg-dark-950 border border-white/5 h-full">
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

      {/* ========== FAQ SECTION ========== */}
      <section className="py-32 bg-dark-950 relative border-t border-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
                Questions?<br />We're here to assist!
              </h2>
            </div>
          </FadeUp>
          
          <Accordion items={(faqs as any[]).map((f) => ({
            q: f.title,
            a: f.content || f.acfFaq?.answer || ""
          }))} />
        </div>
      </section>
            q: f.title,
            a: f.content || f.acfFaq?.answer || ""
          }))} />
        </div>
      </section>

      {/* ========== CTA FINAL (CURRENT) ========== */}
      <section className="py-40 relative overflow-hidden bg-dark-950">
        <div className="absolute inset-0 mesh-bg opacity-60 rotate-180 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-accent/20 blur-[150px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <h2 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8">
              Ai o idee de <span className="text-accent drop-shadow-[0_0_20px_rgba(204,255,0,0.5)]">proiect?</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
              Hai să discutăm. Transformăm ideile complexe în produse digitale excepționale.
            </p>
            <Link href="/contact" className="btn-primary text-lg !px-12 !py-5">
              Contactează-ne Acum
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
