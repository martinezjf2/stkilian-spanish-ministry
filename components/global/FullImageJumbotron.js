// components/FullImageJumbotron.js
import { useState, useEffect } from "react";

export default function FullImageJumbotron({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[80vh]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold">
              {title}
            </h1>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 w-full flex justify-center space-x-3 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-4 h-4 rounded-full transition-transform transform hover:scale-125 ${
              currentIndex === idx ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
