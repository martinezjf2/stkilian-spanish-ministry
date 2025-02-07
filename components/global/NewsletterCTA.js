import React, { useState } from "react";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail(""); // Clear input after subscription
    }
  };

  return (
    <div className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Subscribe to Our Monthly Newsletter
        </h2>
        <p className="text-lg mb-6">
          Stay updated with our latest events, community activities, and
          announcements. Join our newsletter today!
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 w-full sm:w-80 rounded-md text-gray-700 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterCTA;
