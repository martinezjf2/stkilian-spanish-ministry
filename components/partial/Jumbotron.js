import { useState, useEffect } from "react";

const images = [
  "/images/home/familia.jpg", // Replace with your image paths
  "/images/home/banda.jpg",
  "/images/home/renovacion.jpg",
  "/images/home/guadalupanos.jpg",
  "/images/home/jovenes.jpg",
  "/images/home/monagios.jpg",
  "/images/home/jovenes2.jpg",
  "/images/home/banda2.jpg"
];

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slideshow effect with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden">
      {/* Slide images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 bg-black/50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Spanish Community
        </h1>
        <p className="text-lg md:text-xl">
          Building a stronger connection through faith and action.
        </p>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
