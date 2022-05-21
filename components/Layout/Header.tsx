import Link from "next/link"
import { useRouter } from "next/router";

import useScroll from "../../hooks/useScroll";

const routeOptions: any = {
    '/': {
        color: 'black',
        noDisplay: true,
    }
}

const Header = () => {
    const router = useRouter();

    const scroll = useScroll();
    console.log(scroll);
    return (
        <header className="fixed flex w-full p-4 transition-background ease-in-out duration-300 z-50" style={{
            color: routeOptions[router.asPath] && !scroll ? routeOptions[router.asPath].color : 'inherit',
            backgroundColor: !scroll ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, .2)',
            backdropFilter: !scroll ? undefined : 'blur(2px)'
        }}>
            <h1 className="grow"><Link href="/"><a>Xun Wang</a></Link></h1>
            <ul className="flex gap-4">
                <li>
                    <Link href="/works"><a>Works</a></Link>
                </li>
                <li>
                    <Link href="/exhibits"><a>Exhibits</a></Link>
                </li>
                <li>
                    <Link href="/contacts"><a>Contacts</a></Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;