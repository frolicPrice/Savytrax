import React from 'react';

const SubscriptionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Header */}
      <div className="max-w-3xl text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-900">✨ Subscription & Premium Features</h1>
        <p className="text-lg text-gray-700 mt-2">Unlock exclusive benefits and enhance your shopping experience.</p>
      </div>
      
      {/* Features Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl w-full space-y-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">💎 Premium Membership</h2>
          <p className="text-gray-700">Get exclusive deals, an ad-free experience, and priority alerts.</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">🎁 Early Access to Deals</h2>
          <p className="text-gray-700">Paid subscribers get notified of discounts before others.</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">📦 Unlimited Product Tracking</h2>
          <p className="text-gray-700">Track unlimited products and get updates on your price changes.</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800">🔔 Stock Availability Alerts</h2>
          <p className="text-gray-700">Premium users are notified first when an out-of-stock product is back.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300 text-lg">
          🚀 Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPage;