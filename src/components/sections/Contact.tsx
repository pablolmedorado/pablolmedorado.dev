import { FC } from "react";

import SectionCard from "../SectionCard";
import LinkButton from "../LinkButton";

import Profile from "../../typings/profile";

export const Contact: FC<Profile> = ({ telegramUsername, email }) => {
  return (
    <SectionCard title="Contacto">
      <div className="grid grid-cols-2 gap-4">
        <LinkButton
          className="h-10 bg-telegram text-white font-semibold text-lg"
          text="Telegram"
          icon={["fab", "telegram-plane"]}
          href={`https://t.me/${telegramUsername}`}
        />
        <LinkButton
          className="h-10 bg-gray-300 text-black font-semibold text-lg"
          text="Email"
          icon={["fas", "envelope"]}
          href={`mailto:${email}`}
        />
      </div>
    </SectionCard>
  );
};

export default Contact;
