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
  year: number;
}

// EXPERIENCE / TIMELINE TYPES
export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type?: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack?: string[];
}

// SKILL TYPES
export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

// NAV TYPES
export interface NavItem {
  label: string;
  href: string;
}

// SOCIAL LINK TYPES
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
