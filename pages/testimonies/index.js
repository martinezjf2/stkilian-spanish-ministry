// pages/testimonies/index.js
import testimonies from "../../data/testimonies.json";
import MiniJumbo from "@/components/global/MiniJumbo";
import Head from "next/head";
import Link from "next/link";

export default function TestimoniesIndexPage() {
  return (
    <>
      <Head>
        <title>Testimonies | Seguidores de Jesus</title>
        <meta
          name="description"
          content="Read personal stories of faith and transformation from our community."
        />
      </Head>
      <>
       <MiniJumbo
               images={[
                 "/images/familia/familia.jpg",
                 "/images/familia/familia2.jpg",
                 "/images/familia/familia3.jpg",
               ]}
               title="Testimonies"
             />
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Community Testimonies
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore heartfelt stories shared by our community members.
            </p>

            <div className="mt-12 space-y-12">
              {testimonies.map((testimony, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center justify-center gap-8"
                >
                  <img
                    src={testimony.image}
                    alt={`Photo of ${testimony.name}`}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div className="text-center lg:text-left">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {testimony.name}
                    </h2>
                    <p className="mt-2 text-gray-700 italic max-w-xl">
                      “{testimony.quote}”
                    </p>
                    <Link
                      href={`/testimonies/${testimony.slug}`}
                      className="mt-2 inline-block text-sm text-blue-500 hover:underline"
                    >
                      Read Full Story
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </>
  );
}
