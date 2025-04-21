import React from "react";

export default function NewHere() {
    return (
      <>
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              New Here?
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              We’re so glad you’re here! Whether you’re visiting for the first
              time or looking to get more involved, we invite you to join our
              community and experience the love of Christ together.
            </p>
            <div className="mt-6">
              <a
                href="https://stkilian.com/join-our-parish"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition"
                target="_blank"
              >
                Register
              </a>
            </div>
          </div>
        </section>
      </>
    );
}