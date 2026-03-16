"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-macchiato-base overflow-hidden px-6"
    >
      {/* Background glow blobs */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-80 w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(198,160,246,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(138,173,244,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full">
        {/* Greeting */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-mono text-macchiato-text text-sm tracking-widest mb-2"
        >
          Hi, I&apos;m Azril Pramudia!
        </motion.p>

        {/* Decorative dots + line */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-1.5 mb-8"
        >
          <span className="size-3 rounded-full bg-macchiato-red" />
          <span className="size-3 rounded-full bg-macchiato-yellow" />
          <span className="size-3 rounded-full bg-macchiato-green" />
          <span className="ml-1.5 h-px w-14 bg-macchiato-surface2" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={2}
          variants={fadeUp}
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
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-macchiato-subtext1 text-base md:text-lg leading-relaxed max-w-2xl mb-10"
        >
          Currently diving deep into the JavaScript ecosystem, crafting sleek
          interfaces with React and Tailwind CSS. At the same time, I&apos;m
          hardening my expertise in Linux and Bash scripting to manage Docker
          environments, driven by an obsession with building efficient
          applications that communicate seamlessly across the network.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="cursor-pointer rounded-lg px-8 py-3 font-semibold text-macchiato-base bg-macchiato-mauve transition-all duration-300 hover:-translate-y-0.5"
            style={{
              boxShadow:
                "0 0 20px rgba(198,160,246,0.45), 0 4px 14px rgba(198,160,246,0.3)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 32px rgba(198,160,246,0.65), 0 6px 20px rgba(198,160,246,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 20px rgba(198,160,246,0.45), 0 4px 14px rgba(198,160,246,0.3)")
            }
          >
            Show My Work
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="cursor-pointer rounded-lg border border-macchiato-surface2 px-8 py-3 font-semibold text-macchiato-text transition-all duration-300 hover:-translate-y-0.5 hover:border-macchiato-overlay1 flex items-center gap-2"
            style={{
              boxShadow:
                "0 0 14px rgba(147,154,183,0.15), 0 4px 12px rgba(0,0,0,0.35)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 24px rgba(147,154,183,0.28), 0 6px 18px rgba(0,0,0,0.45)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 14px rgba(147,154,183,0.15), 0 4px 12px rgba(0,0,0,0.35)")
            }
          >
            Let&apos;s talk <span>→</span>
          </button>
        </motion.div>

        {/* Animated scroll arrow */}
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
          <svg
            width="20"
            height="32"
            viewBox="0 0 20 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
