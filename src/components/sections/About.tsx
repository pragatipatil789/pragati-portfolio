"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Who I Am",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="30" stroke="#4CC9F0" strokeWidth="1.5" strokeDasharray="4 3"/>
        <circle cx="32" cy="32" r="4" fill="#4CC9F0"/>
        <line x1="32" y1="32" x2="32" y2="8" stroke="#4CC9F0" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="32" y1="32" x2="52" y2="44" stroke="#7209B7" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="8" r="3" fill="#7209B7"/>
        <circle cx="52" cy="44" r="3" fill="#4361EE"/>
        <circle cx="12" cy="44" r="3" fill="#4CC9F0" opacity="0.6"/>
        <line x1="32" y1="32" x2="12" y2="44" stroke="#4CC9F0" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6"/>
      </svg>
    ),
    description: "A strategic thinker and product leader operating at the intersection of consulting rigor and design intuition — translating ambiguity into structured, actionable frameworks that drive organizational clarity.",
    accent: "from-brand-cyan to-brand-blue",
    tag: "Identity",
  },
  {
    title: "My Journey",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <path d="M8 48 Q20 20 32 28 Q44 36 56 8" stroke="#4CC9F0" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="8" cy="48" r="4" fill="#7209B7"/>
        <circle cx="32" cy="28" r="4" fill="#4361EE"/>
        <circle cx="56" cy="8" r="4" fill="#4CC9F0"/>
        <path d="M52 8 L56 8 L56 12" stroke="#4CC9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="44" width="8" height="4" rx="1" fill="#7209B7" opacity="0.4"/>
        <rect x="28" y="24" width="8" height="4" rx="1" fill="#4361EE" opacity="0.4"/>
      </svg>
    ),
    description: "From structuring enterprise-level workflows at KPMG to scaling EdTech products at Paraheights — every engagement has sharpened my ability to deliver measurable results under real-world complexity.",
    accent: "from-brand-purple to-brand-cyan",
    tag: "Experience",
  },
  {
    title: "My Passion",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="16" y="8" width="32" height="36" rx="4" stroke="#4CC9F0" strokeWidth="1.5"/>
        <line x1="24" y1="20" x2="40" y2="20" stroke="#4CC9F0" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="28" x2="40" y2="28" stroke="#7209B7" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="36" x2="34" y2="36" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="22" y="48" width="20" height="6" rx="2" fill="#4CC9F0" opacity="0.3" stroke="#4CC9F0" strokeWidth="1"/>
        <line x1="32" y1="44" x2="32" y2="48" stroke="#4CC9F0" strokeWidth="1.5"/>
      </svg>
    ),
    description: "I am driven by transforming unstructured complexity into clear strategic roadmaps — whether through 550+ process taxonomy designs, go/no-go investment analyses, or stakeholder-aligned product roadmaps.",
    accent: "from-brand-blue to-brand-purple",
    tag: "Drive",
  },
  {
    title: "How I Think",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <rect x="8" y="40" width="8" height="16" rx="1" fill="#7209B7" opacity="0.7"/>
        <rect x="20" y="28" width="8" height="28" rx="1" fill="#4361EE" opacity="0.7"/>
        <rect x="32" y="20" width="8" height="36" rx="1" fill="#4CC9F0" opacity="0.7"/>
        <rect x="44" y="10" width="8" height="46" rx="1" fill="#4CC9F0"/>
        <polyline points="8,38 20,26 32,18 44,8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="44" cy="8" r="3" fill="white"/>
      </svg>
    ),
    description: "Hypothesis-led and data-validated. I apply consulting frameworks — IRR, NPV, scenario modeling — alongside design thinking and regression analysis to generate evidence-based, stakeholder-ready recommendations.",
    accent: "from-brand-cyan to-brand-purple",
    tag: "Methodology",
  },
  {
    title: "What Drives Me",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="20" stroke="#4CC9F0" strokeWidth="1.5" strokeDasharray="3 2"/>
        <circle cx="32" cy="32" r="12" stroke="#7209B7" strokeWidth="1.5"/>
        <circle cx="32" cy="32" r="5" fill="#4CC9F0"/>
        <path d="M32 12 L34 20 L32 18 L30 20 Z" fill="#4CC9F0"/>
        <path d="M52 32 L44 30 L46 32 L44 34 Z" fill="#4CC9F0"/>
        <path d="M32 52 L30 44 L32 46 L34 44 Z" fill="#7209B7"/>
        <path d="M12 32 L20 34 L18 32 L20 30 Z" fill="#7209B7"/>
      </svg>
    ),
    description: "Impact at scale. Whether advising on large-scale infrastructure feasibility or retaining 200+ daily active users, I am motivated by strategic decisions that matter and product solutions that last.",
    accent: "from-brand-purple to-brand-blue",
    tag: "Mission",
  },
  {
    title: "Career Vision",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="16" r="8" stroke="#4CC9F0" strokeWidth="1.5"/>
        <circle cx="12" cy="48" r="6" stroke="#7209B7" strokeWidth="1.5"/>
        <circle cx="52" cy="48" r="6" stroke="#4361EE" strokeWidth="1.5"/>
        <line x1="26" y1="22" x2="16" y2="42" stroke="#4CC9F0" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="38" y1="22" x2="48" y2="42" stroke="#4CC9F0" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="48" x2="46" y2="48" stroke="#7209B7" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 2"/>
        <circle cx="32" cy="16" r="3" fill="#4CC9F0"/>
      </svg>
    ),
    description: "To lead strategy and product functions at the nexus of consulting and technology — building organizations that are adaptive, data-driven, and design-forward in an AI-powered world.",
    accent: "from-brand-blue to-brand-cyan",
    tag: "Vision",
  },
];

// Card pop animation variants
const cardVariants = {
  enter: (direction: number) => ({
    scale: 0.3,
    opacity: 0,
    rotateY: direction > 0 ? 25 : -25,
    rotateX: 8,
    y: 80,
    filter: "blur(10px)",
  }),
  center: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 22,
      mass: 1,
      duration: 0.7,
    },
  },
  exit: (direction: number) => ({
    scale: 0.6,
    opacity: 0,
    rotateY: direction > 0 ? -20 : 20,
    rotateX: -5,
    y: -40,
    filter: "blur(6px)",
    transition: {
      duration: 0.35,
      ease: "easeIn" as const,
    },
  }),
};

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const directionRef = useRef(0);

  const paginate = (dir: number) => {
    directionRef.current = dir;
    setDirection(dir);
    setActiveIndex((prev) => (prev + dir + cards.length) % cards.length);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 2500);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isPaused]);

  const card = cards[activeIndex];

  return (
    <section id="about" className="relative py-32 bg-brand-charcoal overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-navy/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
            Beyond the <span className="text-brand-cyan">Resume.</span>
          </h2>
          <p className="text-xl text-slate-600 font-sans max-w-2xl mx-auto">
            I don&apos;t just manage products — I architect strategies and lead with purpose to drive measurable, lasting growth.
          </p>
        </motion.div>

        {/* Single focused card */}
        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card container with 3D perspective */}
          <div
            className="relative w-full max-w-2xl mx-auto overflow-visible"
            style={{ perspective: "1200px", minHeight: 420 }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 p-10 md:p-14 rounded-3xl bg-brand-navy border border-slate-200 flex flex-col justify-between"
                style={{
                  boxShadow:
                    "0 0 80px rgba(76,201,240,0.12), 0 0 160px rgba(114,9,183,0.06), 0 20px 60px rgba(0,0,0,0.4)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Tag row */}
                <div className="flex items-center justify-between mb-6">
                  <motion.span
                    className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-gradient-to-r ${card.accent} bg-clip-text text-transparent border border-slate-200`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {card.tag}
                  </motion.span>
                  <motion.span
                    className="text-xs text-slate-500 font-mono"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    {String(activeIndex + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
                  </motion.span>
                </div>

                {/* Illustration */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 20 }}
                >
                  {card.illustration}
                </motion.div>

                {/* Text content */}
                <div>
                  <motion.h3
                    className={`text-3xl md:text-4xl font-display font-bold mb-4 bg-gradient-to-r ${card.accent} bg-clip-text text-transparent`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    className="text-slate-600 font-sans text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {card.description}
                  </motion.p>
                </div>

                {/* Progress bar */}
                <div className="mt-8 w-full h-[2px] bg-slate-200 relative overflow-hidden rounded-full">
                  {!isPaused && (
                    <motion.div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${card.accent}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      key={`progress-${activeIndex}`}
                      transition={{ duration: 2.5, ease: "linear" }}
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-gray-400 hover:border-brand-cyan/60 hover:text-brand-cyan hover:shadow-[0_0_20px_rgba(76,201,240,0.2)] transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                  className={`rounded-full transition-all duration-400 ${
                    i === activeIndex
                      ? "w-8 h-2.5 bg-gradient-to-r from-brand-cyan to-brand-purple shadow-[0_0_12px_rgba(76,201,240,0.4)]"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to card ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center text-gray-400 hover:border-brand-cyan/60 hover:text-brand-cyan hover:shadow-[0_0_20px_rgba(76,201,240,0.2)] transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
