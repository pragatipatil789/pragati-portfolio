"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const skillNodes = [
  {
    name: "Strategic Advisory",
    desc: "Structuring complex business problems into actionable recommendations",
    color: "#22D3EE",
    ring: 1,
  },
  {
    name: "Financial Modeling",
    desc: "IRR, NPV, payback period & scenario analysis for investment decisions",
    color: "#A855F7",
    ring: 1,
  },
  {
    name: "Market Analysis",
    desc: "Competitive landscape mapping, demand forecasting & segmentation",
    color: "#3B82F6",
    ring: 1,
  },
  {
    name: "Stakeholder Mgmt",
    desc: "Cross-functional alignment and executive communication",
    color: "#22D3EE",
    ring: 2,
  },
  {
    name: "Process Optimization",
    desc: "Workflow taxonomy design across 550+ cross-functional processes",
    color: "#A855F7",
    ring: 2,
  },
  {
    name: "Digital Transformation",
    desc: "End-to-end product delivery from ideation to scaled deployment",
    color: "#3B82F6",
    ring: 2,
  },
  {
    name: "Change Management",
    desc: "Driving organizational adoption and managing transition complexity",
    color: "#22D3EE",
    ring: 2,
  },
  {
    name: "Risk Assessment",
    desc: "Scenario modeling & sensitivity analysis to quantify business risk",
    color: "#A855F7",
    ring: 3,
  },
  {
    name: "UX & Product Design",
    desc: "High-fidelity prototyping, user research & design systems",
    color: "#3B82F6",
    ring: 3,
  },
  {
    name: "Executive Presentations",
    desc: "Translating complex findings into board-ready, narrative-driven decks",
    color: "#22D3EE",
    ring: 3,
  },
];

// Generate star particles for background
function generateStars(count: number) {
  const stars: { x: number; y: number; size: number; delay: number; duration: number }[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
    });
  }
  return stars;
}

export default function SkillsGalaxy() {
  const [hovered, setHovered] = useState<number | null>(null);
  const stars = useMemo(() => generateStars(80), []);

  // Layout constants — 2x larger circles, bigger viewBox
  const cx = 500;
  const cy = 500;
  const ringRadii = [0, 180, 310, 430];
  const viewBoxSize = 1000;

  // Distribute skills around rings
  const ring1 = skillNodes.filter((s) => s.ring === 1);
  const ring2 = skillNodes.filter((s) => s.ring === 2);
  const ring3 = skillNodes.filter((s) => s.ring === 3);

  function getPositions(
    nodes: typeof skillNodes,
    radius: number,
    offsetAngle = 0
  ) {
    return nodes.map((node, i) => {
      const angle = offsetAngle + (2 * Math.PI * i) / nodes.length - Math.PI / 2;
      return {
        ...node,
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
        globalIndex: skillNodes.indexOf(node),
      };
    });
  }

  const positions = [
    ...getPositions(ring1, ringRadii[1], 0),
    ...getPositions(ring2, ringRadii[2], Math.PI / 8),
    ...getPositions(ring3, ringRadii[3], Math.PI / 6),
  ];

  // Determine tooltip position: left or right of the node based on position relative to center
  function getTooltipPosition(pos: { x: number; y: number }) {
    const isRightSide = pos.x >= cx;
    const tooltipWidth = 260;
    const gap = 16;
    
    if (isRightSide) {
      // Place tooltip to the right
      return {
        x: pos.x + 70 + gap,
        y: pos.y - 40,
        align: "left" as const,
      };
    } else {
      // Place tooltip to the left
      return {
        x: pos.x - 70 - gap - tooltipWidth,
        y: pos.y - 40,
        align: "right" as const,
      };
    }
  }

  return (
    <section
      id="constellation"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-brand-black overflow-hidden"
    >
      {/* Starfield background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            The <span className="text-brand-cyan">Constellation.</span>
          </h2>
          <p className="text-xl text-slate-400 font-sans max-w-xl mx-auto">
            A curated ecosystem of competencies — hover any node to explore.
          </p>
        </motion.div>

        {/* Orbital SVG — Desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          <svg
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            className="w-full max-w-4xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(34,211,238,0.06))" }}
          >
            {/* Orbit rings */}
            {[1, 2, 3].map((ring) => (
              <motion.circle
                key={ring}
                cx={cx}
                cy={cy}
                r={ringRadii[ring]}
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
                strokeDasharray="6 4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: ring * 0.2 }}
                style={{ transformOrigin: `${cx}px ${cy}px` }}
              />
            ))}

            {/* Connection spokes */}
            {positions.map((pos, i) => (
              <motion.line
                key={`spoke-${i}`}
                x1={cx}
                y1={cy}
                x2={pos.x}
                y2={pos.y}
                stroke={pos.color}
                strokeWidth={hovered === pos.globalIndex ? 2 : 0.8}
                strokeOpacity={hovered === pos.globalIndex ? 0.8 : 0.15}
                strokeDasharray={hovered === pos.globalIndex ? "none" : "4 6"}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.06 }}
              />
            ))}

            {/* Spoke pulse on hover */}
            {hovered !== null && positions[hovered] && (
              <motion.line
                x1={cx}
                y1={cy}
                x2={positions[hovered].x}
                y2={positions[hovered].y}
                stroke={positions[hovered].color}
                strokeWidth={3}
                strokeOpacity={0.5}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ filter: `drop-shadow(0 0 12px ${positions[hovered].color})` }}
              />
            )}

            {/* Center hub */}
            <motion.circle
              cx={cx}
              cy={cy}
              r={100}
              fill="url(#centerGradDark)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            {/* Center glow */}
            <motion.circle
              cx={cx}
              cy={cy}
              r={108}
              fill="none"
              stroke="rgba(34,211,238,0.15)"
              strokeWidth="1"
              animate={{ r: [108, 118, 108], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Center text */}
            <text
              x={cx}
              y={cy - 24}
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="700"
              fontFamily="inherit"
            >
              Pragati Patil
            </text>
            <text
              x={cx}
              y={cy + 2}
              textAnchor="middle"
              fill="rgba(255,255,255,0.3)"
              fontSize="13"
              fontFamily="inherit"
            >
              ───
            </text>
            <text
              x={cx}
              y={cy + 22}
              textAnchor="middle"
              fill="#22D3EE"
              fontSize="14"
              fontWeight="600"
              fontFamily="inherit"
            >
              Business Consulting
            </text>
            <text
              x={cx}
              y={cy + 42}
              textAnchor="middle"
              fill="#A855F7"
              fontSize="14"
              fontWeight="600"
              fontFamily="inherit"
            >
              × Product Strategy
            </text>

            {/* Skill nodes — 2x larger */}
            {positions.map((pos, i) => {
              const isHovered = hovered === pos.globalIndex;
              const nodeRadius = isHovered ? 76 : 60;
              const tooltip = getTooltipPosition(pos);
              return (
                <g
                  key={i}
                  onMouseEnter={() => setHovered(pos.globalIndex)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Node glow */}
                  {isHovered && (
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={nodeRadius + 16}
                      fill="none"
                      stroke={pos.color}
                      strokeWidth="1.5"
                      strokeOpacity={0.5}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                    />
                  )}

                  {/* Node circle */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={nodeRadius}
                    fill={isHovered ? pos.color + "25" : "rgba(30,41,59,0.95)"}
                    stroke={pos.color}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeOpacity={isHovered ? 0.9 : 0.4}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.5 + i * 0.07,
                    }}
                    style={{
                      transformOrigin: `${pos.x}px ${pos.y}px`,
                      filter: isHovered
                        ? `drop-shadow(0 0 20px ${pos.color}60)`
                        : "none",
                    }}
                    animate={{
                      r: nodeRadius,
                    }}
                  />

                  {/* Node label — white text for dark theme */}
                  <text
                    x={pos.x}
                    y={pos.y + 2}
                    textAnchor="middle"
                    fill={isHovered ? pos.color : "rgba(241,245,249,0.9)"}
                    fontSize={isHovered ? "16" : "14"}
                    fontWeight="600"
                    style={{
                      transition: "font-size 0.2s, fill 0.2s",
                      pointerEvents: "none",
                    }}
                  >
                    {pos.name.length > 16
                      ? pos.name.split(" ").map((word, wi) => (
                          <tspan
                            key={wi}
                            x={pos.x}
                            dy={wi === 0 ? "-0.4em" : "1.3em"}
                          >
                            {word}
                          </tspan>
                        ))
                      : pos.name}
                  </text>

                  {/* Tooltip — positioned to LEFT or RIGHT of node */}
                  {isHovered && (
                    <motion.foreignObject
                      x={tooltip.x}
                      y={tooltip.y}
                      width={260}
                      height={90}
                      initial={{ opacity: 0, x: tooltip.align === "left" ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="bg-brand-navy/95 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md shadow-2xl">
                        <p
                          className="text-sm font-medium leading-relaxed"
                          style={{ color: pos.color, textAlign: tooltip.align }}
                        >
                          {pos.desc}
                        </p>
                      </div>
                    </motion.foreignObject>
                  )}
                </g>
              );
            })}

            {/* Gradient definitions */}
            <defs>
              <radialGradient id="centerGradDark" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(30,41,59,1)" />
                <stop offset="100%" stopColor="rgba(15,23,42,0.95)" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Mobile fallback — card layout */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {skillNodes.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="p-5 rounded-2xl border border-white/10 bg-brand-navy"
              style={{
                borderColor: skill.color + "30",
                boxShadow: `0 4px 20px ${skill.color}10`,
              }}
            >
              <div
                className="text-2xl mb-3"
                style={{ color: skill.color }}
              >
                ◈
              </div>
              <div className="font-display font-bold text-sm text-white mb-2">
                {skill.name}
              </div>
              <p
                className="text-xs leading-relaxed text-slate-400"
              >
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
