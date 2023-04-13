import type { GetStaticProps, NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import Masonry from "@mui/lab/Masonry";
import { Parallax } from "react-scroll-parallax";
import SlideButton from "../components/SlideButton";
import HeroVideo from "../components/HeroVideo";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import XunWorkingImg from "../public/images/xun-working.jpg";

import { YouTube } from "@mui/icons-material";

import works from "../data/works";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  const { t: tCommon } = useTranslation("common");

  const { locale } = useRouter();

  return (
    <>
      <HeroVideo />
      <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-t from-black via-transparent" />
      <Parallax speed={50}>
        <section className="align-end relative grid h-screen w-full items-end justify-items-start p-10 sm:grid-cols-2 sm:flex-row sm:justify-between sm:p-20">
          <h1 className="text-3xl text-stone-300">{tCommon("artistName")}</h1>
          <a
            className="sm:justify-self-end"
            href="https://youtu.be/rXdJrMFju5Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlideButton>
              <div className="flex items-center gap-2">
                <YouTube />
                {t("watchFullDoc")}
              </div>
            </SlideButton>
          </a>
        </section>
      </Parallax>
      <div className="bg-black text-white">
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-60">
          <Parallax speed={10}>
            <div className="">
              <Image
                src={XunWorkingImg}
                alt="xun wang working"
                width={2000}
                height={1333}
                placeholder="blur"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Parallax>
          <Parallax speed={-5}>
            <div className="col-start-2 flex flex-col gap-4 text-sm">
              <p className="opacity-70">{t("artistDescription1")}</p>
              <p className="opacity-70">{t("artistDescription2")}</p>
              <Link href="/exhibits">
                <SlideButton className="mt-5">{t("See Exhibit")}</SlideButton>
              </Link>
            </div>
          </Parallax>
        </section>
        <div id="works" className="w-md mx-auto max-w-7xl p-2">
          <Masonry
            columns={{ xs: 1, sm: 3, md: 4 }}
            spacing={{ xs: 0, sm: 1, md: 2 }}
          >
            {works.map((work) => (
              <div
                className="group relative py-2 text-white sm:py-0"
                key={work.id}
              >
                <div>
                  <Image
                    alt={work.name}
                    src={work.staticImage}
                    placeholder="blur"
                    sizes="600px"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="absolute top-0 grid h-full w-full grid-cols-2 grid-rows-2 bg-black/30 p-8 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="">
                    <h2>
                      {work[(locale + "Name") as "enName" | "cnName"] ??
                        work.name}
                    </h2>
                  </div>
                  <div className="justify-self-end">{work.year}</div>
                  <Link
                    href={`/work/${work.id}`}
                    className="col-span-full self-end justify-self-end"
                  >
                    <SlideButton className="px-2 py-1.5">
                      {tCommon("seeMore")}
                    </SlideButton>
                  </Link>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["home", "common"])),
      // Will be passed to the page component as props
    },
  };
};

export default Home;
