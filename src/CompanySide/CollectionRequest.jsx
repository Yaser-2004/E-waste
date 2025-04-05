import React, { useEffect, useState } from 'react';
import PageHeader from '../CompanySide/PageHeader';
import FilterBar from '../CompanySide/FilterBar';
import DataTable from '../CompanySide/DataTable';
import StatusBadge from '../CompanySide/StatusBadge';
import Pagination from '../CompanySide/Pagination';
import axios from 'axios';

const CollectionRequests = () => {
  // State for pagination and filters
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({
    status: 'all-statuses',
    wasteType: 'all-types',
    location: 'all-locations',
    dateRange: 'all-time'
  });
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async() => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders/pending-orders');
        setRequests(response.data.map(item => (
          {
            id: "#" + item._id.slice(-5),
            date: new Date(item.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            }),
            client: item.userId.firstName,
            type: item.itemName,
            location: item.location,
            status: item.status,
          }
        )));
      } catch (error) {
        console.error('Error fetching processing list:', error);
      }
    }

    fetchRequests();
  }, []);

  // Filter options
  const filterOptions = [
    {
      key: 'status',
      label: 'Status',
      options: ['All Statuses', 'New', 'Scheduled', 'Completed', 'Canceled']
    },
    {
      key: 'wasteType',
      label: 'Waste Type',
      options: ['All Types', 'Electronics', 'Batteries', 'Appliances', 'Computers', 'Smartphones', 'Monitors', 'Mixed E-Waste']
    },
    {
      key: 'location',
      label: 'Location',
      options: ['All Locations', 'Downtown', 'Eastside', 'Westside', 'North End', 'South End', 'West Hills']
    },
    {
      key: 'dateRange',
      label: 'Date Range',
      options: ['All Time', 'Today', 'This Week', 'This Month', 'Custom Range']
    }
  ];

  // Table columns configuration
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'date', header: 'Date' },
    { key: 'client', header: 'Client' },
    { key: 'type', header: 'Type' },
    { key: 'location', header: 'Location' },
    {
      key: 'status',
      header: 'Status',
      render: (row) => <StatusBadge status={row.status} />
    }
  ];

  // Event handlers
  const handleFilterChange = (filterKey, value) => {
    setFilters({
      ...filters,
      [filterKey]: value
    });
    // Here you would typically fetch filtered data
    console.log(`Filter ${filterKey} changed to: ${value}`);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    // Here you would typically fetch data for the new page
    console.log(`Page changed to: ${page}`);
  };

  return (
    <main className="flex-1 p-5">
      {/* Page header */}
      <PageHeader 
        title="Collection Requests" 
        description="Manage your e-waste pickup requests" 
      />
      
      {/* Filters */}
      <FilterBar 
        filters={filterOptions} 
        onChange={handleFilterChange} 
      />
      
      {/* Collection requests table */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Collection Requests</h2>
        </div>
        
        {requests.length === 0 ? (
          <p>No collection requests available.</p>
        ) : (
          <DataTable 
            columns={columns}
            data={requests}
          />
        )}
        
        <Pagination 
          currentPage={activePage}
          totalPages={4}
          totalItems={32}
          itemsPerPage={8}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default CollectionRequests;