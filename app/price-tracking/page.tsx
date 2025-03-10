"use client";

import React, { useState, useEffect } from "react";
import ProductItem from "@/components/ProductItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  imageUrl: string;
  domain: string;
  currentPrice: string;
  url: string;
}

const PriceTrackingPage = () => {
  const [trackedProducts, setTrackedProducts] = useState<Product[]>([]);
  const [url, setUrl] = useState("");

  const fetchTrackedProducts = async () => {
    try {
      const res = await fetch("/api/get-tracked-products");
      if (!res.ok) throw new Error("Failed to fetch tracked products");
      const data = await res.json();
      if (Array.isArray(data.products)) {
        setTrackedProducts(data.products);
      } else {
        console.error("Invalid data format: Expected 'products' array");
      }
    } catch (error) {
      toast.error("Error fetching tracked products.");
    }
  };

  useEffect(() => {
    fetchTrackedProducts();
  }, []);

  const trackProduct = async () => {
    try {
      const res = await fetch("/api/track-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (res.ok) {
        setTrackedProducts([...trackedProducts, data.product]);
        setUrl("");
        toast.success("Product successfully tracked!");
      } else {
        toast.error(data.error || "Error tracking product.");
      }
    } catch (error) {
      toast.error("Failed to track product.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl shadow-2xl">
      <h1 className="text-5xl font-extrabold text-center mb-8">📦 Price Tracker</h1>
      <p className="text-xl text-center mb-10">
        Track prices of your favorite products from <span className="font-semibold">Ajio, Myntra, Flipkart, or Walmart</span>.
      </p>

      <div className="mb-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">🔗 Add a Product URL</h2>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="text"
            value={url}
            placeholder="Enter product URL"
            className="border-2 border-gray-300 rounded-2xl p-4 w-4/5 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-gray-800 placeholder-gray-500"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="bg-indigo-600 text-white px-6 py-4 rounded-2xl shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            onClick={trackProduct}
          >
            🚀 Track Price
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">📊 Tracked Products:</h2>
        {trackedProducts.length === 0 ? (
          <p className="text-center text-gray-600">No products being tracked yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trackedProducts.map((product, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Toast Container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default PriceTrackingPage;
