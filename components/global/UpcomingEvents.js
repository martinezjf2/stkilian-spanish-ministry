import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Faith Retreat 2025",
      date: "March 12, 2025",
      location: "St. Mary's Retreat Center",
      description:
        "Join us for a weekend of spiritual growth and reflection at our annual faith retreat.",
      image: "/images/retreat.jpg", // Replace with actual image paths
    },
    {
      title: "Community Outreach",
      date: "April 18, 2025",
      location: "City Park",
      description:
        "Participate in our community outreach event to give back and make a difference.",
      image: "/images/community.jpg",
    },
    {
      title: "Youth Gathering",
      date: "May 10, 2025",
      location: "Parish Hall",
      description:
        "An evening of fun, faith, and friendship for our youth community.",
      image: "/images/youth-gathering.jpg",
    },
  ];

  return (
    <div className="py-12 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-1">📅 {event.date}</p>
              <p className="text-gray-600 text-sm mb-3">📍 {event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
