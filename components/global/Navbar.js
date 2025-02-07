import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [textColorWhite, setTextColorWhite] = useState(false);

  const backgroundImageHeight = 850; // Adjust based on your background image height

  // Handle navbar visibility and text color based on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Change text color when scrolling past the background image
      if (window.scrollY > backgroundImageHeight) {
        setTextColorWhite(true);
      } else {
        setTextColorWhite(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-transparent fixed backdrop-blur-md bg-white/05 transition-all duration-500 left-0 w-full z-50 px-10 py-2`}
    >
      <div
        className={`max-w-10xl px-6 md:px-12 py-4 flex justify-between items-center ${
          textColorWhite ? "text-black" : "text-white"
        }`}
      >
        {/* Left section: Logo and Links */}
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="text-2xl font-bold transform md:hover:-translate-y-1 transition duration-300"
          >
            Seguidores De Jesus
          </Link>

          {/* Main menu links */}
          <div className="hidden lg:flex space-x-5">
            <Link
              href="/"
              className="px-2 py-2 transform md:hover:-translate-y-1 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-2 py-2 transform md:hover:-translate-y-1 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/resources"
              className="px-2 py-2 transform md:hover:-translate-y-1 transition duration-300"
            >
              Resources
            </Link>

            {/* Dropdown for Groups */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-2 py-2 transform md:hover:-translate-y-1 transition duration-300"
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

            <Link
              href="/resources/community-events"
              className="px-2 py-2 transform md:hover:-translate-y-1 transition duration-300"
            >
              Events
            </Link>
          </div>
        </div>

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
          <Link href="/movements" className="block px-5 py-2 hover:underline">
            Groups
          </Link>
          <Link href="/events" className="block px-5 py-2 hover:underline">
            Events
          </Link>

          <Link href="/language" className="block px-5 py-2 hover:underline">
            Language
          </Link>
          <Link href="/login" className="block px-5 py-2 hover:underline">
            Log In
          </Link>
        </div>

        {/* Right section */}
        <div className={`${menuOpen ? "block" : "hidden"} lg:block space-x-5`}>
          <Link
            href="/language"
            className="block md:inline-block px-2 py-2 transform md:hover:-translate-y-1 transition duration-300"
          >
            Language
          </Link>
          <Link
            href="/login"
            className="block md:inline-block px-2 py-2 transform md:hover:-translate-y-1 transition duration-300"
          >
            Log In
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
