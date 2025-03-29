import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <nav className="bg-green-50 w-60 py-5 h-full">
      <div className="px-4 mb-6">
        <h2 className="text-lg font-bold text-green-800">Company Dashboard</h2>
      </div>
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
            <span className="mr-3">📊</span>
            <span className="font-medium">Dashboard</span>
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
            <span className="mr-3">📦</span>
            <span className="font-medium">Collection Requests</span>
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
            <span className="mr-3">🔍</span>
            <span className="font-medium">E-Waste Tracking</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;