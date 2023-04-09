import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  useState,
} from "react";

import { ReactNode } from "react";
import { useSpring, animated } from "react-spring";

interface SlideButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  sliderClass?: string;
  className?: string;
}

const SlideButton = (props: SlideButtonProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const barStyles = useSpring({
    width: hovered ? "100%" : "0%",
    config: { duration: 100 },
  });

  return (
    <button
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
      className={`${props.className} group relative border-2 border-white bg-black py-4 px-6 text-stone-400 transition-colors 
            duration-200 ease-in-out hover:text-black`}
    >
      <animated.div
        className={`${props.sliderClass} absolute top-0 left-0 block h-full bg-white opacity-50`}
        style={barStyles}
      ></animated.div>
      <div className="relative">{props.children}</div>
    </button>
  );
};

export default SlideButton;
