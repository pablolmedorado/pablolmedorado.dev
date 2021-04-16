// Libs
import { CSSProperties, FC, ReactNode } from "react";

type Props = {
  title?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export const SectionCard: FC<Props> = ({ title, className, style, children }) => {
  return (
    <section className={`bg-white sm:rounded-lg shadow-md p-4 mb-6 ${className}`} style={style}>
      {Boolean(title) && <h2 className="text-2xl font-semibold pb-4">{title}</h2>}
      {children}
    </section>
  );
};

export default SectionCard;
