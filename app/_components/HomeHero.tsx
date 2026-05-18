import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

interface HomeHeroProps {
  acf: any;
}

export default function HomeHero({ acf }: HomeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-[45vh] pb-24">
      {/* Background Video - High Contrast */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top opacity-100 brightness-[1.0] contrast-[1.8] scale-110 origin-top"
        >
          <source src="https://cdn.prod.website-files.com/68b6ff99deb8a7b82b41a88b%2F68bf3669f39313242f4e3e3b_Hero%20Video-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/68b6ff99deb8a7b82b41a88b%2F68bf3669f39313242f4e3e3b_Hero%20Video-transcode.webm" type="video/webm" />
        </video>
        {/* Final Vignette - Crystal clear center, absolute black edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_70%,black_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black to-transparent" />
      </div>

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
          <h1 className="text-[62px] leading-[70px] font-medium tracking-[-0.06em] text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
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
          <p className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
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
  );
}
