"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users } from "lucide-react";

const education = [
  {
    degree: "PGDM",
    institute: "Great Lakes Institute of Management",
    year: "2025 - 2027",
    score: "3.3 / 4 CGPA",
    icon: <GraduationCap size={20} className="text-brand-purple" />
  },
  {
    degree: "B.Tech (CSE)",
    institute: "Vishwakarma Institute of Information Technology",
    year: "2018 - 2022",
    score: "9.68 / 10 CGPA",
    icon: <GraduationCap size={20} className="text-brand-cyan" />
  }
];

const leadership = [
  {
    role: "Placement Committee Member",
    context: "GLIM",
    period: "2025 - 2027",
    description: "Coordinating recruiter engagement and end-to-end placement logistics.",
    icon: <Users size={20} className="text-brand-blue" />
  },
  {
    role: "Girls Commander",
    context: "RCF",
    period: "2015",
    description: "Handpicked to lead the girl's troop for the Republic Day March Past.",
    icon: <Award size={20} className="text-yellow-400" />
  },
  {
    role: "Logistics Coordinator",
    context: "Sapience Management Conclave",
    period: "2019",
    description: "Ensured smooth execution of the flagship management conclave.",
    icon: <Users size={20} className="text-green-400" />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-12 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Education Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Academic <span className="text-brand-purple">Foundation.</span>
            </h2>
            <p className="text-slate-400 font-sans">
              Rigorous academic background bridging technology and management.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l border-slate-200"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center">
                  {edu.icon}
                </div>
                <div className="text-sm font-mono text-slate-500 mb-1">{edu.year}</div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-1">{edu.degree}</h3>
                <h4 className="text-brand-cyan mb-2">{edu.institute}</h4>
                <div className="inline-block px-3 py-1 bg-white rounded text-sm text-slate-600 border border-slate-200 shadow-sm">
                  Score: {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">
              Leadership & <span className="text-brand-cyan">Initiatives.</span>
            </h2>
            <p className="text-slate-400 font-sans">
              Taking charge, organizing teams, and driving events to success.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue/30 transition-colors shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                data-magnetic="true"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-slate-50">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{item.role}</h3>
                    <div className="text-sm text-brand-purple">{item.context} • {item.period}</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
