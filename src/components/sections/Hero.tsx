"use client";

import { motion } from "framer-motion";
import { fadeUpCustom } from "@/src/lib/animation";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const dots = ["bg-macchiato-red", "bg-macchiato-yellow", "bg-macchiato-green"];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-macchiato-base overflow-hidden px-6 pt-24 md:pt-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-140 rounded-full bg-macchiato-mauve/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-macchiato-blue/8 blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full">
        {/* Greeting */}
        <motion.p
          custom={0}
          variants={fadeUpCustom}
          initial="hidden"
          animate="visible"
          className="font-mono text-macchiato-text text-sm tracking-widest mb-2"
        >
          Hi, I&apos;m Azril Pramudia!
        </motion.p>

        {/* Decorative dots + line */}
        <motion.div
          custom={1}
          variants={fadeUpCustom}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-1.5 mb-8"
        >
          {dots.map((color) => (
            <span key={color} className={`size-3 rounded-full ${color}`} />
          ))}
          <span className="ml-1.5 h-px w-14 bg-macchiato-surface2" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={2}
          variants={fadeUpCustom}
          initial="hidden"
          animate="visible"
          className="text-macchiato-text font-extrabold tracking-tight leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)" }}
        >
          Crafting Code for a{" "}
          <span className="text-macchiato-blue">&#123;Connected&#125;</span>{" "}
          Infrastructure
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={3}
          variants={fadeUpCustom}
          initial="hidden"
          animate="visible"
          className="text-macchiato-subtext1 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
        >
          Final-year IT Student & Passionate React, JavaScript, Tailwind. A
          Linux enthusiast exploring the depths of Docker and Network
          Infrastructure. Over the last 3 months, I have undergone an intensive
          deep-dive into the modern web ecosystem, transforming core
          fundamentals into scalable digital solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUpCustom}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Button variant="primary" onClick={() => scrollTo("projects")}>
            &gt;_ Explore My Work
          </Button>
          <Button
            variant="secondary"
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 group"
          >
            Let&apos;s talk
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </motion.div>

        {/* Scroll-down arrow */}
        <motion.button
          onClick={() => scrollTo("about")}
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.45, 1, 0.45], y: [0, 10, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          }}
          className="cursor-pointer text-macchiato-overlay0 hover:text-macchiato-subtext1 transition-colors"
        >
          <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
            <line
              x1="10"
              y1="1"
              x2="10"
              y2="24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 18 L10 26 L17 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
