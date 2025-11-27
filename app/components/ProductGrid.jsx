//app/components/ProductGrid
"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://lapto-server.vercel.app/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p className="p-8 text-center">Loading products...</p>;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id || product.id} 
          product={product}
          showViewDetails={true} 
        />
      ))}
    </div>
  );
}
