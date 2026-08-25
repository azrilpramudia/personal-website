import type { Project } from "@/src/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Go Job Queue & Worker Pool System",
    description:
      "A high-performance job queue and worker pool system implemented in Go, designed for efficient task processing and concurrency management.",
    techStack: ["Go"],
    liveUrl: "https://project-1.com",
    githubUrl: "https://github.com/azrilpramudia/go-job-queue",
    featured: true,
  },
  {
    id: "project-2",
    title: "Himatif Uninus Website",
    description:
      "The official website for the Informatics Engineering Student Association of Nusantara Islamic University (Himatif Uninus) which provides information about organizations, activities, and resources for students.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
    ],
    liveUrl: "https://himatif-uninus-sigma.vercel.app/",
    githubUrl: "https://github.com/azrilpramudia/himatif-uninus",
    featured: false,
  },
  {
    id: "project-3",
    title: "Portdock Container as a Service",
    description:
      "Automated Container-as-a-Service (CaaS) platform for cloud hosting orchestration using Docker Engine API",
    techStack: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "Docker",
      "Prisma",
    ],
    liveUrl: "https://project-3.com",
    githubUrl: "https://github.com/azrilpramudia/portdock-caas",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
