"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const CV_URL = "/cv.pdf"; // ganti dengan path CV kamu di folder public/

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4, rootMargin: "-80px 0px 0px 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      {/* ── Desktop: pill nav + resume button ── */}
      {/* Nav pill — semua item + resume ada di dalam satu pill */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="hidden md:flex items-center gap-1 rounded-full px-2 py-2"
        style={{
          background: "var(--color-nav-glass)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "var(--border-nav)",
          boxShadow: scrolled
            ? "var(--shadow-nav-scrolled)"
            : "var(--shadow-nav)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {/* Nav items */}
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={[
                "relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "text-macchiato-text"
                  : "text-macchiato-overlay1 hover:text-macchiato-subtext1",
              ].join(" ")}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "var(--color-nav-pill)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}

        {/* Divider */}
        <span className="h-4 w-px bg-macchiato-surface2 mx-1" />

        {/* Get Resume — di dalam pill, paling kanan */}
        <a
          href={CV_URL}
          download
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-macchiato-base bg-macchiato-mauve cursor-pointer transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
          style={{
            boxShadow:
              "0 0 12px rgba(198,160,246,0.3), 0 2px 6px rgba(198,160,246,0.15)",
          }}
        >
          <svg
            width="12"
            height="12"
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
          Get Resume
        </a>
      </motion.nav>

      {/* ── Mobile: brand + hamburger ── */}
      <div className="flex md:hidden w-full items-center justify-between">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm text-macchiato-mauve tracking-wider"
        >
          meowhx.dev
        </motion.span>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-macchiato-subtext1 origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-macchiato-subtext1"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-macchiato-subtext1 origin-center"
          />
        </motion.button>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-16 left-4 right-4 rounded-2xl p-2 md:hidden"
            style={{
              background: "var(--color-nav-dropdown)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "var(--border-nav-dropdown)",
              boxShadow: "var(--shadow-nav-dropdown)",
            }}
          >
            {/* Nav items */}
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.href)}
                  className={[
                    "w-full text-left px-5 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors duration-150",
                    isActive
                      ? "text-macchiato-mauve bg-macchiato-mauve/10"
                      : "text-macchiato-subtext0 hover:text-macchiato-text",
                  ].join(" ")}
                >
                  {item.label}
                </motion.button>
              );
            })}

            {/* Divider */}
            <div className="mx-3 my-1 h-px bg-macchiato-surface1" />

            {/* Resume download */}
            <motion.a
              href={CV_URL}
              download
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium cursor-pointer text-macchiato-mauve hover:bg-macchiato-mauve/10 transition-colors duration-150"
            >
              <svg
                width="14"
                height="14"
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
              Get Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
