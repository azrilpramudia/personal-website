/* eslint-disable @next/next/no-img-element */
import { cn } from "@/src/lib/utils";
import { Skill } from "@/src/data/skills";
import { techIcons } from "@/src/data/tech-icons";

function SkillIcon({ skill }: { skill: Skill }) {
  const icon = techIcons[skill.name];

  if (icon) {
    return (
      <>
        <img
          src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
          alt={skill.name}
          width={15}
          height={15}
          className="shrink-0"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = "none";
            img.nextElementSibling?.classList.remove("hidden");
          }}
        />
        <span
          className="hidden size-1.5 rounded-full shrink-0"
          style={{ background: `#${icon.color}` }}
        />
      </>
    );
  }

  return (
    <span
      className="size-3.5 shrink-0 flex items-center justify-center text-xs leading-none"
      style={{ color: skill.color ?? "currentColor" }}
    >
      {skill.customIcon ?? "◆"}
    </span>
  );
}

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg",
        "font-mono text-xs font-medium text-macchiato-subtext1",
        "bg-macchiato-surface0 border border-macchiato-surface1",
        "transition-all duration-200 select-none",
        "hover:border-macchiato-surface2 hover:bg-macchiato-surface1 hover:-translate-y-0.5 hover:text-macchiato-text",
      )}
    >
      <SkillIcon skill={skill} />

      {skill.name}
    </span>
  );
}
