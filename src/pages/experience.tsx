// Libs
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// Models
import Experience from "../typings/experience";

// Components
import DefaultLayout from "../layouts/Default";
import Jobs from "../components/sections/Jobs";

// Contexts
import { buildContextData, PageContext } from "../contexts/page-context";

type Props = {
  experience: Experience[];
};

const ExperiencePage: NextPage<Props> = ({ experience }) => {
  const router = useRouter();
  const { lang, t } = useTranslation("experience");
  const contextData = buildContextData(router, lang, t);

  return (
    <PageContext.Provider value={contextData}>
      <DefaultLayout>
        <Jobs experience={experience} />
      </DefaultLayout>
    </PageContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data: Props = await require(`../../public/api/${locale}/experience.json`);
  return {
    props: data,
  };
};

export default ExperiencePage;
