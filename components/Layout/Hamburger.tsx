import { useState } from "react";
import { useSpring, animated } from "react-spring";

interface HamburgerProps {
  open: boolean;
}

const animationConfig = {
  duration: 100,
};

const Hamburger = ({ open }: HamburgerProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const topBarStyle = useSpring({
    top: open ? "50%" : "0%",
    width: open ? "80%" : hovered ? "60%" : "100%",
    y: open ? "-50%" : "0%",
    rotate: open ? 45 : 0,
    config: animationConfig,
  });
  const midBarStyle = useSpring({
    top: "50%",
    opacity: open ? 0 : 1,
    x: open ? "50%" : "0%",
    y: "-50%",
    config: animationConfig,
  });
  const botBarStyle = useSpring({
    bottom: open ? "50%" : "0%",
    width: open || hovered ? "80%" : "60%",
    y: open ? "50%" : "0%",
    rotate: open ? -45 : 0,
    config: animationConfig,
  });
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-6 w-10"
    >
      <animated.div
        style={topBarStyle}
        className="absolute right-0 h-[4px] w-full self-end bg-white"
      />
      <animated.div
        style={midBarStyle}
        className="absolute h-[4px] w-full bg-white"
      />
      <animated.div
        style={botBarStyle}
        className="absolute right-0 h-[4px] justify-self-end bg-white"
      />
    </div>
  );
};

export default Hamburger;
