"use client";

import { useEffect, useState, useRef, RefObject } from "react";
import { navItems } from "@/src/data/index";

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.round(scrolled));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

export function useInView<T extends HTMLElement>(
  threshold = 0.1,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4, rootMargin: "-80px 0px 0px 0px" },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return activeSection;
}

export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navItems.map((n) => n.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, activeSection };
}

export function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    if (copied) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), timeout);
  };

  return { copied, copy };
}
