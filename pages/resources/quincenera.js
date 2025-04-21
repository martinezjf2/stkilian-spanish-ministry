// pages/quinceanera.js
import Head from "next/head";
import FullImageJumbotron from "@/components/global/FullImageJumbotron";

export default function QuinceaneraPage() {
  return (
    <>
      <Head>
        <title>Quinceañera | St. Kilian Spanish Community</title>
        <meta
          name="description"
          content="Learn about the cultural and spiritual significance of Quinceañeras in the Spanish community and how to prepare at St. Kilian Parish."
        />
      </Head>

      <FullImageJumbotron
        title="Quinceñera Celebrations"
        images={[
          "/images/jovenes/jovenes.jpg",
          "/images/jovenes/jovenes2.jpg",
          "/images/jovenes/jovenes3.jpg",
          "/images/jovenes/jovenes4.jpg",
          "/images/jovenes/jovenes5.jpg",
          "/images/jovenes/jovenes6.jpg",
        ]}
      />

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Celebrating a Quinceañera
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            A Quinceañera is a cherished tradition in the Spanish-speaking
            community that honors a young girl’s transition from childhood to
            womanhood on her 15th birthday. This celebration holds both cultural
            and spiritual importance as it includes a special blessing during
            Mass to recognize her growth, gratitude to God, and commitment to
            her faith.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Importance in Our Community
          </h2>
          <p className="text-gray-700 mb-6">
            For many Hispanic families, the Quinceañera is more than a
            party—it's a rite of passage that symbolizes family unity, faith,
            and responsibility. At St. Kilian Parish, we are proud to celebrate
            this meaningful tradition with our Spanish community through a
            special liturgical blessing that highlights the young woman’s
            journey of faith and her intention to live a Christian life.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            How to Get Started
          </h3>
          <p className="text-gray-700 mb-4">
            Families interested in celebrating a Quinceañera at our parish are
            encouraged to contact our Spanish Community Coordinator for
            guidance, preparation, and to schedule the special Mass.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-medium text-gray-900">
              Sr. Maria Gonzalez
            </p>
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:maria.gonzalez@stkilianchurch.org"
                className="text-blue-600 hover:underline"
              >
                maria.gonzalez@stkilianchurch.org
              </a>
            </p>
            <p className="text-gray-700">Phone: (555) 123-4567</p>
          </div>
        </div>
      </section>
    </>
  );
}
