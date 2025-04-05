import React, { useEffect, useState, useCallback } from 'react';
import PageHeader from '../CompanySide/PageHeader';
import FilterBar from '../CompanySide/FilterBar';
import DataTable from '../CompanySide/DataTable';
import StatusBadge from '../CompanySide/StatusBadge';
import Pagination from '../CompanySide/Pagination';
import axios from 'axios';
import StatusEditor from '../CompanySide/StatusEditor';

const CollectionRequests = () => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({ status: 'All' });
  const [requests, setRequests] = useState([]);

  // useCallback ensures the latest version is used
  const fetchRequests = useCallback(async (status) => {
    try {
      const query = status && status !== "All" ? `?status=${status}` : '';
      const response = await axios.get(`http://localhost:5000/api/orders/product-info${query}`);

      const mappedData = response.data.map(item => ({
        id: item._id,
        itemId: "#" + item._id.slice(-5),
        date: new Date(item.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        itemName: item.itemName,
        location: item.location,
        status: item.status
      }));

      setRequests(mappedData);
    } catch (error) {
      console.error('Error fetching product info:', error);
    }
  }, []);

  useEffect(() => {
    fetchRequests(filters.status);
  }, [filters.status, fetchRequests]);

  const filterOptions = [
    {
      key: 'status',
      label: 'Status',
      options: ['All', 'Pending', 'Processing', 'Processed', 'Recycled', 'Repaired']
    }
  ];

  const columns = [
    { key: 'itemId', header: 'Item ID' },
    { key: 'itemName', header: 'Item Name' },
    { key: 'location', header: 'Location' },
    { key: 'date', header: 'Date' },
    {
      key: 'status',
      header: 'Status',
      render: (row) => (
        <div className="flex items-center gap-2">
          <StatusBadge status={row.status} />
          <StatusEditor 
            currentStatus={row.status}
            itemId={row.id}
            onStatusChange={() => fetchRequests(filters.status)}
          />
        </div>
      )
    }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <main className="flex-1 p-5">
      <PageHeader 
        title="Product Info" 
        description="View filtered product information" 
      />

      <FilterBar 
        filters={filterOptions}
        onChange={handleFilterChange}
      />

      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Products</h2>
        </div>

        {requests.length === 0 ? (
          <p>No products available.</p>
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
