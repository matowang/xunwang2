import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const Seeking3DWDGT = () => (
    <main className="three-d-view" id="3d-seeking" >
        <div className="keyshot-container">
            <iframe className="three-d-view__iframe" src="/animations/seeking-xr_1217_2021.163.wdgt/seeking-xr_1217_2021.163.html" allowFullScreen frameBorder="0">

            </iframe>
        </div>
    </main>
)

// `
//             <iframe src="/animations/seeking-xr_1217_2021.163.wdgt/seeking-xr_1217_2021.163.html"
//                         allowfullscreen
//                         style="position: absolute; top: 0px; left: 0px; height: 100vh; width: 1px; min-width: 100%; *width: 100%;"
//                         frameborder="0"
//                         scrolling="no">
//             </iframe>
//             `

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['home', 'common'])),
            // Will be passed to the page component as props
        },
    };
}

export default Seeking3DWDGT;