import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Movements */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Movements</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/movements/youth-ministry"
                  className="hover:underline"
                >
                  Youth Ministry
                </Link>
              </li>
              <li>
                <Link
                  href="/movements/family-ministry"
                  className="hover:underline"
                >
                  Family Ministry
                </Link>
              </li>
              <li>
                <Link href="/movements/renovation" className="hover:underline">
                  Charismatic Renewal
                </Link>
              </li>
              <li>
                <Link href="/movements/lectors" className="hover:underline">
                  Lectors
                </Link>
              </li>
              <li>
                <Link href="/movements/hospitality" className="hover:underline">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="/movements/guadalupen" className="hover:underline">
                  Guadalupen
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.drvc.org"
                  className="hover:underline"
                  target="_blank"
                >
                  Diocesan Website
                </Link>
              </li>
              <li>
                <Link href="/resources/calendar" className="hover:underline">
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/community-events"
                  className="hover:underline"
                >
                  Community Events
                </Link>
              </li>
              <li>
                <Link href="/resources/readings" className="hover:underline">
                  Daily Readings
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/weekly-bulletin"
                  className="hover:underline"
                >
                  Weekly Bulletin
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/blogs" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/testimonies" className="hover:underline">
                  Testimonies
                </Link>
              </li>
              <li>
                <Link href="/resources/weddings" className="hover:underline">
                  Weddings
                </Link>
              </li>
              <li>
                <Link href="/resources/quincenera" className="hover:underline">
                  Quinceñera
                </Link>
              </li>
              <li>
                <Link
                  href="https://bishopbarres.com"
                  className="hover:underline"
                  target="_blank"
                >
                  Our Bishop
                </Link>
              </li>
            </ul>
          </div>

          {/* Registration Forms */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Registration Forms</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/sacraments" className="hover:underline">
                  Sacraments
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/forms/baptism-registration"
                  className="hover:underline"
                >
                  Baptism Registration
                </Link>
              </li>
              <li>
                <Link href="/forms/first-communion" className="hover:underline">
                  First Communion
                </Link>
              </li>
              <li>
                <Link href="/forms/confirmation" className="hover:underline">
                  Confirmation
                </Link>
              </li> */}
              <li>
                <Link href="/forms/rcia" className="hover:underline">
                  R.I.C.A
                </Link>
              </li>
              <li>
                <Link href="/movements/alter" className="hover:underline">
                  Alter
                </Link>
              </li>
              <li>
                <Link href="/forms/volunteer" className="hover:underline">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2025 Seguidores de Jesus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="text-gray-400 hover:text-white">
              Facebook
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              Twitter
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              LinkedIn
            </Link>
            <Link href="/" className="text-gray-400 hover:text-white">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
