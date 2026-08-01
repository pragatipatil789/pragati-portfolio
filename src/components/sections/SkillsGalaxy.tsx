"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "Strategic Advisory", radius: 120, angle: 0, speed: 15, size: "text-base md:text-lg", color: "text-brand-cyan", bg: "bg-brand-cyan/10" },
  { name: "Business Case Development", radius: 185, angle: 40, speed: -20, size: "text-sm md:text-base", color: "text-brand-purple", bg: "bg-brand-purple/10" },
  { name: "Market Analysis", radius: 150, angle: 90, speed: 25, size: "text-sm md:text-base", color: "text-brand-blue", bg: "bg-brand-blue/10" },
  { name: "Stakeholder Management", radius: 220, angle: 170, speed: -18, size: "text-base", color: "text-white", bg: "bg-white/10" },
  { name: "Change Management", radius: 260, angle: 250, speed: 22, size: "text-sm md:text-base", color: "text-brand-cyan", bg: "bg-brand-cyan/10" },
  { name: "Financial Modeling", radius: 200, angle: 310, speed: -25, size: "text-sm", color: "text-gray-300", bg: "bg-gray-300/10" },
  { name: "Process Optimization", radius: 280, angle: 120, speed: 30, size: "text-sm md:text-base", color: "text-brand-purple", bg: "bg-brand-purple/10" },
  { name: "Risk Assessment", radius: 160, angle: 210, speed: -22, size: "text-sm", color: "text-brand-blue", bg: "bg-brand-blue/10" },
  { name: "Digital Transformation", radius: 240, angle: 330, speed: 18, size: "text-sm md:text-base", color: "text-brand-cyan", bg: "bg-brand-cyan/10" },
  { name: "Executive Presentations", radius: 300, angle: 70, speed: -28, size: "text-sm", color: "text-white", bg: "bg-white/10" },
];

export default function SkillsGalaxy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen py-32 px-6 overflow-hidden bg-brand-charcoal flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-navy/50 via-brand-charcoal to-brand-charcoal -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-20 absolute top-32"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          The <span className="text-brand-cyan">Constellation.</span>
        </h2>
        <p className="text-xl text-gray-400 font-sans max-w-xl mx-auto">
          A dynamic ecosystem of skills powering strategy, product, and consulting excellence.
        </p>
      </motion.div>

      <div className="relative w-full max-w-3xl aspect-square mt-20 flex items-center justify-center">
        {/* Core Center */}
        <div className="absolute w-36 h-36 rounded-full bg-brand-navy border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(76,201,240,0.3)] z-20 backdrop-blur-md">
          <span className="font-display font-bold text-center text-sm leading-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent px-2">
            Strategy<br/>×<br/>Product
          </span>
        </div>

        {/* Orbit Rings */}
        {[120, 160, 200, 240, 280, 300].map((radius, i) => (
          <div 
            key={i} 
            className="absolute rounded-full border border-white/5"
            style={{ width: radius * 2, height: radius * 2 }}
          />
        ))}

        {/* Orbiting Skills */}
        {mounted && skills.map((skill, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 origin-top-left z-10"
            animate={{
              rotate: [0, 360 * (skill.speed > 0 ? 1 : -1)],
            }}
            transition={{
              duration: Math.abs(skill.speed),
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className={`absolute flex items-center justify-center whitespace-nowrap px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm cursor-pointer ${skill.bg} ${skill.color} ${skill.size} font-medium tracking-wide`}
              style={{
                x: Math.cos((skill.angle * Math.PI) / 180) * skill.radius - 50,
                y: Math.sin((skill.angle * Math.PI) / 180) * skill.radius - 20,
              }}
              whileHover={{ scale: 1.1, zIndex: 50, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
              // Counter-rotate text so it stays upright
              animate={{
                rotate: [360 * (skill.speed > 0 ? -1 : 1), 0],
              }}
              transition={{
                duration: Math.abs(skill.speed),
                repeat: Infinity,
                ease: "linear",
              }}
              data-magnetic="true"
            >
              {skill.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
