import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';

const CompanyStorePage = () => {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  
  // Sample product data - in a real app this would come from an API
  useEffect(() => {
    // Mock data for demonstration
    const mockProducts = [
      {
        id: 1,
        name: "Eco-Friendly Water Bottle",
        description: "Reusable stainless steel water bottle",
        regularPrice: 24.99,
        ecoPointsDiscount: 10,
        ecoPointsRequired: 500,
        image: "/api/placeholder/150/150",
        category: "Household",
        stock: 45
      },
      {
        id: 2,
        name: "Recycled Paper Notebook",
        description: "100% recycled paper notebook with bamboo cover",
        regularPrice: 12.99,
        ecoPointsDiscount: 15,
        ecoPointsRequired: 300,
        image: "/api/placeholder/150/150",
        category: "Office",
        stock: 120
      },
      {
        id: 3,
        name: "Solar Power Bank",
        description: "Portable solar-powered charging device",
        regularPrice: 49.99,
        ecoPointsDiscount: 20,
        ecoPointsRequired: 800,
        image: "/api/placeholder/150/150",
        category: "Electronics",
        stock: 30
      }
    ];
    
    setProducts(mockProducts);
  }, []);
  
  // Filter products based on search term and filter option
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterBy === 'all') return matchesSearch;
    if (filterBy === 'highDiscount') return matchesSearch && product.ecoPointsDiscount >= 15;
    if (filterBy === 'lowPoints') return matchesSearch && product.ecoPointsRequired < 500;
    
    return matchesSearch;
  });
  
  // Functions for product management
  const handleAddProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: products.length + 1, // Simple ID generation
    };
    setProducts([...products, productWithId]);
    setShowAddModal(false);
  };
  
  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    ));
    setShowEditModal(false);
    setCurrentProduct(null);
  };
  
  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };
  
  const openEditModal = (product) => {
    setCurrentProduct(product);
    setShowEditModal(true);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Store Management</h1>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Product
        </button>
      </div>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 p-2 border border-gray-300 rounded-md w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <FaFilter className="text-gray-500" />
          <select 
            className="p-2 border border-gray-300 rounded-md"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="all">All Products</option>
            <option value="highDiscount">High Discount (15%+)</option>
            <option value="lowPoints">Low Points {'(<500)'}</option>
          </select>
        </div>
      </div>
      
      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Regular Price</th>
              <th className="py-3 px-4 text-left">EcoPoints Discount</th>
              <th className="py-3 px-4 text-left">EcoPoints Required</th>
              <th className="py-3 px-4 text-left">Stock</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <tr key={product.id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.category}</div>
                  </td>
                  <td className="py-3 px-4">${product.regularPrice.toFixed(2)}</td>
                  <td className="py-3 px-4">{product.ecoPointsDiscount}%</td>
                  <td className="py-3 px-4">{product.ecoPointsRequired} points</td>
                  <td className="py-3 px-4">{product.stock} units</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => openEditModal(product)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                  No products found. Add a new product or adjust your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Add Product Modal */}
      {showAddModal && (
        <ProductModal 
          onClose={() => setShowAddModal(false)}
          onSave={handleAddProduct}
          title="Add New Product"
        />
      )}
      
      {/* Edit Product Modal */}
      {showEditModal && (
        <ProductModal 
          onClose={() => setShowEditModal(false)}
          onSave={handleEditProduct}
          title="Edit Product"
          product={currentProduct}
        />
      )}
    </div>
  );
};

// Product Modal Component for Add/Edit
const ProductModal = ({ onClose, onSave, title, product }) => {
  const [formData, setFormData] = useState(
    product || {
      name: "",
      description: "",
      regularPrice: 0,
      ecoPointsDiscount: 0,
      ecoPointsRequired: 0,
      category: "",
      stock: 0,
      image: "/api/placeholder/150/150" // Default placeholder image
    }
  );
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "regularPrice" || name === "ecoPointsDiscount" || name === "ecoPointsRequired" || name === "stock" 
        ? Number(value) 
        : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="3"
                required
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Regular Price ($)</label>
              <input
                type="number"
                name="regularPrice"
                value={formData.regularPrice}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                min="0"
                step="0.01"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                min="0"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">EcoPoints Discount (%)</label>
              <input
                type="number"
                name="ecoPointsDiscount"
                value={formData.ecoPointsDiscount}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                min="0"
                max="100"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">EcoPoints Required</label>
              <input
                type="number"
                name="ecoPointsRequired"
                value={formData.ecoPointsRequired}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                min="0"
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyStorePage;