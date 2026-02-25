import Image from "next/image";
import { Inter } from "next/font/google";
import ConcertJumbo from "@/components/partial/ConcertJumbo";
import SplitSection from "@/components/global/SplitSection";
import GroupJumbotron from "@/components/global/GroupJumbotron";
import NewsletterCTA from "@/components/global/NewsletterCTA";
import UpcomingEvents from "@/components/global/UpcomingEvents";
import IconsComponent from "@/components/global/IconsComponent";
import VideoComponent from "@/components/global/VideoComponent";
import KlaviyoForm from "@/components/global/KlaviyoForm";
import Head from "next/head";
import NewHere from "@/components/partial/NewHere";
import TestimoniesHomePage from "@/components/partial/Testimonies";
import { useRouter } from "next/router";
import AboutArtist from "@/components/partial/AboutArtist";

const inter = Inter({ subsets: ["latin"] });

const images = [
  "https://www.aciprensa.com/imagespp/090421_CantanteCatolicoJonCarlo.jpg?w=720&h=480",
  "/images/jon-carlo-concert/1.png",
  "/images/jon-carlo-concert/2.png",
  "/images/jon-carlo-concert/3.png",
  "/images/jon-carlo-concert/4.png",
  "/images/jon-carlo-concert/5.png",
  "/images/jon-carlo-concert/6.png",
  "/images/jon-carlo-concert/7.png",
  "/images/jon-carlo-concert/9.png",
  "/images/jon-carlo-concert/11.png",
  "/images/jon-carlo-concert/15.png",
  "/images/jon-carlo-concert/17.png",
  "/images/jon-carlo-concert/21.png",
  "/images/jon-carlo-concert/22.png",
  "/images/jon-carlo-concert/24.png",
  "/images/jon-carlo-concert/25.png",
];

// NOTE: Compress the images above so it does not take a lot of memory when loading the images on the page.

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Seguidores de Jesus - Netlify</title>
      </Head>
      <ConcertJumbo images={images} message="Jon Carlos" subtitle="" />
      {router.pathname === "/" && <KlaviyoForm />}
      <AboutArtist/>
      <UpcomingEvents />
      <NewHere />
      <NewsletterCTA />
    </>
  );
}
