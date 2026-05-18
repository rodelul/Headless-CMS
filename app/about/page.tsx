import { getPageBySlug, getSeoMetadata, getTeamMembers, getFaqs } from "@/lib/wordpress";
import type { Metadata } from "next";
import FadeUp from "@/components/animations/FadeUp";
import AboutTabs from "@/components/sections/AboutTabs";
import LogoMarquee from "@/components/sections/LogoMarquee";
import AboutHero from "@/components/sections/AboutHero";
import AboutBentoGrid from "@/components/sections/AboutBentoGrid";
import AboutFaq from "@/components/sections/AboutFaq";

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
        <AboutHero />

        {/* Start main content container for the rest of the page */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="mb-32">
            <LogoMarquee />
          </div>

          <AboutBentoGrid />

          {/* INTERACTIVE TABS */}
          <div className="py-16 border-t border-white/5">
            <FadeUp className="text-center mb-2">
              <h2 className="font-heading text-xl md:text-3xl font-extrabold tracking-tighter text-white">Transform your vision into reality</h2>
            </FadeUp>
            <AboutTabs />
          </div>

          <AboutFaq faqs={displayFaqs} />
        </div>
      </div>
    </div>
  );
}
