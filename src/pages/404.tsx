// Libs
import { NextPage } from "next";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// Components
import DefaultLayout from "../layouts/Default";

// Contexts
import { buildContextData, PageContext } from "../contexts/page-context";

const Error404: NextPage = () => {
  const router = useRouter();
  const { lang, t } = useTranslation("404");
  const contextData = buildContextData(router, lang, t);

  return (
    <PageContext.Provider value={contextData}>
      <DefaultLayout>
        <img src="/static/img/404.png" alt="404 Not Found Error" className="h-96 object-scale-down mx-auto" />
      </DefaultLayout>
    </PageContext.Provider>
  );
};

export default Error404;
