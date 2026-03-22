import { Skill, NavItem, SocialLink } from "@/src/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", category: "frontend", proficiency: "advanced" },
  { name: "React", category: "frontend", proficiency: "advanced" },
  { name: "TypeScript", category: "frontend", proficiency: "intermediate" },
  { name: "Tailwind CSS", category: "frontend", proficiency: "advanced" },
  { name: "Framer Motion", category: "frontend", proficiency: "intermediate" },

  // Backend
  { name: "Node.js", category: "backend", proficiency: "intermediate" },
  { name: "Express.js", category: "backend", proficiency: "intermediate" },
  { name: "PostgreSQL", category: "backend", proficiency: "beginner" },

  // Tools
  { name: "Git", category: "tools", proficiency: "advanced" },
  { name: "Figma", category: "tools", proficiency: "intermediate" },
  { name: "VS Code", category: "tools", proficiency: "expert" },
];

export const skillsByCategory = {
  frontend: skills.filter((s) => s.category === "frontend"),
  backend: skills.filter((s) => s.category === "backend"),
  tools: skills.filter((s) => s.category === "tools"),
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/azrilpramudia",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/azril-pramudia-anugrah-202a872a6",
    icon: "Linkedin",
  },
  {
    platform: "Email",
    url: "mailto:azrilpramudia01@gmail.com",
    icon: "Mail",
  },
];

export const personalInfo = {
  name: "Nama Kamu",
  title: "Full Stack Developer",
  tagline: "Membangun produk digital yang indah & fungsional.",
  bio: "Saya seorang developer yang passionate dalam membuat pengalaman web yang luar biasa. Suka belajar hal baru dan bereksperimen dengan teknologi terbaru.",
  location: "Indonesia",
  availableForWork: true,
  cvUrl: "/cv.pdf",
  githubUrl: "https://github.com/azrilpramudia",
};
