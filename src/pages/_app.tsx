import { StrictMode } from "react";

// Icons
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

// Fonts
import "source-sans-pro/source-sans-pro.css";
import "jetbrains-mono";

// Charts
import { defaults } from "react-chartjs-2";
defaults.global.defaultFontFamily = "Source Sans Pro";

// Custom styles
import "../styles/global.css";

// @ts-ignore
export const App = ({ Component, pageProps }) => {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
};

export default App;
