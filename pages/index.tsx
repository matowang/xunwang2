import type { GetStaticProps, NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import Masonry from "@mui/lab/Masonry";
import { Parallax } from "react-scroll-parallax";
import SlideButton from "../components/SlideButton";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import XunWorkingImg from "../public/images/xun-working.jpg";

//import works from '../data/works.json';
import works from "../data/works";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
	const { t } = useTranslation("home");
	const { t: tCommon } = useTranslation("common");

	const { locale } = useRouter();

	return <>
        <video autoPlay muted loop className='fixed w-full h-screen object-cover -z-10'>
            <source src='/hero-video.mp4' />
            Your browser does not support the video tag.
        </video>
        <div className='w-full h-screen bg-gradient-to-t from-black via-transparent absolute top-0 left-0' />
        <Parallax speed={50}>
            <section className='relative w-full h-screen grid sm:grid-cols-2 justify-items-start align-end sm:flex-row sm:justify-between items-end p-10 sm:p-20'>
                <h1 className='text-stone-300 text-3xl'>{tCommon("artistName")}</h1>
                <a
                    className='sm:justify-self-end'
                    href='https://youtu.be/rXdJrMFju5Y'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <SlideButton>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/images/icons/icons8-youtube.svg'
                                alt='instagram'
                                className='h-6 w-6 opacity-70'
                            />
                            {t("watchFullDoc")}
                        </div>
                    </SlideButton>
                </a>
            </section>
        </Parallax>
        <div className='bg-black text-white'>
            <section className='items-center grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 px-5 py-20 md:py-60'>
                <Parallax speed={10}>
                    <div className=''>
                        <Image
                            src={XunWorkingImg}
                            alt='xun wang working'
                            width={2000}
                            height={1333}
                            placeholder='blur'
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                </Parallax>
                <Parallax speed={-5}>
                    <div className='flex flex-col gap-4 text-sm col-start-2'>
                        <p className='opacity-70'>{t("artistDescription1")}</p>
                        <p className='opacity-70'>{t("artistDescription2")}</p>
                        <Link href='/exhibits'>

                            <SlideButton className='mt-5'>{t("See Exhibit")}</SlideButton>

                        </Link>
                    </div>
                </Parallax>
            </section>
            <div id='works' className='w-md p-2 max-w-7xl mx-auto'>
                <Masonry columns={{ xs: 1, sm: 3, md: 4 }} spacing={{ xs: 0, sm: 1, md: 2 }}>
                    {works.map((work) => (
                        <div className='group relative text-white py-2 sm:py-0' key={work.id}>
                            <div>
                                <Image
                                    alt={work.name}
                                    src={work.staticImage}
                                    placeholder='blur'
                                    sizes='600px'
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </div>
                            <div className='opacity-0 group-hover:opacity-100 grid transition-opacity grid-rows-2 grid-cols-2 absolute bg-black/30 w-full h-full p-8 top-0'>
                                <div className=''>
                                    <h2>{work[(locale + "Name") as "enName" | "cnName"] ?? work.name}</h2>
                                </div>
                                <div className='justify-self-end'>{work.year}</div>
                                <Link
                                    href={`/work/${work.id}`}
                                    className='justify-self-end self-end col-span-full'>

                                    <SlideButton className='px-2 py-1.5'>{tCommon("seeMore")}</SlideButton>

                                </Link>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
        </div>
    </>;
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
