// Libs
import { CSSProperties, FC, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  text: string;
  href: string;
  icon?: IconProp;
  className?: string;
  style?: CSSProperties;
};

export const LinkButton: FC<Props> = ({ text, href, icon, className, style }) => {
  return (
    <Fragment>
      <a
        className={`inline-flex items-center px-2 rounded-md print:hidden ${className}`}
        style={style}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mx-auto">
          {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
          {text}
        </span>
      </a>
      <span className="hidden print:inline">{href}</span>
    </Fragment>
  );
};

export default LinkButton;
