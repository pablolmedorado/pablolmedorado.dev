// Libs
import { FC, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Models
import { LinkedInAssessment, PluralSightAssessment } from "../../typings/assessments";

// Components
import SectionCard from "../SectionCard";

type Props = {
  assessments: {
    pluralsight: PluralSightAssessment[];
    linkedin: LinkedInAssessment[];
  };
};

export const Assessments: FC<Props> = ({ assessments }) => {
  return (
    <SectionCard title="Evaluaciones">
      {assessments.pluralsight.length > 0 && (
        <Fragment>
          <h3 className="mb-2 text-xl font-semibold">PluralSight IQ</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {assessments.pluralsight.map((assessment, index) => (
              <li key={index}>
                <article className="h-full border-2 rounded-lg">
                  <img
                    src={assessment.badgeUrl}
                    alt={`${assessment.topic} - ${assessment.level}`}
                    className="rounded-lg rounded-b-none"
                  />
                  <p className="px-4 py-2 text-pluralsight font-semibold">
                    {assessment.topic} - {assessment.level} ({assessment.score})
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
      {assessments.linkedin.length > 0 && (
        <Fragment>
          <h3 className="mt-4 mb-2 font-semibold text-xl">LinkedIn Skills</h3>
          <ul className="flex flex-wrap mt-2">
            {assessments.linkedin.map((assessment) => (
              <li key={assessment.skill}>
                <article className="rounded-2xl bg-linkedin text-lg text-white px-4 mr-2 my-1">
                  <FontAwesomeIcon icon="clipboard-check" className="mr-2" />
                  {assessment.skill}
                </article>
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </SectionCard>
  );
};

export default Assessments;
