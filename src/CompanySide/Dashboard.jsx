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