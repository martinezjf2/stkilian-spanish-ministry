import ComingSoon from "@/components/global/ComingSoon";
import axios from "axios";
import * as cheerio from "cheerio";
import Head from "next/head";

export default function Readings({
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
  console.log({ date });

  return (
    <>
      <Head>
        <title>Seguidores de Jesus</title>
      </Head>

      <ComingSoon name="Readings" />
      <div className="p-28">
        <h1>Scraped Data:</h1>
        <ul>{date}</ul>
        <ul>{ordinaryTime}</ul>
        <ul>
          {audio ? (
            <li>
              <audio controls>
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio tag.
              </audio>
            </li>
          ) : (
            <li>No audio found</li>
          )}
        </ul>
        {reading}{" "}
        {gospel ? (
          <p dangerouslySetInnerHTML={{ __html: gospel }} />
        ) : (
          <p>No gospel content available.</p>
        )}
        <ul>{quote}</ul>
        <ul>{autor}</ul>
        <ul>{autorOrigin}</ul>
        {comments ? (
          <p dangerouslySetInnerHTML={{ __html: comments }} />
        ) : (
          <p>No comments content available.</p>
        )}
        <ul>
          <strong>{thoughtsTitle}</strong>
        </ul>
        <ul>
          {thoughtsArray.map((thought, index) => (
            <li key={index} className="list-disc">
              {thought}
            </li>
          ))}
        </ul>
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
