"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Who I Am",
    emoji: "🧠",
    description: "A digital transformer and business strategist. I sit at the intersection of business viability, user desirability, and technical feasibility.",
  },
  {
    title: "My Journey",
    emoji: "🚀",
    description: "From developing AI-driven EdTech engaging 200+ daily users at Paraheights, to assessing $10M+ infrastructure assets at KPMG.",
  },
  {
    title: "My Passion",
    emoji: "❤️",
    description: "I love simplifying the complex. Whether it's structuring 550+ cross-functional processes or designing seamless UI workflows.",
  },
  {
    title: "How I Think",
    emoji: "💡",
    description: "Data-driven yet deeply empathetic. I leverage regression analysis to build pricing strategies, while using wireframes to align stakeholders.",
  },
  {
    title: "What Drives Me",
    emoji: "⚡",
    description: "Impact. Seeing a 10% uplift in user retention or identifying the key risks for a go/no-go investment decision is what gets me up in the morning.",
  },
  {
    title: "Career Vision",
    emoji: "🎯",
    description: "To lead cross-functional teams in building intelligent, AI-powered products that define the future of how businesses operate and scale.",
  }
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Move left to right (decreasing index, wrapping around)
      setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    }, 4000); // 4 second interval
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen py-32 bg-brand-charcoal overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Beyond the <span className="text-brand-cyan">Resume.</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
            I don&apos;t just manage products; I craft experiences and build strategies that drive measurable growth.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 h-[350px] flex items-center justify-center overflow-visible">
        <AnimatePresence mode="popLayout">
          {cards.map((card, index) => {
            // Calculate relative position based on current index
            // We want 3 cards visible. Center is active. Left and right are blurred/scaled down.
            let position = index - currentIndex;
            
            // Handle wrap around for seamless loop
            if (position < -Math.floor(cards.length / 2)) position += cards.length;
            if (position > Math.floor(cards.length / 2)) position -= cards.length;

            if (Math.abs(position) > 2) return null; // Only render nearby cards

            return (
              <motion.div
                key={card.title}
                className="absolute w-[350px] p-8 rounded-2xl bg-brand-navy border border-white/10 flex flex-col h-[300px]"
                initial={{ 
                  x: (position + 1) * 380, 
                  scale: 0.8, 
                  opacity: 0,
                  zIndex: 0
                }}
                animate={{ 
                  x: position * 380,
                  scale: position === 0 ? 1 : 0.85,
                  opacity: Math.abs(position) <= 1 ? (position === 0 ? 1 : 0.4) : 0,
                  zIndex: position === 0 ? 10 : 5,
                  filter: position === 0 ? "blur(0px)" : "blur(4px)",
                }}
                exit={{ 
                  x: (position - 1) * 380, 
                  scale: 0.8, 
                  opacity: 0,
                  zIndex: 0
                }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                data-magnetic="true"
              >
                <div className="mb-6 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl">
                  {card.emoji}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-gray-400 font-sans leading-relaxed flex-1">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
