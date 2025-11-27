"use client";

import { FaShippingFast, FaDollarSign, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaShippingFast size={30} className="text-blue-600" />,
      title: "Fast Delivery",
      description: "Get your laptop delivered quickly and safely.",
    },
    {
      icon: <FaDollarSign size={30} className="text-green-600" />,
      title: "Best Price",
      description: "Competitive prices for all laptop models.",
    },
    {
      icon: <FaShieldAlt size={30} className="text-purple-600" />,
      title: "Warranty",
      description: "1-year warranty for all our products.",
    },
    {
      icon: <FaHeadset size={30} className="text-pink-600" />,
      title: "24/7 Support",
      description: "We are here to help anytime you need.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl text-sky-500 font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
