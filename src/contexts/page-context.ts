// Libs
import { createContext } from "react";
import { NextRouter } from "next/router";
import { Translate } from "next-translate";

type ContextData = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  locale?: string;
};

export const PageContext = createContext<ContextData>({});

export function buildContextData(router: NextRouter, locale: string, t: Translate): ContextData {
  return {
    title: t`pageTitle`,
    description: t`pageDescription`,
    keywords: t`pageKeywords`,
    url: `http://www.pablolmedorado.dev${router.pathname}`,
    locale,
  };
}

export default PageContext;
