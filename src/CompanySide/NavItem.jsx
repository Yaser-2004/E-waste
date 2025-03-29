import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon, label, active, onClick, to }) => {
  return (
    <Link 
      to={to}
      className={`flex items-center px-4 py-3 transition-colors nav-item ${
        active ? 'bg-green-600 text-white ' : 'text-gray-700 hover:bg-green-100'
      }`}
      onClick={onClick}
    >
      <span className="mr-3">{getIcon(icon)}</span>
      <span>{label}</span>
    </Link>
  );
};

// Helper function to render icon
function getIcon(type) {
  // Add your icon rendering logic here
  return '📊'; // Placeholder
}

export default NavItem;