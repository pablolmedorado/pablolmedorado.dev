// Libs
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PageContent: FC<Props> = ({ children }) => {
  return <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>;
};

export default PageContent;
