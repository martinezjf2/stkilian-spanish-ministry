import React from "react";

export default function ComingSoon({name}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 text-white shadow-lg">
      <h1 className="text-5xl md:text-7xl font-extrabold animate-pulse">
        {name} Coming Soon
      </h1>
    </div>
  );
}
