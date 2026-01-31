import testimonies from "../../data/testimonies.json";
import Head from "next/head";

export async function getStaticPaths() {
  const paths = testimonies.map((testimony) => ({
    params: { slug: testimony.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const testimony = testimonies.find((t) => t.slug === params.slug);
  return {
    props: {
      testimony,
    },
  };
}

export default function TestimonyPage({ testimony }) {
  return (
    <>
      <Head>
        <title>{`${testimony.name} – Testimony | Seguidores de Jesus`}</title>
        <meta name="description" content={testimony.quote} />
      </Head>

      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <img
              src={testimony.image}
              alt={`Photo of ${testimony.name}`}
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                {testimony.name}
              </h1>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-xl mx-auto">
                {testimony.fullStory}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
