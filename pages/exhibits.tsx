import FullRoomImage from '../public/images/expo/full-room.png';

import Image from 'next/image';

import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

const Page: NextPage = () => {

    const { t } = useTranslation('exhibit');
    return (
        <div className='max-w-5xl mx-auto pt-40 p-10 flex gap-4 flex-col'>
            <p>{t('get ready for')}</p>
            <h2 className='text-3xl sm:text-5xl md:text-7xl text-gray-100 my-8'>Oct 21-24, 2022.</h2>
            <h1>
                <span>{t('next exhibit at')} </span>
                <a className="underline" href="https://art-taipei.com/" target="_blank" rel="noreferrer">{t('art taipei')}</a>
            </h1>
            <p>{t('Taipei World Trade Center Exhibition Hall 1.')}</p>
            <p>{t('No.5, Sec. 5, Xinyi Rd., Taipei City, TAIWAN')}</p>
            <div className='mt-10'>
                <Image src={FullRoomImage} placeholder='blur' alt='expo' />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['exhibit', 'common'])),
            // Will be passed to the page component as props
        },
    };
}

export default Page;