// Libs
import { FC } from "react";
import { groupBy, keyBy } from "lodash";

// Models
import { HardSkill, SkillCategory, SkillCategoryValue, SkillLevel } from "../../typings/skills";

// Components
import SectionCard from "../SectionCard";
import SkillLevelTable from "../SkillLevelTable";
import HardSkillsChart from "../charts/HardSkillsChart";

type Props = {
  skills: HardSkill[];
  categories: SkillCategory[];
  levels: SkillLevel[];
};

export const HardSkills: FC<Props> = ({ skills, categories, levels }) => {
  const skillGroups = groupBy(skills, "category");
  const skillCategories = keyBy(categories, "value");

  return (
    <SectionCard title="Hard Skills">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <HardSkillsChart
          category={skillCategories[SkillCategoryValue.Lang].name}
          skills={skillGroups[SkillCategoryValue.Lang]}
          height={150}
        />
        <HardSkillsChart
          category={skillCategories[SkillCategoryValue.Db].name}
          skills={skillGroups[SkillCategoryValue.Db]}
          height={150}
        />
        <HardSkillsChart
          category={skillCategories[SkillCategoryValue.FwLib].name}
          skills={skillGroups[SkillCategoryValue.FwLib]}
          height={300}
        />
        <HardSkillsChart
          category={skillCategories[SkillCategoryValue.Other].name}
          skills={skillGroups[SkillCategoryValue.Other]}
          height={300}
        />
      </div>
      <div className="flex flex-row justify-center mt-8">
        <SkillLevelTable levels={levels} className="flex-grow-0 w-full lg:w-3/4" />
      </div>
    </SectionCard>
  );
};

export default HardSkills;
