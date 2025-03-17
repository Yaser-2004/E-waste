import React, { useState } from 'react';

const EWasteTracking = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Sample data - shortened for simplicity
  const products = [
    {
      id: "#PT-10067892",
      manufacturerId: "SM-G975F-XEU12345",
      type: "Smartphone",
      manufacturer: "Samsung",
      manufactureDate: "Jan 15, 2020",
      status: "active",
      timeline: [
        { date: "Jan 15, 2020", event: "Manufacturing", details: "Product manufactured by Samsung" },
        { date: "Mar 10, 2025", event: "Collection Request", details: "Product collected for e-waste processing" },
        { date: "Current", event: "Waiting for Processing", details: "Product in queue for component separation" }
      ]
    },
    {
      id: "#PT-10067891",
      manufacturerId: "IP-12PRO-A23456789",
      type: "Smartphone",
      manufacturer: "Apple",
      manufactureDate: "Sep 23, 2020",
      status: "processing",
      timeline: []
    },
    {
      id: "#PT-10067890",
      manufacturerId: "DEL-XPS15-D987654",
      type: "Laptop",
      manufacturer: "Dell",
      manufactureDate: "Mar 5, 2019",
      status: "recycled",
      timeline: []
    }
  ];

  const handleSearch = () => {
    if (searchInput.trim() !== '') {
      alert(`Searching for product: ${searchInput}`);
    }
  };

  const handleViewTimeline = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseTimeline = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter(product => {
    if (statusFilter && product.status !== statusFilter) {
      return false;
    }
    return true;
  });

  // Status badge styling
  const getBadgeClass = (status) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-700';
      case 'processing': return 'bg-yellow-100 text-yellow-700';
      case 'recycled': return 'bg-green-100 text-green-700';
      case 'disposed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-green-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">E-Waste Management Platform</div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">JS</div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - simplified */}
        <nav className="w-60 bg-green-50 p-4">
          <a href="#" className="flex items-center p-3 mb-2">Dashboard</a>
          <a href="#" className="flex items-center p-3 mb-2">Collection Requests</a>
          <a href="#" className="flex items-center p-3 bg-green-500 text-white rounded">E-Waste Tracking</a>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="bg-white rounded p-4 mb-4 shadow-sm">
            <h1 className="text-xl font-bold">E-Waste Tracking</h1>
            <p className="text-gray-600">Track electronic products through their lifecycle</p>
          </div>

          {/* Search */}
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              placeholder="Enter product ID or manufacturer ID..." 
              className="flex-1 p-2 border rounded"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleSearch}
            >
              Track Product
            </button>
          </div>

          {/* Simple Filter */}
          <div className="bg-white rounded p-4 mb-4 shadow-sm">
            <h2 className="font-bold mb-2">Filter</h2>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600">Status</label>
                <select 
                  className="p-2 border rounded bg-gray-50"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="processing">Processing</option>
                  <option value="recycled">Recycled</option>
                  <option value="disposed">Disposed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product List */}
          <div className="bg-white rounded p-4 shadow-sm">
            <h2 className="font-bold mb-4">Tracked Products</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left p-2">Product ID</th>
                    <th className="text-left p-2">Type</th>
                    <th className="text-left p-2">Manufacturer</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="p-2">{product.id}</td>
                      <td className="p-2">{product.type}</td>
                      <td className="p-2">{product.manufacturer}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded-full text-sm inline-block text-center ${getBadgeClass(product.status)}`}>
                          {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-2">
                        <button 
                          className="text-blue-600 hover:underline"
                          onClick={() => handleViewTimeline(product)}
                        >
                          View Timeline
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline View */}
          {selectedProduct && (
            <div className="bg-white rounded p-4 mt-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold">Product Timeline: {selectedProduct.id}</h2>
                <button 
                  className="bg-gray-200 px-2 py-1 rounded"
                  onClick={handleCloseTimeline}
                >
                  Close
                </button>
              </div>
              
              <div className="pl-6 relative">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-green-500"></div>
                {selectedProduct.timeline.length > 0 ? (
                  selectedProduct.timeline.map((item, index) => (
                    <div key={index} className="mb-4 relative">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                      <div className="font-medium">{item.event}</div>
                      <div className="text-sm">{item.details}</div>
                    </div>
                  ))
                ) : (
                  <p>No timeline data available for this product.</p>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default EWasteTracking;