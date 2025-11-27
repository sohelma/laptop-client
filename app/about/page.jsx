//app/about/page.jsx
"use client";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6 bg-gradient-to-b from-indigo-400 to-blue-100">
      <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
      
      <p className="text-gray-700 text-lg leading-relaxed">
        Welcome to <span className="font-semibold">Your Company</span>! We are committed to providing 
        high-quality products and exceptional customer service. Our mission is to make your life 
        easier with reliable and innovative solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6 ">
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-indigo-200">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To be a leading provider of quality electronics, making technology accessible to everyone.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition bg-indigo-200">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Deliver innovative and reliable products that bring value and convenience to our customers.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>High-quality products</li>
          <li>Excellent customer support</li>
          <li>Fast delivery</li>
          <li>Trusted by thousands of customers</li>
        </ul>
      </div>
    </div>
  );
}
