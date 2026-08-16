"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit after reaching 100%
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-brand-black)] text-[var(--color-brand-white)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            Pragati Patil
          </motion.h1>
        </div>
        
        <div className="overflow-hidden h-6">
          <motion.p
            className="text-sm md:text-base text-gray-400 font-sans tracking-widest uppercase"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Business Consultant • Product Manager
          </motion.p>
        </div>

        <div className="w-48 md:w-64 h-[1px] bg-white/20 mt-8 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: `${progress}%` }}
            transition={{ type: "tween", ease: "linear" }}
          />
        </div>
        
        <div className="text-xs font-mono tracking-widest text-gray-500 mt-2">
          {progress.toString().padStart(3, "0")}%
        </div>
      </div>
    </motion.div>
  );
}
