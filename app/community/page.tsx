"use client";

import React from "react";


import Link from "next/link";

const Community = () => {
  return (
    <>
      <div className="container mx-auto p-6 max-w-5xl">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-6">💬 Price Tracker Community</h1>
        <p className="text-lg text-center mb-8">
          Join our community and discuss the best deals, track prices, share your findings, and connect with fellow deal hunters! 
          Whether you're looking for great discounts or want to learn more about price tracking, this is the place to be.
        </p>

        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Latest Discussions Section */}
          <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Latest Discussions</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/community/topic/1" className="text-blue-600 hover:underline font-medium">
                  Discussing the Best Amazon Deals This Week
                </Link>
              </li>
              <li>
                <Link href="/community/topic/2" className="text-blue-600 hover:underline font-medium">
                  eBay Price Drop Alerts - What’s Hot Right Now
                </Link>
              </li>
              <li>
                <Link href="/community/topic/3" className="text-blue-600 hover:underline font-medium">
                  How to Use Price Tracking Tools Effectively
                </Link>
              </li>
            </ul>
          </div>

          {/* Why Join Section */}
          <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Why Join Our Community?</h2>
            <ul className="space-y-3">
              <li>🔍 Find the best price drops across major platforms like Amazon, eBay, Walmart, and more.</li>
              <li>💬 Share your insights and tips with other price trackers.</li>
              <li>🎁 Get exclusive access to discounts, giveaways, and special offers!</li>
              <li>🚀 Enhance your shopping experience by tracking products and price fluctuations in real-time.</li>
            </ul>
          </div>

          {/* Community Guidelines Section */}
          <div className="border p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Community Guidelines</h2>
            <p className="mb-4 text-lg">
              To ensure a positive and constructive environment, please follow these guidelines:
            </p>
            <ul className="space-y-2">
              <li>🚫 No spam or irrelevant content.</li>
              <li>💬 Be respectful to all members of the community.</li>
              <li>🌟 Share valuable insights and help others learn.</li>
              <li>🛒 Keep discussions focused on price tracking, deals, and shopping tips.</li>
            </ul>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Ready to Join the Conversation?</h2>
          <p className="text-lg mb-6">
            If you haven't already, sign up today and start contributing to the discussion. 
            Share your favorite deals, learn from others, and be part of the community!
          </p>
          <Link
            href="/signup"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-700 transition"
          >
            Join the Community
          </Link>
        </div>
      </div>
    </>
  );
};

export default Community;
