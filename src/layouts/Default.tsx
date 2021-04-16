// Libs
import { FC, Fragment, ReactNode } from "react";

// Components
import PageContent from "../components/layout/PageContent";
import PageFooter from "../components/layout/PageFooter";
import PageHead from "../components/layout/PageHead";
import PageHeader from "../components/layout/PageHeader";
import PageNav from "../components/layout/PageNav";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
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

export default DefaultLayout;
