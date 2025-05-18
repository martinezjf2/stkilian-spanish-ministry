import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";
import SocialMediaInvite from "@/components/global/SocialMediaInvite";
import Head from "next/head";
import communities from "../../data/communities.json";

export default function Renovation() {
  return (
    <>
      <Head>
        <title>Charismatic Renewal | St. Kilian Spanish Community</title>
        <meta
          name="description"
          content="Join our small charismatic communities and grow spiritually through Scripture, prayer, and fellowship."
        />
      </Head>
      <MiniJumbo
        images={["https://seguidoresdejesus.s3.amazonaws.com/assamblea.jpg"]}
        title="Light of the World"
      />

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Join Our Small Charismatic Communities
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Explore the joy of faith, fellowship, and Scripture through weekly
            gatherings. Open your heart and grow in community.
          </p>
        </div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {communities.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 hover:shadow-md transition"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                {group.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {group.day}, {group.time}
              </p>
              <p className="italic text-indigo-600 mb-2">{group.verse}</p>
              <blockquote className="text-gray-800 font-medium mb-4">
                “{group.quote}”
              </blockquote>
              <p className="text-gray-700 leading-relaxed">
                {group.reflection}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* <ComingSoon name="Renovation" /> */}
      <SocialMediaInvite
        groupName="Charismatic Movement"
        facebook="https://www.facebook.com/people/Luz-Del-Mundo-Rcc/pfbid05TqA1KDvTPmppyk2k6pYkXhdAhDBAEpJXavB5tohwBeVsBACWCkXat45T3acDh5Xl/?mibextid=LQQJ4d"
        instagram=""
        youtube=""
        twitter=""
      />
    </>
  );
}

// 631-439-3313 Pilar
