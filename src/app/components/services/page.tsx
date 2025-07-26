import { ArrowRight, Phone, Star } from "lucide-react";
import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete door solutions from consultation to installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Free Consultation
            </h3>
            <p className="text-gray-600">
              Get expert advice on choosing the right doors for your space and
              budget.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Professional Installation
            </h3>
            <p className="text-gray-600">
              Our skilled technicians ensure perfect installation for optimal
              performance.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Warranty & Support
            </h3>
            <p className="text-gray-600">
              Comprehensive warranty and ongoing support for peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
