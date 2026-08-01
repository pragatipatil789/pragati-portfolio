"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Business Consultant Intern",
    company: "KPMG",
    period: "Apr 2026 – May 2026",
    achievements: [
      "Assessed infrastructure assets valued at $10M+ across IRR, NPV, and payback for go/no-go decisions.",
      "Analyzed 25-year regional demand across growth and adoption scenarios for commercial viability.",
      "Structured 550+ cross-functional processes into a comprehensive 6-category workflow taxonomy."
    ],
    metric: "$10M+ Valuation",
    color: "from-brand-purple to-brand-blue"
  },
  {
    role: "Junior Product Manager",
    company: "Paraheights",
    period: "Apr 2024 – Jan 2025",
    achievements: [
      "Led E2E delivery of an AI-driven, gamified EdTech platform, scaling to 200+ daily active users.",
      "Launched integrated rewards systems resulting in a 10% uplift in user retention.",
      "Conducted market analysis to proactively integrate emerging technologies and secure industry-leading positioning."
    ],
    metric: "200+ DAU",
    color: "from-brand-blue to-brand-cyan"
  },
  {
    role: "UI/UX Designer Intern",
    company: "Paraheights",
    period: "Jan 2023 – Mar 2024",
    achievements: [
      "Designed high-fidelity wireframes and prototypes, simplifying complex workflows and driving stakeholder alignment.",
      "Led end-to-end product development of internal tools, significantly improving cross-functional communication."
    ],
    metric: "100% Adoption",
    color: "from-brand-cyan to-brand-purple"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-brand-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The <span className="text-brand-purple">Journey.</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans max-w-2xl mx-auto">
            A track record of leveraging design and data to solve complex business problems.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-blue"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-black border-2 border-brand-cyan z-10 shadow-[0_0_15px_rgba(76,201,240,0.5)]" />

                {/* Content side */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 text-left"}`}>
                  <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-brand-cyan mb-4 font-mono">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-xl text-gray-400 font-medium mb-6">
                    {exp.company}
                  </h4>
                  <ul className={`space-y-4 text-gray-300 font-sans ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-lg`}>
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="leading-relaxed relative">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Metric side */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"} flex flex-col justify-center`}>
                  <motion.div 
                    className={`text-4xl md:text-6xl font-display font-black bg-gradient-to-r ${exp.color} bg-clip-text text-transparent opacity-80`}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.metric}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
