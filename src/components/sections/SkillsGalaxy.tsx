"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const skillNodes = [
  {
    name: "Strategic Advisory",
    desc: "Structuring complex business problems into actionable recommendations",
    color: "#4CC9F0",
    ring: 1,
  },
  {
    name: "Financial Modeling",
    desc: "IRR, NPV, payback period & scenario analysis for investment decisions",
    color: "#7209B7",
    ring: 1,
  },
  {
    name: "Market Analysis",
    desc: "Competitive landscape mapping, demand forecasting & segmentation",
    color: "#4361EE",
    ring: 1,
  },
  {
    name: "Stakeholder Mgmt",
    desc: "Cross-functional alignment and executive communication",
    color: "#4CC9F0",
    ring: 2,
  },
  {
    name: "Process Optimization",
    desc: "Workflow taxonomy design across 550+ cross-functional processes",
    color: "#7209B7",
    ring: 2,
  },
  {
    name: "Digital Transformation",
    desc: "End-to-end product delivery from ideation to scaled deployment",
    color: "#4361EE",
    ring: 2,
  },
  {
    name: "Change Management",
    desc: "Driving organizational adoption and managing transition complexity",
    color: "#4CC9F0",
    ring: 2,
  },
  {
    name: "Risk Assessment",
    desc: "Scenario modeling & sensitivity analysis to quantify business risk",
    color: "#7209B7",
    ring: 3,
  },
  {
    name: "UX & Product Design",
    desc: "High-fidelity prototyping, user research & design systems",
    color: "#4361EE",
    ring: 3,
  },
  {
    name: "Executive Presentations",
    desc: "Translating complex findings into board-ready, narrative-driven decks",
    color: "#4CC9F0",
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

  // Layout constants
  const cx = 350;
  const cy = 350;
  const ringRadii = [0, 120, 200, 280];
  const viewBoxSize = 700;

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
            className="absolute rounded-full bg-slate-400"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(67,97,238,0.1)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The <span className="text-brand-cyan">Constellation.</span>
          </h2>
          <p className="text-xl text-slate-600 font-sans max-w-xl mx-auto">
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
            className="w-full max-w-3xl"
            style={{ filter: "drop-shadow(0 0 40px rgba(76,201,240,0.08))" }}
          >
            {/* Orbit rings */}
            {[1, 2, 3].map((ring) => (
              <motion.circle
                key={ring}
                cx={cx}
                cy={cy}
                r={ringRadii[ring]}
                fill="none"
                stroke="rgba(0,0,0,0.1)"
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
                strokeOpacity={hovered === pos.globalIndex ? 0.8 : 0.2}
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
                strokeOpacity={0.4}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ filter: `drop-shadow(0 0 8px ${positions[hovered].color})` }}
              />
            )}

            {/* Center hub */}
            <motion.circle
              cx={cx}
              cy={cy}
              r={50}
              fill="url(#centerGrad)"
              stroke="rgba(0,0,0,0.1)"
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
              r={54}
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
              animate={{ r: [54, 60, 54], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <text
              x={cx}
              y={cy - 8}
              textAnchor="middle"
              fill="white"
              fontSize="13"
              fontWeight="700"
              fontFamily="inherit"
            >
              Strategy
            </text>
            <text
              x={cx}
              y={cy + 6}
              textAnchor="middle"
              fill="rgba(0,0,0,0.5)"
              fontSize="11"
            >
              ×
            </text>
            <text
              x={cx}
              y={cy + 20}
              textAnchor="middle"
              fill="white"
              fontSize="13"
              fontWeight="700"
              fontFamily="inherit"
            >
              Product
            </text>

            {/* Skill nodes */}
            {positions.map((pos, i) => {
              const isHovered = hovered === pos.globalIndex;
              const nodeRadius = isHovered ? 38 : 30;
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
                      r={nodeRadius + 10}
                      fill="none"
                      stroke={pos.color}
                      strokeWidth="1.5"
                      strokeOpacity={0.4}
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
                    fill={isHovered ? pos.color + "20" : "rgba(255,255,255,0.9)"}
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
                        ? `drop-shadow(0 0 16px ${pos.color}60)`
                        : "none",
                    }}
                    animate={{
                      r: nodeRadius,
                    }}
                  />

                  {/* Node label */}
                  <text
                    x={pos.x}
                    y={pos.y + 1}
                    textAnchor="middle"
                    fill="#1A1A1A"
                    fontSize={isHovered ? "9.5" : "8.5"}
                    fontWeight="600"
                    style={{
                      transition: "font-size 0.2s",
                      pointerEvents: "none",
                    }}
                  >
                    {pos.name.length > 16
                      ? pos.name.split(" ").map((word, wi) => (
                          <tspan
                            key={wi}
                            x={pos.x}
                            dy={wi === 0 ? "-0.3em" : "1.2em"}
                          >
                            {word}
                          </tspan>
                        ))
                      : pos.name}
                  </text>

                  {/* Tooltip on hover */}
                  {isHovered && (
                    <motion.foreignObject
                      x={pos.x - 110}
                      y={pos.y + nodeRadius + 12}
                      width={220}
                      height={80}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="bg-white/95 border border-slate-200 rounded-xl px-4 py-3 backdrop-blur-md shadow-xl">
                        <p
                          className="text-sm font-medium leading-relaxed text-center"
                          style={{ color: pos.color }}
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
              <radialGradient id="centerGrad" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="100%" stopColor="rgba(240,240,245,0.95)" />
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
              className="p-5 rounded-2xl border border-slate-200 bg-white"
              style={{
                borderColor: skill.color + "40",
                boxShadow: `0 4px 20px ${skill.color}15`,
              }}
            >
              <div
                className="text-2xl mb-3"
                style={{ color: skill.color }}
              >
                ◈
              </div>
              <div className="font-display font-bold text-sm text-slate-900 mb-2">
                {skill.name}
              </div>
              <p
                className="text-xs leading-relaxed text-slate-600"
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
