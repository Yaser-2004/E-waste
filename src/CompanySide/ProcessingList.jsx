import React, { useState } from 'react';
import DataTable from './DataTable';
import StatusBadge from './StatusBadge';

const ProcessingList = ({ data, onSearch, onViewItem }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'type', header: 'Type' },
    { key: 'location', header: 'Location' },
    { 
      key: 'status', 
      header: 'Status',
      render: (row) => <StatusBadge status={row.status} />
    },
    {
      key: 'actions',
      header: 'Details',
      render: (row) => (
        <button 
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded text-sm min-w-20"
          onClick={() => onViewItem(row.id)}
        >
          View
        </button>
      )
    }
  ];

  return (
    <div className="bg-white rounded-lg p-5 mt-5 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">E-Waste Processing List</h2>
      </div>
      
      <form onSubmit={handleSearch} className="flex gap-3 mb-5">
        <input 
          type="text" 
          placeholder="Search by Unique ID..." 
          className="flex-1 p-2 border border-gray-200 rounded bg-gray-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded">
          Search
        </button>
      </form>
      
      <DataTable 
        columns={columns}
        data={data}
        onRowAction={onViewItem}
      />
    </div>
  );
};

export default ProcessingList;