import FullRoomImage from "../public/images/expo/full-room.png";
import SkyView from "../public/images/expo/skyview.jpg";
import exibit1 from "../public/images/expo/exhibit-1.jpg";
import exibit2 from "../public/images/expo/exhibit-2.jpg";
import exibit3 from "../public/images/expo/exhibit-3.jpg";
import exibit4 from "../public/images/expo/exhibit-4.jpg";

import Image from "next/image";

import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Page: NextPage = () => {
	const { t } = useTranslation("exhibit");
	return (
		<div className='max-w-5xl mx-auto pt-40 p-10 flex gap-4 flex-col'>
			{/* <p>{t("get ready for")}</p>
			<h2 className='text-3xl sm:text-5xl md:text-7xl text-gray-100 my-8'>Oct 21-24, 2022.</h2>
			<h1>
				<span>{t("next exhibit at")} </span>
				<a className='underline' href='https://art-taipei.com/' target='_blank' rel='noreferrer'>
					{t("art taipei")}
				</a>
			</h1>
			<p>{t("Taipei World Trade Center Exhibition Hall 1.")}</p>
			<p>{t("No.5, Sec. 5, Xinyi Rd., Taipei City, TAIWAN")}</p> */}
			<div className='mt-10 flex flex-col gap-6'>
				<Image src={FullRoomImage} placeholder='blur' alt='xunwang expo' priority />
				<Image src={SkyView} placeholder='blur' alt='xunwang expo' />
				<Image src={exibit1} placeholder='blur' alt='xunwang expo' />
				<Image src={exibit2} placeholder='blur' alt='xunwang expo' />
				<Image src={exibit3} placeholder='blur' alt='xunwang expo' />
				<Image src={exibit4} placeholder='blur' alt='xunwang expo' />
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, ["exhibit", "common"])),
			// Will be passed to the page component as props
		},
	};
};

export default Page;
