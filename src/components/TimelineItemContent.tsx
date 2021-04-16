import { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  logo: string;
  link: string;
  description?: string;
  tags?: string[];
};

export const TimelineItemContent: FC<Props> = (props) => {
  return (
    <div className="flex flex-row space-x-4">
      <div className="flex-shrink-0 flex items-start">
        <a href={props.link} target="_blank" rel="noreferrer" className="h-16 w-16 relative">
          <Image src={props.logo} layout="fill" objectFit="contain" />
        </a>
      </div>
      <div className="flex-grow flex flex-col">
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <h4 className="text-lg">{props.subtitle}</h4>
        {props.description && (
          <p className="font-light mt-1" style={{ whiteSpace: "pre-line" }}>
            {props.description}
          </p>
        )}
        {props.tags && Boolean(props.tags.length) && (
          <div className="flex flex-wrap mt-2">
            {props.tags.map((tag) => (
              <span key={tag} className="rounded bg-secondary text-white px-2 mr-2 my-1">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItemContent;
