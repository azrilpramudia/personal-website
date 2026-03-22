"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/src/lib/animation";
import { personalInfo } from "@/src/data/index";

// ── Copy to clipboard hook ────────────────────────────────────
function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    if (copied) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), timeout);
  };

  return { copied, copy };
}

// ── Icons ─────────────────────────────────────────────────────
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ── Email Card — dengan copy to clipboard ─────────────────────
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
        <EmailIcon />
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

      {/* Copy button — ganti arrow */}
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
          {copied ? <CheckIcon /> : <CopyIcon />}
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
        <LinkedInIcon />
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
        <ArrowIcon />
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

        {/* Response time + Timezone */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6"
        >
          {/* Location + Timezone */}
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-macchiato-overlay0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5 text-macchiato-teal"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-macchiato-teal">
              Located in Bandung, West Java, Indonesia
            </span>
          </span>

          <span className="hidden sm:block text-macchiato-surface2">·</span>

          {/* Active hours */}
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-macchiato-overlay0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Active 08.00 – 00.00 WIB
          </span>
        </motion.div>
      </div>
    </section>
  );
}
