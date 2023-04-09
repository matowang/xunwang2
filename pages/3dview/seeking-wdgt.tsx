import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Seeking3DWDGT = () => (
  <main
    className="three-d-view"
    id="3d-seeking"
    dangerouslySetInnerHTML={{
      __html: `<div style="max-width: 100%; height: 100vh;">
                    <div style="left: 0px; width: 100%; height: 100vh; position: relative; padding-bottom: 62.625%; overflow: hidden;">
                        <iframe src="/animations/seeking_XR.4.wdgt/seeking_XR.4.html"
                                    allowfullscreen
                                    style="position: absolute; top: 0px; left: 0px; height: 100vh; width: 1px; min-width: 100%; *width: 100%;"
                                    frameborder="0"
                                    scrolling="no">
                        </iframe>
                    </div>
                </div>`,
    }}
  ></main>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["home", "common"])),
      // Will be passed to the page component as props
    },
  };
};

export default Seeking3DWDGT;
