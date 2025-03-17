import React from 'react';

const NotificationPanel = ({ notifications, onViewAll }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Live Notifications</h2>
      </div>
      
      {notifications.map((notification, index) => (
        <div key={index} className="bg-gray-50 rounded p-4 mb-3 border border-gray-100">
          <div className="font-bold mb-1">{notification.title}</div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{notification.details}</span>
            <span>{notification.icon}</span>
          </div>
        </div>
      ))}
      
      <button 
        onClick={onViewAll}
        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
      >
        View All Notifications
      </button>
    </div>
  );
};

export default NotificationPanel;