import SlideButton from '../components/SlideButton';
import Link from 'next/link';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GetStaticProps } from "next";

const Custom404 = () => {
    const { t } = useTranslation('404');
    return (
        <div className='flex items-center justify-center flex-col h-screen w-full gap-4' >
            <h1 className='text-xl'>{t('404 Not Found')}</h1>
            <Link href="/">
                <a>
                    <SlideButton>{t('Back To Home')}</SlideButton>
                </a>
            </Link>
        </div >
    )
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['404', 'common'])),
            // Will be passed to the page component as props
        },
    };
}

export default Custom404;