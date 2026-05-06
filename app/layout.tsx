import type { Metadata } from "next";
import "@/styles/globals.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "nexus. | Software Development & Consulting",
    template: "%s | nexus.",
  },
  description: "Construim software care transformă businessuri. Soluții digitale personalizate, de la idee la produs finit.",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "nexus.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="dark">
      <body className="min-h-screen flex flex-col font-body bg-dark-950 text-white antialiased">
        {/* ========== NAVBAR ========== */}
        <Navbar />

        {/* ========== CONTENT ========== */}
        <main className="flex-1">{children}</main>

        {/* ========== FOOTER ========== */}
        <footer className="border-t border-white/[0.06] bg-dark-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <Link href="/" className="font-heading text-2xl font-bold tracking-tighter">
                  nexus<span className="text-accent">.</span>
                </Link>
                <p className="mt-4 text-sm text-muted leading-relaxed max-w-md">
                  Construim software care transformă businessuri.
                  Soluții digitale personalizate, de la idee la produs finit.
                </p>
                <div className="flex gap-4 mt-6">
                  {/* Social icons */}
                  {["github", "linkedin", "twitter"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-9 h-9 rounded-lg bg-dark-800 border border-white/[0.06] flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                    >
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        {social === "github" && <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>}
                        {social === "linkedin" && <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>}
                        {social === "twitter" && <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h3 className="font-heading text-sm font-semibold mb-4 tracking-tight">Navigare</h3>
                <ul className="space-y-3">
                  {["Acasă", "Despre noi", "Servicii", "Blog", "Contact"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item === "Acasă" ? "" : item === "Despre noi" ? "about" : item.toLowerCase()}`}
                        className="text-sm text-muted hover:text-accent transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-heading text-sm font-semibold mb-4 tracking-tight">Contact</h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.093L2.25 6.75"/></svg>
                    contact@nexus.dev
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                    +40 700 000 000
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                    Timișoara, România
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted">
                &copy; {new Date().getFullYear()} nexus. Toate drepturile rezervate.
              </p>
              <div className="flex gap-6 text-xs text-muted">
                <a href="#" className="hover:text-accent transition-colors">Termeni</a>
                <a href="#" className="hover:text-accent transition-colors">Confidențialitate</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
