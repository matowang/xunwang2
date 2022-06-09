import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

interface UseSlideshowStateProps {
    numOfPages: number;
}

const useSlideshowState = ({ numOfPages }: UseSlideshowStateProps) => {
    const [currentPage, setCurrentPage] = useState<number | null>(null);

    const router = useRouter();

    const nextPage = () => {
        if (currentPage === null) return;
        if (currentPage >= numOfPages - 1)
            return router.replace({
                pathname: router.basePath,
                query: { ...router.query, slide: 0 }
            }, '', { scroll: false });
        router.replace({
            pathname: router.basePath,
            query: { ...router.query, slide: currentPage + 1 }
        }, '', { scroll: false });
    }

    const prevPage = () => {
        if (currentPage === null) return;
        if (currentPage === 0)
            return router.replace({
                pathname: router.basePath,
                query: { ...router.query, slide: numOfPages - 1 }
            }, '', { scroll: false });
        router.replace({
            pathname: router.basePath,
            query: { ...router.query, slide: currentPage - 1 }
        }, '', { scroll: false });
    }

    const closeSlides = () => {
        router.push(router.basePath, '', { scroll: false });
    }

    const setPage = (page: number) => {
        router.push({
            pathname: router.basePath,
            query: { ...router.query, slide: page }
        }, '', { scroll: false });
    }

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            const slideParamValue = new URLSearchParams(url.split('?')[1]).get('slide');
            const page = slideParamValue ? parseInt(slideParamValue) : null;
            if (page && (page >= numOfPages || page < 0))
                return setCurrentPage(null);
            setCurrentPage(page);
        }
        console.log('routeChangeComplete');
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, []);


    return {
        currentPage,
        setPage,
        closeSlides,
        nextPage,
        prevPage
    }
}

export default useSlideshowState;