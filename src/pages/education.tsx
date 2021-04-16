// Libs
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// Models
import Education from "../typings/education";

// Components
import DefaultLayout from "../layouts/Default";
import SectionCard from "../components/SectionCard";
import TimelineItem from "../components/TimelineItem";
import TimelineItemContent from "../components/TimelineItemContent";

// Contexts
import { buildContextData, PageContext } from "../contexts/page-context";

type Props = {
  education: Education[];
};

const EducationPage: NextPage<Props> = ({ education }) => {
  const router = useRouter();
  const { lang, t } = useTranslation("education");
  const contextData = buildContextData(router, lang, t);

  return (
    <PageContext.Provider value={contextData}>
      <DefaultLayout>
        <SectionCard>
          <ul>
            {education.map((item, index, array) => (
              <TimelineItem
                key={index}
                timeRange={{ start: item.startMonth, end: item.endMonth }}
                timeFormat="MMM yyyy"
                isFirst={!index}
                isLast={index === array.length - 1}
              >
                <TimelineItemContent
                  title={item.title}
                  subtitle={`${item.school.name} ${item.school.country}`}
                  logo={item.school.logo}
                  link={item.school.website}
                  description={item.description}
                  tags={item.tags}
                />
              </TimelineItem>
            ))}
          </ul>
        </SectionCard>
      </DefaultLayout>
    </PageContext.Provider>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const data: Props = await require(`../../public/api/${locale}/education.json`);
  return {
    props: data,
  };
};

export default EducationPage;
