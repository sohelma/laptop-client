
"use client";

export default function PromoBanner() {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 text-center rounded-lg my-16">
      <h2 className="text-4xl font-bold mb-4">Save Big on Premium Laptops!</h2>
      <p className="mb-6 text-lg text bg-green-500">Get discounts up to 40% this month.</p>
      <a
        href="/products"
        className="bg-white text-blue-600 px-6 py-3 font-semibold rounded hover:bg-gray-100 transition"
      >
        Shop Now
      </a>
    </section>
  );
}
