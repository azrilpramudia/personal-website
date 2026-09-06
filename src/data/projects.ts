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
    liveUrl: "https://portdock-cloud.vercel.app/",
    githubUrl: "https://github.com/azrilpramudia/portdock-caas",
    featured: true,
  },
  // {
  //   id: "project-4",
  //   title: "Air Quality Monitoring System",
  //   description:
  //     "A real-time air quality monitoring system that collects and displays data from various sensors deployed in urban areas.",
  //   techStack: [
  //     "C++",
  //     "Go",
  //     "Next.js",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "MQTT",
  //     "Socket.io",
  //     "Docker",
  //     "MySQL",
  //   ],
  //   liveUrl: "https://portdock-cloud.vercel.app/",
  //   githubUrl: "https://github.com/azrilpramudia/portdock-caas",
  //   featured: false,
  // },
  // {
  //   id: "project-5",
  //   title: "PustakaKu - Digital Library System",
  //   description:
  //     "A digital library system for managing and accessing books and resources online",
  //   techStack: [
  //     "Go",
  //     "Next.js",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "PostgreSQL",
  //     "Docker",
  //   ],
  //   liveUrl: "https://portdock-cloud.vercel.app/",
  //   githubUrl: "https://github.com/azrilpramudia/portdock-caas",
  //   featured: true,
  // },
];

export const featuredProjects = projects.filter((p) => p.featured);
