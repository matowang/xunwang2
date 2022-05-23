import Image from 'next/image';

import BGImage from '../public/images/go-future.png';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps, NextPage } from 'next'


const Contacts: NextPage = () => {
    return (
        <div className="h-screen w-full flex justify-center flex-col relative overflow-hidden">
            <div className='w-auto h-screen absolute right-0'>
                <Image src={BGImage} className='h-full object-cover object-bottom' layout='raw' />
                <div className='bg-gradient-to-r from-black to-transparent w-full h-full absolute top-0 left-0' />
            </div>
            <div className='relative ml-10 sm:ml-[25%]'>
                <p>Email: wangmorris@gmail.com</p>
                <p>Line: morriswang2000</p>
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['home', 'common'])),
            // Will be passed to the page component as props
        },
    };
}

export default Contacts;