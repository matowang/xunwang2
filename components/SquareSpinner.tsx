import { useSpring, animated } from "react-spring";

import { DetailedHTMLProps, HTMLAttributes } from "react";

const SquareSpinner = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  const styles = useSpring({
    loop: true,
    from: {
      width: "100%",
      height: "100%",
      rotate: 0,
      borderWidth: "2px",
      backgroundColor: "rgba(255,255,255,0)",
      y: "-50%",
      x: "-50%",
      top: "50%",
      left: "50%",
      borderColor: "rgba(255,255,255,1)",
    },
    to: [
      {
        width: "0%",
        height: "0%",
        borderWidth: "10px",
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "rgba(255,255,255,.7)",
        rotate: 90,
      },
      {
        width: "100%",
        height: "100%",
        borderWidth: "2px",
        backgroundColor: "rgba(255,255,255,0)",
        borderColor: "rgba(255,255,255,1)",
        rotate: 90,
      },
    ],
    config: {
      friction: 35,
    },
  });
  return (
    <div {...props} className={`relative h-32 w-32 ${props.className}`}>
      <animated.div style={styles} className="absolute" />
    </div>
  );
};

export default SquareSpinner;
