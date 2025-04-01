import React, { useState, useEffect } from 'react';

const CompanyStorePage = () => {
  // State for products and active tab
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // New state for add product form
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    points: 0,
    category: '',
    description: '',
    stock: 0,
    status: 'active'
  });

  // Fetch mock data
  useEffect(() => {
    // Mock products data
    const mockProducts = [
      { id: 1, name: 'Eco-friendly Water Bottle', points: 150, category: 'kitchen', description: 'Sustainable water bottle made from recycled materials', stock: 15, image: '/images/water-bottle.jpg', status: 'active' },
      { id: 2, name: 'Reusable Grocery Bag', points: 100, category: 'shopping', description: 'Durable shopping bag that reduces plastic waste', stock: 25, image: '/images/grocery-bag.jpg', status: 'active' },
      { id: 3, name: 'Bamboo Toothbrush', points: 80, category: 'bathroom', description: 'Biodegradable toothbrush with soft bristles', stock: 30, image: '/images/toothbrush.jpg', status: 'active' },
      { id: 4, name: 'Solar Power Bank', points: 300, category: 'electronics', description: 'Charge your devices using solar energy', stock: 0, image: '/images/power-bank.jpg', status: 'out_of_stock' },
    ];
    setProducts(mockProducts);

    // Mock orders data
    const mockOrders = [
      { id: 101, userName: 'Alex Johnson', date: '2025-03-28', status: 'completed', totalPoints: 330 },
      { id: 102, userName: 'Sam Taylor', date: '2025-03-25', status: 'completed', totalPoints: 410 },
      { id: 103, userName: 'Morgan Lee', date: '2025-03-20', status: 'processing', totalPoints: 300 },
    ];
    setOrders(mockOrders);
  }, []);

  // Get unique categories
  const categories = ['all', ...new Set(products.map(item => item.category))];
  
  // Available categories for new products
  const availableCategories = [...new Set(products.map(item => item.category))];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Stats calculations
  const totalSales = orders.filter(order => order.status === 'completed').length;
  const totalPointsRedeemed = orders.reduce((sum, order) => sum + order.totalPoints, 0);
  const pendingOrders = orders.filter(order => order.status === 'processing').length;
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === 'points' || name === 'stock' ? parseInt(value, 10) || 0 : value
    });
  };
  
  // Handle form submission
  const handleAddProduct = (e) => {
    e.preventDefault();
    
    // Create new product with ID
    const newProductWithId = {
      ...newProduct,
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      image: null // Could implement image upload in a real application
    };
    
    // Add to products list
    setProducts([...products, newProductWithId]);
    
    // Reset form
    setNewProduct({
      name: '',
      points: 0,
      category: '',
      description: '',
      stock: 0,
      status: 'active'
    });
    
    // Close form
    setShowAddForm(false);
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Company Store</h1>
      
      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-blue-800">Total Sales</h3>
          <p className="text-2xl font-bold text-blue-600">{totalSales}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-green-800">Points Redeemed</h3>
          <p className="text-2xl font-bold text-green-600">{totalPointsRedeemed}</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-amber-800">Pending Orders</h3>
          <p className="text-2xl font-bold text-amber-600">{pendingOrders}</p>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('products')}
            className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'products'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`mr-6 py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'orders'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Orders
          </button>
        </nav>
      </div>
      
      {/* Products Tab */}
      {activeTab === 'products' && (
        <div>
          <div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
            {/* Search */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 pl-8 border border-gray-300 rounded"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg 
                className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded text-sm capitalize whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Add Product Button */}
          <div className="mb-6">
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add New Product
            </button>
          </div>
          
          {/* Add Product Form */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Add New Product</h2>
                  <button 
                    onClick={() => setShowAddForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <form onSubmit={handleAddProduct}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                      <input
                        type="text"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Points</label>
                      <input
                        type="number"
                        name="points"
                        value={newProduct.points}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        min="1"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <div className="relative">
                        <select
                          name="category"
                          value={newProduct.category}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded appearance-none"
                          required
                        >
                          <option value="">Select Category</option>
                          {availableCategories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                          <option value="new">New Category</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {newProduct.category === 'new' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Category Name</label>
                        <input
                          type="text"
                          name="category"
                          value=""
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded"
                          placeholder="Enter new category"
                          required
                        />
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                      <input
                        type="number"
                        name="stock"
                        value={newProduct.stock}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        min="0"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <div className="relative">
                        <select
                          name="status"
                          value={newProduct.status}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded appearance-none"
                        >
                          <option value="active">Active</option>
                          <option value="out_of_stock">Out of Stock</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={newProduct.description}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Add Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-500">No image</div>
                  )}
                  <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${
                    product.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.status === 'active' ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {product.points} pts
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 capitalize">
                      Category: {product.category}
                    </span>
                    <span className="text-sm text-gray-600">
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-lg text-gray-600">No products found</h3>
              <p className="mt-2 text-gray-500">Try a different search term or category</p>
            </div>
          )}
        </div>
      )}
      
      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Points</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map(order => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.userName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.totalPoints}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status === 'completed' ? 'Completed' : 'Processing'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {orders.length === 0 && (
              <div className="text-center py-10">
                <h3 className="text-lg text-gray-600">No orders found</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyStorePage;