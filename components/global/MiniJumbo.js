import { useState, useEffect } from "react";


export default function MovementsHeader({ images, title }) {
  console.log({title});
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Handle manual navigation using dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[80vh] w-full">
      {/* Slideshow Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 overflow-y-hidden ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="absolute md:-right-16 h-full object-cover"
          />

          {/* Overlay Text for Mobile and Tablet */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 md:hidden bg-black/50">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg">Join our spiritual journey together.</p>
          </div>
        </div>
      ))}

      {/* Left Side: Header and Slogan (Desktop Only) */}
      <div className="hidden md:flex absolute inset-y-0 left-0 md:w-1/2 bg-black text-white px-10 md:px-20 flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Join our community and grow spiritually through youth, family, and
          faith-based movements.
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mt-6">
          &quot;Faith in Action&quot;
        </h2>
        <p className="mt-3 text-xl">Where community and faith unite.</p>
      </div>

      {/* Gradient Fade for Desktop */}
      <div className="hidden md:block absolute inset-y-0 left-1/2 w-1/3 bg-gradient-to-r from-black via-transparent to-transparent"></div>

      {/* Dots Navigation (Centered in the Slideshow) */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-3">
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
