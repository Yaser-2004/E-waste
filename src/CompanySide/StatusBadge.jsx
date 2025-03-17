import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'New':
      case 'Pending Pickup':
        return 'bg-blue-100 text-blue-700';
      case 'Scheduled':
      case 'Processing':
        return 'bg-yellow-50 text-yellow-600';
      case 'Completed':
        return 'bg-green-100 text-green-600';
      case 'Canceled':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs inline-block text-center min-w-24 ${getStatusClass()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
