import React from "react";

const CardsComponent = () => {
  const cards = [
    {
      title: "Community Outreach",
      image: "/images/community.jpg", // Replace with actual image paths
      description:
        "Join us in giving back to the community through volunteer work and outreach programs.",
      buttonText: "Learn More",
    },
    {
      title: "Youth Programs",
      image: "/images/youth.jpg",
      description:
        "Engage with faith-driven activities designed to inspire and empower the youth.",
      buttonText: "Get Involved",
    },
    {
      title: "Faith Retreats",
      image: "/images/retreat.jpg",
      description:
        "Recharge spiritually and connect with others through meaningful retreat experiences.",
      buttonText: "Sign Up",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Our Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsComponent;
