import { useState, useEffect, useCallback } from 'react';


const useScroll = () => {
    const [scroll, setScroll] = useState<number>(0);

    const handleScroll = useCallback(() => {
        setScroll(document.documentElement.scrollTop || document.body.scrollTop);
    }, [setScroll]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll]);

    return scroll;
}

export default useScroll;