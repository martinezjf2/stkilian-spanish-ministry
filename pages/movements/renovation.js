import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";
import SocialMediaInvite from "@/components/global/SocialMediaInvite";
import Head from "next/head";


const communities = [
  {
    title: "Emmanuel",
    day: "Monday",
    time: "6PM - 9PM",
    verse: "Matthew 1:23",
    quote:
      "Behold, the virgin will conceive and give birth to a son, and they will call him Emmanuel, which means 'God with us.'",
    reflection:
      "The name Emmanuel reminds us that God is not distant or far away, but present in every moment of our lives, offering love, guidance, and comfort. Open your heart to Emmanuel's presence and experience His transformative love in your life.",
  },
  {
    title: "El Buen Pastor",
    day: "Tuesday",
    time: "6PM - 9PM",
    verse: "John 10:11",
    quote:
      "I am the good shepherd. The good shepherd lays down his life for the sheep.",
    reflection:
      "Jesus presents Himself as the Good Shepherd, willing to give His life for His sheep. His unconditional love and constant care show us the perfect model of leadership and protection. Let Jesus be your Shepherd—trust in His guidance and rest in His loving hands.",
  },
  {
    title: "Seguidores de Jesús",
    day: "Thursday",
    time: "6PM - 9PM",
    verse: "Luke 9:59-60",
    quote:
      "Jesus said to him, 'Follow me.' But he said, 'Lord, let me first go and bury my father.' Jesus said, 'Let the dead bury their own dead, but you go and proclaim the kingdom of God.'",
    reflection:
      "Following Jesus means prioritizing the Kingdom of God above all else—even our closest obligations. Join the adventure of following Jesus and proclaiming His Kingdom in your life and the world around you.",
  },
  {
    title: "Vida y Esperanza",
    day: "Friday",
    time: "6PM - 9PM",
    verse: "Jeremiah 29:11",
    quote:
      "'For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you a future and a hope.'",
    reflection:
      "In life’s uncertainties, God promises a future full of hope. Trust in His care and purpose at every stage of your journey. Embrace the life and hope He offers, and walk confidently knowing He has a plan full of blessings for you.",
  },
  {
    title: "Caminando Con Jesús",
    day: "Friday",
    time: "6PM - 9PM",
    verse: "1 John 2:6",
    quote: "Whoever claims to live in Him must live as Jesus did.",
    reflection:
      "Walking with Jesus means living according to His example. Our lives should reflect His love, compassion, and humility—showing the world that we are truly in communion with Him. Join the journey of walking with Jesus and let His love transform your life.",
  },
  {
    title: "Ríos de Agua Viva",
    day: "Friday",
    time: "6PM - 9PM",
    verse: "John 4:13-14",
    quote:
      "Jesus answered, 'Everyone who drinks this water will be thirsty again, but whoever drinks the water I give them will never thirst. Indeed, the water I give them will become in them a spring of water welling up to eternal life.'",
    reflection:
      "In a thirsty world, Jesus offers water that satisfies the soul. Come and drink from His living water, experience true fulfillment, and become a fountain that overflows with eternal life for others.",
  },
];




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
