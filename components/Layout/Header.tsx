import Link from "next/link"
import Hamburger from "./Hamburger";

import { useRouter } from "next/router";
import { useSpring, animated, useChain, useSpringRef, useTransition } from 'react-spring'
import { useTranslation } from "next-i18next";

import useScroll from "../../hooks/useScroll";
import { useState, useMemo } from "react";

const routeOptions: any = {
    '/': {
        color: 'white',
        noDisplay: true,
    }
}

const Header = () => {
    const router = useRouter();
    const scroll = useScroll();
    const { t } = useTranslation();

    const routes = useMemo(() => [
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
    ], [])

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const menuSpringRef = useSpringRef();
    const menuStyles = useSpring({
        from: {
            width: '0rem',
            padding: '0rem 0rem',
            border: '0px solid #aaaaaa',
        },
        to: {
            width: menuOpen ? '10rem' : '0rem',
            padding: menuOpen ? '4rem 1rem' : '0rem 0rem',
            border: menuOpen ? '2px solid #aaaaaa' : '0px solid #aaaaaa',
        },
        config: {
            duration: 100
        },
        ref: menuSpringRef,
    });

    const linksSpringRef = useSpringRef();
    const linksTransitions = useTransition(menuOpen ? routes : [], {
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        leave: {
            opacity: 0
        },
        trail: 200 / routes.length,
        ref: linksSpringRef,
    });

    const subLinksSpringRef = useSpringRef();
    const subLinksStyles = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: menuOpen ? 1 : 0
        },
        ref: subLinksSpringRef,
    });

    useChain(menuOpen ? [menuSpringRef, subLinksSpringRef, linksSpringRef] : [linksSpringRef, subLinksSpringRef, menuSpringRef], menuOpen ? [0, 0, 0] : [0, 0, .2]);

    const toggleMenu = () => { setMenuOpen(prev => !prev) }
    return (
        <>
            <header className="fixed flex w-full p-4 transition-background ease-in-out duration-300 z-50 text-white" style={{
                color: routeOptions[router.asPath] && !scroll ? routeOptions[router.asPath].color : 'white',
                backdropFilter: !scroll ? undefined : 'blur(2px)'
            }}>
                {menuOpen && <div onClick={() => setMenuOpen(false)} className="fixed h-screen w-full" />}
                <h1 className="grow"><Link href="/"><a>{t('artistName')}</a></Link></h1>
                <animated.ul style={menuStyles}
                    className="box-border flex flex-col items-end gap-4 px-4 bg-black absolute right-0 top-0 h-64 overflow-hidden">
                    {linksTransitions((styles, route) => (
                        <animated.li style={styles}>
                            <Link href={route.href}>
                                <a onClick={() => setMenuOpen(false)} className="outline-white outline-1 hover:outline">{route.name}</a>
                            </Link>
                        </animated.li>
                    ))}
                    <animated.hr className="w-full" style={subLinksStyles} />
                    <animated.li style={subLinksStyles} className='text-right outline-white outline-1 hover:outline'>
                        <Link href={router.asPath} locale={t('changeLangRoute')}>
                            <a onClick={() => setMenuOpen(false)}>{t('changeLang')}</a>
                        </Link>
                    </animated.li>
                </animated.ul>
                <Link href={router.asPath} locale={t('changeLangRoute')}>
                    <a className="mr-8 outline-white outline-1 hover:outline">{t('changeLang')}</a>
                </Link>
                <button className="" onClick={toggleMenu}>
                    <Hamburger open={menuOpen} />
                </button>
            </header>

        </>
    )
}

export default Header;