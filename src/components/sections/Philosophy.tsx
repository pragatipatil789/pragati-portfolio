"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Search, BarChart2, Users, Lightbulb, DollarSign, ChevronDown } from "lucide-react";
import { useState } from "react";

const consultingFactors = [
  {
    icon: <Search size={24} className="text-brand-cyan" />,
    title: "Problem Structuring",
    desc: "MECE frameworks, issue trees & hypothesis-first problem decomposition. Transforming ambiguous situations into structured, solvable components.",
  },
  {
    icon: <Lightbulb size={24} className="text-brand-purple" />,
    title: "Hypothesis-Led Thinking",
    desc: "Insight-driven analysis with rigorous fact-base and clear so-what. Focusing on the 'why' before diving into the 'what' and 'how'.",
  },
  {
    icon: <BarChart2 size={24} className="text-brand-blue" />,
    title: "Data-Backed Insights",
    desc: "Regression, scenario modeling & financial analysis to validate strategy. Ensuring recommendations are grounded in quantitative reality.",
  },
  {
    icon: <Users size={24} className="text-brand-cyan" />,
    title: "Stakeholder Alignment",
    desc: "Executive communication that drives consensus across diverse functions. Bridging the gap between technical teams and business leadership.",
  },
  {
    icon: <TrendingUp size={24} className="text-brand-purple" />,
    title: "Change Leadership",
    desc: "Organizational adoption, transformation roadmaps & culture enablement. Ensuring strategic recommendations are actually implemented successfully.",
  },
  {
    icon: <DollarSign size={24} className="text-brand-blue" />,
    title: "Commercial Acumen",
    desc: "IRR, NPV, business case development & go/no-go investment decisions. Aligning product initiatives with core business profitability goals.",
  },
];

export default function Philosophy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Headline */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-cyan font-mono text-sm tracking-[0.3em] uppercase mb-6 font-semibold">
            Consulting · Strategy · Product
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-tight mb-8">
            Let&apos;s solve{" "}
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
              what matters.
            </span>
          </h2>
          <p className="text-xl text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
            I bring consulting-grade rigor and product-led execution to every engagement —
            turning ambiguous challenges into clear, high-impact strategies that move organizations forward.
          </p>
        </motion.div>

        {/* Interactive Accordion Layout */}
        <div className="max-w-3xl mx-auto mb-24 space-y-4">
          {consultingFactors.map((factor, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isActive ? "bg-white border-brand-cyan/40 shadow-md" : "bg-white/50 border-slate-200 hover:border-slate-300"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:px-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? "bg-slate-50" : "bg-transparent"}`}>
                      {factor.icon}
                    </div>
                    <h3 className={`font-display font-bold text-xl md:text-2xl transition-colors ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                      {factor.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full ${isActive ? "bg-slate-100 text-brand-cyan" : "text-slate-400"}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 ml-20">
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {factor.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Recruiter CTA banner */}
        <motion.div
          className="relative text-center py-12 px-8 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(76,201,240,0.05)_0%,_transparent_70%)] pointer-events-none" />
          <p className="text-brand-cyan font-mono text-xs tracking-[0.25em] uppercase mb-4 relative z-10 font-bold">
            Ready for High-Impact Engagements
          </p>
          <p className="text-2xl md:text-3xl font-display font-bold text-slate-900 relative z-10 leading-snug">
            Looking for someone who can{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              structure ambiguity, drive decisions,
            </span>
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              and deliver transformation?
            </span>
            {" "}Let&apos;s connect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
