"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/src/lib/animation";
import { useCopyToClipboard } from "@/src/hook/useScroll";
import {
  EmailIcon,
  LinkedInIcon,
  ArrowRightIcon,
  CopyIcon,
  CheckIcon,
  MapPinIcon,
  ClockIcon,
} from "@/src/components/ui/Icons";
import { personalInfo } from "@/src/data/index";

// ── Email Card ────────────────────────────────────────────────
function EmailCard({ index }: { index: number }) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className="flex items-center gap-4 rounded-2xl p-5 transition-colors duration-300 group"
      style={{
        background: "rgba(36,39,58,0.6)",
        border: "1px solid rgba(91,96,120,0.25)",
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(198,160,246,0.35)",
        background: "rgba(54,58,79,0.6)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Icon box */}
      <div
        className="shrink-0 size-12 rounded-xl flex items-center justify-center text-macchiato-mauve"
        style={{ background: "rgba(198,160,246,0.12)" }}
      >
        <EmailIcon size={20} />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p className="text-macchiato-text font-semibold text-sm mb-0.5">
          Email
        </p>
        <p className="text-macchiato-subtext0 text-sm truncate group-hover:text-macchiato-mauve transition-colors duration-200">
          {personalInfo.email}
        </p>
      </div>

      {/* Copy button */}
      <button
        onClick={() => copy(personalInfo.email)}
        aria-label={copied ? "Copied!" : "Copy email"}
        className="shrink-0 size-8 rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
        style={{
          background: copied ? "rgba(166,218,149,0.12)" : "rgba(91,96,120,0.2)",
          color: copied ? "#a6da95" : "#8087a2",
          border: copied
            ? "1px solid rgba(166,218,149,0.25)"
            : "1px solid transparent",
        }}
      >
        <motion.span
          key={copied ? "check" : "copy"}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {copied ? <CheckIcon size={15} /> : <CopyIcon size={15} />}
        </motion.span>
      </button>

      {/* Toast */}
      <motion.span
        initial={{ opacity: 0, y: 6, scale: 0.9 }}
        animate={
          copied
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 6, scale: 0.9 }
        }
        transition={{ duration: 0.2 }}
        className="absolute -top-8 right-4 text-xs font-mono px-2.5 py-1 rounded-lg text-macchiato-green pointer-events-none"
        style={{
          background: "rgba(166,218,149,0.12)",
          border: "1px solid rgba(166,218,149,0.25)",
        }}
      >
        Copied!
      </motion.span>
    </motion.div>
  );
}

// ── LinkedIn Card ─────────────────────────────────────────────
function LinkedInCard({ index }: { index: number }) {
  return (
    <motion.a
      variants={scaleIn}
      custom={index}
      href={personalInfo.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl p-5 transition-colors duration-300 group"
      style={{
        background: "rgba(36,39,58,0.6)",
        border: "1px solid rgba(91,96,120,0.25)",
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(198,160,246,0.35)",
        background: "rgba(54,58,79,0.6)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Icon box */}
      <div
        className="shrink-0 size-12 rounded-xl flex items-center justify-center text-macchiato-mauve"
        style={{ background: "rgba(198,160,246,0.12)" }}
      >
        <LinkedInIcon size={20} />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p className="text-macchiato-text font-semibold text-sm mb-0.5">
          LinkedIn
        </p>
        <p className="text-macchiato-subtext0 text-sm truncate group-hover:text-macchiato-mauve transition-colors duration-200">
          {personalInfo.linkedinUrl.replace("https://", "")}
        </p>
      </div>

      {/* Arrow */}
      <span className="shrink-0 text-macchiato-overlay0 -translate-x-1 group-hover:translate-x-0 group-hover:text-macchiato-mauve transition-all duration-200">
        <ArrowRightIcon size={15} />
      </span>
    </motion.a>
  );
}

// ── Main Section ──────────────────────────────────────────────
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-macchiato-base py-24 px-6 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-14 gap-3"
        >
          <motion.h2
            variants={fadeUp}
            className="text-macchiato-text text-3xl md:text-4xl font-bold tracking-tight"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-macchiato-subtext0 text-sm leading-relaxed max-w-md"
          >
            I&apos;m always interested in discussing new opportunities,
            collaborations, or just having a chat about technology. Feel free to
            reach out!
          </motion.p>

          {/* Available badge */}
          {personalInfo.availableForWork && (
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium font-mono bg-macchiato-green/10 text-macchiato-green border border-macchiato-green/20">
                <span className="size-1.5 rounded-full bg-macchiato-green animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Sub title */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-macchiato-text font-semibold text-base text-center mb-6"
        >
          Get In Touch
        </motion.h3>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="relative">
            <EmailCard index={0} />
          </div>
          <LinkedInCard index={1} />
        </motion.div>

        {/* Location + Active hours */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-macchiato-teal">
            <MapPinIcon size={14} />
            Located in Bandung, West Java, Indonesia
          </span>
          <span className="hidden sm:block text-macchiato-surface2">·</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-macchiato-overlay0">
            <ClockIcon size={14} />
            Active 08.00 – 00.00 WIB
          </span>
        </motion.div>
      </div>
    </section>
  );
}
