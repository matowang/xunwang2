import ArticleLayout from "../../components/ArticleLayout";
import Image from "next/image";

import SlideshowModal from "../../components/SlideshowModal";
import useSlideshowState from "../../hooks/useSlideshowState";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { GetStaticProps } from "next";

import imageOne from "../../public/images/works/girls-feelings/1.jpg";
import imageTwo from "../../public/images/works/girls-feelings/2.jpg";
import imageThree from "../../public/images/works/girls-feelings/3.jpg";

const name = "girls-feelings";
const translationPath = "workGirlsFeelings";

const GirlsFeelings = () => {
	const { t } = useTranslation(translationPath);

	const { currentPage, setPage, closeSlides, nextPage, prevPage } = useSlideshowState({
		numOfPages: 3,
	});

	return (
		<ArticleLayout>
			<h1>{t("name")}</h1>
			<p>{t("medium")}</p>
			<p>{t("size")}</p>
			<div className='grid grid-cols-3 gap-1 md:gap-4'>
				<button onClick={() => setPage(0)}>
					<Image src={imageOne} alt={name} placeholder={"blur"} sizes='30vw' />
				</button>
				<button onClick={() => setPage(1)}>
					<Image src={imageTwo} alt={name} placeholder={"blur"} sizes='30vw' />
				</button>
				<button onClick={() => setPage(2)}>
					<Image src={imageThree} alt={name} placeholder={"blur"} sizes='30vw' />
				</button>
			</div>
			<p>{t("description1")}</p>
			<button onClick={() => setPage(0)}>
				<Image src={imageOne} alt={name} placeholder={"blur"} />
			</button>
			<button onClick={() => setPage(1)}>
				<Image src={imageTwo} alt={name} placeholder={"blur"} />
			</button>
			<button onClick={() => setPage(2)}>
				<Image src={imageThree} alt={name} placeholder={"blur"} />
			</button>
			<SlideshowModal
				imageSrcs={[imageOne, imageTwo, imageThree]}
				currentSlide={currentPage}
				setCurrentSlide={setPage}
				closeSlides={closeSlides}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</ArticleLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, [translationPath, "common"])),
			// Will be passed to the page component as props
		},
	};
};

export default GirlsFeelings;
