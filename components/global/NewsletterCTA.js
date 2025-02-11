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




// import { useState } from "react";

// const KlaviyoForm = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("Submitting...");

//     try {
//       const response = await fetch(
//         "https://a.klaviyo.com/api/v2/list/YOUR_LIST_ID/subscribe?api_key=YOUR_PUBLIC_API_KEY",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             profiles: [{ email }],
//           }),
//         }
//       );

//       if (response.ok) {
//         setMessage("Successfully subscribed!");
//         setEmail("");
//       } else {
//         const error = await response.json();
//         setMessage(`Error: ${error.detail || "Failed to subscribe"}`);
//       }
//     } catch (err) {
//       setMessage("Network error or CORS issue.");
//       console.error("Error submitting to Klaviyo:", err);
//     }
//   };

//   return (
//     <div>
//       <h2>Subscribe to Our Newsletter</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="p-2 border rounded"
//         />
//         <button type="submit" className="p-2 bg-blue-500 text-white rounded">
//           Join the List
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default KlaviyoForm;
