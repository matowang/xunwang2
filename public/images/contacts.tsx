import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps, NextPage } from 'next'

const Contacts: NextPage = () => {
    return (
        <div>
            <p>Email:	wangmorris@gmail.com</p>
            <p>Line:	morriswang2000</p>
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