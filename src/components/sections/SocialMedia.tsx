import { FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import SectionCard from "../SectionCard";
import LinkButton from "../LinkButton";

import Profile from "../../typings/profile";

export const SocialMediaPresence: FC<Profile> = ({
  linkedinUsername,
  twitterUsername,
  githubUsername,
  stackoverflowUsername,
}) => {
  const buttons = [
    {
      key: "linkedin",
      username: linkedinUsername,
      text: "LinkedIn",
      icon: ["fab", "linkedin"],
      backgroundColor: "bg-linkedin",
      textColor: "text-white",
      href: `https://www.linkedin.com/in/${linkedinUsername}`,
    },
    {
      key: "twitter",
      username: twitterUsername,
      text: "Twitter",
      icon: ["fab", "twitter"],
      backgroundColor: "bg-twitter",
      textColor: "text-white",
      href: `https://twitter.com/${twitterUsername}`,
    },
    {
      key: "github",
      username: githubUsername,
      text: "GitHub",
      icon: ["fab", "github"],
      backgroundColor: "bg-github",
      textColor: "text-white",
      href: `https://github.com/${githubUsername}`,
    },
    {
      key: "stackoverflow",
      username: stackoverflowUsername,
      text: "Stack Overflow",
      icon: ["fab", "stack-overflow"],
      backgroundColor: "bg-stackoverflow",
      textColor: "text-black",
      href: `https://stackoverflow.com/story/${stackoverflowUsername}`,
    },
  ];

  return (
    <SectionCard title="Presencia en redes">
      <div className="grid grid-cols-2 gap-4">
        {buttons
          .filter((service) => service.username)
          .map((button) => (
            <LinkButton
              key={button.key}
              className={`h-10 ${button.backgroundColor} ${button.textColor} font-semibold text-lg`}
              text={button.text}
              icon={button.icon as IconProp}
              href={button.href}
            />
          ))}
      </div>
    </SectionCard>
  );
};

export default SocialMediaPresence;
