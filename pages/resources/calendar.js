// import ComingSoon from "@/components/global/ComingSoon";
// import Head from "next/head";


// export default function Calendar() {
//     return (
//       <>
//         <Head>
//           <title>Seguidores de Jesus - Netlify</title>
//         </Head>
//         <ComingSoon name="Calendar" />
//       </>
//     );
// }



// pages/calendar.js
import Head from 'next/head';
import MiniJumbo from '@/components/global/MiniJumbo'

export default function CalendarPage() {
  return (
    <>
      <Head>
        <title>Community Calendar | St. Kilian Spanish Community</title>
        <meta
          name="description"
          content="Stay up to date with upcoming events in our St. Kilian Parish through our integrated Google Calendar."
        />
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
        title="Your Invited!"
      />

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Community Calendar
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay connected with upcoming Masses, gatherings, retreats, and
            special celebrations at St. Kilian Parish. Our integrated Google
            Calendar helps you stay organized and informed.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 pb-16 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=4236f76ede532a28fd8ca6e5900cbab64a47b82f80b03737ac0a6641569e6b16%40group.calendar.google.com&ctz=America%2FNew_York"
              style={{ border: 0 }}
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
              title="St. Kilian Events Calendar"
              className="w-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
