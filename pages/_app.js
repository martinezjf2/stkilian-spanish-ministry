import "@/styles/scss/styles.scss";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import Chatbot from "@/components/global/Chatbot";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
        <Chatbot />
      <Footer />
    </>
  );
}
