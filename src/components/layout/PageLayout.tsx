// Libs
import { FC, Fragment, ReactNode } from "react";

// Components
import PageContent from "./PageContent";
import PageFooter from "./PageFooter";
import PageHead from "./PageHead";
import PageHeader from "./PageHeader";
import PageNav from "./PageNav";

type Props = {
  children: ReactNode;
};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <PageHead />
      <PageNav />
      <PageHeader />
      <PageContent>{children}</PageContent>
      <PageFooter />
    </Fragment>
  );
};

export default PageLayout;
