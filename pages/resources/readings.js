import axios from "axios";
import * as cheerio from "cheerio";
import Head from "next/head";
import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";

export default function ReadingsPage({
  date,
  ordinaryTime,
  audio,
  reading,
  gospel,
  quote,
  autor,
  autorOrigin,
  comments,
  thoughtsTitle,
  thoughtsArray,
}) {
  return (
    <>
      <Head>
        <title>Seguidores de Jesus - Netlify</title>
      </Head>
      <MiniJumbo
        images={[
          "/images/readings/reading.jpg",
          "/images/readings/reading2.jpg",
        ]}
        title="Daily Gospel"
      />

      <div className="p-6 md:p-12 lg:p-20 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-300">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 transition-all">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Daily Readings
          </h1>

          {/* Date & Time */}
          <div className="text-center text-lg text-gray-600 dark:text-gray-400 mb-6">
            <p className="font-semibold">{date}</p>
            <p className="italic">{ordinaryTime}</p>
          </div>

          {/* Audio Player */}
          {audio && (
            <div className="flex justify-center my-6">
              <audio
                controls
                className="w-full max-w-md rounded-lg"
                controlsList="nodownload"
              >
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}

          {/* Reading */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Reading
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{reading}</p>
          </div>

          {/* Gospel */}
          {gospel && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Gospel
              </h2>
              <p
                className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: gospel }}
              />
            </div>
          )}

          {/* Quote */}
          {quote && (
            <div className="mt-6 border-l-4 border-blue-500 pl-4 italic text-lg text-gray-700 dark:text-gray-400">
              {quote}
            </div>
          )}

          {/* Author Information */}
          {(autor || autorOrigin) && (
            <div className="mt-4 text-gray-600 dark:text-gray-400">
              <p className="font-semibold">{autor}</p>
              <p className="italic">{autorOrigin}</p>
            </div>
          )}

          {/* Comments */}
          {comments && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Comments
              </h2>
              <p
                className="text-gray-700 dark:text-gray-300 mt-2"
                dangerouslySetInnerHTML={{ __html: comments }}
              />
            </div>
          )}

          {/* Thoughts */}
          {thoughtsTitle && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {thoughtsTitle}
              </h2>
              <ul className="mt-2 divide-y divide-gray-300 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                {thoughtsArray.map((thought, index) => (
                  <li key={index} className="py-2">
                    {thought}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    //   You can use i18n to change the scraping from evangelio (Spanish) to gospel (English)
    const { data } = await axios.get("https://www.evangeli.net/gospel");
    const $ = cheerio.load(data);

    // Date and Time
    let date = $("button.close_button").first().text().trim();
    let ordinaryTime = $(".dia_green.dia_liturgic").first().text().trim();

    // Gospel Reading
    let audio = $(".audio_group a.listen").first().attr("href");
    let reading = $(".evangeli_text strong").first().text().trim();
    let gospel = $("#gospel_norm").first().html()?.trim() || "";

    // Quote and Author
    let quote = $(".titol.first").first().text().trim();
    let autor = $(".autor_name").first().text().trim();
    let autorOrigin = $(".autor_origin").first().text().trim();

    // Comments on gospel
    let comments = $(".comentari_evangeli_primer").first().html()?.trim() || "";

    // Thoughts
    let thoughtsTitle = $(".thoughts_wrapper h3").first().text().trim();
    let thoughtsArray = [];

    $(".thoughts_text ul li").each((index, element) => {
      thoughtsArray.push($(element).text().trim());
    });

    // console.log("Scraped Data:", thoughtsTitle);

    return {
      props: {
        date,
        ordinaryTime,
        audio,
        reading,
        gospel,
        quote,
        autor,
        autorOrigin,
        comments,
        thoughtsTitle,
        thoughtsArray,
      },
    };
  } catch (error) {
    console.error(error);
    return { props: { articles: [] } };
  }
}
