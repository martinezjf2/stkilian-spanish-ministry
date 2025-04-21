import ComingSoon from "@/components/global/ComingSoon";
import axios from "axios";
import * as cheerio from "cheerio";
import Head from "next/head";

export default function About({
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
        <title>Seguidores de Jesus - Netlify</title>
      </Head>

      <ComingSoon name="About" />
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
    const { data } = await axios.get("https://www.evangeli.net/gospel");
    const $ = cheerio.load(data);

    let date = $("button.close_button").first().text().trim();
    let ordinaryTime = $(".dia_green.dia_liturgic").first().text().trim();
    let audio = $(".audio_group a").first().attr("href");
    let reading = $(".evangeli_text strong").first().text().trim();
    let gospel = $("#gospel_norm").first().html()?.trim() || "";

    let quote = $(".titol.first").first().text().trim();
    let autor = $(".autor_name").first().text().trim();
    let autorOrigin = $(".autor_origin").first().text().trim();

    let comments = $(".comentari_evangeli_primer").first().html()?.trim() || "";

    let thoughtsTitle = $(".thoughts_wrapper h3").first().text().trim();

    let thoughtsArray = [];

    $(".thoughts_text ul li").each((index, element) => {
      thoughtsArray.push($(element).text().trim());
    });

    console.log("Scraped Data:", thoughtsTitle);

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
