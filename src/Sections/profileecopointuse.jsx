import React from "react";

// ✅ Reusable Reward Card Component
const RewardCard = ({ icon, title, description, points }) => (
  <div className="bg-white dark:bg-neutral-700 rounded-lg shadow overflow-hidden">
    <div className="p-4">
      <div className="h-36 bg-gray-200 dark:bg-neutral-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-green-600 dark:text-green-400">{points} points</span>
        <button className="px-3 py-1 text-xs bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white rounded transition duration-300">
          Redeem
        </button>
      </div>
    </div>
  </div>
);

// ✅ Main Rewards Section Component
const RewardsSection = () => {
  const rewards = [
    {
      title: "Eco Store Voucher",
      description: "$25 gift card for sustainable products",
      points: 500,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: "Online Gift Card",
      description: "₹500 card for popular retailers",
      points: 300,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: "Tree Planting",
      description: "Plant 5 trees in your name",
      points: 250,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-green-50 dark:bg-neutral-800 rounded-xl p-6 shadow-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">Popular Rewards</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Redeem your points for these eco-friendly rewards</p>
        </div>
        <a href="#rewards-marketplace" className="mt-4 md:mt-0 inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
          View All Rewards
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rewards.map((reward, index) => (
          <RewardCard key={index} {...reward} />
        ))}
      </div>
    </div>
  );
};

export default RewardsSection;
