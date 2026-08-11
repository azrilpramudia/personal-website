import type { Project } from "@/src/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Air Quality Monitoring Dashboard",
    description:
      "Dashboard to monitor air quality in real-time with data from IoT sensors.",
    techStack: [
      "C++",
      "Nest.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "MQTT",
      "Socket.io",
      "Prisma",
      "Docker",
    ],
    liveUrl: "https://air-quality-monitor-amber.vercel.app/dashboard",
    githubUrl:
      "https://github.com/azrilpramudia/air-quality-monitoring-rebuild",
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
    id: "project-4",
    title: "Portdock Container as a Service",
    description:
      "Automated Container-as-a-Service (CaaS) platform for cloud hosting orchestration using Docker Engine API",
    techStack: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Socket.io",
      "Xterm.js",
      "Docker",
      "Prisma",
    ],
    liveUrl: "https://project-3.com",
    githubUrl: "https://github.com/azrilpramudia/portdock-caas",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
