import React from "react";
import events from "../../data/events.json";
import Link from "next/link";


const UpcomingEvents = () => {
const today = new Date();

// Convert event.date to a Date object and compare
const futureEvents = events.filter((event) => {
  const eventDate = new Date(event.date); // Works if date = "2025-05-17"
  return eventDate >= today;
});

// If no future events, render nothing
if (futureEvents.length === 0) {
  return (
    <div className="py-12 px-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
      <p className="text-gray-600 text-lg">
        There are no upcoming events at this time. Please check back soon!
      </p>
    </div>
  );
}
  return (
    <div className="py-12 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {futureEvents.slice(0, 3).map((event, index) => {
          const eventDate = new Date(event.date);
          const formattedDate = eventDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
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
                <p className="text-gray-600 text-sm mb-1">
                  📅 {formattedDate} @ {event.time}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  📍 {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Link href={`/events/${event.slug}`}>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingEvents;
