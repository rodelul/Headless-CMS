import FadeUp from "@/components/animations/FadeUp";
import LottieBackground from "@/components/animations/LottieBackground";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-12 overflow-hidden bg-black">
      {/* Lottie background animation (Stars/Dots) */}
      <LottieBackground animationPath="/animations/hero-stars.json" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <FadeUp>
            <div className="label-accent mb-8 bg-white/5 backdrop-blur-sm border-white/10 py-1 px-3">
              <div className="dot" />
              <span className="text-[11px] font-bold">Features</span>
            </div>

            <h1 className="text-[var(--stx-h1-size)] leading-[var(--stx-h1-line)] font-[var(--stx-h1-weight)] tracking-[var(--stx-h1-spacing)] text-white mb-8">
              Bring your vision to <br className="hidden md:block" /> life with a beautifully <br className="hidden md:block" /> crafted website.
            </h1>

            <p className="text-[var(--stx-p1-size)] leading-[var(--stx-p1-line)] text-muted font-normal max-w-lg">
              Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.
            </p>
          </FadeUp>
        </div>

        <div className="lg:col-span-5 relative lg:h-[600px]">
          <FadeUp delay={0.2} className="w-full h-full">
            {/* Adjusted height and subtle translation to clip the bottom without zooming in too much */}
            <div className="absolute left-0 top-0 w-[180%] lg:w-[250%] h-[720px] translate-y-10 pointer-events-none backdrop-blur-[20.93px] -webkit-backdrop-blur-[20.93px]">
              <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full opacity-5" />
              <Image
                src="/images/about hero.png"
                alt="About Us Hero"
                fill
                className="object-contain object-left-top drop-shadow-[0_60px_120px_rgba(0,0,0,1)]"
                priority
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
