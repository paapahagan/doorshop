import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Decorivoo Interior</h3>
            <p className="text-gray-400">
              Your trusted partner for premium doors and professional
              installation services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Entry Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Interior Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Patio Doors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Garage Doors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Installation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Repair
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(555) 123-4567</li>
              <li>info@decorivoointerior.com</li>
              <li>123 Door Street</li>
              <li>City, State 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Decorivoo Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
