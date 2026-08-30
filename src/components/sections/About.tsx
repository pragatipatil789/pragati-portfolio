"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const traits = [
  {
    id: "strategist",
    label: "Strategist",
    accent: "from-brand-cyan to-brand-blue",
    tagline: "Structured Thinking. Clear Outcomes.",
    body: "I break down complex, ambiguous business problems into structured frameworks — applying MECE logic, hypothesis-led analysis, and scenario modeling to produce recommendations that decision-makers can act on immediately.",
    stat: "550+ processes structured",
    icon: "◈",
  },
  {
    id: "analyst",
    label: "Analyst",
    accent: "from-brand-blue to-brand-purple",
    tagline: "Data-Validated. Evidence-Led.",
    body: "From IRR & NPV modeling to demand forecasting across 25-year horizons, I ensure every recommendation is anchored in quantitative reality — not just strategic intuition.",
    stat: "25-year demand models built",
    icon: "◉",
  },
  {
    id: "builder",
    label: "Builder",
    accent: "from-brand-purple to-brand-cyan",
    tagline: "Ideas to Execution. End-to-End.",
    body: "I have led full product lifecycles — from ideation and UX design to scaled deployment, hitting 200+ daily active users and driving a 10% uplift in retention through integrated reward systems.",
    stat: "200+ daily active users scaled",
    icon: "◍",
  },
  {
    id: "communicator",
    label: "Communicator",
    accent: "from-brand-cyan to-brand-purple",
    tagline: "Translating Complexity into Clarity.",
    body: "I bridge the gap between technical rigour and boardroom language — crafting stakeholder-ready narratives, executive presentations, and cross-functional alignment frameworks that accelerate decisions.",
    stat: "Stakeholder-ready deliverables",
    icon: "◎",
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const current = traits[active];

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-slate-50">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        {/* — SECTION LABEL — */}
        <motion.p
          className="text-brand-cyan font-mono text-sm tracking-[0.3em] uppercase mb-6 font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Identity · Approach · Mindset
        </motion.p>

        {/* — HEADLINE — */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-black leading-[1.05] tracking-tighter text-slate-900 mb-4">
            Beyond the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
                Resume.
              </span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ originX: 0 }}
              />
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-sans max-w-xl mx-auto mt-4">
            The credentials are a starting point. Here&apos;s what actually defines how I work.
          </p>
        </motion.div>

        {/* — MAIN PANEL — */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
          {/* LEFT — Trait Selector */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {traits.map((trait, i) => (
              <button
                key={trait.id}
                onClick={() => setActive(i)}
                className={`relative group flex items-center gap-5 px-6 py-5 rounded-2xl text-left transition-all duration-300 border ${
                  active === i
                    ? "bg-white border-brand-blue/30 shadow-lg shadow-brand-blue/5"
                    : "bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                {/* Active indicator bar */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-gradient-to-b ${trait.accent} transition-opacity duration-300`}
                  animate={{ opacity: active === i ? 1 : 0 }}
                />

                <span
                  className={`text-3xl font-mono transition-colors duration-300 ${
                    active === i ? "text-brand-cyan" : "text-slate-300"
                  }`}
                >
                  {trait.icon}
                </span>
                <div>
                  <span
                    className={`block font-display font-bold text-xl transition-colors duration-300 ${
                      active === i ? "text-slate-900" : "text-slate-500"
                    }`}
                  >
                    {trait.label}
                  </span>
                  {active === i && (
                    <motion.span
                      className="block text-xs font-mono text-brand-cyan mt-0.5 tracking-wide"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {trait.tagline}
                    </motion.span>
                  )}
                </div>
              </button>
            ))}
          </motion.div>

          {/* RIGHT — Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative rounded-3xl bg-white border border-slate-200 p-10 md:p-14 overflow-hidden shadow-xl shadow-slate-100"
              >
                {/* Gradient accent corner */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${current.accent} opacity-[0.06] rounded-bl-[80px] pointer-events-none`}
                />
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${current.accent}`}
                />

                {/* Large decorative icon */}
                <div
                  className={`text-8xl font-mono bg-gradient-to-r ${current.accent} bg-clip-text text-transparent mb-8 leading-none`}
                >
                  {current.icon}
                </div>

                {/* Tagline */}
                <p
                  className={`text-xs font-mono tracking-[0.3em] uppercase mb-4 font-bold bg-gradient-to-r ${current.accent} bg-clip-text text-transparent`}
                >
                  {current.tagline}
                </p>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 leading-tight">
                  {current.label}
                </h3>

                {/* Body */}
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
                  {current.body}
                </p>

                {/* Stat chip */}
                <div
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${current.accent} text-white text-sm font-semibold shadow-sm`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
                  {current.stat}
                </div>

                {/* Progress dots */}
                <div className="flex items-center gap-2 mt-10">
                  {traits.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-8 h-2 bg-gradient-to-r from-brand-cyan to-brand-purple"
                          : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
                      }`}
                      aria-label={`View ${traits[i].label}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
