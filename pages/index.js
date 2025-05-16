import Image from "next/image";
import { Inter } from "next/font/google";
import Jumbotron from "@/components/partial/Jumbotron";
import SplitSection from "@/components/global/SplitSection";
import CardsComponent from "@/components/global/CardsComponent";
import GroupJumbotron from "@/components/global/GroupJumbotron";
import NewsletterCTA from "@/components/global/NewsletterCTA";
import UpcomingEvents from "@/components/global/UpcomingEvents";
import PhotoGallery from "@/components/global/PhotoGallery";
import IconsComponent from "@/components/global/IconsComponent";
import VideoComponent from "@/components/global/VideoComponent";
import KlaviyoForm from "@/components/global/KlaviyoForm";
import Head from "next/head";
import DailyVerse from "@/components/global/DailyVerse";
import NewHere from "@/components/partial/NewHere";
import TestimoniesHomePage from "@/components/partial/Testimonies";
import { useRouter } from "next/router";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Seguidores de Jesus - Netlify</title>
      </Head>
      <Jumbotron />
      {/* Scroll of tech used like my portfolio */}
      {/* <DailyVerse /> */}
      {router.pathname === "/" && <KlaviyoForm />}

      {/* <CardsComponent /> */}

      <SplitSection
        image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzaY3BGZJwKHeLg_-arLzX2i_qRB5s9fvnugQX21SccDXmeSJZ8zpf0duE3fB1jsDfjURwxFl0aQZNiwt635Sc2bBWezxPqsaVVjfEGYHh24mWqjBMyONr6EwM1IClIb9RqNfxA0MGDkPx/s1600/farmingdale+021.JPG"
        alt="St. Kilian Parish Engagement"
        title="Engaged in Faith at St. Kilian"
        subtitle="Deepening Our Connection"
        description="At St. Kilian Parish, engagement is more than attendance—it's about community, service, and spiritual growth. Our Spanish community plays a vital role in shaping a welcoming and vibrant church where everyone is invited to participate."
        buttonText="Learn More About Our Parish"
        buttonLink="/about"
      />
      <IconsComponent />
      <VideoComponent link="https://www.youtube.com/embed/8OMFHVi4IGQ?si=hIeeJwLL6ipCtJJq" />

      <TestimoniesHomePage />

      <GroupJumbotron />
      <UpcomingEvents />
      <NewHere />

      {/* <PhotoGallery /> */}
      <NewsletterCTA />
    </>
  );
}
