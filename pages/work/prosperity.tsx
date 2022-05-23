import ArticleLayout from '../../components/ArticleLayout';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { GetStaticProps } from 'next';

import imageOne from '../../public/images/works/prosperity/1.jpg'
import imageTwo from '../../public/images/works/prosperity/2.jpg';
import imageThree from '../../public/images/works/prosperity/3.jpg';

const name = 'prosperity';
const translationPath = 'workProsperity';

const Prosperity = () => {

    const { t } = useTranslation(translationPath);

    return (
        <ArticleLayout>
            <h1>{t('name')}</h1>
            <p>{t('medium')}</p>
            <p>{t('size')}</p>
            <div className="grid grid-cols-3 gap-1 md:gap-4">
                <Image src={imageOne} alt={name} placeholder={'blur'} sizes='30vw' />
                <Image src={imageTwo} alt={name} placeholder={'blur'} sizes='30vw' />
                <Image src={imageThree} alt={name} placeholder={'blur'} sizes='30vw' />
            </div>
            <p>{t('description1')}</p>
            <Image src={imageOne} alt={name} placeholder={'blur'} />
            <Image src={imageTwo} alt={name} placeholder={'blur'} />
            <Image src={imageThree} alt={name} placeholder={'blur'} />
        </ArticleLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, [translationPath, 'common'])),
            // Will be passed to the page component as props
        },
    };
}

export default Prosperity;