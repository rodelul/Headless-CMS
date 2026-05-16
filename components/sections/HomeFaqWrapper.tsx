import FadeUp from "@/components/animations/FadeUp";
import FaqSection from "@/components/sections/FaqSection";

interface HomeFaqWrapperProps {
  faqs: any[];
}

export default function HomeFaqWrapper({ faqs }: HomeFaqWrapperProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-32 bg-black relative border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="label-accent mb-6">
                <div className="dot" />
                <span>FAQ</span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-8 leading-[0.9]">
                Questions? <br /> Look here.
              </h2>
              <p className="text-muted text-lg max-w-sm">
                Everything you need to know about our process, technology, and support.
              </p>
            </FadeUp>
          </div>
          <FaqSection faqs={(faqs as any[]).map(f => ({
            databaseId: f.databaseId || f.title,
            title: f.title,
            content: f.content || f.acfFaq?.answer || ""
          }))} />
        </div>
      </div>
    </section>
  );
}
