export const aboutInfo = {
  specialization: "Backend Developer",
  basedIn: "Bandung, West Java, Indonesia",
};

// ── Social links ──────────────────────────────────────────────
export const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/azril.pramudia.01",
    colorClass:
      "text-macchiato-blue border-macchiato-blue/30 hover:border-macchiato-blue/70 hover:bg-macchiato-blue/10",
  },
  {
    label: "GitHub",
    href: "https://github.com/azrilpramudia",
    colorClass:
      "text-macchiato-text border-macchiato-surface2 hover:border-macchiato-overlay1 hover:bg-macchiato-surface0",
  },
  {
    label: "X",
    href: "https://x.com/meowhx_dev",
    colorClass:
      "text-macchiato-text border-macchiato-surface2 hover:border-macchiato-overlay1 hover:bg-macchiato-surface0",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/azril-pramudia-anugrah-202a872a6",
    colorClass:
      "text-macchiato-blue border-macchiato-blue/30 hover:border-macchiato-blue/70 hover:bg-macchiato-blue/10",
  },
];

// ── Terminal content ──────────────────────────────────────────
// type: "prompt" | "heading" | "body" | "blank"
// parts style: "normal" | "accent" | "tag" | "badge"
export type TerminalPart = {
  text: string;
  style: "normal" | "accent" | "tag" | "badge";
};

export type TerminalLine =
  | { type: "prompt"; text: string }
  | { type: "heading"; text: string }
  | { type: "body"; parts: TerminalPart[] }
  | { type: "blank" };

export const terminalLines: TerminalLine[] = [
  { type: "prompt", text: "cat about_me.md" },
  { type: "blank" },
  { type: "heading", text: "# Who am I?" },
  {
    type: "body",
    parts: [
      { text: "I am a ", style: "normal" },
      {
        text: "backend developer focused on Go",
        style: "accent",
      },
      {
        text: ", building efficient and scalable RESTful APIs. I work with ",
        style: "normal",
      },
      { text: "PostgreSQL", style: "tag" },
      { text: ", ", style: "normal" },
      { text: "MySQL", style: "tag" },
      { text: ", and ", style: "normal" },
      { text: "Prisma ORM", style: "tag" },
      { text: " for database design and management.", style: "normal" },
    ],
  },
  { type: "blank" },
  { type: "heading", text: "# Current Learning" },
  {
    type: "body",
    parts: [
      { text: "Deep-diving into ", style: "normal" },
      { text: "Go", style: "badge" },
      { text: " fundamentals, hardening my skills in ", style: "normal" },
      { text: "Docker", style: "badge" },
      { text: ", ", style: "normal" },
      { text: "Linux Server", style: "badge" },
      { text: ", and ", style: "normal" },
      { text: "Git", style: "badge" },
      {
        text: ". Obsessed with how backend systems communicate across the ",
        style: "normal",
      },
      { text: "network", style: "tag" },
      { text: ".", style: "normal" },
    ],
  },
];
