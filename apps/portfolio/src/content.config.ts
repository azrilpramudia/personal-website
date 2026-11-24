import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const optionalUrl = z.url().or(z.literal("")).optional();

const experience = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/experience" }),
  schema: z.object({
    published: z.boolean().default(false),
    organization: z.string(),
    role: z.string(),
    type: z.enum([
      "Employment",
      "Internship",
      "Education",
      "Training",
      "Organization",
    ]),
    start: z.string().regex(/^\d{4}-\d{2}$/),
    end: z
      .string()
      .regex(/^(\d{4}-\d{2}|Present)$/)
      .default("Present"),
    location: z.string().optional(),
    highlights: z.array(z.string()).min(1),
    tools: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/projects" }),
  schema: z.object({
    published: z.boolean().default(false),
    order: z.number().default(100),
    name: z.string(),
    summary: z.string(),
    role: z.string(),
    category: z.enum([
      "Network Engineering",
      "System Administration",
      "Infrastructure & DevOps",
      "Backend Development",
      "Monitoring & Automation",
      "Web Applications",
    ]),
    status: z.enum(["Completed", "In Progress", "Archived"]),
    tech: z.array(z.string()).min(1),
    repoUrl: optionalUrl,
    demoUrl: optionalUrl,
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "../blog/src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, experience, projects };
