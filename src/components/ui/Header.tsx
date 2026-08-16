"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Skills", id: "constellation" },
  { label: "Impact", id: "achievements" },
  { label: "Education", id: "education" },
  { label: "Cases", id: "case-competitions" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [hidden, setHidden] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show header after scrolling past the hero (200px)
    setHidden(latest < 200);

    // Determine active section based on scroll position
    for (let i = navItems.length - 1; i >= 0; i--) {
      const el = document.getElementById(navItems[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    }
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[90] backdrop-blur-xl border-b border-white/[0.06]"
      style={{
        background: "rgba(11, 17, 33, 0.85)",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-display font-bold text-lg tracking-tight text-white hover:text-brand-cyan transition-colors"
        >
          PP<span className="text-brand-cyan">.</span>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                activeSection === item.id
                  ? "text-brand-cyan"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-brand-cyan rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile nav indicator */}
        <div className="md:hidden flex items-center gap-2">
          <span className="text-xs font-mono text-brand-cyan tracking-wider uppercase">
            {navItems.find((n) => n.id === activeSection)?.label}
          </span>
        </div>
      </div>
    </motion.header>
  );
}
