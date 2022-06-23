import Link from 'next/link';
import Image from 'next/image';
import { TextField } from '@mui/material';
import SlideButton from '../components/SlideButton';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import BGImage from '../public/images/go-future.png';

import contactFormValidation from '../schemaValidation/contactFormValidation';

import { useAlert } from '../context/AlertContext';
import { animated, useTrail, useSpring, useTransition } from 'react-spring'
import { Children, Dispatch, FormEventHandler, SetStateAction, useEffect, useState } from 'react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import type { GetStaticProps, NextPage } from 'next'

enum FormState {
    FILLING,
    SENDING,
    SENT,
}

type ValidationErrors = {
    email?: boolean,
    name?: boolean,
    message?: boolean,
}

const Contacts: NextPage = () => {

    return (
        <div className="grid md:grid-cols-[34%_1fr] w-full relative overflow-hidden">
            <div className="h-screen w-full md:w-[34%] fixed">
                <div className="h-full w-full">
                    <Image src={BGImage} alt="jumping sculpture" layout="fill" objectFit="cover" objectPosition="left" priority placeholder="blur" />
                </div>
                <div className='md:hidden h-full w-full bg-gradient-to-r absolute top-0 left-0 from-black to-[rgba(0,0,0,0.5)]' />
            </div>
            <div />
            <div className="px-10 sm:px-20 py-40 justify-self-center w-full max-w-2xl relative">
                <div className="h-[400px] w-full relative">
                    <FormStates />
                </div>
                <a href="https://www.instagram.com/xunwang2000/" target="_blank" rel="noopener noreferrer">
                    <div className='flex gap-2 mt-24'>
                        <img src="/images/icons/icons8-instagram.svg" alt="instagram" />
                        {"See Xun Wang on Instagram"}
                    </div>
                </a>
            </div>
        </div>
    )
}

const FormStates = () => {
    const [state, setState] = useState<FormState>(FormState.FILLING);

    const stateTransition = useTransition(state, {
        from: {
            opacity: state === FormState.FILLING ? 1 : 0,
            y: state === FormState.FILLING ? '0vh' : '100vh',
        },
        enter: {
            opacity: 1,
            y: '0vh'
        },
        leave: {
            opacity: 0,
            y: '-100vh'
        },
    });

    return stateTransition((styles, state) => {
        if (state === FormState.FILLING)
            return (
                <animated.div style={styles} className="w-full absolute">
                    <ContactForm state={state} setState={setState} />
                </animated.div>)
        if (state === FormState.SENDING)
            return <animated.div style={styles} className="w-full absolute">
                <p className='text-xl mb-10 mt-20'>Sending...</p>
            </animated.div>
        if (state === FormState.SENT)
            return <animated.div style={styles} className="w-full absolute">
                <p className='text-xl mb-10 mt-20'><CheckCircleOutlineOutlinedIcon /> Your form has been Sent Successfully</p>
                <Link href="/">
                    <a>
                        <SlideButton className="self-start">{"Back to Home Page "}<LogoutOutlinedIcon /></SlideButton>
                    </a>
                </Link>
            </animated.div>
    })
}

const ContactForm = ({ state, setState }: { state: FormState, setState: Dispatch<SetStateAction<FormState>> }) => {
    const setAlert = useAlert();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const loading = state === FormState.SENDING;

    const [firstSubmit, setFirstSubmit] = useState(true);

    const [validationErrors, setValidationErrors] = useState<ValidationErrors>();

    const submitBtnStyles = useSpring({
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
        delay: 300,
        config: { mass: 5, tension: 2000, friction: 200 },
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setFirstSubmit(false);
        try {
            const input = { email, name, message };
            if (!(await validateForm(input)))
                throw new Error('Invalid Input');
            console.log('sending form');
            setState(FormState.SENDING);
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            });
            if (!res.ok)
                throw new Error(res.status.toString());
            setState(FormState.SENT);
        } catch (error: any) {
            setState(FormState.FILLING);
            setAlert(`Error: ${error.message}`);
        }
    }

    const validateForm = async (input: any): Promise<boolean> => {
        const errors: ValidationErrors = {};
        try {
            await contactFormValidation.validate(input, { abortEarly: false });
            setValidationErrors(errors);
            return true;
        } catch (error: any) {
            error.inner.forEach((err: { path: 'email' | 'name' | 'message' }) => errors[err.path] = true);
            setValidationErrors(errors);
            return false;
        }
    }
    useEffect(() => {
        if (!firstSubmit)
            validateForm({ email, name, message });
    }, [firstSubmit, email, name, message])

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-10${loading ? " opacity-50" : ''}`}>
            <h1 className='text-2xl text-white'>Contact me</h1>
            <Trail>
                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    error={validationErrors?.email}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    disabled={loading}
                    className="w-full"
                />
                <TextField
                    variant="outlined"
                    label="Name"
                    error={validationErrors?.name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    disabled={loading}
                    className="w-full" />
                <TextField
                    variant="outlined"
                    label="Message"
                    error={validationErrors?.message}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    disabled={loading}
                    className="w-full" />
            </Trail>
            <animated.div style={submitBtnStyles} className="overflow-hidden self-end">
                <SlideButton disabled={loading} type="submit">{"Send"}</SlideButton>
            </animated.div>
        </form >
    )
}

const Trail = ({ children }: { children: React.ReactNode }) => {
    const items = Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: 1,
        x: 0,
        width: '100%',
        from: { opacity: 0, x: 20, width: '0%' },
    })
    return (
        <>{
            trail.map((style, index) => (
                <animated.div key={index} style={style}>
                    {items[index]}
                </animated.div>
            ))
        }</>
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