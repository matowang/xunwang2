import Image from 'next/image';
import { TextField } from '@mui/material';
import SlideButton from '../components/SlideButton';

import BGImage from '../public/images/go-future.png';

import { FormEventHandler, MouseEventHandler, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps, NextPage } from 'next'


const Contacts: NextPage = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const input = { email, name, message };
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
    }

    return (
        <div className="py-20 flex flex-col items-center align-middle">
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-2xl gap-4 items-stretch">
                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    sx={{ borderColor: 'white' }} />
                <TextField
                    variant="outlined"
                    label="Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <TextField
                    variant="outlined"
                    label="Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message} />
                <SlideButton type="submit">{"submit"}</SlideButton>
            </form>
        </div>
    )
    // return (
    //     <div className="h-screen w-full flex justify-center flex-col relative overflow-hidden">
    //         <div className='w-auto h-screen absolute right-0'>
    //             <Image src={BGImage} alt='jumping sculpture' className='h-full object-cover object-bottom' layout='raw' priority placeholder='blur' />
    //             <div className='bg-gradient-to-r from-black to-transparent w-full h-full absolute top-0 left-0' />
    //         </div>
    //         <div className='relative ml-10 sm:ml-[25%]'>
    //             <p>Email: wangmorris@gmail.com</p>
    //             <p>Line: morriswang2000</p>
    //         </div>
    //     </div>
    // )
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