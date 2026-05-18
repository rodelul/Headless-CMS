import FadeUp from "@/components/animations/FadeUp";

interface HomeFeaturesProps {
  features: any[];
}

export default function HomeFeatures({ features }: HomeFeaturesProps) {
  const displayFeatures = features.length > 0 ? features : [
    { title: "Project Planning", acfFeature: { description: "Create, assign, and manage tasks with a drag-and-drop interface or calendar views.", icon: "👨‍💻" } },
    { title: "Team Collaboration", acfFeature: { description: "Powerful Team Collaboration Tools to boost Streamline Communication for you.", icon: "👥" } },
    { title: "Live Insights", acfFeature: { description: "Track performance instantly with accurate insights for smarter business decisions.", icon: "📊" } },
    { title: "Easy to Use", acfFeature: { description: "Intuitive design lets anyone navigate, manage, and operate effortlessly.", icon: "👍" } },
    { title: "Limitless Flexibility", acfFeature: { description: "Adaptable platform empowers teams to customize workflows and scale effortlessly.", icon: "⚙️" } },
    { title: "Secure at Scale", acfFeature: { description: "Advanced security measures protect data while supporting growth across all operations.", icon: "🔒" } }
  ];

  return (
    <section className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
              Custom-designed modular products at a world-class standard
            </h2>
            <p className="text-muted text-lg">Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.</p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayFeatures.map((f: any, i: number) => (
            <FadeUp key={f.databaseId || f.title || i} delay={i * 0.1}>
              <div className="card p-8 h-full bg-black/50 hover:bg-dark-800/80 border border-white/5">
                <div className="w-12 h-12 mb-6 text-accent flex items-center justify-start text-3xl">
                  {f.acfFeature?.icon || "✦"}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-white">{f.title}</h3>
                {f.acfFeature?.description && (
                  <p className="text-muted leading-relaxed text-sm">{f.acfFeature.description}</p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
