export const aboutInfo = {
  specialization: "Frontend Developer & Computer Network",
  basedIn: "Bandung, West Java, Indonesia",
  email: "azrilpramudia01@gmail.com",
  cvUrl: "/cv.pdf",
};

// ── Social links ──────────────────────────────────────────────
export const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/username",
    colorClass:
      "text-macchiato-blue border-macchiato-blue/30 hover:border-macchiato-blue/70 hover:bg-macchiato-blue/10",
  },
  {
    label: "GitHub",
    href: "https://github.com/username",
    colorClass:
      "text-macchiato-text border-macchiato-surface2 hover:border-macchiato-overlay1 hover:bg-macchiato-surface0",
  },
  {
    label: "X",
    href: "https://x.com/username",
    colorClass:
      "text-macchiato-text border-macchiato-surface2 hover:border-macchiato-overlay1 hover:bg-macchiato-surface0",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/username",
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
        text: "developer focused on the JavaScript ecosystem",
        style: "accent",
      },
      {
        text: ", spent the last 3 months diving deep into its fundamentals. I use this to build with ",
        style: "normal",
      },
      { text: "React", style: "tag" },
      { text: ", ", style: "normal" },
      { text: "TypeScript", style: "tag" },
      { text: ", and ", style: "normal" },
      { text: "Tailwind CSS", style: "tag" },
      { text: ".", style: "normal" },
    ],
  },
  { type: "blank" },
  { type: "heading", text: "# Current Learning" },
  {
    type: "body",
    parts: [
      { text: "Hardening my skills in ", style: "normal" },
      { text: "Docker", style: "badge" },
      { text: ", ", style: "normal" },
      { text: "Linux Server", style: "badge" },
      { text: ", and ", style: "normal" },
      { text: "Bash", style: "badge" },
      { text: ". Exploring ", style: "normal" },
      { text: "PostgreSQL", style: "tag" },
      {
        text: " for data persistence and obsessed with how apps work across the ",
        style: "normal",
      },
      { text: "network", style: "tag" },
      { text: ".", style: "normal" },
    ],
  },
];
