"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/lib/animation";
import { cn } from "@/src/lib/utils";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { GithubIcon } from "@/src/components/ui/Icons";
import { projects } from "@/src/data/projects";
import { personalInfo } from "@/src/data/index";

// ── Filter types ──────────────────────────────────────────────
const FILTERS = ["All", "Featured"] as const;
type Filter = (typeof FILTERS)[number];

// ── Filter Tab Bar ────────────────────────────────────────────
function FilterTabs({
  active,
  onChange,
}: {
  active: Filter;
  onChange: (f: Filter) => void;
}) {
  const counts: Record<Filter, number> = {
    All: projects.length,
    Featured: projects.filter((p) => p.featured).length,
  };

  return (
    <div className="flex items-center gap-2">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={cn(
            "flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
            active === f
              ? "bg-macchiato-mauve text-macchiato-base shadow-mauve"
              : "bg-macchiato-surface0 text-macchiato-subtext0 border border-macchiato-surface1 hover:border-macchiato-surface2 hover:text-macchiato-text",
          )}
        >
          {f}
          <span
            className={cn(
              "text-xs px-1.5 py-0.5 rounded-full font-mono",
              active === f
                ? "bg-macchiato-base/20 text-macchiato-base"
                : "bg-macchiato-surface1 text-macchiato-overlay0",
            )}
          >
            {counts[f]}
          </span>
        </button>
      ))}
    </div>
  );
}

// ── Empty State ───────────────────────────────────────────────
function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-3 py-20 text-center"
    >
      <span className="text-4xl">🗂️</span>
      <p className="text-macchiato-subtext0 text-sm">
        No <span className="text-macchiato-mauve font-medium">featured</span>{" "}
        projects yet.
      </p>
    </motion.div>
  );
}

// ── Main Section ──────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All" ? projects : projects.filter((p) => p.featured),
    [activeFilter],
  );

  return (
    <section
      id="projects"
      className="bg-macchiato-base py-24 px-6 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12 gap-3"
        >
          <motion.h2
            variants={fadeUp}
            className="text-macchiato-text text-3xl md:text-4xl font-bold tracking-tight"
          >
            My Projects
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-macchiato-subtext0 text-sm max-w-md leading-relaxed"
          >
            A selection of projects I&apos;ve worked on — from personal
            experiments to full applications.
          </motion.p>

          {/* Filter tabs */}
          <motion.div variants={fadeUp}>
            <FilterTabs active={activeFilter} onChange={setActiveFilter} />
          </motion.div>
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <EmptyState key="empty" />
          ) : (
            <motion.div
              key={activeFilter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-macchiato-subtext1 border border-macchiato-surface2 hover:border-macchiato-mauve hover:text-macchiato-mauve transition-all duration-200"
          >
            <GithubIcon size={15} />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
