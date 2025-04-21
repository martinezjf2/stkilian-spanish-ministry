// components/SplitSection.js
import React from "react";

const SplitSection = ({
  image,
  alt,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Image */}
        <div>
          <img
            src={image}
            alt={alt}
            className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <h3 className="text-2xl text-gray-700 mb-3">{subtitle}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <a
            href={buttonLink}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SplitSection;
