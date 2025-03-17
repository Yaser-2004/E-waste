import React from 'react';

const DashboardGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {children}
    </div>
  );
};

export default DashboardGrid;
