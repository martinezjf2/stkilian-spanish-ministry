"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConcertJumbo({
  images,
  message,
  subtitle,
  ticketsHref = "/tickets",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ Smooth scroll to the bio section
  const handleLearnMore = () => {
    const el = document.getElementById("artist-bio");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden bg-black text-white">
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

      {/* Overlay */}
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
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleLearnMore}
            className="px-8 py-3 border-4 border-yellow-400 hover:bg-yellow-400 bg-transparent text-white font-semibold tracking-wide hover:text-black transition-all duration-300"
          >
            Learn More About Him
          </button>

          {/* ✅ Buy Tickets goes to another page */}
          <Link
            href={ticketsHref}
            className="px-8 py-3 border-4 border-yellow-400 hover:bg-yellow-400 bg-transparent text-white font-semibold tracking-wide hover:text-black transition-all duration-300 inline-flex items-center justify-center"
          >
            Buy Tickets
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
