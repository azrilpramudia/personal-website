"use client";

import { useEffect, useState } from "react";
import { TerminalLine as TLine, TerminalPart } from "@/src/data/about";

// ── Part renderer (inline styled text) ───────────────────────
function Part({ part }: { part: TerminalPart }) {
  const styles: Record<TerminalPart["style"], string> = {
    normal: "text-macchiato-subtext1",
    accent: "text-macchiato-blue italic",
    tag: "text-macchiato-teal",
    badge:
      "inline-block bg-macchiato-surface1 text-macchiato-peach rounded px-1 mx-0.5 text-[11px]",
  };
  return <span className={styles[part.style]}>{part.text}</span>;
}

// ── Single terminal line ──────────────────────────────────────
export function TerminalLine({ line }: { line: TLine }) {
  if (line.type === "blank") return <div className="h-3" />;

  if (line.type === "prompt")
    return (
      <p className="font-mono text-xs md:text-sm mb-3">
        <span className="text-macchiato-green">~</span>
        <span className="text-macchiato-subtext0"> ~ </span>
        <span className="text-macchiato-text">{line.text}</span>
      </p>
    );

  if (line.type === "heading")
    return (
      <p className="font-mono text-xs md:text-sm font-bold text-macchiato-mauve mb-2">
        {line.text}
      </p>
    );

  if (line.type === "body")
    return (
      <p className="font-mono text-xs md:text-sm leading-relaxed mb-1">
        {line.parts.map((part, i) => (
          <Part key={i} part={part} />
        ))}
      </p>
    );

  return null;
}

// ── Blinking block cursor ─────────────────────────────────────
export function Cursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className="inline-block w-2 h-4 bg-macchiato-mauve align-middle"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.1s" }}
    />
  );
}
