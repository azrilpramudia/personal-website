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
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/username/project-2",
    featured: false,
  },
  {
    id: "project-3",
    title: "Hidroakuaponik Agriculture Website",
    description:
      "A web application for managing and monitoring a hidroakuaponik agriculture system, allowing users to track plant growth, water quality, and system performance.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://project-3.com",
    githubUrl: "https://github.com/username/project-3",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
