"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // NextAuth Sign In
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      setError("Invalid email or password!");
      setLoading(false);
    } else {
      router.push("/products"); 
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg transition-colors duration-300 px-4">
      <div className="max-w-md w-full bg-white dark:bg-dark-surface p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
        
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="bg-agri-olive w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-3">
             <FaLeaf className="text-2xl -rotate-12" />
          </div>
          <h2 className="text-2xl font-bold text-agri-olive dark:text-white">Welcome Back</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Login to manage your agricultural products</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="admin@agrimart.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-agri-olive focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="password123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-agri-olive focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-agri-olive hover:bg-agri-brown text-white font-bold py-2.5 rounded-lg transition duration-300 shadow-md disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* Mock Credentials Hint */}
        <div className="mt-6 text-center text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <p className="font-semibold">Test Credentials:</p>
          <p>Email: admin@agrimart.com</p>
          <p>Password: password123</p>
        </div>

        <div className="mt-4 text-center">
             <Link href="/" className="text-sm text-agri-olive hover:underline">
                Back to Home
             </Link>
        </div>
      </div>
    </div>
  );
}