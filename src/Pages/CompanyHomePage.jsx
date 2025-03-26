import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// Import Components
import CompanyHeader from "../CompanySide/CompanyHeader";
import CompanyFooter from "../CompanySide/CompanyFooter";
import SideBar from "../CompanySide/BarSide";
import NotificationBell from "../CompanySide/NotificationBell";
import NotificationPanel from "../CompanySide/NotificationPanel";
import HelpButton from "../CompanySide/HelpButton";
import NavItem from "../CompanySide/NavItem";

const CompanyHomePage = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();
  
  // Toggle Notifications
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // Close notifications when navigating
  const handleNavigation = () => {
    if (showNotifications) {
      setShowNotifications(false);
    }
  };

  // Helper function to check if a path is active
  const isPathActive = (path) => {
    const currentPath = location.pathname;
    if (path === "dashboard" && currentPath === "/company/home"||currentPath=="/company/home/") {
      return true; // Dashboard is active when on the root company page
    }
    return currentPath === `/company/home/${path}`;
  };

  return (
    <div className="flex flex-col min-h-screen text-black">
      {/* Header */}
      <CompanyHeader>
        <div className="flex items-center space-x-4">
          <NotificationBell count={5} onClick={toggleNotifications} />
          <HelpButton />
        </div>
      </CompanyHeader>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <SideBar>
          <NavItem 
            icon="dashboard" 
            label="Dashboard" 
            active={isPathActive("dashboard")} 
            onClick={handleNavigation}
            to="/company/home/dashboard"
          />
          <NavItem 
            icon="tracking" 
            label="E-Waste Tracking" 
            active={isPathActive("e-waste-tracking")} 
            onClick={handleNavigation}
            to="/company/home/e-waste-tracking"
          />
          <NavItem 
            icon="process" 
            label="Processing List" 
            active={isPathActive("processing-list")} 
            onClick={handleNavigation}
            to="/company/home/processing-list"
          />
          <NavItem 
            icon="collection" 
            label="Collection Requests" 
            active={isPathActive("collection-requests")} 
            onClick={handleNavigation}
            to="/company/home/collection-requests"
          />
          <NavItem 
            icon="data" 
            label="Data Analysis" 
            active={isPathActive("data-analysis")} 
            onClick={handleNavigation}
            to="/company/home/data-analysis"
          />
        </SideBar>

        {/* Main Content Section */}
        <div className="flex-1 p-6 bg-gray-50">
          {/* Conditional Notification Panel */}
          {showNotifications && <NotificationPanel onClose={() => setShowNotifications(false)} />}
          
          {/* Render Active Component via Outlet */}
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Footer */}
      <CompanyFooter />
    </div>
  );
};

export default CompanyHomePage;