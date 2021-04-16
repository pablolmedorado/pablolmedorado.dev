import { FC } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Course from "../../typings/course";

import SectionCard from "../SectionCard";
import Tooltip from "../Tooltip";

type Props = {
  courses: Course[];
};

export const Courses: FC<Props> = ({ courses }) => {
  return (
    <SectionCard title="Cursos">
      <ul className="divide-y">
        {courses.map((course) => (
          <li key={course.title} className="py-3 px-3 sm:px-5 xl:px-6 rounded-md hover:bg-gray-100">
            <article>
              <h3 className="font-semibold">
                {course.title}
                {course.online && (
                  <Tooltip text="Online">
                    <FontAwesomeIcon icon="globe" className="ml-2 text-primary" />
                  </Tooltip>
                )}
                {course.duration && <span className="ml-2 font-normal text-gray-500">({course.duration} horas)</span>}
              </h3>
              {course.organization && (
                <div className="flex flex-row space-x-2">
                  <div className="flex-shrink-0">
                    <a
                      href={course.organization.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block h-6 w-6 relative"
                    >
                      <Image src={course.organization.logo} layout="fill" objectFit="contain" />
                    </a>
                  </div>
                  <div className="flex-grow font-light">{course.organization.name}</div>
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
};

export default Courses;
