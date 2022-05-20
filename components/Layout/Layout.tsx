import Link from "next/link"
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <header className="fixed flex w-full p-4 z-50">
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
            {children}
        </>
    )
}

export default Layout;