"use client";

import { motion } from "framer-motion";
import { Link, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[90vh] flex flex-col items-center justify-center py-32 px-6 overflow-hidden bg-slate-50">
      {/* Animated background gradient mesh */}
      <motion.div 
        className="absolute inset-0 opacity-40 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.3) 0%, transparent 40%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-cyan font-mono text-sm tracking-[0.3em] uppercase mb-6">
            Consulting · Strategy · Product
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-slate-900">
            Let&apos;s solve{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              what matters next.
            </span>
          </h2>
          <p className="text-xl text-slate-600 font-sans mb-12 max-w-2xl mx-auto leading-relaxed">
            Actively seeking high-impact consulting and product strategy roles where I can drive transformation, lead cross-functional engagements, and deliver outcomes that shape markets.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <a 
            href="mailto:pragati.pgdm27g@greatlakes.edu.in" 
            data-magnetic="true" 
            className="flex items-center gap-3 px-7 py-4 bg-brand-navy text-white rounded-full font-semibold hover:bg-brand-blue hover:scale-105 transition-all shadow-lg"
          >
            <Mail size={20} />
            pragati.pgdm27g@greatlakes.edu.in
          </a>
          
          <a 
            href="tel:+917756881199" 
            data-magnetic="true" 
            className="flex items-center gap-3 px-7 py-4 bg-brand-navy text-white rounded-full font-semibold hover:bg-brand-purple hover:scale-105 transition-all shadow-lg"
          >
            <Phone size={20} />
            +91 7756881199
          </a>
          
          <a 
            href="https://www.linkedin.com/in/pragati-patil-b620821b1/" 
            target="_blank" 
            rel="noreferrer" 
            data-magnetic="true" 
            className="flex items-center gap-3 px-7 py-4 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:border-brand-blue hover:text-brand-blue hover:bg-white transition-all bg-white shadow-sm"
          >
            <Link size={20} />
            LinkedIn
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-600 font-mono tracking-wider">
        © {new Date().getFullYear()} PRAGATI PATIL. ALL RIGHTS RESERVED.
      </div>
    </section>
  );
}
