"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const TABS = [
  {
    id: "assets",
    label: "Custom Assets",
    title: "Designed Around Your Vision",
    description: "An intuitive interface means can quickly understand how to perform tasks without the need for training or guidance.",
    tag: "Custom Assets",
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "interface",
    label: "Overview of Interface",
    title: "Designed with an intuitive experience",
    description: "Our interface is built for speed and clarity, ensuring that every user interaction feels natural and productive.",
    tag: "Interface",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "collaboration",
    label: "Team Collaboration",
    title: "Work together, anywhere",
    description: "Seamlessly collaborate with your team members in real-time, no matter where they are located in the world.",
    tag: "Collaboration",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="py-32">
      {/* Tab Switcher */}
      <div className="flex flex-wrap justify-center gap-3 mb-20">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 border ${
              activeTab.id === tab.id
                ? "bg-white text-black border-white"
                : "bg-dark-900/50 text-white/50 border-white/5 hover:border-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="card p-10 md:p-20 bg-dark-900/30 border-white/5 rounded-[3rem] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-black mb-6 ${activeTab.color.replace('bg-', 'bg-opacity-20 text-').replace('text-', 'bg-')}`}>
                {activeTab.tag}
              </span>
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1]">
                {activeTab.title}
              </h3>
              <p className="text-lg text-muted leading-relaxed max-w-md">
                {activeTab.description}
              </p>
            </div>

            <div className="order-1 lg:order-2 relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
