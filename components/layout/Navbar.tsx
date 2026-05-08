"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/servicii" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <header
          className={`w-full max-w-5xl transition-all duration-300 rounded-full border ${isScrolled
              ? "bg-dark-950/80 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50 py-3 px-6"
              : "bg-dark-900/40 backdrop-blur-md border-white/5 py-4 px-8"
            } flex items-center justify-between relative`}
        >
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-heading text-2xl font-bold tracking-tighter text-white hover:text-accent transition-colors">
              nexus<span className="text-accent">.</span>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-bold transition-colors ${pathname === link.path ? "text-accent" : "text-white/70 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link href="/contact" className="hidden md:inline-flex items-center justify-center bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M3 12h18M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" />
              </svg>
              Start creating
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-dark-950/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors py-2 border-b border-white/[0.06] ${pathname === item.path ? "text-accent" : "text-muted hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary mt-4 w-full justify-center"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
