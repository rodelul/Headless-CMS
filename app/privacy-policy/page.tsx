import { getPageBySlug, getSeoMetadata } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("privacy-policy");
  if (!page) return { title: "Politica de confidențialitate" };
  return getSeoMetadata(page.seo);
}

export default async function PrivacyPage() {
  const page = await getPageBySlug("privacy-policy");

  if (!page) {
    notFound();
  }

  return (
    <div className="pt-40 pb-20 px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-12">
        {page.title}
      </h1>
      
      <div 
        className="wp-content"
        dangerouslySetInnerHTML={{ __html: page.content }} 
      />

      <div className="mt-16 pt-8 border-t border-white/[0.06] text-sm text-muted">
        Ultima actualizare: {new Date(page.modified || Date.now()).toLocaleDateString('ro-RO')}
      </div>
    </div>
  );
}
