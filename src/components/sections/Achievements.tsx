"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const achievements = [
  { value: 550, suffix: "+", label: "Processes Structured" },
  { value: 200, suffix: "+", label: "Daily Active Users Scaled" },
  { value: 10, suffix: "%", label: "Retention Uplift Achieved" },
  { value: 4, suffix: "th", label: "Rank — Inter College Case Comp." },
  { value: 2, suffix: "x", label: "Gold & Silver Medals" },
];

function Typewriter({ text }: { text: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (inView) {
      let index = 0;
      const interval = setInterval(() => {
        setCurrent(text.slice(0, index + 1));
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [inView, text]);

  return (
    <span ref={nodeRef} className="relative flex items-center justify-center">
      {current}
      {inView && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block w-[3px] bg-brand-cyan h-[0.8em] ml-1"
        />
      )}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Measurable <span className="text-brand-purple">Impact.</span>
          </h2>
          <p className="text-xl text-slate-400 font-sans max-w-xl mx-auto">
            Numbers that tell a story of strategic execution and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-3xl bg-brand-navy border border-white/10 hover:border-brand-cyan/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-magnetic="true"
            >
              <div className="text-4xl md:text-6xl font-display font-black mb-4 bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent inline-block">
                <Typewriter text={`${achievement.value}${achievement.suffix}`} />
              </div>
              <div className="text-sm md:text-base text-slate-400 font-medium tracking-wide uppercase">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
