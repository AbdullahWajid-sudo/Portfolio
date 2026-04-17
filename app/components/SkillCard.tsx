import { Skill } from "../data/skills";

interface SkillCardProps {
  skill: Skill;
  isLarge?: boolean;
  isMedium?: boolean;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-surface-container-low border border-outline-variant/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="flex items-center gap-4">
        <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
        <h3 className="text-xl font-bold text-on-surface">{skill.name}</h3>
      </div>
      <div className="mt-4">
        <div className="w-full bg-surface-container-high rounded-full h-2">
          <div
            className="h-2 rounded-full transition-all duration-300"
            style={{ width: `${skill.value}%`, backgroundColor: skill.color }}
          />
        </div>
      </div>
    </div>
  );
}