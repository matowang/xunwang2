import { ReactNode } from "react";

import Head from 'next/head';

import Header from './Header';

import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    const { t } = useTranslation('common');
    const { locale } = useRouter();

    return (
        <>
            <Head>
                <title>{t('pageTitle')}</title>
                <meta name="description" content={t('artistDescription')} />
                <meta property="og:title" content={t('pageTitle')} />
                <meta property="og:image" content={t('/images/xun-working.jpg')} />
                <meta property="og:description" content={t('artistDescription')} />
                <meta property="og:locale" content={locale} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://xunwang.art/" />
                <meta property="twitter:card" content="summary" />
            </Head>
            <Header />
            {children}
        </>
    )
}

export default Layout;