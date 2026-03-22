"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personalInfo } from "@/src/data/index";
import { scrollToSection } from "@/src/lib/utils";
import { useNavScroll } from "@/src/hook/useScroll";
import { DownloadIcon } from "@/src/components/ui/Icons";

// ── Main Navbar ───────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrolled, activeSection } = useNavScroll();

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace("#", ""));
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
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
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

        <span className="h-4 w-px bg-macchiato-surface2 mx-1" />

        <a
          href={personalInfo.cvUrl}
          download
          className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-macchiato-base bg-macchiato-mauve cursor-pointer transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
          style={{
            boxShadow:
              "0 0 12px rgba(198,160,246,0.3), 0 2px 6px rgba(198,160,246,0.15)",
          }}
        >
          <DownloadIcon size={12} />
          Get Resume
        </a>
      </motion.nav>

      {/* ── Mobile: brand + hamburger ── */}
      <div className="flex md:hidden w-full items-center justify-between">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => scrollToSection("home")}
          className="font-mono text-sm text-macchiato-mauve tracking-wider cursor-pointer"
        >
          {personalInfo.name.toLowerCase().replace(" ", ".")}.dev
        </motion.button>

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
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
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

            <div className="mx-3 my-1 h-px bg-macchiato-surface1" />

            <motion.a
              href={personalInfo.cvUrl}
              download
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
              onClick={() => setMenuOpen(false)}
              className="w-full flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium cursor-pointer text-macchiato-mauve hover:bg-macchiato-mauve/10 transition-colors duration-150"
            >
              <DownloadIcon size={12} />
              Get Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
