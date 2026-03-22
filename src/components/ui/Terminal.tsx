"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  TerminalLine as TLine,
  TerminalPart,
  terminalLines,
} from "@/src/data/about";

// ── Config ────────────────────────────────────────────────────
const CHAR_DELAY = 22;
const BADGE_DELAY = 60;
const LINE_PAUSE = 180;

type TokenKind = "char" | "unit" | "break";

type Token = {
  kind: TokenKind;
  text: string;
  style:
    | TerminalPart["style"]
    | "prompt-sym"
    | "prompt-arrow"
    | "prompt-cmd"
    | "heading";
  lineIndex: number;
};

// ── Flatten lines → Token[] ───────────────────────────────────

function flattenLines(lines: TLine[]): Token[] {
  const tokens: Token[] = [];

  lines.forEach((line, li) => {
    if (line.type === "blank") {
      tokens.push({ kind: "break", text: "", style: "normal", lineIndex: li });
      return;
    }

    if (line.type === "prompt") {
      for (const c of "~ ")
        tokens.push({
          kind: "char",
          text: c,
          style: "prompt-sym",
          lineIndex: li,
        });
      for (const c of "~ ")
        tokens.push({
          kind: "char",
          text: c,
          style: "prompt-arrow",
          lineIndex: li,
        });
      for (const c of line.text)
        tokens.push({
          kind: "char",
          text: c,
          style: "prompt-cmd",
          lineIndex: li,
        });
      tokens.push({
        kind: "break",
        text: "",
        style: "prompt-cmd",
        lineIndex: li,
      });
      return;
    }

    if (line.type === "heading") {
      for (const c of line.text)
        tokens.push({ kind: "char", text: c, style: "heading", lineIndex: li });
      tokens.push({ kind: "break", text: "", style: "heading", lineIndex: li });
      return;
    }

    if (line.type === "body") {
      for (const part of line.parts) {
        if (part.style === "badge") {
          tokens.push({
            kind: "unit",
            text: part.text,
            style: "badge",
            lineIndex: li,
          });
        } else {
          for (const c of part.text) {
            tokens.push({
              kind: "char",
              text: c,
              style: part.style,
              lineIndex: li,
            });
          }
        }
      }
      tokens.push({ kind: "break", text: "", style: "normal", lineIndex: li });
    }
  });

  return tokens;
}

type RenderedToken = { text: string; style: Token["style"]; kind: TokenKind };
type RenderedLine = {
  lineIndex: number;
  tokens: RenderedToken[];
  type: TLine["type"];
};

function groupByLine(
  tokens: Token[],
  lineTypes: Map<number, TLine["type"]>,
): RenderedLine[] {
  const map = new Map<number, RenderedToken[]>();
  for (const t of tokens) {
    if (t.kind === "break") continue;
    if (!map.has(t.lineIndex)) map.set(t.lineIndex, []);
    map.get(t.lineIndex)!.push({ text: t.text, style: t.style, kind: t.kind });
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a - b)
    .map(([li, toks]) => ({
      lineIndex: li,
      tokens: toks,
      type: lineTypes.get(li) ?? "body",
    }));
}

// ── Style class map ───────────────────────────────────────────
const styleClass: Record<Token["style"], string> = {
  "prompt-sym": "text-macchiato-green",
  "prompt-arrow": "text-macchiato-subtext0",
  "prompt-cmd": "text-macchiato-text",
  heading: "text-macchiato-mauve font-bold",
  normal: "text-macchiato-subtext1",
  accent: "text-macchiato-blue italic",
  tag: "text-macchiato-teal",
  badge:
    "inline-block bg-macchiato-surface1 text-macchiato-peach rounded px-1 mx-0.5 text-[11px] not-italic",
};

const lineWrapClass: Record<TLine["type"], string> = {
  prompt: "font-mono text-xs md:text-sm mb-3",
  heading: "font-mono text-xs md:text-sm mb-2",
  body: "font-mono text-xs md:text-sm leading-relaxed mb-1",
  blank: "h-3",
};

// ── Blinking cursor ───────────────────────────────────────────
export function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="inline-block w-2 h-4 bg-macchiato-mauve align-middle ml-0.5"
      style={{ opacity: on ? 1 : 0, transition: "opacity 0.08s" }}
    />
  );
}

// ── TypingTerminal ────────────────────────────────────────────
export function TypingTerminal() {
  const allTokens = useMemo(() => flattenLines(terminalLines), []);
  const lineTypes = useMemo(() => {
    const m = new Map<number, TLine["type"]>();
    terminalLines.forEach((l, i) => m.set(i, l.type));
    return m;
  }, []);

  const [revealed, setRevealed] = useState(0);
  const [started, setStarted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mulai saat masuk viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typing loop
  useEffect(() => {
    if (!started || revealed >= allTokens.length) return;

    const token = allTokens[revealed];
    const delay =
      token.kind === "break"
        ? LINE_PAUSE
        : token.kind === "unit"
          ? BADGE_DELAY
          : CHAR_DELAY;

    timerRef.current = setTimeout(() => setRevealed((v) => v + 1), delay);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [started, revealed, allTokens]);

  const isDone = revealed >= allTokens.length;
  const renderedLines = groupByLine(allTokens.slice(0, revealed), lineTypes);
  const lastLineIdx = renderedLines.at(-1)?.lineIndex ?? -1;

  return (
    <div ref={wrapperRef} className="px-5 py-4 min-h-70">
      {renderedLines.map(({ lineIndex, tokens, type }) => (
        <p key={lineIndex} className={lineWrapClass[type]}>
          {tokens.map((t, i) => (
            <span key={i} className={styleClass[t.style]}>
              {t.text}
            </span>
          ))}
          {/* Cursor Animation blank */}
          {!isDone && lineIndex === lastLineIdx && <Cursor />}
        </p>
      ))}
      {/* Cursor idle after done */}
      {isDone && (
        <div className="mt-2">
          <Cursor />
        </div>
      )}
    </div>
  );
}

export function TerminalLine({ line }: { line: TLine }) {
  if (line.type === "blank") return <div className="h-3" />;
  if (line.type === "prompt")
    return (
      <p className="font-mono text-xs md:text-sm mb-3">
        <span className="text-macchiato-green">~ </span>
        <span className="text-macchiato-subtext0">~ </span>
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
        {line.parts.map((p, i) => (
          <span key={i} className={styleClass[p.style]}>
            {p.text}
          </span>
        ))}
      </p>
    );
  return null;
}
