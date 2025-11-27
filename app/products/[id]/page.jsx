"use client";

import { useEffect, useState } from "react";

export default function ProductDetailPage({ params }) {
  const id = params?.id; // unwrap safely

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return; // id না থাকলে skip
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.fullDesc}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
