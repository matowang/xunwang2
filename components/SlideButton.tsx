import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, useState } from 'react';

import { ReactNode } from "react";
import { useSpring, animated } from 'react-spring';

interface SlideButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    sliderClass?: string;
    className?: string;
}

const SlideButton = (props: SlideButtonProps) => {

    const [hovered, setHovered] = useState<boolean>(false);

    const barStyles = useSpring({
        width: hovered ? '100%' : '0%',
        config: { duration: 100 }
    })

    return (
        <button
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            {...props}
            className={`${props.className} group relative bg-black text-stone-400 py-4 px-6 border-2 border-white hover:text-black 
            transition-colors ease-in-out duration-200`}>
            <animated.div className={`${props.sliderClass} block h-full bg-white absolute top-0 left-0 opacity-50`} style={barStyles}></animated.div>
            <div className='relative'>{props.children}</div>
        </button>
    )
}

export default SlideButton;