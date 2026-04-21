import { Skill } from "../data/skills";
import { AnimatedProgress } from "./AnimatedProgress";

interface SkillCardProps {
  skill: Skill;
  isLarge?: boolean;
  isMedium?: boolean;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-primary/10 border border-outline-variant/20 p-4 rounded-lg shadow-sm hover:bg-primary/20 transition-shadow h-25">
      <div className="flex items-center gap-4">
        <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
        <h3 className="text-xl font-bold text-on-surface">{skill.name}</h3>
      </div>
      <div className="mt-4">
        <AnimatedProgress targetWidth={skill.value} color={skill.color} />
      </div>
    </div>
  );
}
