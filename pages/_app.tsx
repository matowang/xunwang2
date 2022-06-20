import '../styles/globals.css'
import '../styles/main.scss';
import type { AppProps } from 'next/app'

import Layout from '../components/Layout';

import { ParallaxProvider } from 'react-scroll-parallax';
import { MDXProvider } from '@mdx-js/react'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import AlertProvider from '../context/AlertContext';

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
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    background: 'none'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderColor: '#rgba(255,255,255,.75)',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'rgba(255,255,255,.75)',
                            borderRadius: 0,
                        },
                    },
                    '& .MuiInputLabel-outlined': {
                        color: 'rgba(255,255,255,.75)'
                    },
                    '& .Mui-disabled.MuiOutlinedInput-root': {
                        background: '#ffffff57',
                        color: 'rgba(255,255,255,.75)'
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
