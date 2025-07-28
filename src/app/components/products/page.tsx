"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Grid, List, Search } from "lucide-react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const products = [
    {
      id: 1,
      name: "Premium Oak Entry Door",
      category: "entry",
      price: 1299,
      originalPrice: 1499,
      rating: 4.8,
      reviews: 124,
      image: "/doors/1.jpg",
      features: [
        "Solid oak construction",
        "Weather resistant finish",
        "Smart lock ready",
        "Energy efficient",
      ],
      description:
        "Elegant solid oak entry door with traditional craftsmanship and modern security features.",
      badge: "Best Seller",
      inStock: true,
    },
    {
      id: 2,
      name: "Modern Steel Entry Door",
      category: "entry",
      price: 899,
      rating: 4.6,
      reviews: 89,
      image: "/doors/2.jpeg",
      features: [
        "Steel construction",
        "Powder coat finish",
        "Multi-point locking",
        "Insulated core",
      ],
      description:
        "Contemporary steel entry door with sleek design and superior security.",
      badge: "New",
      inStock: true,
    },
    {
      id: 3,
      name: "Classic Mahogany Entry Door",
      category: "entry",
      price: 1899,
      rating: 4.9,
      reviews: 156,
      image: "/doors/3.jpeg",
      features: [
        "Genuine mahogany",
        "Hand-carved details",
        "Stained glass panels",
        "Custom hardware",
      ],
      description:
        "Luxurious mahogany entry door with intricate craftsmanship and timeless appeal.",
      badge: "Premium",
      inStock: true,
    },
    {
      id: 4,
      name: "Shaker Style Interior Door",
      category: "interior",
      price: 299,
      rating: 4.5,
      reviews: 67,
      image: "/doors/4.jpeg",
      features: [
        "Clean lines",
        "Solid wood frame",
        "Multiple finishes",
        "Easy installation",
      ],
      description:
        "Minimalist shaker style interior door perfect for modern homes.",
      inStock: true,
    },
    {
      id: 5,
      name: "French Interior Door",
      category: "interior",
      price: 449,
      rating: 4.7,
      reviews: 93,
      image: "/doors/5.jpeg",
      features: [
        "Glass panels",
        "Elegant design",
        "Natural wood",
        "Smooth operation",
      ],
      description:
        "Classic French interior door with glass panels to maximize light flow.",
      inStock: true,
    },
    {
      id: 6,
      name: "Barn Style Interior Door",
      category: "interior",
      price: 399,
      rating: 4.4,
      reviews: 45,
      image: "/doors/6.jpeg",
      features: [
        "Rustic design",
        "Sliding hardware",
        "Reclaimed wood look",
        "Space saving",
      ],
      description:
        "Trendy barn style sliding door with rustic charm and space-saving design.",
      inStock: false,
    },
    {
      id: 7,
      name: "Sliding Patio Door",
      category: "patio",
      price: 899,
      rating: 4.6,
      reviews: 78,
      image: "/doors/7.jpeg",
      features: [
        "Double glazed",
        "Smooth sliding",
        "Security locks",
        "Weather sealing",
      ],
      description:
        "Energy-efficient sliding patio door with smooth operation and security features.",
      inStock: true,
    },
    {
      id: 8,
      name: "French Patio Door",
      category: "patio",
      price: 1199,
      rating: 4.8,
      reviews: 102,
      image: "/doors/8.jpeg",
      features: [
        "Hinged design",
        "Wide opening",
        "Low-E glass",
        "Decorative grilles",
      ],
      description:
        "Elegant French patio door with wide opening and decorative glass panels.",
      badge: "Popular",
      inStock: true,
    },
    {
      id: 9,
      name: "Bi-fold Patio Door",
      category: "patio",
      price: 1599,
      rating: 4.9,
      reviews: 134,
      image: "/doors/9.jpeg",
      features: [
        "Accordion style",
        "Maximum opening",
        "Aluminum frame",
        "Multi-point locking",
      ],
      description:
        "Modern bi-fold patio door that opens up your entire wall space.",
      badge: "Premium",
      inStock: true,
    },
    {
      id: 10,
      name: "Insulated Garage Door",
      category: "garage",
      price: 799,
      rating: 4.5,
      reviews: 89,
      image: "/doors/10.jpeg",
      features: [
        "Insulated panels",
        "Quiet operation",
        "Remote control",
        "Safety features",
      ],
      description:
        "Energy-efficient insulated garage door with quiet operation and smart features.",
      inStock: true,
    },
    {
      id: 11,
      name: "Carriage Style Garage Door",
      category: "garage",
      price: 1299,
      rating: 4.7,
      reviews: 67,
      image: "/doors/11.jpeg",
      features: [
        "Traditional design",
        "Decorative hardware",
        "Wood appearance",
        "Durable construction",
      ],
      description:
        "Classic carriage style garage door with traditional charm and modern durability.",
      inStock: true,
    },
    {
      id: 12,
      name: "Modern Aluminum Garage Door",
      category: "garage",
      price: 1099,
      rating: 4.6,
      reviews: 56,
      image: "/doors/12.jpeg",
      features: [
        "Sleek design",
        "Glass panels",
        "Corrosion resistant",
        "Low maintenance",
      ],
      description:
        "Contemporary aluminum garage door with glass panels and modern aesthetics.",
      badge: "New",
      inStock: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    {
      id: "entry",
      name: "Entry Doors",
      count: products.filter((p) => p.category === "entry").length,
    },
    {
      id: "interior",
      name: "Interior Doors",
      count: products.filter((p) => p.category === "interior").length,
    },
    {
      id: "patio",
      name: "Patio Doors",
      count: products.filter((p) => p.category === "patio").length,
    },
    {
      id: "garage",
      name: "Garage Doors",
      count: products.filter((p) => p.category === "garage").length,
    },
  ];

  const sortOptions = [
    { id: "name", name: "Name" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "rating", name: "Rating" },
  ];

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory !== "all" && product.category !== selectedCategory)
        return false;
      if (
        searchTerm &&
        !product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false;

      // switch (priceRange) {
      //   case "under500":
      //     return product.price < 500;
      //   case "500-1000":
      //     return product.price >= 500 && product.price <= 1000;
      //   case "1000-1500":
      //     return product.price >= 1000 && product.price <= 1500;
      //   case "over1500":
      //     return product.price > 1500;
      //   default:
      //     return true;
      // }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  type Product = (typeof products)[number];

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setSelectedImage({ src: product.image, alt: product.name })
            }
          />
        </div>

        {product.badge && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
              product.badge === "Best Seller"
                ? "bg-green-500 text-white"
                : product.badge === "New"
                ? "bg-blue-500 text-white"
                : product.badge === "Premium"
                ? "bg-purple-500 text-white"
                : "bg-orange-500 text-white"
            }`}
          >
            {product.badge}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            ({product.reviews} reviews)
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

        {/* <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div> */}

        <ul className="space-y-1 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-gray-600 text-sm flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const ProductListItem = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex">
        <div className="w-48 h-32 bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden relative">
          <Image
            src={product.image}
            alt={product.name}
            width={192}
            height={128}
            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() =>
              setSelectedImage({ src: product.image, alt: product.name })
            }
          />
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {product.name}
            </h3>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-gray-600 mb-3">{product.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {product.features
                .slice(0, 4)
                .map((feature: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {feature}
                  </span>
                ))}
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r py-20 from-purple-400 to-purple-600 text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold">Our Products</h1>
          <p className="mt-2">
            Discover our complete range of premium doors for every need
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-3 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Categories
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {category.name} ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              {/* <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Price Range
                </h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.id}
                        checked={priceRange === range.id}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {range.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Controls */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} of {products.length}{" "}
                    products
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-700">Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-1 text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${
                        viewMode === "grid"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Grid size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${
                        viewMode === "list"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <List size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <ProductListItem key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-2">
                  No products found
                </div>
                <p className="text-gray-600">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>
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
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
