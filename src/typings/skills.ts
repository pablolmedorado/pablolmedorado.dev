export enum SkillLevelValue {
  Basic = 1,
  Initial = 2,
  Intermediate = 3,
  Advanced = 4,
}

export enum SkillCategoryValue {
  Lang = "L",
  FwLib = "FL",
  Db = "DB",
  Other = "O",
}

export interface SkillLevel {
  value: SkillLevelValue;
  name: string;
  description?: string;
}

export interface SkillCategory {
  value: SkillCategoryValue;
  name: string;
}

export interface SoftSkill {
  name: string;
  level: SkillLevelValue;
}

export interface HardSkill {
  name: string;
  level: SkillLevelValue;
  category: SkillCategory;
  color?: string;
}
