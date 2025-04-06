// import ComingSoon from "@/components/global/ComingSoon";
// import Head from "next/head";


// export default function Weddings() {
//     return (
//       <>
//         <Head>
//           <title>Seguidores de Jesus - Netlify</title>
//         </Head>
//         <ComingSoon name="Weddings" />
//       </>
//     );
// }



// pages/weddings.js
import FullImageJumbotron from '@/components/global/FullImageJumbotron';
import Head from 'next/head';

export default function WeddingsPage() {
  return (
    <>
      <Head>
        <title>Weddings | St. Kilian Spanish Community</title>
        <meta
          name="description"
          content="Learn about the significance of the Sacrament of Matrimony and how to begin your wedding journey within our St. Kilian Parish."
        />
      </Head>
      
      <FullImageJumbotron title="The Holy Matrimony" images={[
            "/images/jovenes/jovenes.jpg",
            "/images/jovenes/jovenes2.jpg",
            "/images/jovenes/jovenes3.jpg",
            "/images/jovenes/jovenes4.jpg",
            "/images/jovenes/jovenes5.jpg",
            "/images/jovenes/jovenes6.jpg",
          ]}/>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Sacrament of Matrimony</h1>
          <p className="mt-4 text-lg text-gray-600">
            In the Catholic Church, the Sacrament of Matrimony is a sacred covenant, a holy union through which a man and a woman commit themselves to each other in the presence of God. It is a beautiful expression of love, faith, and commitment to building a Christ-centered family.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparing for Your Wedding</h2>
          <p className="text-gray-700 mb-6">
            Couples planning to receive the Sacrament of Matrimony at St. Kilian Parish are invited to begin their preparation at least six months in advance. Our parish offers guidance, classes, and support to ensure that this sacred journey is spiritually enriching and in accordance with Church teachings.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Who to Contact</h3>
          <p className="text-gray-700 mb-4">
            To begin the marriage preparation process or for any questions about getting married at St. Kilian Parish, please contact our Spanish Community Priests or Deacons:
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-medium text-gray-900">Ft. Romulo Gomez</p>
            <p className="text-gray-700">Email: <a href="mailto:maria.gonzalez@stkilianchurch.org" className="text-blue-600 hover:underline">maria.gonzalez@stkilianchurch.org</a></p>
            <p className="text-gray-700">Phone: (555) 123-4567</p>
          </div>
        </div>
      </section>
    </>
  );
}
