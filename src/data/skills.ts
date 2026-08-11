export type Skill = {
  name: string;
  iconSlug?: string;
  customIcon?: string;
  color: string;
};

export type SkillCategory = {
  title: string;
  icon: string;
  accent: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Runtimes",
    icon: "◈",
    accent: "rgba(138,173,244,0.25)",
    skills: [
      { name: "GO", iconSlug: "go", color: "#00ADD8" },
      { name: "Node.js", iconSlug: "nodedotjs", color: "#5FA04E" },
      { name: "JavaScript ES6+", iconSlug: "javascript", color: "#F7DF1E" },
      { name: "HTML5", iconSlug: "html5", color: "#E34F26" },
      { name: "CSS3", iconSlug: "css", color: "#663399" },
    ],
  },
  {
    title: "Database & ORM",
    icon: "⬡",
    accent: "rgba(166,218,149,0.20)",
    skills: [
      { name: "MySQL", iconSlug: "mysql", color: "#4479A1" },
      { name: "PostgreSQL", iconSlug: "postgresql", color: "#4169E1" },
      { name: "Prisma ORM", iconSlug: "prisma", color: "#cad3f5" },
      { name: "Supabase", iconSlug: "supabase", color: "#3ECF8E" },
      { name: "SQLite", iconSlug: "sqlite", color: "#003B57" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: "⬡",
    accent: "rgba(245,169,127,0.20)",
    skills: [
      { name: "Docker", iconSlug: "docker", color: "#2496ED" },
      { name: "Nginx", iconSlug: "nginx", color: "#009639" },
      { name: "Cloudflare", iconSlug: "cloudflare", color: "#F38020" },
      { name: "Git", iconSlug: "git", color: "#F05032" },
      { name: "Linux", iconSlug: "linux", color: "#FCC624" },
    ],
  },
];
