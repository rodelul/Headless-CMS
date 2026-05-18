import FadeUp from "@/components/animations/FadeUp";
import FaqSection from "@/components/sections/FaqSection";

interface AboutFaqProps {
  faqs: any[];
}

export default function AboutFaq({ faqs }: AboutFaqProps) {
  return (
    <div className="py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <FadeUp>
            <span className="label-accent mb-6 inline-block uppercase tracking-[0.2em] text-[10px] font-bold">FAQ</span>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-8 leading-[0.9]">
              Questions? <br /> Look here.
            </h2>
          </FadeUp>
        </div>
        <FaqSection faqs={faqs} />
      </div>
    </div>
  );
}
