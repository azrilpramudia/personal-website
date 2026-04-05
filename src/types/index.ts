export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year?: number;
}

export type ExperienceType =
  | "Full-Time"
  | "Part-Time"
  | "Freelance"
  | "Contract"
  | "Internship";

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type?: ExperienceType;
  startDate: string;
  endDate: string;
  description: string[];
  techStack?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
