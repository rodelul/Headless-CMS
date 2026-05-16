import FadeUp from "@/components/animations/FadeUp";

export default function HomeMockups() {
  return (
    <section className="py-32 relative bg-black border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
              Create with ease like never before.
            </h2>
            <p className="text-muted text-lg">Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div className="card p-10 flex flex-col md:flex-row items-center gap-10 bg-dark-800/40">
              <div className="flex-1">
                <span className="bg-accent/20 text-accent text-xs px-3 py-1 rounded font-bold uppercase tracking-wider mb-4 inline-block">Overview of Interface</span>
                <h3 className="font-heading text-4xl font-bold text-white mb-4">Designed with an intuitive experience users love.</h3>
                <p className="text-muted leading-relaxed">An intuitive interface means can quickly understand how to perform tasks without the need for extensive training or guidance.</p>
              </div>
              <div className="flex-1 w-full bg-black rounded-2xl border border-white/5 p-6 min-h-[300px] relative overflow-hidden flex flex-col gap-4 shadow-2xl">
                {/* Fake Mockup UI */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="w-full h-12 bg-white/5 rounded border border-white/5"></div>
                <div className="w-3/4 h-12 bg-white/5 rounded border border-white/5"></div>
                <div className="flex gap-4 mt-auto">
                  <div className="w-1/2 h-20 bg-white/5 rounded border border-white/5"></div>
                  <div className="w-1/2 h-20 bg-white/5 rounded border border-white/5"></div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="card p-10 bg-dark-800/40 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-dark-950 font-bold text-3xl shadow-[0_0_50px_rgba(204,255,0,0.5)] z-10">M</div>
              {/* Orbital dots */}
              <div className="absolute w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_white]"></div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="card p-10 bg-dark-800/40 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden text-center">
              <h3 className="text-8xl font-black text-white/5 absolute">24/7</h3>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-accent text-dark-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform cursor-pointer shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  Support
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
