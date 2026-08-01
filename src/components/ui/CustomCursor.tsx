"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Hide on touch devices

  useEffect(() => {
    // Check if device is touch-based
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[data-magnetic="true"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[99] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        )}
      </motion.div>
    </>
  );
}
