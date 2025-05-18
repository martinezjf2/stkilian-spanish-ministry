// pages/whats-new.js
import Head from "next/head";
import FullImageJumbotron from "@/components/global/FullImageJumbotron";
import { GoogleAnalytics } from "@next/third-parties/google";

// import NewHere from "@/components/partial/NewHere";

import {
  FaRobot,
  FaEnvelopeOpenText,
  FaWpforms,
  FaPenFancy,
  FaHome,
  FaLanguage,
  FaBible,
  FaMailBulk,
} from "react-icons/fa";
import NewsletterCTA from "@/components/global/NewsletterCTA";

const updates = [
  {
    icon: <FaHome className="text-orange-500 w-8 h-8" />,
    title: "Dynamic Homepage for Holidays & Events",
    description:
      "Our homepage now dynamically updates during holidays and important liturgical events. This feature reminds parishioners of upcoming celebrations and keeps everyone informed and spiritually engaged.",
  },
  {
    icon: <FaMailBulk className="text-cyan-600 w-8 h-8" />,
    title: "Online Payments for Sacraments & Religious Education",
    description:
      "You can now make payments for sacraments, religious education, and event fees directly through our website. This secure and convenient option helps families save time and ensures smooth coordination with parish staff.",
  },
  {
    icon: <FaRobot className="text-indigo-600 w-8 h-8" />,
    title: "ChatGPT Integration",
    description:
      "Ask questions about Mass times, events, or parish information 24/7. Our new ChatGPT assistant helps you feel supported at any time with accurate, parish-specific answers.",
  },
  {
    icon: <FaEnvelopeOpenText className="text-green-600 w-8 h-8" />,
    title: "Email Marketing with Klaviyo",
    description:
      "Receive beautifully designed email updates about our parish events, news, and seasonal devotionals. New members are automatically welcomed and included in our digital family.",
  },
  {
    icon: <FaWpforms className="text-yellow-500 w-8 h-8" />,
    title: "Google Forms for Sacrament Signups",
    description:
      "Streamlined registration for Baptisms, Weddings, Sacrament Prep, and Daily Rosary. Our new forms make signing up easy and organized for all families.",
  },
  {
    icon: <FaPenFancy className="text-pink-500 w-8 h-8" />,
    title: "Blogs & Testimonies",
    description:
      "Read heartfelt stories and reflections from our parishioners. Discover what inspires our community to serve and grow in their faith at St. Kilian.",
  },
  {
    icon: <FaHome className="text-blue-500 w-8 h-8" />,
    title: "Revamped Homepage Design",
    description:
      "Our new homepage celebrates our vibrant community through large, immersive imagery, clear navigation, and a welcoming user experience across all devices.",
  },
  {
    icon: <FaLanguage className="text-purple-500 w-8 h-8" />,
    title: "Multi-Language Support",
    description:
      "We’ve added support for Spanish, English, Chinese, and German to make sure everyone in our diverse parish community can access important information and feel included.",
  },
  {
    icon: <FaBible className="text-red-600 w-8 h-8" />,
    title: "Daily Gospel with Audio",
    description:
      "Stay nourished spiritually with our new Daily Gospel feature. Each day includes the Gospel reading in text and audio format, so everyone—readers and listeners alike—can reflect on God’s Word.",
  },
  {
    icon: <FaMailBulk className="text-emerald-600 w-8 h-8" />,
    title: "Integrated Parish Email Support",
    description:
      "Need personalized help? You can now submit questions directly through our site using Email.js, and an expert from our parish will reach out with guidance and support.",
  },
];

export default function WhatsNewPage() {
  return (
    <>
      <Head>
        <title>What&lsquo;s New | St. Kilian Spanish Community</title>
        <GoogleAnalytics gaId="G-5SVDW08ZPG" debug />

        <meta
          name="description"
          content="Explore the latest updates to the St. Kilian Spanish Community website—designed to better serve and engage our parishioners."
        />
      </Head>

      <FullImageJumbotron
        title="Our Latest Innovations"
        images={[
          "/images/jovenes/jovenes.jpg",
          "/images/jovenes/jovenes2.jpg",
          "/images/jovenes/jovenes3.jpg",
          "/images/jovenes/jovenes4.jpg",
          "/images/jovenes/jovenes5.jpg",
          "/images/jovenes/jovenes6.jpg",
        ]}
      />

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            What&lsquo;s New at St. Kilian
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We&lsquo;ve introduced new tools and features to help our parish
            thrive online and in spirit.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
          {updates.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4">
                {item.icon}
                <h2 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h2>
              </div>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
}
