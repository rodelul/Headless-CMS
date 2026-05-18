import FadeUp from "@/components/animations/FadeUp";
import LottieBackground from "@/components/animations/LottieBackground";
import { cleanExcerpt } from "@/lib/wordpress";

interface BlogHeroProps {
  pageData: any;
}

export default function BlogHero({ pageData }: BlogHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 border-b border-white/5">
      {/* Lottie Animated Starfield Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <LottieBackground animationPath="/animations/hero-stars.json" />
        
        {/* Vignette Overlay to focus the center and blend the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_30%,black_100%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeUp delay={0.1} yOffset={30}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Recent blog updates
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={0.2} yOffset={40}>
          <h1 className="text-[56px] sm:text-[72px] leading-[1.05] font-medium tracking-[-0.05em] text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] mb-6">
            {pageData?.title ? (
              <span dangerouslySetInnerHTML={{ __html: pageData.title }} />
            ) : (
              <>Explore our most<br />recent blog posts</>
            )}
          </h1>
        </FadeUp>
        
        <FadeUp delay={0.3} yOffset={30}>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {pageData?.content ? (
              <span dangerouslySetInnerHTML={{ __html: cleanExcerpt(pageData.content) }} />
            ) : (
              "Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services."
            )}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
