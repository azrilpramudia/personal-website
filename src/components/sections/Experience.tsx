"use client";

import { useRef, useState, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/lib/animation";
import { calcDuration, cn } from "@/src/lib/utils";
import { experiences } from "@/src/data/experience";
import type { Experience as ExperienceType } from "@/src/types";

// ── Constants ─────────────────────────────────────────────────
const FILTERS = [
  "All",
  "Full-Time",
  "Freelance",
  "Contract",
  "Internship",
] as const;
type Filter = (typeof FILTERS)[number];

const DOT_SIZE = 12;
const LINE_W = 2;
const LINE_LEFT = DOT_SIZE / 2 - LINE_W / 2;

// ── Progress Line ─────────────────────────────────────────────
function TimelineProgressLine({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const scaleY = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <div className="absolute top-4 bottom-4 w-0.5" style={{ left: LINE_LEFT }}>
      <div className="absolute inset-0 rounded-full bg-macchiato-surface1" />
      <motion.div
        className="absolute inset-x-0 top-0 rounded-full origin-top"
        style={{
          scaleY,
          height: "100%",
          background: "linear-gradient(to bottom, #c6a0f6, #8aadf4)",
          boxShadow: "0 0 8px rgba(198,160,246,0.5)",
        }}
      />
    </div>
  );
}

// ── Filter Tabs ───────────────────────────────────────────────
function FilterTabs({
  active,
  counts,
  onChange,
}: {
  active: Filter;
  counts: Record<string, number>;
  onChange: (f: Filter) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {FILTERS.map((f) => {
        if (f !== "All" && !counts[f]) return null;
        const isActive = active === f;
        return (
          <button
            key={f}
            onClick={() => onChange(f)}
            className={cn(
              "flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
              isActive
                ? "bg-macchiato-mauve text-macchiato-base shadow-mauve"
                : "bg-macchiato-surface0 text-macchiato-subtext0 border border-macchiato-surface1 hover:border-macchiato-surface2 hover:text-macchiato-text",
            )}
          >
            {f}
            <span
              className={cn(
                "text-xs px-1.5 py-0.5 rounded-full font-mono",
                isActive
                  ? "bg-macchiato-base/20 text-macchiato-base"
                  : "bg-macchiato-surface1 text-macchiato-overlay0",
              )}
            >
              {f === "All" ? counts.__total : (counts[f] ?? 0)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── Empty State ───────────────────────────────────────────────
function EmptyState({ filter }: { filter: Filter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-3 py-16 text-center"
    >
      <span className="text-4xl">📭</span>
      <p className="text-macchiato-subtext0 text-sm">
        No <span className="text-macchiato-mauve font-medium">{filter}</span>{" "}
        experience yet.
      </p>
    </motion.div>
  );
}

// ── Experience Item ───────────────────────────────────────────
function ExperienceItem({
  exp,
  isLast,
}: {
  exp: ExperienceType;
  isLast: boolean;
}) {
  const isPresent = exp.endDate === "Present";
  const duration = calcDuration(exp.startDate, exp.endDate);

  return (
    <div className={cn("relative flex items-start", !isLast && "pb-10")}>
      {/* Dot — no animation */}
      <div
        className="relative z-10 shrink-0 mt-4.5"
        style={{
          width: DOT_SIZE,
          marginLeft: -DOT_SIZE / 2,
          marginRight: DOT_SIZE / 2 + 12,
        }}
      >
        <div
          className="rounded-full bg-macchiato-yellow"
          style={{
            width: DOT_SIZE,
            height: DOT_SIZE,
            outline: "3px solid #24273a",
            boxShadow: isPresent
              ? "0 0 0 4px rgba(238,212,159,0.15), 0 0 14px rgba(238,212,159,0.5)"
              : undefined,
          }}
        />
        {isPresent && (
          <span
            className="absolute inset-0 rounded-full bg-macchiato-yellow/40 animate-ping"
            style={{ width: DOT_SIZE, height: DOT_SIZE }}
          />
        )}
      </div>

      {/* Card — fadeUp only on card */}
      <motion.div
        variants={fadeUp}
        className="flex-1 min-w-0 rounded-xl p-5 transition-colors duration-300"
        style={{
          background: "rgba(36,39,58,0.55)",
          border: "1px solid rgba(91,96,120,0.25)",
        }}
        whileHover={{
          borderColor: "rgba(198,160,246,0.3)",
          background: "rgba(54,58,79,0.5)",
          transition: { duration: 0.2 },
        }}
      >
        {/* Role + type badge */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-macchiato-text font-bold text-base leading-snug">
            {exp.role}
          </h3>
          {exp.type && (
            <span className="shrink-0 text-xs px-2.5 py-0.5 rounded-full font-medium bg-macchiato-mauve/10 text-macchiato-mauve border border-macchiato-mauve/20">
              {exp.type}
            </span>
          )}
        </div>

        {/* Company · Location */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-2">
          {exp.companyUrl ? (
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-macchiato-subtext1 hover:text-macchiato-mauve transition-colors"
            >
              {exp.company}
            </a>
          ) : (
            <span className="font-medium text-macchiato-subtext1">
              {exp.company}
            </span>
          )}
          <span className="text-macchiato-surface2">·</span>
          <span className="text-macchiato-subtext0">{exp.location}</span>
        </div>

        {/* Date · Duration */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-macchiato-overlay0 mb-4">
          <span>
            {exp.startDate} — {exp.endDate}
          </span>
          <span className="text-macchiato-surface2">·</span>
          <span className="text-macchiato-overlay1">{duration}</span>
        </div>

        <div className="h-px bg-macchiato-surface1 mb-4" />

        {/* Bullets */}
        <ul className="flex flex-col gap-2 mb-4">
          {exp.description.map((point, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm text-macchiato-subtext1 leading-relaxed"
            >
              <span className="mt-2 size-1.5 rounded-full bg-macchiato-mauve/60 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        {exp.techStack && exp.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {exp.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-lg text-macchiato-teal bg-macchiato-surface0 border border-macchiato-surface1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────
export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const timelineRef = useRef<HTMLDivElement>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = { __total: experiences.length };
    experiences.forEach((e) => {
      if (e.type) c[e.type] = (c[e.type] ?? 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? experiences
        : experiences.filter((e) => e.type === activeFilter),
    [activeFilter],
  );

  return (
    <section
      id="experience"
      className="bg-macchiato-base py-24 px-6 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-macchiato-text text-3xl md:text-4xl font-bold tracking-tight mb-3"
          >
            Work Experience
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-macchiato-subtext0 text-md leading-relaxed"
          >
            A summary of my past employment and project experience.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FilterTabs
            active={activeFilter}
            counts={counts}
            onChange={setActiveFilter}
          />
        </motion.div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <EmptyState key="empty" filter={activeFilter} />
          ) : (
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              ref={timelineRef}
              className="relative flex flex-col"
              style={{ paddingLeft: DOT_SIZE / 2 }}
            >
              <TimelineProgressLine containerRef={timelineRef} />
              {filtered.map((exp, i) => (
                <ExperienceItem
                  key={exp.id}
                  exp={exp}
                  isLast={i === filtered.length - 1}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
