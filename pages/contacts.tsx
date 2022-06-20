import Link from 'next/link';
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
        <div className="grid md:grid-cols-[34%_1fr] w-full relative">
            <div className="h-screen w-full md:w-[34%] fixed">
                <div className="h-full w-full">
                    <Image src={BGImage} alt="jumping sculpture" layout="fill" objectFit="cover" objectPosition="left" priority placeholder="blur" />
                </div>
                <div className='md:hidden h-full w-full bg-gradient-to-r absolute top-0 left-0 from-black from-black to-[rgba(0,0,0,0.5)]' />
            </div>
            <div />
            <div className="px-20 py-40 justify-self-center w-full max-w-2xl relative">
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                    <h1 className='text-2xl text-white'>Contact me</h1>
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
                    <SlideButton className="self-end" type="submit">{"Send"}</SlideButton>
                </form>
                <a href="https://www.instagram.com/xunwang2000/" target="_blank" rel="noopener noreferrer">
                    <div className='flex gap-2 mt-24'>
                        <img src="/images/icons/icons8-instagram.svg" alt="instagram" />
                        {"See Xun Wang on Instagram"}
                    </div>
                </a>
            </div>
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