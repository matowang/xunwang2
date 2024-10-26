import fs from "fs";
import path from "path";

// Define the list of works with the necessary properties for generating pages
const works = [
  { id: "hover", translationPath: "workHover" },
  { id: "blossom-elegance-1", translationPath: "workBlossomElegance1" },
  { id: "blossom-elegance-2", translationPath: "workBlossomElegance2" },
  { id: "blossom-elegance-3", translationPath: "workBlossomElegance3" },
  { id: "enlightenment", translationPath: "workEnlightenment" },
  { id: "soaring", translationPath: "workSoaring" },
  { id: "bashful", translationPath: "workBashful" },
  { id: "listening", translationPath: "workListening" },
  { id: "hunting", translationPath: "workHunting" },
  { id: "reach-2", translationPath: "workReach2" },
  { id: "melting", translationPath: "workMelting" },
];

// Function to generate a component template based on work ID and translation path
const componentTemplate = (name: string, translationPath: string) => `
import ArticleLayout from "../../components/ArticleLayout";
import Image from "next/image";
import SlideshowModal from "../../components/SlideshowModal";
import useSlideshowState from "../../hooks/useSlideshowState";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import imageOne from "../../public/images/works/${name}/1.jpg";
import imageTwo from "../../public/images/works/${name}/2.jpg";
import imageThree from "../../public/images/works/${name}/3.jpg";

const name = "${name}";
const translationPath = "${translationPath}";

const ${name.charAt(0).toUpperCase() + name.slice(1)} = () => {
  const { t } = useTranslation(translationPath);

  const { currentPage, setPage, closeSlides, nextPage, prevPage } =
    useSlideshowState({ numOfPages: 3 });

  return (
    <ArticleLayout>
      <h1>{t("name")}</h1>
      <p>{t("medium")}</p>
      <p>{t("size")}</p>
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        <button onClick={() => setPage(0)}>
          <Image
            src={imageOne}
            alt={name}
            placeholder={"blur"}
            sizes="30vw"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </button>
        <button onClick={() => setPage(1)}>
          <Image
            src={imageTwo}
            alt={name}
            placeholder={"blur"}
            sizes="30vw"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </button>
        <button onClick={() => setPage(2)}>
          <Image
            src={imageThree}
            alt={name}
            placeholder={"blur"}
            sizes="30vw"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </button>
      </div>
      <p>{t("description1")}</p>
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
      ...(await serverSideTranslations(locale as string, [
        translationPath,
        "common",
      ])),
    },
  };
};

export default ${name.charAt(0).toUpperCase() + name.slice(1)};
`;

// Function to generate files
const generatePageFiles = () => {
  const pagesDir = path.join(__dirname, "pages", "work");

  // Ensure the directory exists
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  // Loop through each work and create a corresponding page file
  works.forEach((work) => {
    const { id, translationPath } = work;
    const componentContent = componentTemplate(id, translationPath);
    const filePath = path.join(pagesDir, `${id}.tsx`);
    fs.writeFileSync(filePath, componentContent, "utf8");
    console.log(`Generated ${filePath}`);
  });
};

// Run the file generation
generatePageFiles();
