// import React, { useState } from 'react';

// const Dashboard = () => {
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
//   ];

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

// export default Dashboard;


import React, { useState } from 'react';
import PageHeader from '../CompanySide/PageHeader';
import DashboardGrid from '../CompanySide/DashboardGrid';
import NotificationPanel from '../CompanySide/NotificationPanel';
import StatsGrid from '../CompanySide/StatsGrid';
import ProcessingList from '../CompanySide/ProcessingList';

const Dashboard = () => {
  // State for date range filter
  const [dateRange, setDateRange] = useState('last-7-days');
  
  // Stats data
  const statsData = [
    { label: 'Pending Pickups', value: '12', type: 'pending', subtext: '+3 from yesterday' },
    { label: 'Processing', value: '24', type: 'processing', subtext: '+5 from yesterday' },
    { label: 'Completed Today', value: '8', type: 'completed', subtext: '+2 from yesterday' },
    { label: 'Total Points Issued', value: '1,240', type: 'points', subtext: 'Today' }
  ];

  // Notifications data
  const notificationsData = [
    { 
      title: 'New collection request - ID #24601', 
      details: '15 mins ago • Electronics • Downtown',
      icon: '→'
    },
    { 
      title: 'Collection completed - ID #24598', 
      details: '42 mins ago • Mixed E-Waste • Westside',
      icon: '✓'
    },
    { 
      title: 'Processing started - ID #24599', 
      details: '1 hour ago • Batteries • Eastside',
      icon: '⚙️'
    }
  ];

  // Processing list data
  const processingListData = [
    { id: '#24601', type: 'Electronics', location: 'Downtown', status: 'Pending Pickup' },
    { id: '#24599', type: 'Batteries', location: 'Eastside', status: 'Processing' },
    { id: '#24598', type: 'Mixed E-Waste', location: 'Westside', status: 'Completed' },
    { id: '#24597', type: 'Appliances', location: 'North End', status: 'Processing' },
    { id: '#24596', type: 'Electronics', location: 'South End', status: 'Completed' },
    { id: '#24595', type: 'Computers', location: 'Downtown', status: 'Completed' },
    { id: '#24594', type: 'Smartphones', location: 'West Hills', status: 'Pending Pickup' },
    { id: '#24593', type: 'Monitors', location: 'Eastside', status: 'Processing' },
  ];

  // Event handlers
  const handleDateRangeChange = (range) => {
    setDateRange(range);
    // Here you would typically fetch new data based on the selected range
    console.log(`Date range changed to: ${range}`);
  };

  const handleViewAllNotifications = () => {
    // Navigate to notifications page or open a modal
    console.log('View all notifications clicked');
  };

  const handleSearch = (term) => {
    console.log(`Searching for: ${term}`);
    // Implement search logic here
  };

  const handleViewItem = (id) => {
    console.log(`Viewing details for item: ${id}`);
    // Navigate to item details or open a modal
  };

  return (
    <main className="flex-1 p-5">
      {/* Dashboard header with date filter */}
      <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome back, Ram! Here's your e-waste collection overview.</p>
        <div className="flex items-center gap-3 mt-3">
          <span>Today, {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          <select 
            className="p-2 rounded border border-green-500 bg-green-50"
            value={dateRange}
            onChange={(e) => handleDateRangeChange(e.target.value)}
          >
            <option value="last-7-days">Last 7 Days</option>
            <option value="last-30-days">Last 30 Days</option>
            <option value="this-month">This Month</option>
            <option value="custom-range">Custom Range</option>
          </select>
        </div>
      </div>
      
      {/* Dashboard grid with notifications and stats */}
      <DashboardGrid>
        <NotificationPanel 
          notifications={notificationsData} 
          onViewAll={handleViewAllNotifications} 
        />
        <StatsGrid stats={statsData} />
      </DashboardGrid>
      
      {/* E-Waste Processing List */}
      <ProcessingList 
        data={processingListData}
        onSearch={handleSearch}
        onViewItem={handleViewItem} 
      />
    </main>
  );
};

export default Dashboard;