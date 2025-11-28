//app/login/paage.jsx
"use client";
import { useState } from "react";
import { auth, googleProvider } from "../firebase/firebase.config"; 
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Logged in successfully!");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`Welcome ${result.user.displayName || result.user.email}!`);
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      toast.error("Please enter your email first!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, formData.email);
      toast.success("Password reset email sent!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 bg-gradient-to-b from-indigo-400 to-blue-100">
      <div className="max-w-md w-full bg-gradient-to-b from-indigo-400 to-blue-100 p-8 rounded-md shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-700">Wellcome to <br />LAPTOP STORE</h1>
  

        {/* Login Form */}
        <form className="flex flex-col gap-4  " onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            required
          />

          <button
            type="submit"
            className="border border-blue-500 text-blue-700 font-bold hover:bg-blue-50 rounded-md py-2 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between mt-2 text-sm text-pink-500 font-bold">
          <Link href="/register" className="hover:underline">Register</Link>
          <button onClick={handleForgotPassword} className="hover:underline">Forgot Password?</button>
        </div>

      

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 border border-gray-200 rounded-md w-full p-2 hover:bg-gray-100 transition mt-2"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
