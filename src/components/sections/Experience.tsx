"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
      "Conducted financial and risk analysis of 2 infrastructure assets using IRR, NPV, DSCR and payback period metrics, benchmarking capital efficiency to support go/no-go investment decisions",
      "Developed a 25-year demand forecasting model incorporating growth trajectories, penetration rates and adoption curves to assess market sizing, capacity utilization and long-term commercial viability",
      "Engineered a 6-category workflow taxonomy across 550+ cross-functional processes, conducting a digitization gap analysis to guide SAP S/4HANA automation and process reengineering strategy"
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
    photos: [
      {
        src: "/experience/paraheights/class-selection.jpg",
        caption: "Choose Your Class — Personalized onboarding flow for grade selection (Classes 6–12)",
      },
      {
        src: "/experience/paraheights/subject-selection.jpg",
        caption: "Subject Discovery & Selection — Interactive multi-subject picker with category badges & popular tags",
      },
      {
        src: "/experience/paraheights/ai-lesson-chat.jpg",
        caption: "AI Interactive Lesson — Audio-enabled conversational learning interface with real-time pedagogy",
      },
      {
        src: "/experience/paraheights/weekly-leaderboards.jpg",
        caption: "Gamified Weekly Leaderboard — Competitive league ladders with performance tiers (Promote, Safe, Demote)",
      },
      {
        src: "/experience/paraheights/quick-actions.jpg",
        caption: "Quick Actions Hub — Centralized navigation sheet for Duels, Rumble, Progress, and Social interactions",
      },
    ],
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photos.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-md md:max-w-lg w-full bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl flex flex-col"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white/90 hover:text-white hover:bg-black/80 transition-colors"
          aria-label="Close preview"
        >
          <X size={18} />
        </button>

        {/* Image area */}
        <div className="relative h-[480px] sm:h-[540px] bg-slate-950/70 flex items-center justify-center p-4">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={photo.src}
              alt={photo.caption}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>

          {/* Navigation arrows */}
          {photos.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-black/90 transition-all hover:scale-105"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-black/90 transition-all hover:scale-105"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>

        {/* Caption & counter */}
        <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-4">
          <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed">{photo.caption}</p>
          {photos.length > 1 && (
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-cyan whitespace-nowrap">
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
        <div className="w-14 h-14 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">
          <ImageIcon size={18} className="text-slate-400" />
        </div>
        <span className="text-xs font-mono tracking-wide text-slate-400">Screens coming soon</span>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-3 text-xs font-mono text-brand-blue/90 font-medium">
        <ImageIcon size={14} className="text-brand-blue" />
        <span>Product UI & Features ({photos.length})</span>
      </div>
      <div className="flex items-center gap-2.5 flex-wrap">
        {photos.map((photo, i) => (
          <motion.button
            key={i}
            onClick={() => onPhotoClick(i)}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border border-slate-200 hover:border-brand-cyan shadow-sm hover:shadow-md transition-all group flex-shrink-0 bg-slate-900"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title={photo.caption}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity text-white"
                initial={false}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
      <section className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-white" ref={containerRef}>
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
            <p className="text-xl text-slate-600 font-sans max-w-2xl mx-auto">
              A track record of leveraging design and data to solve complex business problems.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden">
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
                  <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-brand-blue z-10 shadow-sm" />

                  {/* Content side */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 text-left"}`}>
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-xs tracking-widest text-brand-blue mb-4 font-mono">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-slate-900">
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-slate-600 font-medium mb-6">
                      {exp.company}
                    </h4>
                    <ul className={`space-y-4 text-slate-600 font-sans ${index % 2 === 0 ? "md:ml-auto" : ""} max-w-lg`}>
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
