import '../styles/globals.css'
import '../styles/main.scss';
import type { AppProps } from 'next/app'

import Layout from '../components/Layout';

import { ParallaxProvider } from 'react-scroll-parallax';
import { MDXProvider } from '@mdx-js/react'

import { appWithTranslation } from 'next-i18next';

import { HTMLAttributes } from 'react';

const MDXComponents = {
  h1: (props: any) => <h1 {...props} className="text-red-400" />,
  p: (props: HTMLAttributes<HTMLParagraphElement>) => <p {...props} className="my-2" />
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ParallaxProvider>
  )
}

export default appWithTranslation(MyApp);
