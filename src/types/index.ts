export type Project = {
  name: string;
  summary: string;
  category:
    | "Network Engineering"
    | "System Administration"
    | "Infrastructure & DevOps"
    | "Backend Development"
    | "Monitoring & Automation"
    | "Web Applications";
  status: "Completed" | "In Progress" | "Archived";
  role: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
  image?: ImageMetadata;
};
