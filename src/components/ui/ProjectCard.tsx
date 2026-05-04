/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { scaleIn } from "@/src/lib/animation";
import type { Project } from "@/src/types";

// ── Tech icon slugs map ───────────────────────────────────────
const TECH_ICON: Record<string, { slug: string; color: string }> = {
  "C++": { slug: "cplusplus", color: "00599C" },
  "Nest.js": { slug: "nestjs", color: "E0234E" },
  "Next.js": { slug: "nextdotjs", color: "cad3f5" },
  React: { slug: "react", color: "61DAFB" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  TailwindCSS: { slug: "tailwindcss", color: "06B6D4" },
  "Framer Motion": { slug: "framer", color: "cad3f5" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  MySQL: { slug: "mysql", color: "4479A1" },
  Prisma: { slug: "prisma", color: "cad3f5" },
  Docker: { slug: "docker", color: "2496ED" },
  MQTT: { slug: "mqtt", color: "FFC135" },
  Git: { slug: "git", color: "F05032" },
  "Socket.io": { slug: "socketdotio", color: "F05032" },
  Linux: { slug: "linux", color: "FCC624" },
  "Shadcn UI": { slug: "shadcnui", color: "cad3f5" },
  "Daisy UI": { slug: "daisyui", color: "FF9903" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  HTML: { slug: "html5", color: "E34F26" },
  CSS: { slug: "css3", color: "1572B6" },
  Supabase: { slug: "supabase", color: "3ECF8E" },
  "Xterm.js": { slug: "gnometerminal", color: "FCC624" },
};

// ── Tech badge with logo ────────────────────────────────────
function TechBadge({ tech }: { tech: string }) {
  const icon = TECH_ICON[tech];

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-macchiato-subtext1 bg-macchiato-surface0 border border-macchiato-surface1 transition-all duration-150 hover:border-macchiato-surface2 hover:text-macchiato-text">
      {icon ? (
        <img
          src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
          alt={tech}
          width={12}
          height={12}
          className="shrink-0"
        />
      ) : (
        <span className="size-2 rounded-full bg-macchiato-teal shrink-0" />
      )}
      {tech}
    </span>
  );
}

// ── Icon components ───────────────────────────────────────────
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-8 text-macchiato-mauve"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

// ── Project Card ──────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      className="group relative flex flex-col rounded-2xl p-6 h-full"
      style={{
        background: "rgba(36,39,58,0.6)",
        border: "1px solid rgba(91,96,120,0.25)",
      }}
      whileHover={{
        y: -6,
        borderColor: "rgba(198,160,246,0.35)",
        background: "rgba(54,58,79,0.6)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Top row: folder icon + featured badge */}
      <div className="flex items-start justify-between mb-5">
        <FolderIcon />
        {project.featured && (
          <span className="text-xs px-2 py-0.5 rounded-full font-medium font-mono bg-macchiato-yellow/10 text-macchiato-yellow border border-macchiato-yellow/20">
            ★ featured
          </span>
        )}
      </div>

      {/* Title + links */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-macchiato-text font-bold text-base leading-snug group-hover:text-macchiato-mauve transition-colors duration-200">
          {project.title}
        </h3>
        <div className="flex items-center gap-2.5 text-macchiato-overlay1 shrink-0 mt-0.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-macchiato-mauve transition-colors duration-200"
            >
              <GithubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live preview"
              className="hover:text-macchiato-mauve transition-colors duration-200"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-macchiato-subtext0 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Footer: tech badges + year */}
      <div className="flex items-end justify-between gap-2 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
        <span className="font-mono text-xs text-macchiato-overlay0 shrink-0 mb-0.5">
          {project.year}
        </span>
      </div>
    </motion.div>
  );
}
