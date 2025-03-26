// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';

// const NavItem = ({ to, icon, label }) => {
//   const location = useLocation();
//   const isActive = location.pathname === to;
  
//   return (
//     <NavLink
//       to={to}
//       className={`flex items-center px-5 py-4 text-gray-600 hover:bg-green-100 transition-colors ${
//         isActive ? 'bg-green-500 text-white' : ''
//       }`}
//     >
//       <span className="mr-4 text-lg w-6 text-center">{icon}</span>
//       {label}
//     </NavLink>
//   );
// };

// export default NavItem;

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