"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] -z-10" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 mt-20 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
              Designing Experiences That <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Create Business Impact.</span>
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-gray-400 font-sans max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Product thinker and UX designer bridging the gap between business strategy and intelligent products. From driving $10M+ valuations to crafting AI-driven EdTech, I build things that matter.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="px-6 py-3 bg-brand-white text-brand-black rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform"
              data-magnetic="true"
            >
              Explore My Journey <MoveRight size={18} />
            </button>
            <button 
              className="px-6 py-3 border border-white/20 rounded-full font-medium flex items-center gap-2 hover:bg-white/5 transition-colors"
              data-magnetic="true"
            >
              View Resume <FileText size={18} />
            </button>
          </motion.div>
        </div>

        {/* Portrait Image */}
        <motion.div
          className="relative h-[500px] w-full max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Animated Glow Behind Image */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-cyan rounded-3xl blur-2xl opacity-40"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
          
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-brand-charcoal/50 flex items-center justify-center">
            <Image 
              src="/profile.jpg" 
              alt="Pragati Patil" 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll to Begin</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
