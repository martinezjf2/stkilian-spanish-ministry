import { useState, useEffect } from "react";

export default function DailyVerse() {
  const [verse, setVerse] = useState("Loading...");

  useEffect(() => {
    async function fetchVerse() {
      try {
        const response = await fetch("/api/dailyVerse"); // Fetch from API route
        const data = await response.json();
        setVerse(data.verse || "No verse found"); // Fallback in case of error
      } catch (error) {
        console.error("Error fetching verse:", error);
        setVerse("Error fetching verse");
      }
    }

    fetchVerse();
  }, []);

  return (
    <div className="p-6 text-center bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Verse of the Day</h2>
      <p className="mt-2 text-lg text-gray-600">{verse}</p>
    </div>
  );
}
