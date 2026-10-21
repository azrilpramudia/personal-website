import type { Project } from "@/src/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Air Quality Monitoring System",
    description:
      "A real-time air quality monitoring system that collects and displays data from various sensors deployed in urban areas.",
    techStack: [
      "C++",
      "Go",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MQTT",
      "Socket.io",
      "Docker",
      "MySQL",
    ],
    liveUrl: "https://air-quality-monitoring-system.my.id",
    githubUrl: "https://github.com/azrilpramudia/air-quality-monitoring-system",
    featured: false,
    inDevelopment: true,
  },
  {
    id: "project-2",
    title: "Himatif Uninus",
    description:
      "The official website for the Informatics Engineering Student Association of Nusantara Islamic University (Himatif Uninus) which provides information about organizations, activities, and resources for students.",
    techStack: ["Go", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://himatifuninus.meowhx.my.id",
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
    liveUrl: "https://portdock.my.id",
    githubUrl: "https://github.com/azrilpramudia/portdock-caas",
    featured: true,
  },
  {
    id: "project-4",
    title: "LibreGo - Library Management System",
    description:
      "A library management system built with Go, providing features for managing books, users, and borrowing records.",
    techStack: [
      "Go",
      "Redis",
      "Docker",
      "PostgreSQL",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "https://librego.my.id",
    githubUrl: "https://github.com/azrilpramudia/libre-go",
    featured: false,
    inDevelopment: true,
  },
  {
    id: "project-5",
    title: "Go API Keygen",
    description:
      "A simple API key generator built with Go, providing a secure way to create and manage API keys.",
    techStack: ["Go", "Redis", "Docker", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://random-keygen.meowhx.my.id",
    githubUrl: "https://github.com/azrilpramudia/go-api-keygen",
    featured: false,
    inDevelopment: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
