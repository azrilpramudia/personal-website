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
    title: "Frontend",
    icon: "◈",
    accent: "rgba(138,173,244,0.25)",
    skills: [
      { name: "JavaScript ES6+", iconSlug: "javascript", color: "#F7DF1E" },
      { name: "React.js", iconSlug: "react", color: "#61DAFB" },
      { name: "HTML", iconSlug: "html5", color: "#E34F26" },
      { name: "CSS", iconSlug: "css", color: "#663399" },
      { name: "TailwindCSS", iconSlug: "tailwindcss", color: "#06B6D4" },
      { name: "Shadcn UI", iconSlug: "shadcnui", color: "#cad3f5" },
      { name: "Daisy UI", iconSlug: "daisyui", color: "#FF9903" },
    ],
  },
  {
    title: "Backend & Database",
    icon: "⬡",
    accent: "rgba(166,218,149,0.20)",
    skills: [
      { name: "Node.js", iconSlug: "nodedotjs", color: "#5FA04E" },
      { name: "MySQL", iconSlug: "mysql", color: "#4479A1" },
      { name: "MongoDB", iconSlug: "mongodb", color: "#47A248" },
      { name: "Prisma", iconSlug: "prisma", color: "#cad3f5" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "⬡",
    accent: "rgba(245,169,127,0.20)",
    skills: [
      { name: "Docker", iconSlug: "docker", color: "#2496ED" },
      { name: "Git", iconSlug: "git", color: "#F05032" },
      { name: "Linux", iconSlug: "linux", color: "#FCC624" },
      { name: "Network Fundamental", customIcon: "⬡", color: "#8bd5ca" },
    ],
  },
];
