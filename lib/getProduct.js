
//client   lib/get/products.js

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // https://lapto-server.vercel.app

export default async function getProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/api/products/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("getProduct error:", error);
    return null;
  }
}
