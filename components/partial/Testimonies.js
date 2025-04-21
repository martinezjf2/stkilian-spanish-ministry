const testimonies = [
  {
    name: "Maria Lopez",
    quote:
      "Joining Seguidores de Jesus changed my life. I found a family here and grew stronger in my faith.",
    slug: "maria-lopez",
    image: "/images/maria-lopez.jpg",
  },
  {
    name: "Carlos Rivera",
    quote:
      "Serving in the Youth Ministry gave me purpose and deepened my connection with God and the community.",
    slug: "carlos-rivera",
    image: "/images/carlos-rivera.jpg",
  },
  {
    name: "Ana Torres",
    quote:
      "The community outreach helped me give back in meaningful ways. It's a blessing to be part of this family.",
    slug: "ana-torres",
    image: "/images/ana-torres.jpg",
  },
];

export default function TestimoniesHomePage() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Community Stories
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Hear from members of our community about their journey of faith and
          transformation.
        </p>

        <div className="mt-10 space-y-16">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center gap-8"
            >
              <img
                src={testimony.image}
                alt={`Photo of ${testimony.name}`}
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="text-center">
                <p className="text-gray-800 italic text-lg max-w-xl mx-auto">
                  “{testimony.quote}”
                </p>
                <p className="mt-4 text-blue-600 font-semibold">
                  – {testimony.name}
                </p>
                <a
                  href={`/testimonies/${testimony.slug}`}
                  className="mt-2 inline-block text-sm text-blue-500 hover:underline"
                >
                  Read Full Story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// MUST DO ON THIS COMPONENT:
// --------------------------------------
// Just display 3 for this from the testimonies.json file