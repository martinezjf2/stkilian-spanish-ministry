// pages/events/[slug].js
import events from "../../data/events.json";
import Head from "next/head";
import Image from "next/image";
import FullImageJumbotron from "@/components/global/FullImageJumbotron";

export async function getStaticPaths() {
  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = events.find((e) => e.slug === params.slug);
  return { props: { event } };
}

export default function EventDetail({ event }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Head>
        <title>{event.title} | Seguidores de Jesus</title>
      </Head>

      <FullImageJumbotron
        images={[
          "/images/familia/familia.jpg",
          "/images/familia/familia2.jpg",
          "/images/familia/familia3.jpg",
        ]}
        title="Family Ministry"
      />

      <div className="max-w-4xl mx-auto py-12 px-6">
        <Image
          src={event.image}
          alt={event.title}
          width={800}
          height={400}
          className="rounded-lg mb-6 object-cover"
        />
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <p className="text-gray-600 text-sm mb-4">
          📅 {formattedDate} @ {event.time} | 📍 {event.location}
        </p>
        <p className="text-lg text-gray-700">{event.description}</p>
      </div>
    </>
  );
}


// Make sure to display more content with html within the json
// Also make sure to have a person of contact, and phone number of contact
// Display if there is any donation of some sort, if any
// Reformat the display of each event, where the title and the image be, 
// as well as the content, ad description and may need to add more keys to the json
