import '../styles/globals.css'
import '../styles/main.scss';
import type { AppProps } from 'next/app'

import Layout from '../components/Layout';

import { ParallaxProvider } from 'react-scroll-parallax';
import { MDXProvider } from '@mdx-js/react'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';

import { appWithTranslation } from 'next-i18next';

import { HTMLAttributes } from 'react';

//TODO: Remove MDX
const MDXComponents = {
    h1: (props: any) => <h1 {...props} className="text-red-400" />,
    p: (props: HTMLAttributes<HTMLParagraphElement>) => <p {...props} className="my-2" />
}

const MUITheme = createTheme({
    palette: {
        primary: {
            main: '#a8e1ff',
        },
        secondary: {
            main: 'rgba(234,114,23,0.85)',
        },
        background: {
            default: '#000000',
            paper: '#161616',
        },
        text: {
            primary: 'rgba(255,255,255,0.87)',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderColor: 'white',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                    },
                    '& .MuiInputLabel-outlined': {
                        color: 'white'
                    }
                },
            },
        }
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={MUITheme}>
                <ParallaxProvider>
                    <MDXProvider components={MDXComponents}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </MDXProvider>
                </ParallaxProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default appWithTranslation(MyApp);
