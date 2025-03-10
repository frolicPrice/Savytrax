"use client";

import React, { useState } from "react";

const EarlyAccess = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Header */}
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
          🎁 Get Early Access to Exclusive Deals!
        </h1>
        <p className="text-lg text-gray-700">
          Unlock premium discounts and get notified about upcoming sales before anyone else.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mt-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">🔥 Benefits of Early Access</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center"><span className="text-blue-600 text-lg mr-2">✔️</span><strong>Early Bird Discounts:</strong> Get up to <span className="text-blue-500 font-bold">50% off</span> before deals go public.</li>
          <li className="flex items-center"><span className="text-blue-600 text-lg mr-2">✔️</span><strong>Exclusive Promo Codes:</strong> Special discounts only for early access members.</li>
          <li className="flex items-center"><span className="text-blue-600 text-lg mr-2">✔️</span><strong>Priority Notifications:</strong> Be the first to know about flash sales & limited-time offers.</li>
          <li className="flex items-center"><span className="text-blue-600 text-lg mr-2">✔️</span><strong>Limited Stock Alerts:</strong> Get alerts when high-demand items are back in stock.</li>
          <li className="flex items-center"><span className="text-blue-600 text-lg mr-2">✔️</span><strong>VIP Shopping Experience:</strong> Access members-only sales and hidden deals.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-6">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300"
          onClick={() => setShowModal(true)}
        >
          Get Early Access Now
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">🎉 You're In!</h2>
            <p className="text-gray-700 mb-4">Thank you for signing up for early access! Check your email for exclusive deals.</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mt-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">🌟 What Our Users Say</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
            "I saved ₹3,000 last month just by getting early access to deals. Totally worth it!" - <strong>Aditi P.</strong>
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
            "The exclusive coupons are a game-changer. I always get the best discounts!" - <strong>Rohan S.</strong>
          </blockquote>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mt-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="p-4 bg-gray-100 rounded-lg cursor-pointer">
            <summary className="font-semibold text-blue-700">How do I sign up for early access?</summary>
            <p className="mt-2 text-gray-700">Simply click the "Get Early Access Now" button and follow the steps.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg cursor-pointer">
            <summary className="font-semibold text-blue-700">Is early access free?</summary>
            <p className="mt-2 text-gray-700">Yes! Early access is currently available at no cost for premium users.</p>
          </details>
          <details className="p-4 bg-gray-100 rounded-lg cursor-pointer">
            <summary className="font-semibold text-blue-700">How will I receive notifications?</summary>
            <p className="mt-2 text-gray-700">You'll receive notifications via email and in your dashboard.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
