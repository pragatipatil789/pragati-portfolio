"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowDown, MoveRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollIndicator(latest < 50);
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
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
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight text-slate-900">
              Designing Experiences That <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">Create Business Impact.</span>
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-slate-600 font-sans max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Strategy-driven. Design-led. Results-obsessed. I translate complex business challenges into product-led solutions — where consulting rigor meets human-centered precision to move the needle.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => scrollToSection("journey")}
              className="px-6 py-3 bg-slate-900 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-brand-blue hover:scale-105 transition-all shadow-lg"
              data-magnetic="true"
            >
              Explore My Journey <MoveRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Portrait Image */}
        <motion.div
          className="relative h-[480px] w-full max-w-md mx-auto"
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
          
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200 bg-white flex items-center justify-center shadow-2xl">
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

      {/* Scroll Indicator — hides on scroll */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-brand-cyan transition-colors cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollIndicator ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ pointerEvents: showScrollIndicator ? "auto" : "none" }}
        aria-label="Scroll to next section"
      >
        <span className="text-xs uppercase tracking-widest group-hover:text-brand-cyan transition-colors">Scroll to Begin</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
