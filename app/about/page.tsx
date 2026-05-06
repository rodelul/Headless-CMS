import { getPageBySlug, getTeamMembers } from "@/lib/wordpress";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Echipa din spatele nexus — pasiune pentru cod, dedicare pentru rezultate",
};

export default async function AboutPage() {
  const [pageData, teamMembers] = await Promise.all([
    getPageBySlug("about"),
    getTeamMembers().catch(() => []),
  ]);

  const acf = pageData?.acfAbout || {};

  return (
    <div className="relative overflow-hidden">
      {/* Background glow */}
      <div className="glow w-[600px] h-[600px] -top-32 right-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <p className="label-accent mb-4">Despre noi</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tighter mb-6">
            {acf.aboutTitle || "Pasiune pentru cod, dedicare pentru rezultate"}
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            {acf.aboutDescription || "Suntem o echipă de developeri și designeri care transformă idei în produse digitale excepționale. Fiecare proiect e tratat ca propriul nostru produs."}
          </p>
        </div>

        {/* WP Content */}
        {pageData?.content && (
          <div
            className="wp-content max-w-none mb-20"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        )}

        {/* Values / pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {[
            { icon: "⚡", title: "Performanță", desc: "Code review riguros, optimizare continuă, și standarde de calitate fără compromis." },
            { icon: "🤝", title: "Transparență", desc: "Comunicare deschisă, estimări realiste, și acces complet la progresul proiectului." },
            { icon: "🚀", title: "Inovație", desc: "Tehnologii moderne, arhitecturi scalabile, și soluții care anticipează viitorul." },
          ].map((v) => (
            <div key={v.title} className="card p-7">
              <div className="w-11 h-11 bg-accent-dim rounded-xl flex items-center justify-center mb-5">
                <span className="text-xl">{v.icon}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 tracking-tight">{v.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        {teamMembers.length > 0 && (
          <section>
            <div className="text-center mb-14">
              <p className="label-accent mb-3">Echipa</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tighter">Oamenii din spatele codului</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {teamMembers.map((member: any) => (
                <div key={member.databaseId || member.title} className="card p-7 text-center">
                  {member.acfTeamMember?.photo?.sourceUrl ? (
                    <div className="relative w-20 h-20 mx-auto mb-5 rounded-2xl overflow-hidden border border-white/[0.06]">
                      <Image
                        src={member.acfTeamMember.photo.sourceUrl}
                        alt={member.acfTeamMember.photo.altText || member.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-accent-dim rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl text-accent font-heading font-bold">
                      {member.title?.charAt(0) || "?"}
                    </div>
                  )}
                  <h3 className="font-heading text-lg font-semibold tracking-tight">{member.title}</h3>
                  {member.acfTeamMember?.role && (
                    <p className="text-accent text-sm font-medium mt-1">{member.acfTeamMember.role}</p>
                  )}
                  {member.acfTeamMember?.bio && (
                    <p className="text-sm text-muted mt-3 leading-relaxed">{member.acfTeamMember.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
