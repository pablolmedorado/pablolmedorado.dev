// Libs
import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Models
import Certification from "../../typings/certification";

// Components
import SectionCard from "../SectionCard";

// Utils
import { formatISODate } from "../../utils/dates";

type Props = {
  certifications: Certification[];
};

export const Certifications: FC<Props> = ({ certifications }) => {
  return (
    <SectionCard title="Certificaciones">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((certification) => (
          <li key={certification.title}>
            <article className="h-full flex flex-row items-center space-x-4 p-4 border-2 rounded-lg">
              <div className="flex-shrink-0 flex items-start">
                <a
                  href={certification.organization.website}
                  target="_blank"
                  rel="noreferrer"
                  className="h-20 w-20 relative"
                >
                  <Image src={certification.organization.logo} layout="fill" objectFit="contain" />
                </a>
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-lg font-semibold">
                  {certification.title}
                  <a href={certification.url} target="_blank" rel="noreferrer" className="text-base ml-2">
                    <FontAwesomeIcon icon="external-link-alt" />
                  </a>
                </h3>
                <h4 className="text-lg">
                  {certification.organization.name} {certification.organization.country}
                </h4>
                <p className="text-gray-500 capitalize">
                  <time dateTime={certification.issueDate}>{formatISODate(certification.issueDate, "MMMM yyyy")}</time>
                  {certification.expirationDate && (
                    <>
                      <span>&nbsp;-&nbsp;</span>
                      <time dateTime={certification.expirationDate}>
                        {formatISODate(certification.expirationDate, "MMMM yyyy")}
                      </time>
                    </>
                  )}
                </p>
                {certification.description && (
                  <p className="font-light mt-2" style={{ whiteSpace: "pre-line" }}>
                    {certification.description}
                  </p>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
};

export default Certifications;
