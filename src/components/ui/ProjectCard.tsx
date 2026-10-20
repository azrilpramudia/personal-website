/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { scaleIn } from "@/src/lib/animation";
import {
  ExternalLinkIcon,
  FolderIcon,
  GithubIcon,
} from "@/src/components/ui/Icons";
import { techIcons } from "@/src/data/tech-icons";
import type { Project } from "@/src/types";

// ── Tech badge with logo ────────────────────────────────────
function TechBadge({ tech }: { tech: string }) {
  const icon = techIcons[tech];

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
      {/* Top row: folder icon + project badges */}
      <div className="flex items-start justify-between mb-5">
        <FolderIcon />
        <div className="flex flex-wrap justify-end gap-1.5">
          {project.featured && (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium font-mono bg-macchiato-yellow/10 text-macchiato-yellow border border-macchiato-yellow/20">
              ★ featured
            </span>
          )}
          {project.inDevelopment && (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium font-mono bg-macchiato-blue/10 text-macchiato-blue border border-macchiato-blue/20">
              In Development
            </span>
          )}
        </div>
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
        {project.year !== undefined && (
          <span className="font-mono text-xs text-macchiato-overlay0 shrink-0 mb-0.5">
            {project.year}
          </span>
        )}
      </div>
    </motion.div>
  );
}
