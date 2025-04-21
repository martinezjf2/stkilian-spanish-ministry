
// pages/contact.js
import Head from 'next/head';
import { useState } from 'react';
import MiniJumbo from "@/components/global/MiniJumbo"


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Message submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact Us | St. Kilian Spanish Community</title>
        <meta
          name="description"
          content="Get in touch with the St. Kilian Spanish Community. We're here to answer your questions and welcome you."
        />
      </Head>

       <MiniJumbo
              images={[
                "/images/familia/familia.jpg",
                "/images/familia/familia2.jpg",
                "/images/familia/familia3.jpg",
              ]}
              title="Contact Us"
            />

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-6">
              If you have any questions or need more information about our parish, services, or sacraments,
              please don't hesitate to reach out. You should receive an email response within 24–48 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
              <p className="text-sm text-gray-600">{status}</p>
            </form>
          </div>

          {/* Google Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <iframe
              src="https://www.google.com/maps?q=50+Cherry+St,+Farmingdale,+NY+11735,+USA&output=embed"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="rounded-lg shadow-md"
              title="St. Kilian Parish Map"
            ></iframe>
            <p className="mt-4 text-gray-700">
              St. Kilian Parish<br />
              50 Cherry St, Farmingdale, NY 11735, United States
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// MUST DO ON THIS COMPONENT:
// --------------------------------------
// Add Email.js with autoresponse and CC
// Added a comment