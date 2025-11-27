"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config"; // ✅ Correct path
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
            <Link href="/">LAPTOP STORE</Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/products/list" className="hover:text-blue-500">Items</Link>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 btn btn-ghost"
                >
                  {user.email}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md flex flex-col">
                    <Link href="/add-product" className="px-4 py-2 hover:bg-gray-100">Add Product</Link>
                    <Link href="/manage-products" className="px-4 py-2 hover:bg-gray-100">Manage Products</Link>
                    <button onClick={handleLogout} className="text-left px-4 py-2 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="btn btn-primary btn-sm">Login</Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="btn btn-ghost">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {dropdownOpen && (
          <div className="md:hidden flex flex-col gap-2 mt-2">
            <Link href="/" className="px-4 py-2 hover:bg-gray-100">Home</Link>
            <Link href="/items" className="px-4 py-2 hover:bg-gray-100">Items</Link>
            <Link href="/about" className="px-4 py-2 hover:bg-gray-100">About</Link>
            <Link href="/contact" className="px-4 py-2 hover:bg-gray-100">Contact</Link>

            {user ? (
              <>
                <Link href="/add-product" className="px-4 py-2 hover:bg-gray-100">Add Product</Link>
                <Link href="/manage-products" className="px-4 py-2 hover:bg-gray-100">Manage Products</Link>
                <button onClick={handleLogout} className="px-4 py-2 hover:bg-gray-100 text-left">Logout</button>
              </>
            ) : (
              <Link href="/login" className="px-4 py-2 hover:bg-gray-100">Login</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
