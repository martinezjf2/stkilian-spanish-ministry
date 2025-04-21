// components/SocialMediaInvite.js
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function SocialMediaInvite({
  facebook,
  instagram,
  youtube,
  twitter,
}) {
  return (
    <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Stay Connected With Us
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Follow us on social media to stay up to date with events,
          celebrations, and announcements from the St. Kilian Spanish Community.
        </p>

        <div className="mt-6 flex justify-center space-x-6">
          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <FaFacebookF />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 text-2xl"
            >
              <FaInstagram />
            </a>
          )}
          {youtube && (
            <a
              href={youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 text-2xl"
            >
              <FaYoutube />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-2xl"
            >
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
