import '../styles/globals.css'
import '../styles/main.scss';
import type { AppProps } from 'next/app'

import Layout from '../components/Layout';

import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  )
}

export default MyApp
