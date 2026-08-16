"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface ProjectPhoto {
  src: string;
  caption: string;
}

interface ExperienceData {
  role: string;
  company: string;
  period: string;
  achievements: string[];
  metric: string;
  color: string;
  photos: ProjectPhoto[];
}

const experiences: ExperienceData[] = [
  {
    role: "Business Consultant Intern",
    company: "KPMG",
    period: "Apr 2026 – May 2026",
    achievements: [
      "Assessed infrastructure assets across IRR, NPV, and payback period benchmarks to deliver go/no-go investment decisions.",
      "Analyzed 25-year regional demand across growth and adoption scenarios for commercial viability.",
      "Structured 550+ cross-functional processes into a comprehensive 6-category workflow taxonomy."
    ],
    metric: "25yr Projections",
    color: "from-brand-purple to-brand-blue",
    photos: [],
  },
  {
    role: "Junior Product Manager",
    company: "Paraheights",
    period: "Apr 2024 – Jan 2025",
    achievements: [
      "Led E2E delivery of an AI-driven, gamified EdTech platform, scaling to 200+ daily active users.",
      "Launched integrated rewards systems resulting in a 10% uplift in user retention.",
      "Conducted market analysis to proactively integrate emerging technologies and secure industry-leading positioning."
    ],
    metric: "200+ DAU",
    color: "from-brand-blue to-brand-cyan",
    photos: [],
  },
  {
    role: "UI/UX Designer Intern",
    company: "Paraheights",
    period: "Jan 2023 – Mar 2024",
    achievements: [
      "Designed high-fidelity wireframes and prototypes, simplifying complex workflows and driving stakeholder alignment.",
      "Led end-to-end product development of internal tools, significantly improving cross-functional communication."
    ],
    metric: "100% Adoption",
    color: "from-brand-cyan to-brand-purple",
    photos: [],
  }
];

// Photo Preview Modal
function PhotoPreviewModal({ 
  photos, 
  initialIndex, 
  onClose 
}: { 
  photos: ProjectPhoto[]; 
  initialIndex: number; 
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const photo = photos[currentIndex];

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-full mx-6 bg-brand-navy rounded-3xl overflow-hidden border border-white/10"
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image area */}
        <div className="relative aspect-video bg-black/20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photo.src}
              alt={photo.caption}
              className="max-w-full max-h-full object-contain"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Navigation arrows */}
          {photos.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Caption & counter */}
        <div className="p-6 flex items-center justify-between">
          <p className="text-slate-400 font-sans text-sm">{photo.caption}</p>
          {photos.length > 1 && (
            <span className="text-xs font-mono text-slate-500">
              {currentIndex + 1} / {photos.length}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Photo thumbnail strip
function PhotoStrip({ 
  photos, 
  onPhotoClick 
}: { 
  photos: ProjectPhoto[]; 
  onPhotoClick: (index: number) => void;
}) {
  if (photos.length === 0) {
    return (
      <div className="mt-6 flex items-center gap-3 text-slate-500">
        <div className="w-16 h-16 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center">
          <ImageIcon size={18} className="text-slate-500" />
        </div>
        <span className="text-xs font-mono tracking-wide text-slate-500">Projects coming soon</span>
      </div>
    );
  }

  return (
    <div className="mt-6 flex items-center gap-3 flex-wrap">
      {photos.map((photo, i) => (
        <motion.button
          key={i}
          onClick={() => onPhotoClick(i)}
          className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 hover:border-brand-cyan/60 transition-all group flex-shrink-0"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </motion.div>
          </div>
        </motion.button>
      ))}
      {/* Add more placeholder */}
      <div className="w-16 h-16 rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center opacity-40">
        <span className="text-xs text-slate-500">+</span>
      </div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [previewState, setPreviewState] = useState<{
    experienceIndex: number;
    photoIndex: number;
  } | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const openPreview = (expIndex: number, photoIndex: number) => {
    setPreviewState({ experienceIndex: expIndex, photoIndex });
  };

  const closePreview = () => {
    setPreviewState(null);
  };

  return (
    <>
      <section className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-brand-black" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-32 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              The <span className="text-brand-purple">Journey.</span>
            </h2>
            <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto">
              A track record of leveraging design and data to solve complex business problems.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-blue"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="flex flex-col gap-24">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-black border-2 border-brand-cyan z-10 shadow-[0_0_15px_rgba(76,201,240,0.5)]" />

                  {/* Content side */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 text-left"}`}>
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest text-brand-cyan mb-4 font-mono">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-slate-400 font-medium mb-6">
                      {exp.company}
                    </h4>
                    <ul className={`space-y-4 text-slate-400 font-sans ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-lg`}>
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="leading-relaxed relative">
                          {ach}
                        </li>
                      ))}
                    </ul>

                    {/* Photo strip */}
                    <div className={`${index % 2 === 0 ? "md:ml-auto md:flex md:justify-end" : ""}`}>
                      <PhotoStrip 
                        photos={exp.photos} 
                        onPhotoClick={(photoIdx) => openPreview(index, photoIdx)} 
                      />
                    </div>
                  </div>
                  
                  {/* Metric side */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"} flex flex-col justify-center`}>
                    <motion.div 
                      className={`text-4xl md:text-6xl font-display font-black bg-gradient-to-r ${exp.color} bg-clip-text text-transparent opacity-80`}
                      whileHover={{ scale: 1.05, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {exp.metric}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Preview Modal */}
      <AnimatePresence>
        {previewState !== null && (
          <PhotoPreviewModal
            photos={experiences[previewState.experienceIndex].photos}
            initialIndex={previewState.photoIndex}
            onClose={closePreview}
          />
        )}
      </AnimatePresence>
    </>
  );
}
