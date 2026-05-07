import { getPageBySlug, getTeamMembers, getSeoMetadata } from "@/lib/wordpress";
import type { Metadata } from "next";
import FadeUp from "@/components/animations/FadeUp";
import InteractiveTeam from "@/components/animations/InteractiveTeam";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug("about");
  return getSeoMetadata(pageData?.seo);
}

export default async function AboutPage() {
  const [pageData, fetchedTeamMembers] = await Promise.all([
    getPageBySlug("about"),
    getTeamMembers().catch(() => []),
  ]);

  // Fallback data for the team members to exactly match the screenshots 
  // if WordPress returns empty.
  const fallbackTeam = [
    { title: "Paul Humen", acfTeamMember: { role: "Chief Executive Officer", photo: { node: { sourceUrl: "" } } } },
    { title: "Lara Ahmed", acfTeamMember: { role: "Chief Technology Officer", photo: { node: { sourceUrl: "" } } } },
    { title: "Alexa C.", acfTeamMember: { role: "Chief Operating Officer", photo: { node: { sourceUrl: "" } } } },
    { title: "Crish Paul", acfTeamMember: { role: "Head of Product Development", photo: { node: { sourceUrl: "" } } } },
    { title: "Alex Travis", acfTeamMember: { role: "Lead Data Analyst", photo: { node: { sourceUrl: "" } } } },
  ];

  // Mix dynamic members with placeholders to always have exactly 5 in the UI
  const teamMembersToUse = [...fetchedTeamMembers];
  for (let i = teamMembersToUse.length; i < 5; i++) {
    // Adaugam un ID fals ca sa evitam erori de key in React
    teamMembersToUse.push({ ...fallbackTeam[i], databaseId: `fallback-${i}` });
  }

  return (
    <div className="relative overflow-hidden bg-dark-950 pt-32 pb-40">
      
      {/* ========== COLLABORATION GRID ========== */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <div className="mb-20">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white max-w-xl">
              Collaboration that creates value for everyone
            </h1>
          </div>
        </FadeUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: "✍️", title: "Built Around You", desc: "Create, assign, and manage tasks with a drag-and-drop interface or calendar views. An intuitive interface means can quickly." },
            { icon: "👥", title: "Team Collaboration", desc: "Powerful Team Collaboration Tools to boost Streamline for you. Create, assign, and manage tasks with intuitive interface can quickly." },
            { icon: "📄", title: "Your Needs, Our Priority", desc: "Track performance instantly with accurate insights smarter business decisions. An intuitive interface means can quickly." }
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div>
                <div className="mb-6 text-accent">
                  {/* Simplistic abstract text icon mapping to the screenshot style */}
                  <span className="text-3xl drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">{item.icon}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-muted leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ========== TIMELINE SECTION ========== */}
      <section className="py-32 bg-dark-900 border-t border-white/[0.02] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                Our humble beginnings to where we stand today
              </h2>
              <p className="text-muted text-lg">Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.</p>
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            <div className="md:col-span-5">
              <FadeUp>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tighter">
                  Grow with confidence—spend smarter with visibility and full control.
                </h3>
              </FadeUp>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { year: "2020", desc: "Create, assign, and manage tasks with a drag-and-drop interface or calendar views. An intuitive interface means can quickly." },
                  { year: "2021", desc: "Expanded capabilities with real-time collaboration tools, enabling seamless teamwork across departments and locations." },
                  { year: "2022", desc: "Introduced advanced analytics and reporting features, helping teams measure performance, identify bottlenecks, and make data." },
                  { year: "2023", desc: "Enhanced integration with third-party apps and platforms, streamlining workflows and centralizing project management for greater productivity." },
                  { year: "2024", desc: "Launched automation features that reduced repetitive tasks, saving time and improving operational efficiency across teams." },
                  { year: "2025", desc: "Focused on user experience improvements, mobile optimization, and AI-powered insights to anticipate needs and." },
                ].map((item, i) => (
                  <FadeUp key={item.year} delay={i * 0.1}>
                    <div>
                      <h4 className="font-heading text-2xl font-bold text-accent mb-4">{item.year}</h4>
                      <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTERACTIVE TEAM SECTION ========== */}
      <section className="py-32 bg-dark-950 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-24 max-w-3xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                Meet the minds<br/>shaping our future
              </h2>
              <p className="text-muted text-lg">Fintech is its potential to promote financial inclusion. In many parts of the world, millions of people lack access to traditional banking services.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <InteractiveTeam teamMembers={teamMembersToUse} />
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
