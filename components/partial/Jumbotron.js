"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getHoliday } from "@/utils/dateUtils";
import { getHolidayContent } from "@/utils/getHolidayContent";

export default function Jumbotron() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const holiday = getHoliday();
  const { images, message, subtitle } = getHolidayContent(holiday);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden"
      // initial={{ opacity: 0, y: 50 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}
      // viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Images */}
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 bg-black/50">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {message}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-3">
        {images.map((_, idx) => (
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2.2 + idx * 0.1}}
            whileHover={{
              scale: 2.5
    
            }}
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></motion.button>
        ))}
      </div>
    </motion.div>
  );
}
