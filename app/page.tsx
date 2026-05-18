import { getHomepageData, getFaqs, getSeoMetadata } from "@/lib/wordpress";
import { Metadata } from "next";
import LogoMarquee from "@/components/sections/LogoMarquee";
import HomeHero from "./_components/HomeHero";
import HomeFeatures from "./_components/HomeFeatures";
import HomeMockups from "./_components/HomeMockups";
import HomeServices from "./_components/HomeServices";
import HomeIntegrations from "./_components/HomeIntegrations";
import HomeBlog from "./_components/HomeBlog";
import HomeTestimonials from "./_components/HomeTestimonials";
import HomeFaqWrapper from "./_components/HomeFaqWrapper";

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
  const features = data.features?.nodes || [];
  const faqs = fetchedFaqs.length > 0 ? fetchedFaqs : [
    { title: "How do we get started?", content: "Simply reach out via our contact page, and we will schedule a discovery call to discuss your project requirements." },
    { title: "What is your typical turnaround time?", content: "Turnaround times vary based on project scope, but we typically deliver MVP versions within 4-8 weeks." },
    { title: "Do you offer ongoing support?", content: "Yes, we provide flexible maintenance and support packages to ensure your platform runs smoothly." }
  ];

  return (
    <>
      <HomeHero acf={acf} />

      {/* ========== PARTNERS MARQUEE ========== */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="py-24">
          <LogoMarquee />
        </div>
      </div>

      <HomeFeatures features={features} />
      <HomeMockups />
      <HomeServices servicii={servicii} />
      <HomeIntegrations />
      <HomeBlog posts={posts} />
      <HomeTestimonials />
      <HomeFaqWrapper faqs={faqs} />
    </>
  );
}
