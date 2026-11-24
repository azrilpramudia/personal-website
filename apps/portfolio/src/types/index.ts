import type { ImageMetadata } from "astro";

export type ExperienceType =
  | "Employment"
  | "Internship"
  | "Education"
  | "Training"
  | "Organization";

export type Experience = {
  published: boolean;
  organization: string;
  role: string;
  type: ExperienceType;
  start: string;
  end: string | "Present";
  location?: string;
  highlights: string[];
  tools?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ProjectCategory =
  | "Network Engineering"
  | "System Administration"
  | "Infrastructure & DevOps"
  | "Backend Development"
  | "Monitoring & Automation"
  | "Web Applications";

export type Project = {
  published: boolean;
  name: string;
  summary: string;
  role: string;
  category: ProjectCategory;
  status: "Completed" | "In Progress" | "Archived";
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: ImageMetadata;
  imageAlt?: string;
};
