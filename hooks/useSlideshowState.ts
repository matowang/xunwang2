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
            });
        router.replace({
            pathname: router.basePath,
            query: { ...router.query, slide: currentPage + 1 }
        });
    }

    const prevPage = () => {
        if (currentPage === null) return;
        if (currentPage === 0)
            return router.replace({
                pathname: router.basePath,
                query: { ...router.query, slide: numOfPages - 1 }
            });
        router.replace({
            pathname: router.basePath,
            query: { ...router.query, slide: currentPage - 1 }
        });
    }

    const closeSlides = () => {
        router.push(router.basePath);
    }

    const setPage = (page: number) => {
        router.push({
            pathname: router.basePath,
            query: { ...router.query, slide: page }
        });
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