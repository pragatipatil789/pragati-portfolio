"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BarChart3, Layers, Users } from "lucide-react";
import React from "react";

const skillCategories = [
  {
    title: "Strategy & Analytics",
    icon: <BarChart3 size={32} className="text-white" />,
    color: "from-brand-cyan to-brand-blue",
    shadow: "shadow-brand-cyan/20",
    skills: [
      { name: "Strategic Advisory", desc: "Structuring complex business problems into actionable recommendations." },
      { name: "Financial Modeling", desc: "IRR, NPV, payback period & scenario analysis for investment decisions." },
      { name: "Market Analysis", desc: "Competitive landscape mapping, demand forecasting & segmentation." },
      { name: "Risk Assessment", desc: "Scenario modeling & sensitivity analysis to quantify business risk." },
    ]
  },
  {
    title: "Product & Design",
    icon: <Layers size={32} className="text-white" />,
    color: "from-brand-purple to-brand-cyan",
    shadow: "shadow-brand-purple/20",
    skills: [
      { name: "Digital Transformation", desc: "End-to-end product delivery from ideation to scaled deployment." },
      { name: "UX & Product Design", desc: "High-fidelity prototyping, user research & design systems." },
      { name: "Process Optimization", desc: "Workflow taxonomy design across 550+ cross-functional processes." },
    ]
  },
  {
    title: "Leadership & Execution",
    icon: <Users size={32} className="text-white" />,
    color: "from-brand-blue to-brand-purple",
    shadow: "shadow-brand-blue/20",
    skills: [
      { name: "Stakeholder Mgmt", desc: "Cross-functional alignment and executive communication." },
      { name: "Change Management", desc: "Driving organizational adoption and managing transition complexity." },
      { name: "Executive Presentations", desc: "Translating complex findings into board-ready, narrative-driven decks." },
    ]
  }
];

function TiltCard({ category, index }: { category: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="relative h-full w-full rounded-3xl"
      >
        {/* Glow behind the card */}
        <div className={`absolute -inset-1 rounded-3xl blur-xl opacity-30 bg-gradient-to-r ${category.color} transition-opacity duration-500 group-hover:opacity-60`} style={{ transform: "translateZ(-20px)" }} />
        
        {/* Card Content - Glassmorphism */}
        <div 
          className="relative h-full flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Top Gradient Bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />

          {/* Header */}
          <div className="flex items-center gap-5 mb-8" style={{ transform: "translateZ(30px)" }}>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg ${category.shadow}`}>
              {category.icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-white leading-tight">
              {category.title}
            </h3>
          </div>

          {/* Skills List */}
          <div className="flex flex-col gap-6" style={{ transform: "translateZ(40px)" }}>
            {category.skills.map((skill: any, sIdx: number) => (
              <div key={sIdx} className="group/skill">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-2 h-2 rounded-full bg-white/30 group-hover/skill:bg-brand-cyan transition-colors`} />
                  <h4 className="font-display font-bold text-white text-lg">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-5">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SkillsGalaxy() {
  return (
    <section
      id="constellation"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-brand-charcoal overflow-hidden my-24"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Animated glowing orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-brand-cyan font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Specialized Toolkit
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            Core <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Competencies.</span>
          </h2>
          <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto">
            A structured breakdown of my expertise across strategy, product, and leadership — engineered for high-impact execution.
          </p>
        </motion.div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <TiltCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
