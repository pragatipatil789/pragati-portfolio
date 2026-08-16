"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100]"
      animate={{
        x: mousePosition.x - (isHovered ? 16 : 5),
        y: mousePosition.y - (isHovered ? 16 : 5),
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: isHovered ? 32 : 10,
          height: isHovered ? 32 : 10,
          backgroundColor: isHovered ? "rgba(0, 150, 199, 0.15)" : "rgba(0, 150, 199, 0.8)",
          borderWidth: isHovered ? 1.5 : 0,
          borderColor: "rgba(0, 150, 199, 0.6)",
        }}
        style={{
          borderStyle: "solid",
          mixBlendMode: "normal",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </motion.div>
  );
}
