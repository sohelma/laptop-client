
// app/components/ProtectedRoute.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children, isLoggedIn }) {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login"); // লগইন না থাকলে /login এ redirect
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null; // লগইন না হলে কিছু render হবে না

  return <>{children}</>;
}
