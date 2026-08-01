"use client";

import { motion } from "framer-motion";
import { Link, Mail, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-32 px-6 overflow-hidden bg-brand-black">
      {/* Animated background gradient mesh */}
      <motion.div 
        className="absolute inset-0 opacity-30 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(114, 9, 183, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(76, 201, 240, 0.4) 0%, transparent 40%)",
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
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Let's build something <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">extraordinary.</span>
          </h2>
          <p className="text-xl text-gray-400 font-sans mb-12 max-w-2xl mx-auto">
            Currently open to new opportunities in Product Management and UX Strategy. Let's connect and discuss how I can bring value to your team.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <a href="mailto:pragati@example.com" data-magnetic="true" className="flex items-center gap-3 px-8 py-4 bg-brand-white text-brand-black rounded-full font-medium hover:scale-105 transition-transform">
            <Mail size={20} />
            Send an Email
          </a>
          
          <a href="https://linkedin.com/in/pragatipatil" target="_blank" rel="noreferrer" data-magnetic="true" className="flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-medium hover:bg-[#005582] transition-colors">
            <Link size={20} />
            LinkedIn
          </a>
          
          <a href="#" data-magnetic="true" className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors">
            <FileText size={20} />
            View Full Resume
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 font-mono tracking-wider">
        © {new Date().getFullYear()} PRAGATI PATIL. ALL RIGHTS RESERVED.
      </div>
    </section>
  );
}
