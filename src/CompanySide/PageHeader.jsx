import React from 'react';

const PageHeader = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default PageHeader;