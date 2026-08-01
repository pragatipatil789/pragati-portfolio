"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Who I Am",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
  },
  {
    title: "My Journey",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
  },
  {
    title: "My Passion",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <rect x="16" y="8" width="32" height="36" rx="4" stroke="#4CC9F0" strokeWidth="1.5"/>
        <line x1="24" y1="20" x2="40" y2="20" stroke="#4CC9F0" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="28" x2="40" y2="28" stroke="#7209B7" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="24" y1="36" x2="34" y2="36" stroke="#4361EE" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="22" y="48" width="20" height="6" rx="2" fill="#4CC9F0" opacity="0.3" stroke="#4CC9F0" strokeWidth="1"/>
        <line x1="32" y1="44" x2="32" y2="48" stroke="#4CC9F0" strokeWidth="1.5"/>
      </svg>
    ),
    description: "I am driven by transforming unstructured complexity into clear strategic roadmaps — whether through 550+ process taxonomy designs, go/no-go investment analyses, or stakeholder-aligned product roadmaps.",
  },
  {
    title: "How I Think",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
        <rect x="8" y="40" width="8" height="16" rx="1" fill="#7209B7" opacity="0.7"/>
        <rect x="20" y="28" width="8" height="28" rx="1" fill="#4361EE" opacity="0.7"/>
        <rect x="32" y="20" width="8" height="36" rx="1" fill="#4CC9F0" opacity="0.7"/>
        <rect x="44" y="10" width="8" height="46" rx="1" fill="#4CC9F0"/>
        <polyline points="8,38 20,26 32,18 44,8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="44" cy="8" r="3" fill="white"/>
      </svg>
    ),
    description: "Hypothesis-led and data-validated. I apply consulting frameworks — IRR, NPV, scenario modeling — alongside design thinking and regression analysis to generate evidence-based, stakeholder-ready recommendations.",
  },
  {
    title: "What Drives Me",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
  },
  {
    title: "Career Vision",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14">
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
  },
];

export default function About() {
  return (
    <section className="relative py-32 bg-brand-charcoal overflow-hidden">
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
            I don&apos;t just manage products — I architect strategies and lead with purpose to drive measurable, lasting growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="flex flex-col p-10 rounded-2xl bg-brand-navy border border-white/10 hover:border-brand-cyan/40 transition-colors duration-300 min-h-[280px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(76,201,240,0.08)" }}
              data-magnetic="true"
            >
              <div className="mb-6">
                {card.illustration}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-gray-300 font-sans text-lg leading-relaxed flex-1">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
