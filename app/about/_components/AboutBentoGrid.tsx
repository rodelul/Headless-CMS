import FadeUp from "@/components/animations/FadeUp";

export default function AboutBentoGrid() {
  return (
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
  );
}
