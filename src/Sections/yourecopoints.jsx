import React from 'react';

const EcoPointsStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

      {/* Total Points Card */}
      <div className="bg-green-50 dark:bg-neutral-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Points</h3>
          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-green-600 dark:text-green-500">750</span>
          <span className="ml-2 text-gray-500 dark:text-gray-400">eco points</span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Level 3 Eco Warrior</span>
          <button className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 flex items-center">
            View History
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Points to Next Level */}
      <div className="bg-green-50 dark:bg-neutral-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Next Level</h3>
          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-green-600 dark:text-green-500">250</span>
            <span className="ml-2 text-gray-500 dark:text-gray-400">points needed</span>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2.5">
              <div className="bg-green-600 dark:bg-green-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>Level 3</span>
              <span>Level 4 (1000 pts)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Available for Redemption */}
      <div className="bg-green-50 dark:bg-neutral-800 rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Available to Redeem</h3>
          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-green-600 dark:text-green-500">600</span>
          <span className="ml-2 text-gray-500 dark:text-gray-400">eco points</span>
        </div>
        <div className="mt-4">
          <a
            href="#rewards-marketplace"
            className="block text-center bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white py-2 rounded-lg transition duration-300 text-sm font-medium"
          >
            Redeem Points Now
          </a>
        </div>
      </div>

    </div>
  );
};

export default EcoPointsStats;
