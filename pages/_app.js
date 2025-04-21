import "@/styles/scss/styles.scss";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import Chatbot from "@/components/global/Chatbot";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Seguidores de Jesus - Netlify</title>
      </Head>
      <Navbar />
      <GoogleAnalytics gaId="G-T94Q6D7ZC3" debug />
      <Component {...pageProps} />
      <Chatbot />
      <Footer />
    </>
  );
}


// XuTWxP