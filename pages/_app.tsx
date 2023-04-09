import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import MUITheme from "../MUITheme";

import { ParallaxProvider } from "react-scroll-parallax";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import AlertProvider from "../context/AlertContext";

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={MUITheme}>
        <ParallaxProvider>
          <AlertProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AlertProvider>
        </ParallaxProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default appWithTranslation(MyApp);
