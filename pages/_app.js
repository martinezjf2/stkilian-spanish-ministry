import "@/styles/scss/styles.scss";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import Chatbot from "@/components/global/Chatbot";
// import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import GoogleAnalyticsScripts from "@/components/global/GoogleAnalyticsScripts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title || "Seguidores de Jesus - Netlify"}</title>
      </Head>
      <Navbar />
      <GoogleAnalyticsScripts />
      {/* <main className="min-h-screen"> */}
        <Component {...pageProps} />
      {/* </main> */}
      <Chatbot />
      <Footer />
    </>
  );
}

// Have this function on all pages to return the title from props

// export async function getStaticProps() {
//   return {
//     props: {
//       title: "Events | Seguidores de Jesus",
//     },
//   };
// }