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

const inter = Inter({ subsets: ["latin"] });

const images = [
  "https://www.aciprensa.com/imagespp/090421_CantanteCatolicoJonCarlo.jpg?w=720&h=480",
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Seguidores de Jesus - Netlify</title>
      </Head>
      <ConcertJumbo images={images} message="Jon Carlos" subtitle="" />
      {router.pathname === "/" && <KlaviyoForm />}
      <UpcomingEvents />
      <NewHere />
      <NewsletterCTA />
    </>
  );
}
