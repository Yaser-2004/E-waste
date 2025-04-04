import React, { useState, useEffect, useMemo } from 'react';

const EWasteTracking = () => {
  // State management
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample data - would normally come from an API
  const sampleProducts = useMemo(() => [
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
  ], []);

  // Load data on component mount
  useEffect(() => {
    const loadProducts = () => {
      try {
        // Simulate API call
        setProducts(sampleProducts);
        setFilteredProducts(sampleProducts);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [sampleProducts]);

  // Handle search and filters
  useEffect(() => {
    const filtered = products.filter(product => {
      // Status filter
      if (statusFilter && product.status !== statusFilter.toLowerCase()) {
        return false;
      }
      
      // Search filter
      if (searchInput.trim() !== '') {
        const searchLower = searchInput.toLowerCase();
        return (
          product.id.toLowerCase().includes(searchLower) ||
          product.manufacturerId.toLowerCase().includes(searchLower) ||
          product.manufacturer.toLowerCase().includes(searchLower)
        );
      }
      
      return true;
    });
    
    setFilteredProducts(filtered);
  }, [searchInput, statusFilter, products]);

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

  // View timeline handler
  const handleViewTimeline = (product) => {
    setSelectedProduct(product);
  };

  // Close timeline handler
  const handleCloseTimeline = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="ewaste-tracking-container p-5 max-w-full">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">E-Waste Tracking</h1>
        <p className="text-gray-600">Track electronic products through their lifecycle</p>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {/* Search */}
      <div className="md:flex gap-2 mb-4">
        <div className="relative flex-1 mb-2 md:mb-0">
          <input 
            type="text" 
            placeholder="Enter product ID or manufacturer ID..." 
            className="w-full p-2 pl-3 border rounded"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <button 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full md:w-auto"
          disabled={isLoading}
        >
          Track Product
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap gap-4">
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              className="border rounded p-2 w-full"
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
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Tracked Products</h2>
          <span className="text-sm text-gray-500">
            {isLoading ? 'Loading...' : `${filteredProducts.length} products found`}
          </span>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manufacturer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map(product => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{product.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{product.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{product.manufacturer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span 
                        className={`px-2 py-1 rounded-full text-sm inline-block text-center ${getBadgeClass(product.status)}`}
                      >
                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      <button 
                        className="hover:underline"
                        onClick={() => handleViewTimeline(product)}
                      >
                        View Timeline
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredProducts.length === 0 && (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                      No products found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Timeline View */}
      {selectedProduct && (
        <div className="bg-white rounded-lg p-5 mt-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Product Timeline: {selectedProduct.id}</h2>
              <p className="text-sm text-gray-500">
                Manufacturer: {selectedProduct.manufacturer} | Type: {selectedProduct.type}
              </p>
            </div>
            <button 
              className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              onClick={handleCloseTimeline}
            >
              Close
            </button>
          </div>
          
          <div className="pl-6 relative">
            {selectedProduct.timeline && selectedProduct.timeline.length > 0 ? (
              <>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-green-500"></div>
                {selectedProduct.timeline.map((item, index) => (
                  <div key={index} className="mb-6 relative">
                    <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-sm text-gray-500">{item.date}</div>
                    <div className="font-medium">{item.event}</div>
                    <div className="text-sm text-gray-700">{item.details}</div>
                  </div>
                ))}
              </>
            ) : (
              <div className="py-4 text-gray-500">No timeline data available for this product.</div>
            )}
          </div>
          
          {/* Timeline Actions */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h3 className="font-medium mb-2">Actions</h3>
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                Request Update
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded">
                Export Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EWasteTracking;