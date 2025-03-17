// import React from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import NavItem from './NavItem';

// const SideBar = () => {
//   const navItems = [
//     { to: "/dashboard", icon: "📊", label: "Dashboard" },
//     { to: "/collection-requests", icon: "📦", label: "Collection Requests" },
//     { to: "/tracking", icon: "🔍", label: "E-Waste Tracking" }
//   ];

//   return (
//     <nav className="bg-green-50 md:w-60 py-5">
//       {navItems.map((item) => (
//         <NavItem 
//           key={item.to}
//           to={item.to} 
//           icon={item.icon} 
//           label={item.label} 
//         />
//       ))}
//     </nav>
//   );
// };


// const SideBar = () => {
//     const navItems = [
//       { to: "/dashboard", icon: "📊", label: "Dashboard" },
//       { to: "/collection-requests", icon: "📦", label: "Collection Requests" },
//       { to: "/tracking", icon: "🔍", label: "E-Waste Tracking" }
//     ];
  
//     return (
//       <nav className="bg-green-50 md:w-60 py-5">
//         {navItems.map((item) => (
//           <NavLink 
//             key={item.to}
//             to={item.to}
//             className={({ isActive }) => 
//               `flex items-center px-4 py-3 mb-2 transition-colors rounded-lg ${
//                 isActive 
//                   ? 'bg-green-600 text-white' 
//                   : 'hover:bg-green-100'
//               }`
//             }
//           >
//             <span className="mr-3">{item.icon}</span>
//             <span className="font-medium">{item.label}</span>
//           </NavLink>
//         ))}
//       </nav>
//     );
// };


// import React from "react";
// import { NavLink } from "react-router-dom";

// function SideBar() {
//   return (
//     <nav className="sidebar">
//       <ul>
//         <li>
//           <NavLink to="/company/home/dashboard" activeClassName="active">
//             Dashboard
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/company/home/collection-requests" activeClassName="active">
//             Collection Requests
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/company/home/ewaste-tracking" activeClassName="active">
//             E-Waste Tracking
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default SideBar;
import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <nav className="bg-green-50 w-60 py-5">
      <ul>
        <li>
          <NavLink 
            to="dashboard" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 mb-2 transition-colors rounded-lg ${
                isActive ? 'bg-green-600 text-white' : 'hover:bg-green-100'
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="collection-requests" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 mb-2 transition-colors rounded-lg ${
                isActive ? 'bg-green-600 text-white' : 'hover:bg-green-100'
              }`
            }
          >
            Collection Requests
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="ewaste-tracking" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 mb-2 transition-colors rounded-lg ${
                isActive ? 'bg-green-600 text-white' : 'hover:bg-green-100'
              }`
            }
          >
            E-Waste Tracking
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="processing-list" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 mb-2 transition-colors rounded-lg ${
                isActive ? 'bg-green-600 text-white' : 'hover:bg-green-100'
              }`
            }
          >
            Processing List
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="data-analysis" 
            className={({ isActive }) => 
              `flex items-center px-4 py-3 mb-2 transition-colors rounded-lg ${
                isActive ? 'bg-green-600 text-white' : 'hover:bg-green-100'
              }`
            }
          >
            Data Analysis
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;