import React, { useRef, useEffect, useState } from "react";

export default function VideoComponent({ link }) {
  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the iframe is visible
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      const srcWithoutAutoplay = link.replace("&autoplay=1", "");
      if (isVisible) {
        iframeRef.current.src = `${srcWithoutAutoplay}&autoplay=1`; // Autoplay when visible
      } else {
        iframeRef.current.src = srcWithoutAutoplay; // Stop autoplay when not visible
      }
    }
  }, [isVisible, link]);

  return (
    <section className="relative w-full">
      {/* Section Title */}
      <div className="max-w-4xl mx-auto text-center py-10 px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Experience Our Journey
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4">
          Join us in exploring moments of faith, community, and growth.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-screen overflow-hidden rounded-lg shadow-lg group">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`${link}&autoplay=0`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />

        {/* Overlay Section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-10">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
              Our Mission in Action
            </h2>
            <p className="text-gray-300 mt-2 sm:mt-4 text-base sm:text-lg md:text-xl">
              Discover how we unite faith and community through meaningful
              events and experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
