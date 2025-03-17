import React, { useState } from 'react';
import PageHeader from '../CompanySide/PageHeader';
import FilterBar from '../CompanySide/FilterBar';
import DataTable from '../CompanySide/DataTable';
import StatusBadge from '../CompanySide/StatusBadge';
import Pagination from '../CompanySide/Pagination';

const CollectionRequests = () => {
  // State for pagination and filters
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({
    status: 'all-statuses',
    wasteType: 'all-types',
    location: 'all-locations',
    dateRange: 'all-time'
  });

  // Collection requests data
  const requests = [
    { id: '#CR-2458', date: 'Mar 12, 2025', client: 'Green Tech Inc.', type: 'Electronics', location: 'Downtown', status: 'New' },
    { id: '#CR-2457', date: 'Mar 11, 2025', client: 'TechStore', type: 'Batteries', location: 'Eastside', status: 'Scheduled' },
    { id: '#CR-2456', date: 'Mar 11, 2025', client: 'Sarah Johnson', type: 'Mixed E-Waste', location: 'Westside', status: 'Completed' },
    { id: '#CR-2455', date: 'Mar 10, 2025', client: 'City Library', type: 'Computers', location: 'Downtown', status: 'Completed' },
    { id: '#CR-2454', date: 'Mar 10, 2025', client: 'Michael Chen', type: 'Smartphones', location: 'North End', status: 'Canceled' },
    { id: '#CR-2453', date: 'Mar 9, 2025', client: 'Office Solutions', type: 'Monitors', location: 'South End', status: 'Completed' },
    { id: '#CR-2452', date: 'Mar 9, 2025', client: 'Community College', type: 'Electronics', location: 'Westside', status: 'Completed' },
    { id: '#CR-2451', date: 'Mar 8, 2025', client: 'Taylor Williams', type: 'Appliances', location: 'West Hills', status: 'Completed' },
  ];

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
        {requests.length === 0 ? <p>No collection requests available.</p> : <DataTable columns={columns} data={requests} />}
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
        
        <DataTable 
          columns={columns}
          data={requests}
        />
        
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