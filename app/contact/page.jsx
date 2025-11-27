//app/contact/page.jsx
"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields!");
      return;
    }
    // Send message logic here (API call)
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6 bg-gradient-to-b from-indigo-400 to-blue-100">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-gray-700 text-center">
        Have a question or suggestion? We would love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6 text-gray-700 space-y-2">
        <p><strong>Email:</strong> support@laptop-store.com</p>
        <p><strong>Phone:</strong> +880 1234 567890</p>
        <p><strong>Address:</strong> 123, Badda Street, Dhaka, Bangladesh</p>
      </div>
    </div>
  );
}
