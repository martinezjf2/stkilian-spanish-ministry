import React from "react";

const SplitSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Image */}
        <div>
          <img
            src="/images/example.jpg" // Replace with your image path
            alt="Example"
            className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Heading Title</h2>
          <h3 className="text-2xl text-gray-700 mb-3">Subheading Goes Here</h3>
          <p className="text-gray-600 mb-6">
            This is a description that explains the purpose of this section. You
            can add more details to describe the topic or highlight features and
            benefits.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitSection;
