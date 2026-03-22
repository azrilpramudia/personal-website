"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft } from "@/src/lib/animation";
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

// ── Filter Tab Bar ────────────────────────────────────────────
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
        // hide tab if no items (except "All")
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

// ── Single Experience Item ────────────────────────────────────
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
    <motion.div variants={slideInLeft} layout className="relative flex gap-6">
      {/* Timeline column */}
      <div className="flex flex-col items-center shrink-0">
        {/* Dot */}
        <div className="relative z-10 mt-1.5">
          <div
            className="size-3 rounded-full bg-macchiato-yellow"
            style={{
              boxShadow: isPresent
                ? "0 0 10px rgba(238,212,159,0.6), 0 0 22px rgba(238,212,159,0.25)"
                : "none",
            }}
          />
          {isPresent && (
            <div className="absolute inset-0 size-3 rounded-full bg-macchiato-yellow/40 animate-ping" />
          )}
        </div>
        {/* Vertical line */}
        {!isLast && <div className="w-px flex-1 mt-2 bg-macchiato-surface1" />}
      </div>

      {/* Content */}
      <div className={cn("flex flex-col gap-2.5 min-w-0", !isLast && "pb-10")}>
        {/* Role */}
        <h3 className="text-macchiato-text font-bold text-base leading-snug">
          {exp.role}
        </h3>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
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
          {exp.type && (
            <>
              <span className="text-macchiato-surface2">·</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-macchiato-mauve/10 text-macchiato-mauve border border-macchiato-mauve/20">
                {exp.type}
              </span>
            </>
          )}
        </div>

        {/* Date + duration */}
        <div className="flex items-center gap-2 font-mono text-xs text-macchiato-overlay0">
          <span>
            {exp.startDate} — {exp.endDate}
          </span>
          <span className="text-macchiato-surface2">·</span>
          <span className="text-macchiato-overlay1">{duration}</span>
        </div>

        {/* Bullet points */}
        <ul className="flex flex-col gap-2 mt-1">
          {exp.description.map((point, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm text-macchiato-subtext1 leading-relaxed"
            >
              <span className="mt-2 size-1.5 rounded-full bg-macchiato-overlay0 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech stack tags */}
        {exp.techStack && exp.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {exp.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2 py-0.5 rounded-md text-macchiato-teal bg-macchiato-surface0 border border-macchiato-surface1"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Main Section ──────────────────────────────────────────────
export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  // Count per type + total
  const counts = useMemo(() => {
    const c: Record<string, number> = { __total: experiences.length };
    experiences.forEach((e) => {
      if (e.type) c[e.type] = (c[e.type] ?? 0) + 1;
    });
    return c;
  }, []);

  // Filtered list
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
          className="mb-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-macchiato-text text-3xl md:text-4xl font-bold tracking-tight mb-3"
          >
            Work Experience
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-macchiato-subtext0 text-sm leading-relaxed"
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
              exit={{ opacity: 0 }}
              className="flex flex-col"
            >
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
