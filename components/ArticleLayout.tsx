import { ReactNode } from "react";

interface MDXLayoutProps {
    children: ReactNode;
}

const MDXLayout = ({ children }: MDXLayoutProps) => {
    return (
        <article className="mdx-article max-w-5xl m-auto py-40 px-2">{children}</article>
    )
}

export default MDXLayout;