// Libs
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// Models
import { PluralSightAssessment, LinkedInAssessment } from "../typings/assessments";
import Certification from "../typings/certification";
import Course from "../typings/course";

// Components
import Assessments from "../components/sections/Assessments";
import Certifications from "../components/sections/Certifications";
import Courses from "../components/sections/Courses";
import DefaultLayout from "../layouts/Default";

// Contexts
import { buildContextData, PageContext } from "../contexts/page-context";

type Props = {
  certifications: Certification[];
  assessments: {
    pluralsight: PluralSightAssessment[];
    linkedin: LinkedInAssessment[];
  };
  courses: Course[];
};

const AccomplishmentsPage: NextPage<Props> = ({ certifications, assessments, courses }) => {
  const router = useRouter();
  const { lang, t } = useTranslation("accomplishments");
  const contextData = buildContextData(router, lang, t);

  return (
    <PageContext.Provider value={contextData}>
      <DefaultLayout>
        <Certifications certifications={certifications} />
        <Assessments assessments={assessments} />
        <Courses courses={courses} />
      </DefaultLayout>
    </PageContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data: Props = await require(`../../public/api/${locale}/accomplishments.json`);
  return {
    props: data,
  };
};

export default AccomplishmentsPage;
