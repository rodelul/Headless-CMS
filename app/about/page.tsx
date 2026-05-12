import { getPageBySlug, getSeoMetadata, getTeamMembers, getFaqs } from "@/lib/wordpress";
import type { Metadata } from "next";
import FadeUp from "@/components/animations/FadeUp";
import InteractiveTeam from "@/components/animations/InteractiveTeam";
import AboutTabs from "@/components/sections/AboutTabs";
import FaqSection from "@/components/sections/FaqSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Image from "next/image";
import LottieBackground from "@/components/animations/LottieBackground";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("about");
  if (!page) return { title: "About Us" };
  return getSeoMetadata(page.seo);
}

export default async function AboutPage() {
  const [page, teamMembers, faqs] = await Promise.all([
    getPageBySlug("about"),
    getTeamMembers(),
    getFaqs(),
  ]);

  const fallbackFaqs = [
    { databaseId: "1", title: "How do you handle project timelines?", content: "We use agile methodologies to ensure timely delivery and constant feedback loops." },
    { databaseId: "2", title: "What technologies do you use?", content: "Our core stack includes Next.js, TypeScript, and Tailwind CSS, integrated with Headless CMS solutions." },
    { databaseId: "3", title: "Do you offer post-launch support?", content: "Yes, we provide maintenance and support packages to keep your website running smoothly and securely." }
  ];

  const displayFaqs = faqs.length > 0 ? faqs : fallbackFaqs;

  return (
    <div className="relative overflow-hidden bg-black font-inter">
      <div className="relative z-10">

        {/* 1. HERO SECTION (Setrex Style) */}
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

        {/* Start main content container for the rest of the page */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">


          {/* 2. LOGOS MARQUEE */}
          <div className="mb-32">
            <LogoMarquee />
          </div>

          {/* 3. BENTO GRID AREA */}
          <div className="mb-32">
            <FadeUp className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
                Supported by many companies around the world
              </h2>
            </FadeUp>

            {/* Bento Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
              <FadeUp className="md:col-span-7" delay={0.1}>
                <div className="card h-full p-10 md:p-12 flex flex-col justify-between bg-dark-900/50 border-white/5 rounded-[2rem]">
                  <div>
                    <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-8 inline-block">CEO's Words</span>
                    <p className="text-2xl md:text-3xl font-medium text-white leading-tight italic font-heading">
                      "Working with you was seamless from start to finish. The final design exceeded our expectations."
                    </p>
                  </div>
                  <div className="mt-12 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">KR</div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Kara Rodi</h4>
                      <p className="text-[10px] text-muted">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="card p-10 bg-dark-900/50 border-white/5 rounded-[2rem]">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-6xl font-bold text-white font-heading tracking-tighter">15+</h3>
                    <span className="bg-green-500/10 text-green-400 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">Years of experience</span>
                  </div>
                  <p className="text-sm text-muted">Delivering timeless, functional spaces through innovation and precision.</p>
                </div>
                <div className="card p-10 bg-dark-900/50 border-white/5 rounded-[2rem]">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-6xl font-bold text-white font-heading tracking-tighter">98%</h3>
                    <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">Client satisfaction</span>
                  </div>
                  <p className="text-sm text-muted">We pride ourselves on delivering excellence in every single project.</p>
                </div>
              </div>
            </div>

            {/* Integrated Three Columns (Sub-Bento) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: "Performance Optimized", desc: "We focus on speed, SEO, and accessibility, delivering results-driven websites." },
                { title: "User Experience", desc: "Our websites are intuitive and easy to navigate, keeping users engaged." },
                { title: "Built Around You", desc: "Solutions tailored specifically to your business goals and user needs." }
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors duration-500">
                    <h3 className="font-heading text-2xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                    <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* 4. INTERACTIVE TABS */}
          <div className="py-16 border-t border-white/5">
            <FadeUp className="text-center mb-2">
              <h2 className="font-heading text-xl md:text-3xl font-extrabold tracking-tighter text-white">Transform your vision into reality</h2>
            </FadeUp>
            <AboutTabs />
          </div>

          {/* 5. FAQ SECTION */}
          <div className="py-32 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <FadeUp>
                  <span className="label-accent mb-6 inline-block uppercase tracking-[0.2em] text-[10px] font-bold">FAQ</span>
                  <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-8 leading-[0.9]">Questions? <br /> Look here.</h2>
                </FadeUp>
              </div>
              <FaqSection faqs={displayFaqs} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
