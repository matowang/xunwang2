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
      <article className="work-article relative m-auto max-w-5xl py-40 px-2">
        {children}
      </article>
    </>
  );
};

export default ArticleLayout;
