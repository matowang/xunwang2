import Head from "next/head";
import { ReactNode } from "react";

interface MDXLayoutProps {
    children: ReactNode;
}

const MDXLayout = ({ children }: MDXLayoutProps) => {
    return (
        <>
            <Head>
                <meta property="og:type" content="article" />
            </Head>
            <article className="mdx-article max-w-5xl m-auto py-40 px-2 relative">{children}</article>
        </>
    )
}

export default MDXLayout;