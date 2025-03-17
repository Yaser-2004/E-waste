import React from 'react';

const CompanyFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-800 text-gray-300 text-center py-3 mt-5">
      © {currentYear} E-Waste Management Platform
    </footer>
  );
};
    
export default CompanyFooter;