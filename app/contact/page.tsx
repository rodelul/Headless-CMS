import type { Metadata } from "next";
import { getPageBySlug, getSeoMetadata } from "@/lib/wordpress";
import ContactHero from "./_components/ContactHero";
import ContactForm from "./_components/ContactForm";
import ContactSidebar from "./_components/ContactSidebar";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug("contact").catch(() => null);
  if (pageData?.seo) {
    return getSeoMetadata(pageData.seo);
  }
  return {
    title: "Contact",
    description: "Hai să discutăm despre proiectul tău — prima consultanță e gratuită",
  };
}

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="glow w-[500px] h-[500px] top-0 right-0 opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
        <ContactHero />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <ContactSidebar />
        </div>
      </div>
    </div>
  );
}
