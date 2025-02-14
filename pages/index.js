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



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Seguidores de Jesus - Netlify</title>
      </Head>
      <Jumbotron />
      <KlaviyoForm />
      <div className="p-10 text-center">
        <h2 className="text-3xl font-bold">Welcome to Our Spanish Community</h2>
        <p className="mt-4 text-lg">
          We are dedicated to fostering growth, community, and faith through
          action.
        </p>
      </div>
      <SplitSection />
      <VideoComponent link="https://www.youtube.com/embed/8OMFHVi4IGQ?si=hIeeJwLL6ipCtJJq" />
      {/* <CardsComponent /> */}
      <IconsComponent />
      <GroupJumbotron />
      <UpcomingEvents />
      {/* <PhotoGallery /> */}
      <NewsletterCTA />
    </>
  );
}
