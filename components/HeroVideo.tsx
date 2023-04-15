import { useState, useEffect } from "react";

const useHideOnScrolledPage = () => {
  const [renderHeroVideo, setRenderHeroVideo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) return setRenderHeroVideo(true);
      setRenderHeroVideo(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { renderHeroVideo };
};

const HeroVideo = () => {
  const { renderHeroVideo } = useHideOnScrolledPage();

  return (
    <video
      autoPlay
      muted
      loop
      className="fixed -z-10 h-screen w-full object-cover"
      style={{
        display: renderHeroVideo ? "block" : "none",
      }}
      playsInline
      preload="auto"
    >
      <source src="/hero-video.mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;
