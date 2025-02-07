import React from "react";

const GroupJumbotron = () => {
  return (
    <div
      className="relative h-72 w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/group-bg.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Youth Group</h1>
        <p className="text-lg md:text-xl mt-2">
          Join us to grow in faith and build lasting friendships.
        </p>
      </div>
    </div>
  );
};

export default GroupJumbotron;
