import { useState, useEffect } from "react";
import { getHoliday } from "@/utils/dateUtils";

// const defaultImages = [
//   "/images/home/familia.jpg", // Replace with your image paths
//   "/images/home/banda.jpg",
//   "/images/home/renovacion.jpg",
//   "/images/home/guadalupanos.jpg",
//   "/images/home/jovenes.jpg",
//   "/images/home/monagios.jpg",
//   "/images/home/jovenes2.jpg",
//   "/images/home/banda2.jpg",
// ];

const holidayImages = {
  "New Year's Day": [
    "https://cdn.britannica.com/18/128818-050-48E6CB53/Fireworks-confetti-cheering-crowd-Times-Square-New-January-1-2007.jpg",
  ],
  "Memorial Day": [
    "https://www.asomf.org/wp-content/uploads/2021/05/5ecbb9f8ee9fafe91ffb2343_memorialday-1024x538.jpeg",
  ],
  "Veterans Day": [
    "https://www.bu.edu/files/2024/10/veteran-shoutout-feat.jpg",
  ],
  "Labor Day": [
    "https://cdn.britannica.com/40/239640-050-046C95B3/diverse-group-occupations-workforce.jpg",
  ],
  "Thanksgiving": [
    "https://c.tadst.com/gfx/750x500/man-carrying-turkey-dinner-table.jpg",
  ],
  "Guadalupe Day": [
    "https://ourladyofguadalupechurch.org/wp-content/uploads/2015/12/olg_portrait-360x240.jpg",
  ],
  "Christmas": [
    "https://i0.wp.com/santadavidva.com/wp-content/uploads/2021/04/nativity_1.jpg?fit=768%2C432&ssl=1",
  ],
  "Mother's Day": [
    "https://www.bhg.com/thmb/6gV0ZVMCWMd8AqgUzVX2WNP426s=/1866x0/filters:no_upscale():strip_icc()/mother-daughter-smiling-outdoors-7d884281db614313bf629048299e7384.jpg",
  ],
  "Father's Day": [
    "https://www.123dentist.com/wp-content/uploads/2018/06/daughter-giving-gift-to-father.jpg",
  ],
  default: [
    "/images/home/familia.jpg",
    "/images/home/banda.jpg",
    "/images/home/renovacion.jpg",
    "/images/home/guadalupanos.jpg",
    "/images/home/jovenes.jpg",
    "/images/home/monagios.jpg",
    "/images/home/jovenes2.jpg",
    "/images/home/banda2.jpg",
  ],
};

// Custom messages for holidays
const holidayMessages = {
  "New Year's Day": "Happy New Year! 🎆",
  "Memorial Day": "Honoring Our Heroes on Memorial Day 🇺🇸",
  "Veterans Day": "Thank You, Veterans! 🇺🇸",
  "Labor Day": "Happy Labor Day! 💼",
  "Thanksgiving": "Happy Thanksgiving! 🦃",
  "Guadalupe Day": "Día de la Virgen de Guadalupe 🌹",
  "Christmas": "Merry Christmas! 🎄",
  "Mother's Day": "Happy Mother's Day! 💐",
  "Father's Day": "Happy Father's Day! 👨‍👧‍👦",
};

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const holiday = getHoliday();
  const images = holidayImages[holiday] || holidayImages.default;

  // Automatic slideshow effect with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden">
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
          {holiday ? (
            holidayMessages[holiday]
          ) : (
            <>
              Welcome to Our
              <br />
              Spanish Community
            </>
          )}
        </h1>
        <p className="text-lg md:text-xl">
          {holiday
            ? "Celebrate with us!"
            : "Building a stronger connection through faith and action."}
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
