import React from 'react';

const NotificationBell = ({ count = 1 }) => {
  return (
    <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center cursor-pointer relative">
      🔔
      {count > 0 && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
      )}
    </div>
  );
};

export default NotificationBell;