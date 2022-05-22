import ArticleLayout from '../../components/ArticleLayout';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GetStaticProps } from 'next';

import imageOne from '../../public/images/works/expecting/1.jpg';
import imageTwo from '../../public/images/works/expecting/2.jpg';
import imageThree from '../../public/images/works/expecting/3.jpg';


const Expecting = () => {

    const { t } = useTranslation('workExpecting');

    return (
        <ArticleLayout>
            <h1>{t('name')}</h1>
            <p>{t('medium')}</p>
            <p>{t('size')}</p>
            <div className="grid grid-cols-3 gap-1 md:gap-4">
                <Image src={imageOne} alt="competition" />
                <Image src={imageTwo} alt="competition" />
                <Image src={imageThree} alt="competition" />
            </div>
            <p>{t('description1')}</p>
            <Image src={imageOne} alt="competition" className='w-full' />
            <Image src={imageTwo} alt="competition" />
            <Image src={imageThree} alt="competition" />
        </ArticleLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['workExpecting', 'common'])),
            // Will be passed to the page component as props
        },
    };
}

export default Expecting;