import Link from 'next/link';
import Image from 'next/image';

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useMemo } from 'react';

import SignatureImg from '../../public/images/xunwang-signature.png';

const Footer = () => {
    const router = useRouter();
    const { t } = useTranslation('common');

    const links: { name: string, href: string }[] = useMemo(() => [
        {
            name: t('home'),
            href: '/'
        },
        {
            name: t('exhibits'),
            href: '/exhibits'
        },
        {
            name: t('contacts'),
            href: '/contacts'
        },
        {
            name: t('works'),
            href: '/#works'
        },
    ].filter((link => link.href !== router.asPath)), [t, router]);

    return <footer className='bg-black pt-32 relative'>
        <div className='flex flex-col items-center gap-8'>
            <nav>
                <ul className='flex'>{links.map((link, i) => (
                    <li key={`link${link.href}`} className={`px-10 ${i === links.length - 1 ? 'border-none' : 'border-r-2 border-slate-400'}`}>
                        <Link href={link.href}><a>{link.name}</a></Link>
                    </li>
                ))
                }</ul>
            </nav>
            <a className="text-white" href="https://youtu.be/rXdJrMFju5Y" target='_blank' rel="noopener noreferrer" >{t('watch youtube')}</a>
            <a href="https://www.instagram.com/xunwang2000/" target="_blank" rel="noopener noreferrer">
                <div className='flex gap-2'>
                    <img className="opacity-70" src="/images/icons/icons8-instagram.svg" alt="instagram" />
                    {t('xun wang instagram')}
                </div>
            </a>
        </div>
        <div className='flex justify-between items-end py-20 px-10'>
            <Image src={SignatureImg} alt="xun wang's signature" width="150px" objectFit='contain' height='80px' />
            <p>© 2022 Xun Wang 王尋</p>
        </div>
    </footer>
}

export default Footer;