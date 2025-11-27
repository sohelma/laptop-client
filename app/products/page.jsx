//app/produts/page.jsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://lapto-server.vercel.app/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, price: Number(form.price) }),
      });

      const data = await res.json();
      toast.success(data.message); // Toast success
      router.push("/items"); // Redirect after add
    } catch (err) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="input input-bordered"
        />
        <input
          name="shortDesc"
          value={form.shortDesc}
          onChange={handleChange}
          placeholder="Short Description"
          className="input input-bordered"
        />
        <textarea
          name="fullDesc"
          value={form.fullDesc}
          onChange={handleChange}
          placeholder="Full Description"
          className="textarea textarea-bordered"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered"
        />
        <button type="submit" className="btn btn-primary mt-2">
          Add Product
        </button>
      </form>
    </div>
  );
}
