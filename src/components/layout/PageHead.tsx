// Libs
import { FC, useContext } from "react";
import NextHead from "next/head";

// Contexts
import PageContext from "../../contexts/page-context";

const defaultKeywords =
  "Pablo Olmedo, pablolmedorado, full stack developer, software developer, front end, full stack, app developer";
const defaultOGURL = "http://www.pablolmedorado.dev";
const defaultOGImage = "http://www.pablolmedorado.dev/static/img/profile.jpg";
const defaultOGLocale = "es";

export const PageHead: FC = () => {
  const context = useContext(PageContext);
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{`${context.title || ""} | Pablo Olmedo Dorado`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={context.description || ""} />
      <meta name="keywords" content={`${defaultKeywords}, ${context.keywords || ""}`} />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#10b981" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:url" content={context.url || defaultOGURL} />
      <meta property="og:title" content={context.title || ""} />
      <meta property="og:description" content={context.description || ""} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={context.locale || defaultOGLocale} />
      <meta name="twitter:site" content={context.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={defaultOGImage} />
      <meta property="og:image" content={defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
  );
};

export default PageHead;
