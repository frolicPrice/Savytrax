// /pages/premium-membership.tsx
import React from "react";

const PremiumMembership = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-extrabold text-primary mb-6 flex items-center">
        💎 Premium Membership
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Upgrade to <span className="font-semibold text-primary">Premium Membership</span> and enjoy a host of exclusive benefits tailored to enhance your shopping experience.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">✨ Benefits of Premium Membership:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-medium">Priority Customer Support:</span> Get 24/7 assistance with priority response times.</li>
          <li><span className="font-medium">Exclusive Discounts:</span> Enjoy special pricing on select products.</li>
          <li><span className="font-medium">Early Access to Sales:</span> Be the first to grab limited-time deals and promotions.</li>
          <li><span className="font-medium">Unlimited Product Tracking:</span> Monitor unlimited product price fluctuations.</li>
          <li><span className="font-medium">Ad-Free Experience:</span> Browse the platform without any interruptions.</li>
          <li><span className="font-medium">Personalized Deal Alerts:</span> Get notifications for exclusive deals matching your interests.</li>
        </ul>
      </div>
      <div className="text-center">
        <button className="bg-primary text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-primary-dark transition">
          Upgrade to Premium
        </button>
        <p className="mt-4 text-sm text-gray-600">Cancel anytime. 100% satisfaction guaranteed.</p>
      </div>
    </div>
  );
};

export default PremiumMembership;
