"use client";

import { motion } from "framer-motion";
import { BarChart3, Layers, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Strategy & Analytics",
    icon: <BarChart3 size={24} className="text-brand-purple" />,
    color: "border-brand-purple/20",
    bgColor: "bg-brand-purple/5",
    skills: [
      { name: "Strategic Advisory", desc: "Structuring complex business problems into actionable recommendations." },
      { name: "Financial Modeling", desc: "IRR, NPV, payback period & scenario analysis for investment decisions." },
      { name: "Market Analysis", desc: "Competitive landscape mapping, demand forecasting & segmentation." },
      { name: "Risk Assessment", desc: "Scenario modeling & sensitivity analysis to quantify business risk." },
    ]
  },
  {
    title: "Product & Design",
    icon: <Layers size={24} className="text-brand-cyan" />,
    color: "border-brand-cyan/20",
    bgColor: "bg-brand-cyan/5",
    skills: [
      { name: "Digital Transformation", desc: "End-to-end product delivery from ideation to scaled deployment." },
      { name: "UX & Product Design", desc: "High-fidelity prototyping, user research & design systems." },
      { name: "Process Optimization", desc: "Workflow taxonomy design across 550+ cross-functional processes." },
    ]
  },
  {
    title: "Leadership & Execution",
    icon: <Users size={24} className="text-brand-blue" />,
    color: "border-brand-blue/20",
    bgColor: "bg-brand-blue/5",
    skills: [
      { name: "Stakeholder Mgmt", desc: "Cross-functional alignment and executive communication." },
      { name: "Change Management", desc: "Driving organizational adoption and managing transition complexity." },
      { name: "Executive Presentations", desc: "Translating complex findings into board-ready, narrative-driven decks." },
    ]
  }
];

export default function SkillsGalaxy() {
  return (
    <section
      id="constellation"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">
            Core <span className="text-brand-cyan">Competencies.</span>
          </h2>
          <p className="text-xl text-slate-600 font-sans max-w-xl mx-auto">
            A structured breakdown of my expertise across strategy, product, and leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow`}
            >
              {/* Category Header */}
              <div className={`p-8 border-b border-slate-100 ${category.bgColor}`}>
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="p-8 flex-1 flex flex-col gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-blue transition-colors" />
                      <h4 className="font-display font-bold text-slate-900">
                        {skill.name}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-4.5 border-l-2 border-transparent group-hover:border-slate-100 transition-colors">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
