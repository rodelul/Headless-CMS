"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

interface FaqItemProps {
  id: string;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FaqItem({ id, title, content, isOpen, onClick, index }: FaqItemProps) {
  return (
    <FadeUp delay={index * 0.1}>
      <div 
        onClick={onClick}
        className={`group card bg-dark-900/30 border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:border-accent/30 cursor-pointer ${isOpen ? "border-accent/30 bg-dark-900/50" : ""}`}
      >
        <div className="flex items-center justify-between p-8 md:p-10 select-none">
          <h3 className={`text-lg md:text-xl font-bold transition-colors pr-8 ${isOpen ? "text-accent" : "text-white"}`}>
            {title}
          </h3>
          <div className="relative w-6 h-6 flex-shrink-0">
            <motion.div 
              animate={{ rotate: isOpen ? 90 : 0 }}
              className="absolute inset-0 w-0.5 h-full bg-white/20 mx-auto"
            />
            <motion.div 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="absolute inset-0 w-full h-0.5 bg-white/20 my-auto"
            />
          </div>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-8 md:px-10 pb-8 md:pb-10 text-muted leading-relaxed prose prose-invert prose-sm max-w-none border-t border-white/5 pt-6">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function FaqSection({ faqs }: { faqs: any[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="lg:col-span-7 space-y-4">
      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.databaseId}
          id={faq.databaseId}
          index={index}
          title={faq.title}
          content={faq.content}
          isOpen={openId === faq.databaseId}
          onClick={() => setOpenId(openId === faq.databaseId ? null : faq.databaseId)}
        />
      ))}
    </div>
  );
}
