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

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Deteksi scroll untuk shadow navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight section aktif saat scroll
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
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      {/* ── Desktop pill navbar ── */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="hidden md:flex items-center gap-1 rounded-full px-2 py-2"
        style={{
          background: "rgba(30, 32, 48, 0.80)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(91, 96, 120, 0.35)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(198,160,246,0.08)"
            : "0 4px 16px rgba(0,0,0,0.3)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive ? "#cad3f5" : "#8087a2",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "#b8c0e0";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = "#8087a2";
              }}
            >
              {/* Active pill background */}
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(91, 96, 120, 0.45)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </motion.nav>

      {/* ── Mobile hamburger ── */}
      <div className="flex md:hidden w-full items-center justify-between">
        {/* Brand */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-sm text-macchiato-mauve tracking-wider"
        >
          azril.dev
        </motion.span>

        {/* Hamburger button */}
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
            className="block h-px w-6 bg-macchiato-subtext1 origin-center transition-colors"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-macchiato-subtext1"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-macchiato-subtext1 origin-center transition-colors"
          />
        </motion.button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-16 left-4 right-4 rounded-2xl p-2 md:hidden"
            style={{
              background: "rgba(30, 32, 48, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(91, 96, 120, 0.4)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item.href)}
                className="w-full text-left px-5 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors duration-150"
                style={{
                  color:
                    activeSection === item.href.replace("#", "")
                      ? "#c6a0f6"
                      : "#a5adcb",
                  background:
                    activeSection === item.href.replace("#", "")
                      ? "rgba(198,160,246,0.1)"
                      : "transparent",
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
