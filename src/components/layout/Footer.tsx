"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/src/lib/animation";
import { personalInfo, navItems } from "@/src/data/index";
import {
  GithubIcon,
  LinkedInIcon,
  ChevronUpIcon,
} from "@/src/components/ui/Icons";

// ── Social icons map ──────────────────────────────────────────
const socialIconMap: Record<string, React.ReactNode> = {
  GitHub: <GithubIcon size={15} />,
  LinkedIn: <LinkedInIcon size={15} />,
};

// ── Footer ────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) =>
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-macchiato-mantle border-t border-macchiato-surface0">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Top row: brand + nav links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
        >
          {/* Brand */}
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center md:items-start cursor-pointer group"
          >
            <span className="font-mono text-macchiato-mauve text-sm font-semibold tracking-wider group-hover:text-macchiato-lavender transition-colors">
              {personalInfo.username}.dev
            </span>
            <span className="text-macchiato-overlay0 text-xs mt-0.5">
              {personalInfo.title}
            </span>
          </button>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-macchiato-subtext0 text-sm hover:text-macchiato-text transition-colors duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-macchiato-surface0 mb-8" />

        {/* Bottom row: copyright + social */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <p className="font-mono text-xs text-macchiato-overlay0 text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-macchiato-mauve">{personalInfo.name}</span>.
            All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { platform: "GitHub", url: personalInfo.githubUrl },
              { platform: "LinkedIn", url: personalInfo.linkedinUrl },
            ].map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="size-8 rounded-lg flex items-center justify-center text-macchiato-overlay1 hover:text-macchiato-mauve hover:bg-macchiato-surface0 transition-all duration-200"
              >
                {socialIconMap[s.platform]}
              </a>
            ))}

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="size-8 rounded-lg flex items-center justify-center text-macchiato-overlay1 hover:text-macchiato-mauve hover:bg-macchiato-surface0 transition-all duration-200 cursor-pointer ml-1"
            >
              <ChevronUpIcon size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
