import Head from "next/head";
import { ReactNode } from "react";

interface ArticleLayoutProps {
    children: ReactNode;
}

const ArticleLayout = ({ children }: ArticleLayoutProps) => {
    return (
        <>
            <Head>
                <meta property="og:type" content="article" />
            </Head>
            <article className="work-article max-w-5xl m-auto py-40 px-2 relative">{children}</article>
        </>
    )
}

export default ArticleLayout;