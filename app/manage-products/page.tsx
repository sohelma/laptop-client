"use client";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config.js";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProductCard from "../components/ProductCard";

export default function ManageProductsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null); // <-- type fix
  const [products, setProducts] = useState<any[]>([]); // <-- type fix
  const [loading, setLoading] = useState(true);

  // Authentication check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/login");
      else setUser(currentUser);
    });
    return () => unsubscribe();
  }, [router]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://lapto-server.vercel.app/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err: any) {
        toast.error(err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`https://lapto-server.vercel.app/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      setProducts(products.filter((p) => p._id !== id));
      toast.success("Product deleted");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  if (!user) return <p className="p-8">Loading user...</p>;
  if (loading) return <p className="p-8">Loading products...</p>;

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Manage Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={() => router.push(`/products/${product._id}/edit`)}
            onDelete={() => handleDelete(product._id)}
          />
        ))}
      </div>
    </div>
  );
}
