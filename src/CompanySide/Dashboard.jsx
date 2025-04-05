import React, { useEffect, useState } from 'react';
import PageHeader from '../CompanySide/PageHeader';
import DashboardGrid from '../CompanySide/DashboardGrid';
import NotificationPanel from '../CompanySide/NotificationPanel';
import StatsGrid from '../CompanySide/StatsGrid';
import ProcessingList from '../CompanySide/ProcessingList';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';

const Dashboard = () => {
  // State for date range filter
  const [dateRange, setDateRange] = useState('last-7-days');
  const [statsData, setStatsData] = useState([]);
  const [processingListData, setProcessingListData] = useState([]);
  const [notificationsData, setNotificationsData] = useState([]);
  const [currentData, setCurrentData] = useState(null);
  const [display, setDisplay] = useState(false);

  useEffect(() => {

    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders/all');
    
        const pendingOrders = response.data.filter(order => order.status === "Pending");
        const pending = pendingOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
        const completedOrders = response.data.filter(order => order.status === "Completed");
        const completed = completedOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
        const processingOrders = response.data.filter(order => order.status === "Processing");
        const processing = processingOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
        setNotificationsData([
          { 
            title: `New collection request - ID #${pending[0]?._id.slice(-5) || 'N/A'}`, 
            details: `${formatDistanceToNow(new Date(pending[0]?.createdAt || new Date()))} ago • ${pending[0]?.itemName || 'Item'} • ${pending[0]?.location || 'Location'}`,
            icon: '→'
          },
          { 
            title: `Collection completed - ID #${completed[0]?._id.slice(-5) || 'N/A'}`, 
            details: `${formatDistanceToNow(new Date(completed[0]?.createdAt || new Date()))} ago • ${completed[0]?.itemName || 'Item'} • ${completed[0]?.location || 'Location'}`,
            icon: '✓'
          },
          { 
            title: `Processing started - ID #${processing[0]?._id.slice(-5) || 'N/A'}`, 
            details: `${formatDistanceToNow(new Date(processing[0]?.createdAt || new Date()))} ago • ${processing[0]?.itemName || 'Item'} • ${processing[0]?.location || 'Location'}`,
            icon: '⚙️'
          }
        ]);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };


    const fetchStats = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          axios.get('http://localhost:5000/api/orders/pending-orders'),
          axios.get('http://localhost:5000/api/orders/processing-orders'),
          axios.get('http://localhost:5000/api/orders/processed-orders'),
        ]);
        
        setStatsData([
          { label: 'Pending Pickups', value: response1.data.length || 0, type: 'pending', subtext: '+3 from yesterday' },
          { label: 'Processing', value: response2.data.length || 0, type: 'processing', subtext: '+5 from yesterday' },
          { label: 'Completed Today', value: response3.data.length || 0, type: 'completed', subtext: '+2 from yesterday' },
          { label: 'Total Points Issued', value: '1,240', type: 'points', subtext: 'Today' }
        ])
      } catch (error) {
        console.error('Error fetching order stats:', error);
      }
    }

    const fetchProcessingList = async() => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders/all');
        setProcessingListData(response.data.map(item => (
          {
            id: item._id,
            type: item.itemName,
            location: item.location,
            status: item.status,
          }
        )));
      } catch (error) {
        console.error('Error fetching processing list:', error);
      }
    }

    fetchStats();
    fetchProcessingList();
    fetchNotifications();
    
  }, []);

  // Processing list data
  // const processingListData = [
  //   { id: '#24601', type: 'Electronics', location: 'Downtown', status: 'Pending Pickup' },
  //   { id: '#24599', type: 'Batteries', location: 'Eastside', status: 'Processing' },
  //   { id: '#24598', type: 'Mixed E-Waste', location: 'Westside', status: 'Completed' },
  //   { id: '#24597', type: 'Appliances', location: 'North End', status: 'Processing' },
  //   { id: '#24596', type: 'Electronics', location: 'South End', status: 'Completed' },
  //   { id: '#24595', type: 'Computers', location: 'Downtown', status: 'Completed' },
  //   { id: '#24594', type: 'Smartphones', location: 'West Hills', status: 'Pending Pickup' },
  //   { id: '#24593', type: 'Monitors', location: 'Eastside', status: 'Processing' },
  // ];

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

  const fetchOrderDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/orders/order/${id}`);
      setCurrentData(response.data);
      // console.log("Order Details:", response.data);
    } catch (err) {
      console.error("Error fetching order details:", err);
    }
  };

  const handleViewItem = (id) => {
    setDisplay(true);

    console.log(`Viewing details for item: ${id}`);
    fetchOrderDetails(id);
    // Navigate to item details or open a modal
  };

  return (
    <main className="relative flex-1 p-5">
      {/* Dashboard header with date filter */}
      <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome back, Here's your e-waste collection overview.</p>
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

      <div className={`absolute bg-green-100 border border-green-500 w-60 rounded-md bottom-10 -left-60 ${!display ? 'hidden' : null}`}>
        <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setDisplay(false)}>
          <span className="text-red-500">X</span>
        </div>
        <h2 className="text-lg font-semibold p-5">Order Details</h2>
        {currentData && <div className="p-5">
          <p><strong>ID:</strong> {currentData?._id}</p>
          <p><strong>Owner Name:</strong> {currentData.userId.firstName}</p>
          <p><strong>Item Name:</strong> {currentData.itemName}</p>
          <p><strong>Description:</strong> {currentData.description}</p>
          <p><strong>Location:</strong> {currentData.location}</p>
          <p><strong>Status:</strong> {currentData.status}</p>
          <p><strong>Operation:</strong> {currentData.operation}</p>
          <p><strong>Date:</strong> {new Date(currentData.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}</p>
        </div> }
      </div>
    </main>
  );
};

export default Dashboard;