// Libs
import { FC } from "react";

// Models
import { SkillLevel, SoftSkill } from "../../typings/skills";

// Components
import SectionCard from "../SectionCard";
import SoftSkillsChart from "../charts/SoftSkillsChart";

type Props = {
  skills: SoftSkill[];
  levels: SkillLevel[];
};

export const SoftSkills: FC<Props> = ({ skills, levels }) => {
  return (
    <SectionCard title="Soft Skills">
      <SoftSkillsChart skills={skills} height={75} />
      <div className="text-center text-xs mt-8">
        {levels.map((level) => (
          <span key={level.value}>
            {level.value}: {level.name};&nbsp;
          </span>
        ))}
      </div>
    </SectionCard>
  );
};

export default SoftSkills;
