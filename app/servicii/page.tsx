import { getServicii, getPageBySlug, getSeoMetadata } from "@/lib/wordpress";
import { Service } from "@/types/wordpress";
import type { Metadata } from "next";
import ServiciiHero from "@/components/sections/ServiciiHero";
import ServiciiGrid from "@/components/sections/ServiciiGrid";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug("servicii").catch(() => null);
  if (pageData?.seo) {
    return getSeoMetadata(pageData.seo);
  }
  return {
    title: "Servicii",
    description: "Soluții software complete — de la web development la cloud infrastructure",
  };
}

export default async function ServiciiPage() {
  let servicii: Service[] = [];
  try {
    servicii = await getServicii();
  } catch {
    servicii = [];
  }

  return (
    <div className="relative overflow-hidden">
      <div className="glow w-[500px] h-[500px] -top-32 -left-32 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
        <ServiciiHero />
        <ServiciiGrid servicii={servicii} />
      </div>
    </div>
  );
}
