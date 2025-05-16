import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import events from "../../data/events.json";
import MiniJumbo from "@/components/global/MiniJumbo";


export default function Events() {
  const today = new Date();

  const futureEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= today;
  });

  return (
    <>
      <Head>
        <title>Upcoming Events | Seguidores de Jesus</title>
      </Head>
      <MiniJumbo
        images={[
          "/images/jovenes/jovenes.jpg",
          "/images/jovenes/jovenes2.jpg",
          "/images/jovenes/jovenes3.jpg",
          "/images/jovenes/jovenes4.jpg",
          "/images/jovenes/jovenes5.jpg",
          "/images/jovenes/jovenes6.jpg",
        ]}
        title="Join Us at Our Events"
      />
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>

        {futureEvents.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            There are no upcoming events at this time. Please check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {futureEvents.map((event, index) => {
              const eventDate = new Date(event.date);
              const formattedDate = eventDate.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">
                      📅 {formattedDate} @ {event.time}
                    </p>
                    <p className="text-gray-600 text-sm mb-1">
                      📍 {event.location}
                    </p>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
