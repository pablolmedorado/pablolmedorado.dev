// Libs
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// Models
import { HardSkill, SkillCategory, SkillLevel, SoftSkill } from "../typings/skills";

// Components
import DefaultLayout from "../layouts/Default";
import SoftSkills from "../components/sections/SoftSkills";
import HardSkills from "../components/sections/HardSkills";

// Contexts
import { buildContextData, PageContext } from "../contexts/page-context";

type Props = {
  softSkills: {
    skills: SoftSkill[];
    levels: SkillLevel[];
  };
  hardSkills: {
    skills: HardSkill[];
    categories: SkillCategory[];
    levels: SkillLevel[];
  };
};

const SkillsPage: NextPage<Props> = ({ softSkills, hardSkills }) => {
  const router = useRouter();
  const { lang, t } = useTranslation("skills");
  const contextData = buildContextData(router, lang, t);

  return (
    <PageContext.Provider value={contextData}>
      <DefaultLayout>
        <HardSkills {...hardSkills} />
        <SoftSkills {...softSkills} />
      </DefaultLayout>
    </PageContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data: Props = await require(`../../public/api/${locale}/skills.json`);
  return {
    props: data,
  };
};

export default SkillsPage;
