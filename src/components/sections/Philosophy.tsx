"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-32 px-6 overflow-hidden bg-brand-navy">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Quote size={48} className="text-brand-purple/50" />
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-white mb-10">
          "Great products aren't just built; they are orchestrated at the intersection of <span className="text-brand-cyan italic">user empathy</span>, <span className="text-brand-purple italic">technical feasibility</span>, and <span className="text-white italic">business viability</span>."
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-lg font-mono tracking-widest text-brand-cyan uppercase">Pragati Patil</span>
          <div className="w-12 h-[1px] bg-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
