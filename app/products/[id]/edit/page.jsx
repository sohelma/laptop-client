// app/products/[id]/edit/page.jsx


"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation"; // ✅ useParams
import toast from "react-hot-toast";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams(); // ✅ get id from URL

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://lapto-server.vercel.app/api/products/${id}`);
        const data = await res.json();

        setForm({
          title: data.title,
          shortDesc: data.shortDesc,
          fullDesc: data.fullDesc,
          price: data.price,
          image: data.image || "",
        });
      } catch (err) {
        toast.error("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct(); // ✅ only fetch if id exists
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://lapto-server.vercel.app/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to update product");
      toast.success("Product updated!");
      router.push("/manage-products");
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) return <p className="p-8">Loading Product...</p>;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="title" value={form.title} onChange={handleChange} className="border px-3 py-2 rounded" />
        <textarea name="shortDesc" value={form.shortDesc} onChange={handleChange} className="border px-3 py-2 rounded" />
        <textarea name="fullDesc" value={form.fullDesc} onChange={handleChange} className="border px-3 py-2 rounded" />
        <input name="price" type="number" value={form.price} onChange={handleChange} className="border px-3 py-2 rounded" />
        <input name="image" value={form.image} onChange={handleChange} className="border px-3 py-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
      </form>
    </div>
  );
}
