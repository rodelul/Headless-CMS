"use client";

import { motion } from "framer-motion";

const logos = [
  "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum",
  "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"
];

export default function LogoMarquee() {
  return (
    <div className="w-full py-20 overflow-hidden relative">
      {/* Fade Gradients Overlay */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted mb-12 font-bold">
          Partnering with the world's leading enterprises
        </p>
        
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-16 pr-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 text-white font-heading text-2xl font-bold italic tracking-tighter opacity-30 hover:opacity-100 transition-opacity duration-300">
                Logo<span className="text-accent">ipsum</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
