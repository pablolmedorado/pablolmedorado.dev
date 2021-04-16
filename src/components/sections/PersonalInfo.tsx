import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import SectionCard from "../SectionCard";
import Tooltip from "../Tooltip";

import Profile from "../../typings/profile";

import { calculateAge, formatISODate } from "../../utils/dates";

export const PersonalInfo: FC<Profile> = ({
  profilePicture,
  firstName,
  lastName,
  birthdate,
  birthplace,
  jobTitle,
  about,
}) => {
  const info = [
    { icon: "signature", label: "Nombre completo", text: `${firstName} ${lastName}` },
    {
      icon: "birthday-cake",
      label: "Fecha de nacimiento",
      text: `${formatISODate(birthdate, "PPP")} (${calculateAge(birthdate)})`,
    },
    { icon: "house-user", label: "Lugar de nacimiento", text: `${birthplace.name} ${birthplace.country}` },
    { icon: "user-tag", label: "Rol", text: jobTitle },
  ];

  return (
    <SectionCard title="Información personal">
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-2">
        <div className="mx-auto sm:flex-shrink">
          <Image className="rounded-full" src={profilePicture} width={150} height={150} />
        </div>
        <div className="mx-auto sm:flex-grow flex flex-col divide-y place-content-center">
          {info.map((field) => (
            <div key={field.icon} className="flex flex-row space-x-2 text-lg">
              <span className="inline-block flex-shrink w-8 text-primary text-center">
                <Tooltip text={field.label}>
                  <FontAwesomeIcon icon={field.icon as IconProp} />
                </Tooltip>
              </span>
              <span className="inline-block flex-grow">{field.text}</span>
            </div>
          ))}
        </div>
      </div>
      {about && (
        <blockquote>
          <Tooltip text="Acerca de mí">
            <FontAwesomeIcon icon="quote-left" className="text-xl text-primary-light" fixedWidth />
          </Tooltip>
          <p className="italic" style={{ whiteSpace: "pre-line" }}>
            &ldquo;{about}&rdquo;
          </p>
        </blockquote>
      )}
    </SectionCard>
  );
};

export default PersonalInfo;
