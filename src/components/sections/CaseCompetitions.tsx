"use client";

import { motion } from "framer-motion";
import { Trophy, Clock } from "lucide-react";

const caseCompetitions = [
  {
    title: "The Power Parity",
    type: "Inter-College Case Competition",
    status: "Details Coming Soon",
    rank: "4th",
    rankLabel: "Rank",
    tags: ["Strategy", "Market Analysis", "Business Case"],
    gradient: "from-brand-purple to-brand-blue",
    borderColor: "border-brand-purple/30",
    glowColor: "shadow-[0_0_40px_rgba(114,9,183,0.12)]",
    accentColor: "text-brand-purple",
    description:
      "An inter-college case competition exploring economic parity challenges. Full case details and solution deck to be added.",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
        <circle cx="40" cy="40" r="36" stroke="#7209B7" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
        <rect x="24" y="44" width="10" height="20" rx="2" fill="#7209B7" opacity="0.7" />
        <rect x="36" y="32" width="10" height="32" rx="2" fill="#4361EE" opacity="0.7" />
        <rect x="48" y="22" width="10" height="42" rx="2" fill="#4CC9F0" opacity="0.7" />
        <polyline points="24,42 36,30 48,20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="48" cy="20" r="3" fill="white" />
        <line x1="20" y1="64" x2="62" y2="64" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
      </svg>
    ),
  },
  {
    title: "Case Competition II",
    type: "To Be Updated",
    status: "Details Coming Soon",
    rank: "—",
    rankLabel: "Rank",
    tags: ["Consulting", "Problem Solving"],
    gradient: "from-brand-cyan to-brand-blue",
    borderColor: "border-brand-cyan/30",
    glowColor: "shadow-[0_0_40px_rgba(76,201,240,0.10)]",
    accentColor: "text-brand-cyan",
    description:
      "Details for this case competition will be added shortly. Stay tuned for the full brief, approach, and outcome.",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
        <circle cx="40" cy="40" r="36" stroke="#4CC9F0" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.5" />
        <circle cx="40" cy="40" r="16" stroke="#4CC9F0" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="6" fill="#4CC9F0" opacity="0.8" />
        <path d="M40 10 L42 22 L40 19 L38 22 Z" fill="#4CC9F0" />
        <path d="M70 40 L58 42 L61 40 L58 38 Z" fill="#4CC9F0" />
        <path d="M40 70 L38 58 L40 61 L42 58 Z" fill="#4361EE" />
        <path d="M10 40 L22 38 L19 40 L22 42 Z" fill="#4361EE" />
      </svg>
    ),
  },
];

export default function CaseCompetitions() {
  return (
    <section
      id="case-competitions"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-brand-cyan font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Competition · Strategy · Case Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
            Case <span className="text-brand-cyan">Competitions.</span>
          </h2>
          <p className="text-xl text-slate-600 font-sans max-w-2xl mx-auto">
            Real-world business challenges tackled under pressure — structured thinking meets competitive execution.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseCompetitions.map((comp, index) => (
            <motion.div
              key={index}
              className={`relative p-8 md:p-10 rounded-3xl bg-white border border-slate-200 hover:border-brand-blue/30 shadow-sm hover:shadow-md overflow-hidden flex flex-col gap-6`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 tracking-wide">
                  <Clock size={12} />
                  {comp.status}
                </span>
                <div className="flex items-center gap-2">
                  <Trophy size={16} className={comp.accentColor} />
                  <span className={`font-display font-bold text-lg ${comp.accentColor}`}>
                    {comp.rank}
                    <span className="text-xs text-gray-500 font-sans font-normal ml-1">
                      {comp.rankLabel}
                    </span>
                  </span>
                </div>
              </div>

              {/* Illustration */}
              <div className="opacity-80">{comp.illustration}</div>

              {/* Content */}
              <div>
                <p className={`text-xs font-mono tracking-widest uppercase mb-2 ${comp.accentColor}`}>
                  {comp.type}
                </p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
                  {comp.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {comp.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {comp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-50 border border-slate-200 text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Gradient bottom border */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${comp.gradient} opacity-60 rounded-b-3xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
