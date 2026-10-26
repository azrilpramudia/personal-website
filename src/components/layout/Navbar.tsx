"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personalInfo } from "@/src/data/index";
import { useNavScroll, useScrollDirection } from "@/src/hook/useScroll";

// ── Main Navbar ───────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrolled, activeSection } = useNavScroll();
  const scrollDirection = useScrollDirection();

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
            <Link
              key={item.href}
              href={pathname === "/" ? item.href : `/${item.href}`}
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
            </Link>
          );
        })}

        <a
          href="https://blog.meowhx.my.id"
          className={[
            "relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200",
            pathname === "/blog"
              ? "text-macchiato-text"
              : "text-macchiato-overlay1 hover:text-macchiato-subtext1",
          ].join(" ")}
        >
          {pathname === "/blog" && (
            <motion.span
              layoutId="nav-active-pill"
              className="absolute inset-0 rounded-full"
              style={{ background: "var(--color-nav-pill)" }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            />
          )}
          <span className="relative z-10">Blog</span>
        </a>

      </motion.nav>

      {/* ── Mobile: brand + hamburger + dropdown ── */}
      <motion.div
        className="relative flex md:hidden w-full flex-col"
        animate={{
          y: scrollDirection === "down" && !menuOpen ? "-120%" : "0%",
          opacity: scrollDirection === "down" && !menuOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Brand + hamburger bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="flex w-full items-center justify-between px-4 py-2 rounded-full"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              className="font-mono text-sm text-macchiato-text tracking-wider cursor-pointer"
              href="/"
            >
              {personalInfo.username}.dev
            </Link>
          </motion.div>

          <motion.button
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
        </motion.div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-3 rounded-2xl p-2 z-50"
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
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={pathname === "/" ? item.href : `/${item.href}`}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        "block w-full text-left px-5 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors duration-150",
                        isActive
                          ? "text-macchiato-mauve bg-macchiato-mauve/10"
                          : "text-macchiato-subtext0 hover:text-macchiato-text",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <a
                  href="https://blog.meowhx.my.id"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-5 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors duration-150 text-macchiato-subtext0 hover:text-macchiato-text"
                >
                  Blog
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
