"use client";

import React, { useState } from "react";

const StockAlerts = () => {
  const [email, setEmail] = useState<string>("");
  const [product, setProduct] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    if (!email || !product) {
      alert("Please enter both email and product URL.");
      return;
    }
    setIsSubscribed(true);
    // Here you can also send an email notification to a database or backend service
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold text-primary mb-6 flex items-center">🔔 Stock Availability Alerts</h1>
      <p className="text-lg text-gray-700 mb-6">
        Never miss out on your favorite products again! Subscribe to stock alerts and get notified the moment they are back in stock.
      </p>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📩 Subscribe for Alerts</h2>
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          className="border p-3 rounded w-full mb-4 focus:ring-2 focus:ring-primary focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="url"
          value={product}
          placeholder="Enter product URL (Amazon, Flipkart, etc.)"
          className="border p-3 rounded w-full mb-4 focus:ring-2 focus:ring-primary focus:outline-none"
          onChange={(e) => setProduct(e.target.value)}
        />
        <button
          className="bg-primary text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-primary-dark transition w-full"
          onClick={handleSubscription}
        >
          ✅ Subscribe to Alerts
        </button>
      </div>
      
      {isSubscribed && (
        <p className="text-green-600 font-semibold text-center mt-4 bg-green-100 p-3 rounded-lg">
          🎉 You will be notified when the product is back in stock!
        </p>
      )}
    </div>
  );
};

export default StockAlerts;
