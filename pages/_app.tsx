import '../styles/globals.css'
import '../styles/main.scss';
import type { AppProps } from 'next/app'

import Layout from '../components/Layout';

import MUITheme from '../MUITheme';

import { ParallaxProvider } from 'react-scroll-parallax';
import { MDXProvider } from '@mdx-js/react'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import AlertProvider from '../context/AlertContext';

import { appWithTranslation } from 'next-i18next';

import { HTMLAttributes } from 'react';

//TODO: Remove MDX
const MDXComponents = {
    h1: (props: any) => <h1 {...props} className="text-red-400" />,
    p: (props: HTMLAttributes<HTMLParagraphElement>) => <p {...props} className="my-2" />
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={MUITheme}>
                <ParallaxProvider>
                    <AlertProvider>
                        <MDXProvider components={MDXComponents}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </MDXProvider>
                    </AlertProvider>
                </ParallaxProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default appWithTranslation(MyApp);
