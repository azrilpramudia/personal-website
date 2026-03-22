"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/src/lib/animation";
import { personalInfo } from "@/src/data/index";

// ── Contact item data ─────────────────────────────────────────
const contactItems = [
  {
    id: "email",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: personalInfo.linkedinUrl.replace("https://", ""),
    href: personalInfo.linkedinUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
] as const;

// ── Contact Card ──────────────────────────────────────────────
function ContactCard({
  item,
  index,
}: {
  item: (typeof contactItems)[number];
  index: number;
}) {
  return (
    <motion.a
      variants={scaleIn}
      custom={index}
      href={item.href}
      target={item.id === "linkedin" ? "_blank" : undefined}
      rel={item.id === "linkedin" ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 cursor-pointer group"
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
        {item.icon}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-macchiato-text font-semibold text-sm mb-0.5">
          {item.label}
        </p>
        <p className="text-macchiato-subtext0 text-sm truncate group-hover:text-macchiato-mauve transition-colors duration-200">
          {item.value}
        </p>
      </div>

      {/* Arrow */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 text-macchiato-overlay0 ml-auto shrink-0 -translate-x-1 group-hover:translate-x-0 group-hover:text-macchiato-mauve transition-all duration-200"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
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
          <motion.p
            variants={fadeUp}
            className="font-mono text-macchiato-mauve text-sm tracking-widest"
          >
            get in touch
          </motion.p>
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

        {/* Contact cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {contactItems.map((item, i) => (
            <ContactCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
