"use client";

import { motion } from "framer-motion";
import { TrendingUp, Search, BarChart2, Users, Lightbulb, DollarSign } from "lucide-react";

const consultingFactors = [
  {
    icon: <Search size={22} className="text-brand-cyan" />,
    title: "Problem Structuring",
    desc: "MECE frameworks, issue trees & hypothesis-first problem decomposition.",
  },
  {
    icon: <Lightbulb size={22} className="text-brand-purple" />,
    title: "Hypothesis-Led Thinking",
    desc: "Insight-driven analysis with rigorous fact-base and clear so-what.",
  },
  {
    icon: <BarChart2 size={22} className="text-brand-blue" />,
    title: "Data-Backed Insights",
    desc: "Regression, scenario modeling & financial analysis to validate strategy.",
  },
  {
    icon: <Users size={22} className="text-brand-cyan" />,
    title: "Stakeholder Alignment",
    desc: "Executive communication that drives consensus across diverse functions.",
  },
  {
    icon: <TrendingUp size={22} className="text-brand-purple" />,
    title: "Change Leadership",
    desc: "Organizational adoption, transformation roadmaps & culture enablement.",
  },
  {
    icon: <DollarSign size={22} className="text-brand-blue" />,
    title: "Commercial Acumen",
    desc: "IRR, NPV, business case development & go/no-go investment decisions.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-brand-navy">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Headline */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-cyan font-mono text-sm tracking-[0.3em] uppercase mb-6">
            Consulting · Strategy · Product
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-8">
            Let&apos;s solve{" "}
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">
              what matters.
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            I bring consulting-grade rigor and product-led execution to every engagement —
            turning ambiguous challenges into clear, high-impact strategies that move organizations forward.
          </p>
        </motion.div>

        {/* Key Factors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {consultingFactors.map((factor, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-brand-cyan/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(76,201,240,0.07)" }}
            >
              <div className="p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform">
                {factor.icon}
              </div>
              <h3 className="text-white font-display font-bold text-lg mb-2">
                {factor.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {factor.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Recruiter CTA banner */}
        <motion.div
          className="relative text-center py-12 px-8 rounded-3xl overflow-hidden border border-white/10"
          style={{
            background: "linear-gradient(135deg, rgba(76,201,240,0.06) 0%, rgba(114,9,183,0.10) 50%, rgba(67,97,238,0.06) 100%)",
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(76,201,240,0.08)_0%,_transparent_70%)]" />
          <p className="text-brand-cyan font-mono text-xs tracking-[0.25em] uppercase mb-4 relative z-10">
            Ready for High-Impact Engagements
          </p>
          <p className="text-2xl md:text-3xl font-display font-bold text-white relative z-10 leading-snug">
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
