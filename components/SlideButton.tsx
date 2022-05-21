import { MouseEventHandler, useState } from 'react';

import { ReactNode } from "react";
import { useSpring, animated } from 'react-spring';

interface SlideButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    sliderClass?: string;
    className?: string;
}

const SlideButton = ({ children, onClick, sliderClass, className }: SlideButtonProps) => {

    const [hovered, setHovered] = useState<boolean>(false);

    const barStyles = useSpring({
        width: hovered ? '100%' : '0%',
        config: { duration: 100 }
    })

    return (
        <button
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            className={`group relative bg-black text-stone-400 p-4 border-2 border-white hover:text-black 
            transition-colors ease-in-out duration-200 ${className}`} >
            <animated.div className={`block h-full bg-white absolute top-0 left-0 opacity-50 ${sliderClass}`} style={barStyles}></animated.div>
            <div className='relative'>{children}</div>
        </button>
    )
}

export default SlideButton;