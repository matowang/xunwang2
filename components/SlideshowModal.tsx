import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CloseIcon from "@mui/icons-material/Close";

import { useSpring, animated, useTransition } from "react-spring";

import IconButton from "@mui/material/IconButton";
import Image, { StaticImageData } from "next/image";

interface SlideshowModalProps {
  imageSrcs: StaticImageData[] | string[];
  currentSlide: number | null;
  setCurrentSlide: (currentSlide: number) => void;
  closeSlides: () => void;
  nextPage: () => void;
  prevPage: () => void;
}

const SlideshowModal = ({
  imageSrcs,
  currentSlide,
  nextPage,
  prevPage,
  closeSlides,
}: SlideshowModalProps) => {
  const styles = useSpring({
    display: currentSlide === null ? "none" : "block",
  });
  const pageTransition = useTransition(currentSlide, {
    from: {
      opacity: 0,
      y: "-100px",
    },
    enter: {
      opacity: 1,
      y: "0px",
    },
    leave: {
      opacity: 0,
      y: "50px",
    },
    trail: 130,
    config: {
      duration: 130,
    },
  });

  return (
    <animated.div
      style={styles}
      className="fixed top-0 left-0 z-50 h-screen w-full bg-black"
    >
      {pageTransition(
        (styles, slide) =>
          slide !== null && (
            <animated.div
              style={styles}
              className="absolute top-0 h-full w-full"
            >
              <Image
                alt="sculpture"
                src={imageSrcs[slide]}
                placeholder="blur"
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </animated.div>
          )
      )}
      <div className="hidden">
        {imageSrcs.map((imgSrc, i) => (
          <Image
            alt="sculpture"
            src={imgSrc}
            key={imgSrc.toString() + i}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        ))}
      </div>
      <IconButton
        onClick={closeSlides}
        className="absolute top-6 right-6 !bg-stone-400"
      >
        <CloseIcon />
      </IconButton>
      <IconButton
        onClick={prevPage}
        aria-label="back"
        className="absolute left-6 top-[50%] !bg-stone-400"
      >
        <ArrowBackIosNewOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={nextPage}
        aria-label="next"
        className="absolute right-6 top-[50%] !bg-stone-400"
      >
        <ArrowForwardIosOutlinedIcon />
      </IconButton>
    </animated.div>
  );
};

export default SlideshowModal;
