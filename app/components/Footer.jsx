"use client";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 bg-gradient-to-b from-indigo-800 to-blue-500">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-xl font-bold mb-3 text-white">Laptop Store</h3>
          <p className="text-sm">Best laptops at affordable prices.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/products">All Products</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-white transition cursor-pointer" />
            <FaInstagram className="hover:text-white transition cursor-pointer" />
            <FaYoutube className="hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-red-200 mt-8">
        © {new Date().getFullYear()} Laptop Store. All rights reserved.
      </p>
    </footer>
  );
}
