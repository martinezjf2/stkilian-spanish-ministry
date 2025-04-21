import React from "react";
import { Users, Calendar, Heart } from "lucide-react"; // Lucide icons for the icons, you can replace them or use others

const IconsComponent = () => {
  const items = [
    {
      icon: <Users size={50} className="text-blue-600" />,
      title: "Community Events",
      description:
        "Participate in events that bring our community together through faith and service.",
    },
    {
      icon: <Calendar size={50} className="text-green-600" />,
      title: "Youth Programs",
      description:
        "Engage in activities designed to empower the next generation of leaders.",
    },
    {
      icon: <Heart size={50} className="text-red-600" />,
      title: "Volunteer Opportunities",
      description:
        "Give back to the community by contributing your time and skills to meaningful causes.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Get Involved</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4 justify-center items-center flex">{item.icon}</div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsComponent;
