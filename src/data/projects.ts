import type { Project } from "@/src/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Personal Portfolio",
    description:
      "Website portfolio pribadi yang dibangun dengan Next.js, Tailwind CSS, dan Framer Motion. Menampilkan project dan skill secara profesional.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/projects/portfolio.png",
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: true,
    year: 2025,
  },
  {
    id: "project-2",
    title: "Project Kedua",
    description:
      "Deskripsi singkat project kedua kamu di sini. Ceritakan apa yang dibangun dan masalah apa yang diselesaikan.",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/project-2",
    featured: true,
    year: 2024,
  },
  {
    id: "project-3",
    title: "Project Ketiga",
    description:
      "Deskripsi singkat project ketiga kamu di sini. Ceritakan apa yang dibangun dan masalah apa yang diselesaikan.",
    techStack: ["Next.js", "MySQL", "Prisma"],
    liveUrl: "https://project-3.com",
    githubUrl: "https://github.com/username/project-3",
    featured: false,
    year: 2024,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
