"use client";

import ProductGrid from "../../components/ProductGrid";

export default function ProductsListPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <p className="text-gray-600 mb-6">
        Browse all our laptops and electronics. Click "View Details" for more info.
      </p>

      {/* ProductGrid */}
      <ProductGrid />
    </div>
  );
}
