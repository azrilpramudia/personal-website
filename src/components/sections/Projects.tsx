"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/src/lib/animation";
import { cn } from "@/src/lib/utils";
import { ProjectCard } from "@/src/components/ui/ProjectCard";
import { projects } from "@/src/data/projects";

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

// ── Main Section ──────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.featured);

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
            className="text-macchiato-subtext0 text-medium max-w-md leading-relaxed"
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
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-macchiato-subtext1 border border-macchiato-surface2 hover:border-macchiato-mauve hover:text-macchiato-mauve transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
