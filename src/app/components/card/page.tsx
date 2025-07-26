"use client";

import React, { useState } from "react";

export default function Card() {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    {
      id: 1,
      name: "Premium Entry Doors",
      image: "/doors/1.jpg",
      price: "From $1,299",
      features: [
        "Solid wood construction",
        "Weather resistant",
        "Custom finishes available",
      ],
    },
    {
      id: 2,
      name: "Interior Doors",
      image: "./doors/2.jpeg",
      price: "From $299",
      features: ["Modern designs", "Various materials", "Easy installation"],
    },
    {
      id: 3,
      name: "Patio Doors",
      image: "./doors/3.jpeg",
      price: "From $899",
      features: ["Energy efficient", "Security locks", "Smooth operation"],
    },
    {
      id: 4,
      name: "Garage Doors",
      image: "./doors/4.jpeg",
      price: "From $799",
      features: ["Automatic openers", "Insulated options", "Smart home ready"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive selection of doors designed to meet all
            your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() =>
                    setSelectedImage({ src: product.image, alt: product.name })
                  }
                />
                <div className="text-gray-400 text-sm hidden">
                  Image not available
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  {product.price}
                </p>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-gray-600 text-sm flex items-center"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
