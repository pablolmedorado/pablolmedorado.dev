// Libs
import { FC } from "react";
import useTranslation from "next-translate/useTranslation";

// Models
import Experience from "../../typings/experience";

// Components
import SectionCard from "../SectionCard";
import TimelineItem from "../../components/TimelineItem";
import TimelineItemContent from "../../components/TimelineItemContent";

type Props = {
  experience: Experience[];
};

export const Jobs: FC<Props> = ({ experience }) => {
  const { t } = useTranslation("experience");
  return (
    <SectionCard title={t`jobSectionTitle`}>
      <ul>
        {experience.map((item, index, array) => (
          <TimelineItem
            key={index}
            timeRange={{ start: item.startMonth, end: item.endMonth }}
            timeFormat="MMM yyyy"
            isFirst={!index}
            isLast={index === array.length - 1}
          >
            <TimelineItemContent
              title={item.jobTitle}
              subtitle={`${item.company.name} ${item.company.country} / ${item.type}`}
              logo={item.company.logo}
              link={item.company.website}
              description={item.description}
              tags={item.tags}
            />
          </TimelineItem>
        ))}
      </ul>
    </SectionCard>
  );
};

export default Jobs;
