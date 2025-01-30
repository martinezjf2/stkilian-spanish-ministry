import React from "react";

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
                <a href="/movements/youth-ministry" className="hover:underline">
                  Youth Ministry
                </a>
              </li>
              <li>
                <a
                  href="/movements/family-ministry"
                  className="hover:underline"
                >
                  Family Ministry
                </a>
              </li>
              <li>
                <a
                  href="/movements/charismatic-renewal"
                  className="hover:underline"
                >
                  Charismatic Renewal
                </a>
              </li>
              <li>
                <a
                  href="/movements/missionary-outreach"
                  className="hover:underline"
                >
                  Missionary Movements
                </a>
              </li>
              <li>
                <a href="/movements/lectors" className="hover:underline">
                  Lectors
                </a>
              </li>
              <li>
                <a href="/movements/hospitality" className="hover:underline">
                  Hospitality
                </a>
              </li>
              <li>
                <a href="/movements/guadalupen" className="hover:underline">
                  Guadalupen
                </a>
              </li>
              <li>
                <a href="/movements/alter" className="hover:underline">
                  Alter
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/links/diocesan-website" className="hover:underline">
                  Diocesan Website
                </a>
              </li>
              <li>
                <a
                  href="/links/liturgical-calendar"
                  className="hover:underline"
                >
                  Liturgical Calendar
                </a>
              </li>
              <li>
                <a href="/links/bible-online" className="hover:underline">
                  Bible Online
                </a>
              </li>
              <li>
                <a href="/links/daily-readings" className="hover:underline">
                  Daily Readings
                </a>
              </li>
            </ul>
          </div>

          {/* Videos */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="/resources/blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="/resources/testimonies" className="hover:underline">
                  Testimonies
                </a>
              </li>
              <li>
                <a
                  href="/resources/faith-formation"
                  className="hover:underline"
                >
                  Faith Formation
                </a>
              </li>
              <li>
                <a
                  href="/resources/community-events"
                  className="hover:underline"
                >
                  Community Events
                </a>
              </li>
              <li>
                <a
                  href="/resources/weddings"
                  className="hover:underline"
                >
                  Weddings
                </a>
              </li>
              <li>
                <a
                  href="/resources/quincenera"
                  className="hover:underline"
                >
                  Quinceñera
                </a>
              </li>
            </ul>
          </div>

          {/* Registration Forms */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Registration Forms</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/forms/baptism-registration"
                  className="hover:underline"
                >
                  Baptism Registration
                </a>
              </li>
              <li>
                <a href="/forms/first-communion" className="hover:underline">
                  First Communion
                </a>
              </li>
              <li>
                <a href="/forms/confirmation" className="hover:underline">
                  Confirmation
                </a>
              </li>
              <li>
                <a
                  href="/forms/retreat-registration"
                  className="hover:underline"
                >
                  R.I.C.A
                </a>
              </li>
              <li>
                <a href="/forms/volunteer" className="hover:underline">
                  Volunteer
                </a>
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
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
