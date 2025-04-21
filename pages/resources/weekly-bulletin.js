import ComingSoon from "@/components/global/ComingSoon";
import Head from "next/head";
import axios from "axios";
import * as cheerio from "cheerio";
import { Download } from "lucide-react";
import MiniJumbo from "@/components/global/MiniJumbo";
import Link from "next/link";

export default function WeeklyBulletin({ date, link, img, picture }) {
  console.log({ date });
  console.log({ link });

  console.log({ img });
  console.log({ picture });
  const bulletinImage = img || picture;

  return (
    <>
      <Head>
        <title>Seguidores de Jesus - Netlify</title>
      </Head>
      <MiniJumbo
        title="Weekly Bulletin"
        images={[
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzaY3BGZJwKHeLg_-arLzX2i_qRB5s9fvnugQX21SccDXmeSJZ8zpf0duE3fB1jsDfjURwxFl0aQZNiwt635Sc2bBWezxPqsaVVjfEGYHh24mWqjBMyONr6EwM1IClIb9RqNfxA0MGDkPx/s1600/farmingdale+021.JPG",
        ]}
      />

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-6 lg:p-16">
        {/* Left Side - Text & Download Button */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-6">
          <h1 className="text-3xl font-bold text-gray-800 lg:w-[90%] mx-auto">
            Weekly Bulletin
          </h1>
          <p className="text-gray-600 mt-4 lg:w-[90%] mx-auto">
            Stay connected with our community by reading this week&apos;s
            bulletin. It includes **important announcements, upcoming events,
            special messages, and prayers** to keep you informed and spiritually
            engaged. Click the image to **read online** or download your copy
            below.
          </p>

          {/* Download Button */}
          <div className="mt-6 lg:w-[90%] mx-auto">
            <Link
              href={link}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-blue-700 transition"
            >
              <Download size={20} />
              Download Bulletin
            </Link>
          </div>
        </div>

        {/* Right Side - Bulletin Image with Link */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <picture className="w-full max-w-md">
              <source srcSet={picture} type="image/webp" />
              <img
                src={bulletinImage}
                alt={`Bulletin for ${date}`}
                className="lg:w-[70%] h-auto mx-auto rounded-lg shadow-md transition-transform duration-300 lg:hover:scale-105"
              />
            </picture>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    //   You can use i18n to change the scraping from evangelio (Spanish) to gospel (English)
    const { data } = await axios.get("http://www.stkilian.com/bulletins", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });
    const $ = cheerio.load(data);

    // Date and Time
    let date = $(".bulletinName a.name").first().text().trim();
    let link = $(".bulletinName a.name").first().attr("href");
    let picture = $(".bulletinName a.name picture source")
      .first()
      .attr("srcset");
    let img = $(".bulletinName a.name picture img").first().attr("src");

    // let audio = $(".audio_group a.listen").first().attr("href");

    console.log("Scraped Data:");

    return {
      props: {
        date,
        link,
        picture,
        img,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { articles: [] } };
  }
}
