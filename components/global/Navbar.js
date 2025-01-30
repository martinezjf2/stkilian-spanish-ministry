import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons for hamburger and close

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-black">
      <div className="max-w-10xl px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Left section: Logo and Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Seguidores De Jesus
          </Link>

          {/* Main menu links (hidden on mobile, shown on larger screens) */}
          <div className={`hidden lg:flex space-x-5`}>
            <Link href="/" className="px-5 py-2 hover:underline">
              Home
            </Link>
            <Link href="/about" className="px-5 py-2 hover:underline">
              About
            </Link>
            <Link href="/resources" className="px-5 py-2 hover:underline">
              Resources
            </Link>

            {/* Dropdown for Groups */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-5 py-2 hover:underline"
              >
                Groups ▼
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-40 bg-white text-black shadow-md rounded-md z-10">
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

            <Link href="/events" className="px-5 py-2 hover:underline">
              Events
            </Link>
            <Link href="/links" className="px-5 py-2 hover:underline">
              Links
            </Link>
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="lg:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile dropdown menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:hidden space-y-3 mt-4`}
        >
          <Link href="/" className="block px-5 py-2 hover:underline">
            Home
          </Link>
          <Link href="/about" className="block px-5 py-2 hover:underline">
            About
          </Link>
          <Link href="/resources" className="block px-5 py-2 hover:underline">
            Resources
          </Link>
          <Link href="/groups" className="block px-5 py-2 hover:underline">
            Groups
          </Link>
          <Link href="/events" className="block px-5 py-2 hover:underline">
            Events
          </Link>
          <Link href="/links" className="block px-5 py-2 hover:underline">
            Links
          </Link>
        </div>

        {/* Right section */}
        <div className={`${menuOpen ? "block" : "hidden"} lg:block space-x-5`}>
          <Link
            href="/language"
            className="block md:inline-block px-5 py-2 hover:underline"
          >
            Language
          </Link>
          <Link
            href="/login"
            className="block md:inline-block px-5 py-2 hover:underline"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
}
