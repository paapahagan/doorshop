import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r  py-20 from-purple-400 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Doors for Every Home
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your space with our high-quality doors. From elegant entry
            doors to functional interior solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              <Link href="/components/products">View Products </Link>
            </button>
            <button className="border-2 border-white  px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-blue-600 transition duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
