"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/src/lib/animation";
import { TerminalLine, Cursor } from "@/src/components/ui/Terminal";
import { socialIcons } from "@/src/components/ui/SocialIcons";
import { aboutInfo, socials, terminalLines } from "@/src/data/about";

// ── Terminal card ─────────────────────────────────────────────
function TerminalCard() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(22, 24, 38, 0.90)",
        border: "1px solid rgba(91, 96, 120, 0.35)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(91, 96, 120, 0.25)" }}
      >
        <span className="size-3 rounded-full bg-macchiato-red" />
        <span className="size-3 rounded-full bg-macchiato-yellow" />
        <span className="size-3 rounded-full bg-macchiato-green" />
        <span className="flex-1 text-center font-mono text-xs text-macchiato-overlay0 tracking-widest">
          zsh — about-me.md
        </span>
      </div>

      {/* Body */}
      <div className="px-5 py-4 min-h-[280px]">
        {terminalLines.map((line, i) => (
          <TerminalLine key={i} line={line} />
        ))}
        <div className="mt-2">
          <Cursor />
        </div>
      </div>
    </div>
  );
}

// ── Left info panel ───────────────────────────────────────────
function InfoPanel() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      {/* Specialization */}
      <motion.div variants={slideInLeft}>
        <p className="text-macchiato-subtext0 text-sm mb-1">Specialization:</p>
        <p className="text-macchiato-text font-bold text-lg">
          {aboutInfo.specialization}
        </p>
      </motion.div>

      {/* Based in */}
      <motion.div variants={slideInLeft}>
        <p className="text-macchiato-subtext0 text-sm mb-1">Based in:</p>
        <p className="text-macchiato-text font-bold text-lg">
          {aboutInfo.basedIn}
        </p>
      </motion.div>

      {/* Social icons */}
      <motion.div variants={slideInLeft} className="flex items-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`size-11 rounded-full border flex items-center justify-center transition-all duration-200 ${s.colorClass}`}
          >
            {socialIcons[s.label]}
          </a>
        ))}
      </motion.div>

      {/* Download CV button */}
      <motion.div variants={slideInLeft}>
        <a
          href={aboutInfo.cvUrl}
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-macchiato-base bg-macchiato-mauve shadow-mauve hover:shadow-mauve-hover hover:-translate-y-0.5 transition-all duration-300"
        >
          {/* Download icon */}
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </motion.div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────
export default function About() {
  return (
    <section
      id="about"
      className="bg-macchiato-base py-24 px-6 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-macchiato-text text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight"
        >
          About Me
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <InfoPanel />

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <TerminalCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
