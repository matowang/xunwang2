import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import FullRoomImage from '../public/images/expo/full-room.png';

import Image from 'next/image';

import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page: NextPage = () => {
    return (
        <div className='max-w-5xl mx-auto pt-40 p-10 flex gap-4 flex-col'>
            <h1>Next Exhibit at <a href="https://art-taipei.com/" target="_blank" rel="noreferrer">Art Taipei</a></h1>
            <p><RoomOutlinedIcon /> Taipei World Trade Center Exhibition Hall 1</p>
            <h2 className='text-3xl sm:text-5xl md:text-7xl text-gray-100'>Oct 21-24, 2022</h2>
            <div className='mt-10'>
                <Image src={FullRoomImage} placeholder='blur' alt='expo' />
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
            // Will be passed to the page component as props
        },
    };
}

export default Page;