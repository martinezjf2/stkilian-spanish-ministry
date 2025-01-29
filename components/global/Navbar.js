import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex justify-between p-7 bg-gray-100">
      {/* Left section */}
      <div className="flex space-x-5">
        <Link href="/" className="px-5 hover:underline">
          Home
        </Link>
        <Link href="/about" className="px-5 hover:underline">
          About
        </Link>
        <Link href="/resources" className="px-5 hover:underline">
          Resources
        </Link>

        {/* Dropdown for Groups */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-5 hover:underline"
          >
            Groups ▼
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
              <Link
                href="/groups/option1"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Group 1
              </Link>
              <Link
                href="/groups/option2"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Group 2
              </Link>
              <Link
                href="/groups/option3"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Group 3
              </Link>
            </div>
          )}
        </div>

        <Link href="/events" className="px-5 hover:underline">
          Events
        </Link>
        <Link href="/links" className="px-5 hover:underline">
          Links
        </Link>
      </div>

      {/* Right section */}
      <div className="flex space-x-5">
        <Link href="/language" className="px-5 hover:underline">
          Language
        </Link>
        <Link href="/login" className="px-5 hover:underline">
          Log In
        </Link>
      </div>
    </div>
  );
}
