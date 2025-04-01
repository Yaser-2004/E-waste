// import React, { useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// const Store = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredItems, setFilteredItems] = useState([]);
  
//   // Mock data - replace with your actual data source
//   const storeItems = [
//     { id: 1, name: 'Eco-friendly Water Bottle', points: 150, category: 'kitchen', image: '/images/water-bottle.jpg' },
//     { id: 2, name: 'Reusable Grocery Bag', points: 100, category: 'shopping', image: '/images/grocery-bag.jpg' },
//     { id: 3, name: 'Bamboo Toothbrush', points: 80, category: 'bathroom', image: '/images/toothbrush.jpg' },
//     { id: 4, name: 'Recycled Notebook', points: 120, category: 'office', image: '/images/notebook.jpg' },
//     { id: 5, name: 'Solar Power Bank', points: 300, category: 'electronics', image: '/images/power-bank.jpg' },
//   ];
  
//   // Mock user data - replace with actual user data
//   const userData = {
//     ecoPoints: 520
//   };
  
//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
    
//     if (query.trim() === '') {
//       setFilteredItems(storeItems);
//     } else {
//       const filtered = storeItems.filter(item => 
//         item.name.toLowerCase().includes(query) || 
//         item.category.toLowerCase().includes(query)
//       );
//       setFilteredItems(filtered);
//     }
//   };
  
//   // Initialize filtered items with all items on component mount
//   React.useEffect(() => {
//     setFilteredItems(storeItems);
//   }, []);
  
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <div className="bg-green-100 p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-green-800">Eco Store</h1>
//           <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center">
//             <span className="text-green-600 font-bold">{userData.ecoPoints}</span>
//             <span className="ml-2 text-green-800">EcoPoints</span>
//           </div>
//         </div>
        
//         <div className="mb-8">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search for eco-friendly products..."
//               className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//             <svg 
//               className="absolute left-4 top-4 h-5 w-5 text-gray-400" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24"
//             >
//               <path 
//                 strokeLinecap="round" 
//                 strokeLinejoin="round" 
//                 strokeWidth="2" 
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
//               />
//             </svg>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.map(item => (
//             <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
//               <div className="h-48 bg-gray-200">
//                 {/* Replace with actual image component */}
//                 <div className="w-full h-full flex items-center justify-center text-gray-500">
//                   [Product Image]
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-lg mb-2">{item.name}</h3>
//                 <div className="flex items-center justify-between">
//                   <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//                     {item.points} points
//                   </span>
//                   <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300">
//                     Redeem
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {filteredItems.length === 0 && (
//           <div className="text-center py-10">
//             <h3 className="text-xl text-gray-600">No items found matching "{searchQuery}"</h3>
//             <p className="mt-2 text-gray-500">Try a different search term or browse our categories</p>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Store;
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Store = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock data - replace with your actual data source
  const storeItems = [
    { id: 1, name: 'Eco-friendly Water Bottle', points: 150, category: 'kitchen', image: '/images/water-bottle.jpg', stock: 15, description: 'Sustainable water bottle made from recycled materials' },
    { id: 2, name: 'Reusable Grocery Bag', points: 100, category: 'shopping', image: '/images/grocery-bag.jpg', stock: 25, description: 'Durable shopping bag that reduces plastic waste' },
    { id: 3, name: 'Bamboo Toothbrush', points: 80, category: 'bathroom', image: '/images/toothbrush.jpg', stock: 30, description: 'Biodegradable toothbrush with soft bristles' },
    { id: 4, name: 'Recycled Notebook', points: 120, category: 'office', image: '/images/notebook.jpg', stock: 20, description: 'Notebook made from 100% recycled paper' },
    { id: 5, name: 'Solar Power Bank', points: 300, category: 'electronics', image: '/images/power-bank.jpg', stock: 10, description: 'Charge your devices using solar energy' },
    { id: 6, name: 'Stainless Steel Straw Set', points: 90, category: 'kitchen', image: '/images/straw-set.jpg', stock: 25, description: 'Reusable straws with cleaning brush included' },
    { id: 7, name: 'Cotton Produce Bags', points: 110, category: 'shopping', image: '/images/produce-bags.jpg', stock: 18, description: 'Lightweight mesh bags for fruits and vegetables' },
    { id: 8, name: 'Recycled Desk Organizer', points: 140, category: 'office', image: '/images/desk-organizer.jpg', stock: 12, description: 'Keep your workspace tidy with this eco-friendly organizer' },
  ];
  
  // Mock user data - replace with actual user data
  const userData = {
    ecoPoints: 520
  };
  
  // Categories for filter
  const categories = ['all', ...new Set(storeItems.map(item => item.category))];
  
  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterItems(query, selectedCategory);
  };
  
  // Handle category filter change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterItems(searchQuery, category);
  };
  
  // Filter items based on search query and category
  const filterItems = (query, category) => {
    let filtered = storeItems;
    
    // Filter by category
    if (category !== 'all') {
      filtered = filtered.filter(item => item.category === category);
    }
    
    // Filter by search query
    if (query.trim() !== '') {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredItems(filtered);
  };
  
  // Get item quantity in cart
  const getItemQuantity = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };
  
  // Add item to cart
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Item already in cart, increase quantity
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      // New item, add to cart with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  
  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };
  
  // Update item quantity in cart
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const item = storeItems.find(item => item.id === itemId);
    if (newQuantity > item.stock) return;
    
    setCart(cart.map(item => 
      item.id === itemId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };
  
  // Calculate total points in cart
  const totalCartPoints = cart.reduce((total, item) => total + (item.points * item.quantity), 0);
  
  // Initialize filtered items with all items on component mount
  useEffect(() => {
    filterItems('', 'all');
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-green-100 p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-800">Eco Store</h1>
          <div className="flex items-center">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center mr-4">
              <span className="text-green-600 font-bold">{userData.ecoPoints}</span>
              <span className="ml-2 text-green-800">EcoPoints</span>
            </div>
            <button 
              className="relative bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Cart sidebar */}
        {isCartOpen && (
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto">
            <div className="p-4 bg-green-100 flex justify-between items-center">
              <h2 className="font-bold text-green-800">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-600 hover:text-gray-800">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 my-6">Your cart is empty</p>
              ) : (
                <>
                  {cart.map(item => (
                    <div key={item.id} className="border-b py-3">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)} 
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-green-700">{item.points} points</div>
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="bg-gray-200 px-2 rounded-l"
                          >
                            -
                          </button>
                          <input 
                            type="number" 
                            min="1" 
                            max={storeItems.find(storeItem => storeItem.id === item.id).stock}
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-12 text-center border-t border-b"
                          />
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="bg-gray-200 px-2 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-between mb-4">
                      <span className="font-bold">Total Points:</span>
                      <span className="font-bold text-green-700">{totalCartPoints}</span>
                    </div>
                    <button 
                      className={`w-full py-3 rounded-lg text-white font-bold ${
                        totalCartPoints > userData.ecoPoints 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                      disabled={totalCartPoints > userData.ecoPoints}
                    >
                      {totalCartPoints > userData.ecoPoints 
                        ? 'Not Enough Points' 
                        : 'Checkout'}
                    </button>
                    {totalCartPoints > userData.ecoPoints && (
                      <p className="text-red-500 text-sm mt-2 text-center">
                        You need {totalCartPoints - userData.ecoPoints} more points
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        
        {/* Search and filters */}
        <div className="mb-8">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for eco-friendly products..."
              className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg 
              className="absolute left-4 top-4 h-5 w-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm capitalize ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => {
            const itemQuantity = getItemQuantity(item.id);
            
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gray-200">
                  {/* Replace with actual image component */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    [Product Image]
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {item.points} points
                    </span>
                  </div>
                  
                  {itemQuantity > 0 ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-green-500 rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, itemQuantity - 1)}
                          className="px-3 py-2 text-green-500 hover:bg-green-50"
                        >
                          -
                        </button>
                        <span className="px-3 py-2 border-l border-r border-green-500 text-green-700">
                          {itemQuantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, itemQuantity + 1)}
                          className="px-3 py-2 text-green-500 hover:bg-green-50"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => setIsCartOpen(true)}
                        className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-2 rounded-md text-sm"
                      >
                        View Cart
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm transition-colors duration-300 flex items-center justify-center"
                    >
                      <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-xl text-gray-600">No items found matching "{searchQuery}"</h3>
            <p className="mt-2 text-gray-500">Try a different search term or browse our categories</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Store;