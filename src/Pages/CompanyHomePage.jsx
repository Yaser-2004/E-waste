

// import React, { useState } from 'react';

// const CompanyHomePage = () => {
//   // State for handling active navigation item
//   const [activeNav, setActiveNav] = useState('Dashboard');

//   // Simulating data for the table
//   const tableData = [
//     { id: '#24601', type: 'Electronics', location: 'Downtown', status: 'Pending Pickup' },
//     { id: '#24599', type: 'Batteries', location: 'Eastside', status: 'Processing' },
//     { id: '#24598', type: 'Mixed E-Waste', location: 'Westside', status: 'Completed' },
//     { id: '#24597', type: 'Appliances', location: 'North End', status: 'Processing' },
//     { id: '#24596', type: 'Electronics', location: 'South End', status: 'Completed' },
//     { id: '#24595', type: 'Computers', location: 'Downtown', status: 'Completed' },
//     { id: '#24594', type: 'Smartphones', location: 'West Hills', status: 'Pending Pickup' },
//     { id: '#24593', type: 'Monitors', location: 'Eastside', status: 'Processing' },
//   ];st

//   // Function to handle view button click
//   const handleViewClick = (id) => {
//     alert(`Viewing details for item ${id}`);
//   };

//   // Function to handle navigation clicks
//   const handleNavClick = (navItem) => {
//     setActiveNav(navItem);
//   };

//   // Function to get status badge classes
//   const getStatusClasses = (status) => {
//     switch (status) {
//       case 'Pending Pickup':
//         return 'bg-red-100 text-red-400';
//       case 'Processing':
//         return 'bg-orange-100 text-orange-400';
//       case 'Completed':
//         return 'bg-green-100 text-green-600';
//       default:
//         return '';
//     }
//   };

//   // Function to get stat value color
//   const getStatValueColor = (type) => {
//     switch (type) {
//       case 'pending':
//         return 'text-red-400';
//       case 'processing':
//         return 'text-orange-400';
//       case 'completed':
//         return 'text-green-500';
//       case 'points':
//         return 'text-green-500';
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
//       {/* Header */}
//       <header className="bg-green-800 text-white p-4 flex justify-between items-center">
//         <div className="text-xl font-bold">E-Waste Management Platform</div>
//         <div className="flex items-center gap-5">
//           <div className="relative w-8 h-8 flex items-center justify-center border-2 border-white rounded-full cursor-pointer">
//             🔔
//             <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
//           </div>
//           <div className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-full cursor-pointer">?</div>
//           <div className="flex items-center gap-3">
//             <span>John Smith</span>
//             <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">JS</div>
//           </div>
//         </div>
//       </header>
      
//       {/* Main container */}
//       <div className="flex flex-1">
//         {/* Sidebar navigation */}
//         <nav className="w-60 bg-green-50 py-5">
//           {[
//             { name: 'Dashboard', icon: '📊' },
//             { name: 'Collection Requests', icon: '📦' },
//             { name: 'E-Waste Tracking', icon: '🔍' }
//           ].map((item) => (
//             <a 
//               href="#" 
//               key={item.name}
//               className={`flex items-center px-5 py-4 text-gray-600 hover:bg-green-100 ${activeNav === item.name ? 'bg-green-500 text-white' : ''}`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleNavClick(item.name);
//               }}
//             >
//               <span className="mr-4 text-lg w-6 text-center">{item.icon}</span>
//               {item.name}
//             </a>
//           ))}
//         </nav>
        
//         {/* Main content */}
//         <main className="flex-1 p-5">
//           {/* Dashboard header */}
//           <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
//             <h1 className="text-2xl font-bold">Dashboard</h1>
//             <p>Welcome back, John! Here's your e-waste collection overview.</p>
//             <div className="flex items-center gap-3 mt-3">
//               <span>Today, Mar 16, 2025</span>
//               <select className="p-2 rounded border border-green-500 bg-green-50">
//                 <option>Last 7 Days</option>
//                 <option>Last 30 Days</option>
//                 <option>This Month</option>
//                 <option>Custom Range</option>
//               </select>
//             </div>
//           </div>
          
//           {/* Dashboard grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//             {/* Notifications panel */}
//             <div className="bg-white rounded-lg p-5 shadow-sm">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold">Live Notifications</h2>
//               </div>
              
//               <div className="bg-gray-50 rounded p-4 mb-3 border border-gray-100">
//                 <div className="font-bold mb-1">New collection request - ID #24601</div>
//                 <div className="flex justify-between text-sm text-gray-500">
//                   <span>15 mins ago • Electronics • Downtown</span>
//                   <span>→</span>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 rounded p-4 mb-3 border border-gray-100">
//                 <div className="font-bold mb-1">Collection completed - ID #24598</div>
//                 <div className="flex justify-between text-sm text-gray-500">
//                   <span>42 mins ago • Mixed E-Waste • Westside</span>
//                   <span>✓</span>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 rounded p-4 mb-3 border border-gray-100">
//                 <div className="font-bold mb-1">Processing started - ID #24599</div>
//                 <div className="flex justify-between text-sm text-gray-500">
//                   <span>1 hour ago • Batteries • Eastside</span>
//                   <span>⚙️</span>
//                 </div>
//               </div>
              
//               <a href="#" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4">
//                 View All Notifications
//               </a>
//             </div>
            
//             {/* Stats grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <div className="text-sm text-gray-500 mb-1">Pending Pickups</div>
//                 <div className={`text-3xl font-bold ${getStatValueColor('pending')}`}>12</div>
//                 <div className="text-sm text-gray-500 mt-1">+3 from yesterday</div>
//               </div>
              
//               <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <div className="text-sm text-gray-500 mb-1">Processing</div>
//                 <div className={`text-3xl font-bold ${getStatValueColor('processing')}`}>24</div>
//                 <div className="text-sm text-gray-500 mt-1">+5 from yesterday</div>
//               </div>
              
//               <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <div className="text-sm text-gray-500 mb-1">Completed Today</div>
//                 <div className={`text-3xl font-bold ${getStatValueColor('completed')}`}>8</div>
//                 <div className="text-sm text-gray-500 mt-1">+2 from yesterday</div>
//               </div>
              
//               <div className="bg-white rounded-lg p-4 shadow-sm">
//                 <div className="text-sm text-gray-500 mb-1">Total Points Issued</div>
//                 <div className={`text-3xl font-bold ${getStatValueColor('points')}`}>1,240</div>
//                 <div className="text-sm text-gray-500 mt-1">Today</div>
//               </div>
//             </div>
//           </div>
          
//           {/* E-Waste Processing List */}
//           <div className="bg-white rounded-lg p-5 mt-5 shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">E-Waste Processing List</h2>
//             </div>
            
//             <div className="flex gap-3 mb-5">
//               <input 
//                 type="text" 
//                 placeholder="Search by Unique ID..." 
//                 className="flex-1 p-2 border border-gray-200 rounded bg-gray-50"
//               />
//               <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded">
//                 Search
//               </button>
//             </div>
            
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr>
//                     <th className="text-left p-3 bg-gray-50 border-b border-gray-100">ID</th>
//                     <th className="text-left p-3 bg-gray-50 border-b border-gray-100">Type</th>
//                     <th className="text-left p-3 bg-gray-50 border-b border-gray-100">Location</th>
//                     <th className="text-left p-3 bg-gray-50 border-b border-gray-100">Status</th>
//                     <th className="text-left p-3 bg-gray-50 border-b border-gray-100">Details</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {tableData.map((item) => (
//                     <tr key={item.id} className="hover:bg-gray-50">
//                       <td className="p-3 border-b border-gray-100">{item.id}</td>
//                       <td className="p-3 border-b border-gray-100">{item.type}</td>
//                       <td className="p-3 border-b border-gray-100">{item.location}</td>
//                       <td className="p-3 border-b border-gray-100">
//                         <span className={`px-3 py-1 rounded-full text-xs inline-block min-w-32 text-center ${getStatusClasses(item.status)}`}>
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="p-3 border-b border-gray-100">
//                         <button 
//                           className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded text-sm min-w-20"
//                           onClick={() => handleViewClick(item.id)}
//                         >
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
            
//             <div className="flex justify-center bg-gray-50 p-4 rounded mt-4">
//               1-8 of 24 items • Page 1 of 3 →
//             </div>
//           </div>
//         </main>
//       </div>
      
//       {/* Footer */}
//       <footer className="bg-green-800 text-gray-300 text-center p-3 mt-5">
//         © 2025 E-Waste Management Platform
//       </footer>
//     </div>
//   );
// };

// export default CompanyHomePage;


// import React from 'react';


// // Import all the./CompanySide you've created
// import CompanyHeader from '../CompanySide/CompanyHeader';
// import CompanyFooter from '../CompanySide/CompanyFooter';
// import SideBar from '../CompanySide/BarSide';
// import Dashboard from '../CompanySide/Dashboard';
// import DashboardGrid from '../CompanySide/DashboardGrid';
// import DataTable from '../CompanySide/DataTable';
// import EWasteTracking from '../CompanySide/EWasteTracking';
// import FilterBar from '../CompanySide/FilterBar';
// import FilterGroup from '../CompanySide/FilterGroup';
// import HelpButton from '../CompanySide/HelpButton';
// import NavItem from '../CompanySide/NavItem';
// import NotificationBell from '../CompanySide/NotificationBell';
// import NotificationPanel from '../CompanySide/NotificationPanel';
// import PageHeader from '../CompanySide/PageHeader';
// import Pagination from '../CompanySide/Pagination';
// import ProcessingList from '../CompanySide/ProcessingList';
// import StatusBadge from '../CompanySide/StatusBadge';
// import StatusGrid from '../CompanySide/StatsGrid';
// import CollectionRequest from '../CompanySide/CollectionRequest';




// // Home Page Component
// const HomePage = () => {
//   const [showNotifications, setShowNotifications] = React.useState(false);
//   const [activeView, setActiveView] = React.useState('dashboard');
//   console.log("Active View:", activeView);

//   // Toggle notification panel
//   const toggleNotifications = () => {
//     setShowNotifications(!showNotifications);
//   };

//   // Render the appropriate main content based on active view
//   const renderMainContent = () => {
//     switch (activeView) {
//       case 'dashboard':
//         return (
//           <>
//             <PageHeader title="Dashboard" subtitle="Overview of e-waste tracking and processing" />
//             <FilterBar>
//               <FilterGroup title="Status" />
//               <FilterGroup title="Date Range" />
//               <FilterGroup title="Location" />
//             </FilterBar>
//             <DashboardGrid>
//               <Dashboard title="Collection Metrics" />
//               <Dashboard title="Processing Status" />
//               <Dashboard title="Environmental Impact" />
//               <Dashboard title="Recent Activity" />
//             </DashboardGrid>
//           </>
//         );
//       case 'waste-tracking':
//         return (
//           <>
//             <PageHeader title="E-Waste Tracking" subtitle="Monitor and manage e-waste items" />
//             <FilterBar>
//               <FilterGroup title="Category" />
//               <FilterGroup title="Status" />
//               <FilterGroup title="Date Range" />
//             </FilterBar>
//             <EWasteTracking />
//             <Pagination />
//           </>
//         );
//       case 'processing':
//         return (
//           <>
//             <PageHeader title="Processing List" subtitle="Items currently being processed" />
//             <FilterBar>
//               <FilterGroup title="Process Type" />
//               <FilterGroup title="Priority" />
//             </FilterBar>
//             <ProcessingList />
//             <Pagination />
//           </>
//         );
//       case 'collection-requests':
//         return (
//           <>
//             <PageHeader title="Collection Requests" subtitle="Manage incoming collection requests" />
//             <FilterBar>
//               <FilterGroup title="Status" />
//               <FilterGroup title="Priority" />
//               <FilterGroup title="Location" />
//             </FilterBar>
//             <CollectionRequest />
//             <Pagination />
//           </>
//         );
//       case 'data':
//         return (
//           <>
//             <PageHeader title="Data Analysis" subtitle="Analyze e-waste data and trends" />
//             <FilterBar>
//               <FilterGroup title="Time Period" />
//               <FilterGroup title="Categories" />
//               <FilterGroup title="Region" />
//             </FilterBar>
//             <DataTable />
//             <StatusGrid />
//             <Pagination />
//           </>
//         );
//       default:
//         return <div>Select a view from the sidebar</div>;
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Company Header with Notification Bell */}
//       <CompanyHeader>
//         <div className="flex items-center space-x-4">
//           <NotificationBell 
//             count={5} 
//             onClick={toggleNotifications} 
//           />
//           <HelpButton />
//         </div>
//       </CompanyHeader>

//       <div className="flex flex-1">
//         {/* Sidebar Navigation */}
//         <SideBar>
//           <NavItem 
//             icon="dashboard" 
//             label="Dashboard" 
//             active={activeView === 'dashboard'} 
//             onClick={() => setActiveView('dashboard')} 
//           />
//           <NavItem 
//             icon="tracking" 
//             label="E-Waste Tracking" 
//             active={activeView === 'waste-tracking'} 
//             onClick={() => setActiveView('waste-tracking')} 
//           />
//           <NavItem 
//             icon="process" 
//             label="Processing List" 
//             active={activeView === 'processing'} 
//             onClick={() => setActiveView('processing')} 
//           />
//           <NavItem 
//             icon="collection" 
//             label="Collection Requests" 
//             active={activeView === 'collection-requests'} 
//             onClick={() => setActiveView('collection-requests')} 
//           />
//           <NavItem 
//             icon="data" 
//             label="Data Analysis" 
//             active={activeView === 'data'} 
//             onClick={() => setActiveView('data')} 
//           />
//         </SideBar>

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 bg-gray-50">
//           {/* Notification Panel (conditionally rendered) */}
//           {showNotifications && (
//             <NotificationPanel 
//               onClose={() => setShowNotifications(false)} 
//             />
//           )}
          
//           {/* Render the appropriate content based on active view */}
//           {renderMainContent()}
//         </div>
//       </div>

//       {/* Company Footer */}
//       <CompanyFooter />
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';

// // Import Components
// import CompanyHeader from '../CompanySide/CompanyHeader';
// import CompanyFooter from '../CompanySide/CompanyFooter';
// import SideBar from '../CompanySide/BarSide';
// import Dashboard from '../CompanySide/Dashboard';
// import EWasteTracking from '../CompanySide/EWasteTracking';
// import CollectionRequests from '../CompanySide/CollectionRequest';
// import ProcessingList from '../CompanySide/ProcessingList';
// import DataTable from '../CompanySide/DataTable';
// import NotificationBell from '../CompanySide/NotificationBell';
// import NotificationPanel from '../CompanySide/NotificationPanel';
// import HelpButton from '../CompanySide/HelpButton';
// import NavItem from '../CompanySide/NavItem';

// const CompanyHomePage = () => {
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [activeView, setActiveView] = useState('dashboard'); // Default: Dashboard view

//   // Toggle Notifications
//   const toggleNotifications = () => {
//     setShowNotifications(!showNotifications);
//   };

//   // Function to Render the Active Component
//   const renderMainContent = () => {
//     switch (activeView) {
//       case 'dashboard':
//         return <Dashboard />;
//       case 'e-waste tracking':
//         return <EWasteTracking />;
//       case 'processing':
//         return <ProcessingList />;
//       case 'collection requests':
//         return <CollectionRequests />;
//       case 'data':
//         return <DataTable />;
//       default:
//         return <Dashboard />; // Default to Dashboard
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <CompanyHeader>
//         <div className="flex items-center space-x-4">
//           <NotificationBell count={5} onClick={toggleNotifications} />
//           <HelpButton />
//         </div>
//       </CompanyHeader>

//       <div className="flex flex-1">
//         {/* Sidebar Navigation */}
//         <SideBar>
//         <NavItem icon="dashboard" label="Dashboard" active={activeView === 'dashboard'} onClick={() => setActiveView('dashboard')} />
//         <NavItem icon="tracking" label="E-Waste Tracking" active={activeView === 'e-waste tracking'} onClick={() => setActiveView('e-waste tracking')} />
//         <NavItem icon="process" label="Processing List" active={activeView === 'processing'} onClick={() => setActiveView('processing')} />
//         <NavItem icon="collection" label="Collection Requests" active={activeView === 'collection requests'} onClick={() => setActiveView('collection requests')} />
//         <NavItem icon="data" label="Data Analysis" active={activeView === 'data'} onClick={() => setActiveView('data')} />        </SideBar>

//         {/* Main Content Section */}
//         <div className="flex-1 p-6 bg-gray-50">
//           {/* Conditional Notification Panel */}
//           {showNotifications && <NotificationPanel onClose={() => setShowNotifications(false)} />}
//           {/* Render Active Component */}
//           {renderMainContent()}
//         </div>
//       </div>

//       {/* Footer */}
//       <CompanyFooter />
//     </div>
//   );
// };

// export default CompanyHomePage;

// import React, { useState } from "react";

// // Import Components
// import CompanyHeader from "../CompanySide/CompanyHeader";
// import CompanyFooter from "../CompanySide/CompanyFooter";
// import SideBar from "../CompanySide/BarSide";
// import Dashboard from "../CompanySide/Dashboard";
// import EWasteTracking from "../CompanySide/EWasteTracking";
// import CollectionRequests from "../CompanySide/CollectionRequest";
// import ProcessingList from "../CompanySide/ProcessingList";
// import DataTable from "../CompanySide/DataTable";
// import NotificationBell from "../CompanySide/NotificationBell";
// import NotificationPanel from "../CompanySide/NotificationPanel";
// import HelpButton from "../CompanySide/HelpButton";
// import NavItem from "../CompanySide/NavItem";

// const CompanyHomePage = () => {
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [activeView, setActiveView] = useState("dashboard"); // Default: Dashboard view

//   // Toggle Notifications
//   const toggleNotifications = () => {
//     setShowNotifications(!showNotifications);
//   };

//   // Function to Render the Active Component
//   const renderMainContent = () => {
//     switch (activeView) {
//       case "dashboard":
//         return <Dashboard />;
//       case "e-waste-tracking":
//         return <EWasteTracking />;
//       case "processing-list":
//         return <ProcessingList />;
//       case "collection-requests":
//         return <CollectionRequests />;
//       case "data-analysis":
//         return <DataTable />;
//       default:
//         return <Dashboard />; // Default to Dashboard
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen text-black">
//       {/* Header */}
//       <CompanyHeader>
//         <div className="flex items-center space-x-4">
//           <NotificationBell count={5} onClick={toggleNotifications} />
//           <HelpButton />
//         </div>
//       </CompanyHeader>

//       <div className="flex flex-1">
//         {/* Sidebar Navigation */}
//         <SideBar>
//           <NavItem icon="dashboard" label="Dashboard" active={activeView === "dashboard"} onClick={() => setActiveView("dashboard")} />
//           <NavItem icon="tracking" label="E-Waste Tracking" active={activeView === "e-waste-tracking"} onClick={() => setActiveView("e-waste-tracking")} />
//           <NavItem icon="process" label="Processing List" active={activeView === "processing-list"} onClick={() => setActiveView("processing-list")} />
//           <NavItem icon="collection" label="Collection Requests" active={activeView === "collection-requests"} onClick={() => setActiveView("collection-requests")} />
//           <NavItem icon="data" label="Data Analysis" active={activeView === "data-analysis"} onClick={() => setActiveView("data-analysis")} />
//         </SideBar>

//         {/* Main Content Section */}
//         <div className="flex-1 p-6 bg-gray-50">
//           {/* Conditional Notification Panel */}
//           {showNotifications && <NotificationPanel onClose={() => setShowNotifications(false)} />}
//           {/* Render Active Component */}
//           {renderMainContent()}
//         </div>
//       </div>

//       {/* Footer */}
//       <CompanyFooter />
//     </div>
//   );
// };

// export default CompanyHomePage;

// import React, { useState } from "react";

// // Import Components
// import CompanyHeader from "../CompanySide/CompanyHeader";
// import CompanyFooter from "../CompanySide/CompanyFooter";
// import SideBar from "../CompanySide/BarSide";
// import Dashboard from "../CompanySide/Dashboard";
// import EWasteTracking from "../CompanySide/EWasteTracking";
// import CollectionRequests from "../CompanySide/CollectionRequest";
// import ProcessingList from "../CompanySide/ProcessingList";
// import DataTable from "../CompanySide/DataTable";
// import NotificationBell from "../CompanySide/NotificationBell";
// import NotificationPanel from "../CompanySide/NotificationPanel";
// import HelpButton from "../CompanySide/HelpButton";
// import NavItem from "../CompanySide/NavItem";

// const CompanyHomePage = () => {
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [activeView, setActiveView] = useState("dashboard"); // Default: Dashboard view

//   // Toggle Notifications
//   const toggleNotifications = () => {
//     setShowNotifications(!showNotifications);
//   };

//   // Function to Render the Active Component
//   const renderMainContent = () => {
//     switch (activeView) {
//       case "dashboard":
//         return <Dashboard />;
//       case "e-waste-tracking":
//         return <EWasteTracking />;
//       case "processing-list":
//         return <ProcessingList />;
//       case "collection-requests":
//         return <CollectionRequests />;
//       case "data-analysis":
//         return <DataTable />;
//       default:
//         return <Dashboard />; // Default to Dashboard
//     }
//   };

//   // Handle navigation item click
//   const handleNavItemClick = (view) => {
//     setActiveView(view);
//     // Close notifications panel when navigating to ensure clean UI
//     if (showNotifications) {
//       setShowNotifications(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen text-black">
//       {/* Header */}
//       <CompanyHeader>
//         <div className="flex items-center space-x-4">
//           <NotificationBell count={5} onClick={toggleNotifications} />
//           <HelpButton />
//         </div>
//       </CompanyHeader>

//       <div className="flex flex-1">
//         {/* Sidebar Navigation */}
//         <SideBar>
//           <NavItem 
//             icon="dashboard" 
//             label="Dashboard" 
//             active={activeView === "dashboard"} 
//             onClick={() => handleNavItemClick("dashboard")} 
//           />
//           <NavItem 
//             icon="tracking" 
//             label="E-Waste Tracking" 
//             active={activeView === "e-waste-tracking"} 
//             onClick={() => handleNavItemClick("e-waste-tracking")} 
//           />
//           <NavItem 
//             icon="process" 
//             label="Processing List" 
//             active={activeView === "processing-list"} 
//             onClick={() => handleNavItemClick("processing-list")} 
//           />
//           <NavItem 
//             icon="collection" 
//             label="Collection Requests" 
//             active={activeView === "collection-requests"} 
//             onClick={() => handleNavItemClick("collection-requests")} 
//           />
//           <NavItem 
//             icon="data" 
//             label="Data Analysis" 
//             active={activeView === "data-analysis"} 
//             onClick={() => handleNavItemClick("data-analysis")} 
//           />
//         </SideBar>

//         {/* Main Content Section */}
//         <div className="flex-1 p-6 bg-gray-50">
//           {/* Conditional Notification Panel */}
//           {showNotifications && <NotificationPanel onClose={() => setShowNotifications(false)} />}
          
//           {/* Render Active Component */}
//           <div className="w-full">
//             {renderMainContent()}
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <CompanyFooter />
//     </div>
//   );
// };

// export default CompanyHomePage;

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