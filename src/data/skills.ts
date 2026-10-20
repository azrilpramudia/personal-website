export type Skill = {
  name: string;
  customIcon?: string;
  color?: string;
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
      { name: "GO" },
      { name: "Node.js" },
      { name: "JavaScript ES6+" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Database & ORM",
    icon: "⬡",
    accent: "rgba(166,218,149,0.20)",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Prisma ORM" },
      { name: "Supabase" },
      { name: "SQLite" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: "⬡",
    accent: "rgba(245,169,127,0.20)",
    skills: [
      { name: "Docker" },
      { name: "Nginx" },
      { name: "Cloudflare" },
      { name: "Git" },
      { name: "Linux" },
    ],
  },
];
