"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/src/lib/animation";
import { SkillBadge } from "@/src/components/ui/SkillBadge";
import { skillCategories, SkillCategory } from "@/src/data/skills";

// ── Category card ─────────────────────────────────────────────
function CategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className="group relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300"
      style={{
        background: "rgba(36, 39, 58, 0.6)",
        border: "1px solid rgba(91, 96, 120, 0.30)",
        backdropFilter: "blur(8px)",
      }}
      whileHover={{
        borderColor: category.accent,
        boxShadow: `0 0 32px ${category.accent}, 0 4px 24px rgba(0,0,0,0.3)`,
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl text-macchiato-mauve select-none">
          {category.icon}
        </span>
        <h3 className="text-macchiato-text font-semibold text-base tracking-tight">
          {category.title}
        </h3>
        <span className="ml-auto text-xs font-mono text-macchiato-overlay0">
          {category.skills.length} skills
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-macchiato-surface1" />

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────
export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-macchiato-base py-24 px-6 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 gap-3"
        >
          <motion.h2
            variants={fadeUp}
            className="text-macchiato-text text-3xl md:text-4xl font-bold tracking-tight"
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-macchiato-subtext0 text-medium max-w-md leading-relaxed"
          >
            here are the frameworks, libraries, services, and runtimes i have
            experiences with. this is not a complete list! i&apos;m constantly
            gaining new skills, and hence it can be a little bit outdated
          </motion.p>
        </motion.div>

        {/* Category cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {skillCategories.map((category, i) => (
            <CategoryCard key={category.title} category={category} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
