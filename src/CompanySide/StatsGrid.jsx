import React from 'react';

const StatsGrid = ({ stats }) => {
  const getStatValueColor = (type) => {
    switch (type) {
      case 'pending':
        return 'text-red-400';
      case 'processing':
        return 'text-orange-400';
      case 'completed':
        return 'text-green-500';
      case 'points':
        return 'text-green-500';
      default:
        return '';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
          <div className={`text-3xl font-bold ${getStatValueColor(stat.type)}`}>
            {stat.value}
          </div>
          <div className="text-sm text-gray-500 mt-1">{stat.subtext}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;