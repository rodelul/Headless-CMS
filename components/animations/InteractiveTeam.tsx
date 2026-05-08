"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { TeamMember } from "@/types/wordpress";

export default function InteractiveTeam({ teamMembers }: { teamMembers: TeamMember[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!teamMembers || teamMembers.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      {/* Left: Interactive List */}
      <div className="flex flex-col">
        {teamMembers.map((member, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={member.databaseId || i}
              onClick={() => setActiveIndex(i)}
              className={`text-left py-6 border-b border-white/[0.05] transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              {member.acfTeamMember?.role && (
                <p className={`text-sm font-bold mb-2 transition-colors duration-300 ${isActive ? "text-accent" : "text-white/50"}`}>
                  {member.acfTeamMember.role}
                </p>
              )}
              <h3 className={`font-heading text-4xl md:text-5xl font-bold tracking-tighter transition-colors duration-300 ${isActive ? "text-white" : "text-white/70"}`}>
                {member.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Right: Active Image */}
      <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-dark-900 border border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {teamMembers[activeIndex]?.acfTeamMember?.photo?.node?.sourceUrl ? (
              <Image
                src={teamMembers[activeIndex].acfTeamMember.photo.node.sourceUrl}
                alt={teamMembers[activeIndex].acfTeamMember.photo.node.altText || teamMembers[activeIndex].title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-dark-800">
                <span className="text-4xl font-heading font-bold text-accent/20">
                  {teamMembers[activeIndex]?.title?.charAt(0)}
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
