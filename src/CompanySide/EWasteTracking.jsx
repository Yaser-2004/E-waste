// import React, { useState } from 'react';
// import PageHeader from '../CompanySide/PageHeader';
// import FilterGroup from '../CompanySide/FilterGroup';
// import DataTable from '../CompanySide/DataTable';

// const EWasteTracking = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [searchInput, setSearchInput] = useState('');
//   const [statusFilter, setStatusFilter] = useState('');

//   // Sample data - shortened for simplicity
//   const products = [
//     {
//       id: "#PT-10067892",
//       manufacturerId: "SM-G975F-XEU12345",
//       type: "Smartphone",
//       manufacturer: "Samsung",
//       manufactureDate: "Jan 15, 2020",
//       status: "active",
//       timeline: [
//         { date: "Jan 15, 2020", event: "Manufacturing", details: "Product manufactured by Samsung" },
//         { date: "Mar 10, 2025", event: "Collection Request", details: "Product collected for e-waste processing" },
//         { date: "Current", event: "Waiting for Processing", details: "Product in queue for component separation" }
//       ]
//     },
//     {
//       id: "#PT-10067891",
//       manufacturerId: "IP-12PRO-A23456789",
//       type: "Smartphone",
//       manufacturer: "Apple",
//       manufactureDate: "Sep 23, 2020",
//       status: "processing",
//       timeline: []
//     },
//     {
//       id: "#PT-10067890",
//       manufacturerId: "DEL-XPS15-D987654",
//       type: "Laptop",
//       manufacturer: "Dell",
//       manufactureDate: "Mar 5, 2019",
//       status: "recycled",
//       timeline: []
//     }
//   ];

//   const handleSearch = () => {
//     if (searchInput.trim() !== '') {
//       console.log(`Searching for product: ${searchInput}`);
//     }
//   };

//   const handleViewTimeline = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseTimeline = () => {
//     setSelectedProduct(null);
//   };

//   const filteredProducts = products.filter(product => {
//     if (statusFilter && product.status !== statusFilter) {
//       return false;
//     }
//     return true;
//   });

//   // Status badge styling
//   const getBadgeClass = (status) => {
//     switch (status) {
//       case 'active': return 'bg-blue-100 text-blue-700';
//       case 'processing': return 'bg-yellow-100 text-yellow-700';
//       case 'recycled': return 'bg-green-100 text-green-700';
//       case 'disposed': return 'bg-red-100 text-red-700';
//       default: return 'bg-gray-100 text-gray-700';
//     }
//   };

//   // Table columns configuration
//   const columns = [
//     { key: 'id', header: 'Product ID' },
//     { key: 'type', header: 'Type' },
//     { key: 'manufacturer', header: 'Manufacturer' },
//     { 
//       key: 'status', 
//       header: 'Status',
//       render: (row) => (
//         <span className={`px-2 py-1 rounded-full text-sm inline-block text-center ${getBadgeClass(row.status)}`}>
//           {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
//         </span>
//       )
//     },
//     {
//       key: 'actions',
//       header: 'Action',
//       render: (row) => (
//         <button 
//           className="text-blue-600 hover:underline"
//           onClick={() => handleViewTimeline(row)}
//         >
//           View Timeline
//         </button>
//       )
//     }
//   ];

//   return (
//     <main className="flex-1 p-5">
//       <PageHeader 
//         title="E-Waste Tracking" 
//         description="Track electronic products through their lifecycle" 
//       />

//       {/* Search */}
//       <div className="flex gap-2 mb-4">
//         <input 
//           type="text" 
//           placeholder="Enter product ID or manufacturer ID..." 
//           className="flex-1 p-2 border rounded"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//         />
//         <button 
//           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
//           onClick={handleSearch}
//         >
//           Track Product
//         </button>
//       </div>

//       {/* Simple Filter */}
//       <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
//         <h2 className="text-xl font-semibold mb-4">Filters</h2>
//         <div className="flex gap-4">
//           <FilterGroup 
//             label="Status" 
//             options={['All Statuses', 'Active', 'Processing', 'Recycled', 'Disposed']} 
//             onChange={(value) => setStatusFilter(value === 'all-statuses' ? '' : value)}
//           />
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="bg-white rounded-lg p-5 shadow-sm">
//         <div className="mb-4">
//           <h2 className="text-xl font-semibold">Tracked Products</h2>
//         </div>
        
//         <DataTable 
//           columns={columns}
//           data={filteredProducts}
//           onRowAction={handleViewTimeline}
//         />
//       </div>

//       {/* Timeline View */}
//       {selectedProduct && (
//         <div className="bg-white rounded-lg p-5 mt-5 shadow-sm">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Product Timeline: {selectedProduct.id}</h2>
//             <button 
//               className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//               onClick={handleCloseTimeline}
//             >
//               Close
//             </button>
//           </div>
          
//           <div className="pl-6 relative">
//             <div className="absolute left-0 top-0 h-full w-0.5 bg-green-500"></div>
//             {selectedProduct.timeline.length > 0 ? (
//               selectedProduct.timeline.map((item, index) => (
//                 <div key={index} className="mb-4 relative">
//                   <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-green-500"></div>
//                   <div className="text-sm text-gray-500">{item.date}</div>
//                   <div className="font-medium">{item.event}</div>
//                   <div className="text-sm">{item.details}</div>
//                 </div>
//               ))
//             ) : (
//               <p>No timeline data available for this product.</p>
//             )}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default EWasteTracking;

// import React, { useEffect, useReducer } from 'react';
// import PageHeader from '../CompanySide/PageHeader';
// import FilterGroup from '../CompanySide/FilterGroup';
// import DataTable from '../CompanySide/DataTable';
// import { debounce } from 'lodash';

// // State reducer for complex state management
// const initialState = {
//   products: [],
//   filteredProducts: [],
//   selectedProduct: null,
//   searchInput: '',
//   statusFilter: '',
//   isLoading: false,
//   error: null,
//   currentPage: 1,
//   itemsPerPage: 10
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'FETCH_START':
//       return { ...state, isLoading: true, error: null };
//     case 'FETCH_SUCCESS':
//       return { 
//         ...state, 
//         isLoading: false, 
//         products: action.payload,
//         filteredProducts: action.payload 
//       };
//     case 'FETCH_ERROR':
//       return { ...state, isLoading: false, error: action.payload };
//     case 'SET_SEARCH':
//       return { ...state, searchInput: action.payload };
//     case 'SET_STATUS_FILTER':
//       return { ...state, statusFilter: action.payload };
//     case 'SELECT_PRODUCT':
//       return { ...state, selectedProduct: action.payload };
//     case 'CLOSE_TIMELINE':
//       return { ...state, selectedProduct: null };
//     case 'APPLY_FILTERS':
//       const filtered = state.products.filter(product => {
//         // Status filter
//         if (state.statusFilter && product.status !== state.statusFilter) {
//           return false;
//         }
        
//         // Search filter
//         if (state.searchInput.trim() !== '') {
//           const searchLower = state.searchInput.toLowerCase();
//           return (
//             product.id.toLowerCase().includes(searchLower) ||
//             product.manufacturerId.toLowerCase().includes(searchLower) ||
//             product.manufacturer.toLowerCase().includes(searchLower)
//           );
//         }
        
//         return true;
//       });
//       return { ...state, filteredProducts: filtered };
//     case 'SET_PAGE':
//       return { ...state, currentPage: action.payload };
//     default:
//       return state;
//   }
// }

// const EWasteTracking = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
  
//   // Fetch data
//   useEffect(() => {
//     const fetchProducts = async () => {
//       dispatch({ type: 'FETCH_START' });
//       try {
//         // In a real app, this would be an API call
//         // For demo purposes, using the sample data
//         const data = [
//           {
//             id: "#PT-10067892",
//             manufacturerId: "SM-G975F-XEU12345",
//             type: "Smartphone",
//             manufacturer: "Samsung",
//             manufactureDate: "Jan 15, 2020",
//             status: "active",
//             timeline: [
//               { date: "Jan 15, 2020", event: "Manufacturing", details: "Product manufactured by Samsung" },
//               { date: "Mar 10, 2025", event: "Collection Request", details: "Product collected for e-waste processing" },
//               { date: "Current", event: "Waiting for Processing", details: "Product in queue for component separation" }
//             ]
//           },
//           {
//             id: "#PT-10067891",
//             manufacturerId: "IP-12PRO-A23456789",
//             type: "Smartphone",
//             manufacturer: "Apple",
//             manufactureDate: "Sep 23, 2020",
//             status: "processing",
//             timeline: []
//           },
//           {
//             id: "#PT-10067890",
//             manufacturerId: "DEL-XPS15-D987654",
//             type: "Laptop",
//             manufacturer: "Dell",
//             manufactureDate: "Mar 5, 2019",
//             status: "recycled",
//             timeline: []
//           }
//         ];
//         dispatch({ type: 'FETCH_SUCCESS', payload: data });
//       } catch (error) {
//         dispatch({ type: 'FETCH_ERROR', payload: error.message });
//       }
//     };
    
//     fetchProducts();
//   }, []);
  
//   // Debounced search handler
//   const debouncedSearch = React.useCallback(
//     debounce(() => {
//       dispatch({ type: 'APPLY_FILTERS' });
//     }, 300),
//     [state.searchInput, state.statusFilter]
//   );
  
//   // Apply filters when search or status filter changes
//   useEffect(() => {
//     debouncedSearch();
//     return debouncedSearch.cancel;
//   }, [state.searchInput, state.statusFilter, debouncedSearch]);
  
//   const handleSearchChange = (e) => {
//     dispatch({ type: 'SET_SEARCH', payload: e.target.value });
//   };
  
//   const handleStatusFilterChange = (value) => {
//     dispatch({ 
//       type: 'SET_STATUS_FILTER', 
//       payload: value === 'all-statuses' ? '' : value.toLowerCase()
//     });
//   };
  
//   const handleViewTimeline = (product) => {
//     dispatch({ type: 'SELECT_PRODUCT', payload: product });
//   };
  
//   const handleCloseTimeline = () => {
//     dispatch({ type: 'CLOSE_TIMELINE' });
//   };
  
//   const handlePageChange = (page) => {
//     dispatch({ type: 'SET_PAGE', payload: page });
//   };
  
//   // Status badge styling
//   const getBadgeClass = (status) => {
//     switch (status) {
//       case 'active': return 'bg-blue-100 text-blue-700';
//       case 'processing': return 'bg-yellow-100 text-yellow-700';
//       case 'recycled': return 'bg-green-100 text-green-700';
//       case 'disposed': return 'bg-red-100 text-red-700';
//       default: return 'bg-gray-100 text-gray-700';
//     }
//   };
  
//   // Pagination
//   const paginatedProducts = state.filteredProducts.slice(
//     (state.currentPage - 1) * state.itemsPerPage,
//     state.currentPage * state.itemsPerPage
//   );
  
//   const totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
  
//   // Table columns configuration
//   const columns = [
//     { key: 'id', header: 'Product ID' },
//     { key: 'manufacturerId', header: 'Manufacturer ID' },
//     { key: 'type', header: 'Type' },
//     { key: 'manufacturer', header: 'Manufacturer' },
//     { key: 'manufactureDate', header: 'Date' },
//     { 
//       key: 'status', 
//       header: 'Status',
//       render: (row) => (
//         <span 
//           className={`px-2 py-1 rounded-full text-sm inline-block text-center ${getBadgeClass(row.status)}`}
//           aria-label={`Status: ${row.status}`}
//         >
//           {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
//         </span>
//       )
//     },
//     {
//       key: 'actions',
//       header: 'Action',
//       render: (row) => (
//         <button 
//           className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
//           onClick={() => handleViewTimeline(row)}
//           aria-label={`View timeline for product ${row.id}`}
//         >
//           View Timeline
//         </button>
//       )
//     }
//   ];

//   return (
//     <main className="flex-1 p-5">
//       <PageHeader 
//         title="E-Waste Tracking" 
//         description="Track electronic products through their lifecycle" 
//       />

//       {/* Search & Error State */}
//       {state.error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
//           <strong className="font-bold">Error:</strong>
//           <span className="block sm:inline"> {state.error}</span>
//         </div>
//       )}
      
//       <div className="md:flex gap-2 mb-4">
//         <div className="relative flex-1 mb-2 md:mb-0">
//           <input 
//             type="text" 
//             placeholder="Enter product ID or manufacturer ID..." 
//             className="w-full p-2 pl-8 border rounded"
//             value={state.searchInput}
//             onChange={handleSearchChange}
//             aria-label="Search products"
//           />
//           <span className="absolute left-2 top-2.5 text-gray-400">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </span>
//         </div>
//         <button 
//           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full md:w-auto"
//           onClick={() => dispatch({ type: 'APPLY_FILTERS' })}
//           disabled={state.isLoading}
//         >
//           Track Product
//         </button>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
//         <h2 className="text-xl font-semibold mb-4">Filters</h2>
//         <div className="flex flex-wrap gap-4">
//           <FilterGroup 
//             label="Status" 
//             options={['All Statuses', 'Active', 'Processing', 'Recycled', 'Disposed']} 
//             onChange={handleStatusFilterChange}
//             selected={state.statusFilter ? state.statusFilter.charAt(0).toUpperCase() + state.statusFilter.slice(1) : 'All Statuses'}
//           />
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="bg-white rounded-lg p-5 shadow-sm">
//         <div className="mb-4 flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Tracked Products</h2>
//           <span className="text-sm text-gray-500">
//             {state.isLoading ? 'Loading...' : `${state.filteredProducts.length} products found`}
//           </span>
//         </div>
        
//         {state.isLoading ? (
//           <div className="flex justify-center py-8">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
//           </div>
//         ) : (
//           <>
//             <DataTable 
//               columns={columns}
//               data={paginatedProducts}
//               onRowAction={handleViewTimeline}
//               keyField="id"
//               emptyMessage="No products found matching your criteria"
//             />
            
//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-center mt-4">
//                 <nav aria-label="Pagination">
//                   <ul className="flex items-center">
//                     <li>
//                       <button
//                         onClick={() => handlePageChange(state.currentPage - 1)}
//                         disabled={state.currentPage === 1}
//                         className={`mx-1 px-3 py-1 rounded ${state.currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
//                         aria-label="Previous page"
//                       >
//                         &laquo;
//                       </button>
//                     </li>
//                     {[...Array(totalPages)].map((_, i) => (
//                       <li key={i}>
//                         <button
//                           onClick={() => handlePageChange(i + 1)}
//                           className={`mx-1 px-3 py-1 rounded ${state.currentPage === i + 1 ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'}`}
//                           aria-label={`Page ${i + 1}`}
//                           aria-current={state.currentPage === i + 1 ? 'page' : undefined}
//                         >
//                           {i + 1}
//                         </button>
//                       </li>
//                     ))}
//                     <li>
//                       <button
//                         onClick={() => handlePageChange(state.currentPage + 1)}
//                         disabled={state.currentPage === totalPages}
//                         className={`mx-1 px-3 py-1 rounded ${state.currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-100'}`}
//                         aria-label="Next page"
//                       >
//                         &raquo;
//                       </button>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* Timeline View */}
//       {state.selectedProduct && (
//         <div className="bg-white rounded-lg p-5 mt-5 shadow-sm">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <h2 className="text-xl font-semibold">Product Timeline: {state.selectedProduct.id}</h2>
//               <p className="text-sm text-gray-500">Manufacturer: {state.selectedProduct.manufacturer} | Type: {state.selectedProduct.type}</p>
//             </div>
//             <button 
//               className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
//               onClick={handleCloseTimeline}
//               aria-label="Close timeline view"
//             >
//               Close
//             </button>
//           </div>
          
//           <div className="pl-6 relative">
//             <div className="absolute left-0 top-0 h-full w-0.5 bg-green-500"></div>
//             {state.selectedProduct.timeline && state.selectedProduct.timeline.length > 0 ? (
//               state.selectedProduct.timeline.map((item, index) => (
//                 <div key={index} className="mb-6 relative">
//                   <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-green-500"></div>
//                   <div className="text-sm text-gray-500">{item.date}</div>
//                   <div className="font-medium">{item.event}</div>
//                   <div className="text-sm text-gray-700">{item.details}</div>
//                 </div>
//               ))
//             ) : (
//               <div className="py-4 text-gray-500">No timeline data available for this product.</div>
//             )}
//           </div>
          
//           {/* Timeline Actions */}
//           <div className="mt-6 pt-4 border-t border-gray-200">
//             <h3 className="font-medium mb-2">Actions</h3>
//             <div className="flex flex-wrap gap-2">
//               <button 
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
//                 aria-label="Request update"
//               >
//                 Request Update
//               </button>
//               <button 
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
//                 aria-label="Flag for review"
//               >
//                 Flag for Review
//               </button>
//               <button 
//                 className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
//                 aria-label="Export timeline"
//               >
//                 Export Timeline
//               </button>
//               <button 
//                 className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
//                 aria-label="Add note"
//               >
//                 Add Note
//               </button>
//             </div>
//           </div>
          
//           {/* Environmental Impact */}
//           <div className="mt-6 pt-4 border-t border-gray-200">
//             <h3 className="font-medium mb-3">Environmental Impact</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-green-50 p-3 rounded">
//                 <div className="text-green-700 font-medium">Carbon Footprint</div>
//                 <div className="text-lg font-semibold">
//                   {state.selectedProduct.status === 'recycled' ? '25% Reduced' : 'Pending Analysis'}
//                 </div>
//               </div>
//               <div className="bg-blue-50 p-3 rounded">
//                 <div className="text-blue-700 font-medium">Water Saved</div>
//                 <div className="text-lg font-semibold">
//                   {state.selectedProduct.status === 'recycled' ? '350 Liters' : 'Pending Analysis'}
//                 </div>
//               </div>
//               <div className="bg-purple-50 p-3 rounded">
//                 <div className="text-purple-700 font-medium">Materials Recovered</div>
//                 <div className="text-lg font-semibold">
//                   {state.selectedProduct.status === 'recycled' ? '85%' : 'Pending Analysis'}
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Suggested Next Steps */}
//           <div className="mt-6 pt-4 border-t border-gray-200">
//             <h3 className="font-medium mb-3">Suggested Next Steps</h3>
//             <ul className="list-disc pl-5 space-y-2">
//               {state.selectedProduct.status === 'active' && (
//                 <>
//                   <li>Schedule collection for end-of-life processing</li>
//                   <li>Run diagnostics for potential refurbishment</li>
//                   <li>Audit for compliance with e-waste regulations</li>
//                 </>
//               )}
//               {state.selectedProduct.status === 'processing' && (
//                 <>
//                   <li>Verify component separation completion</li>
//                   <li>Validate hazardous material handling</li>
//                   <li>Track material recovery progress</li>
//                 </>
//               )}
//               {state.selectedProduct.status === 'recycled' && (
//                 <>
//                   <li>Generate recycling certification</li>
//                   <li>Update sustainability metrics</li>
//                   <li>Complete circular economy report</li>
//                 </>
//               )}
//               {state.selectedProduct.status === 'disposed' && (
//                 <>
//                   <li>Verify proper disposal documentation</li>
//                   <li>Conduct environmental impact assessment</li>
//                   <li>Complete regulatory compliance report</li>
//                 </>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default EWasteTracking;




import React, { useState, useEffect } from 'react';

const EWasteTracking = ({ initialData = [] }) => {
  // State management
  const [products, setProducts] = useState([initialData.length ? initialData : []]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("EWasteTracking rendering with props:", props);
  // Add this to your EWasteTracking component
    useEffect(() => {
        console.log('EWasteTracking component mounted');
        return () => console.log('EWasteTracking component unmounted');
    }, []);

  // Sample data - would normally come from an API
  const sampleProducts = [
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

  // Load data on component mount
  // Update the useEffect in EWasteTracking.js to handle component mounting/unmounting
  useEffect(() => {
    let mounted = true;
    const timer = setTimeout(() => {
      if (mounted) {
        try {
          setProducts(sampleProducts);
          setFilteredProducts(sampleProducts);
          setIsLoading(false);
        } catch (err) {
          setError("Failed to load products");
          setIsLoading(false);
        }
      }
    }, 1000);
  
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []);

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

  const handleViewTimeline = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseTimeline = () => {
    setSelectedProduct(null);
  };

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
    <div className="ewaste-container p-5 max-w-full text-black">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">E-Waste Tracking</h1>
        <p className="text-gray-600">Track electronic products through their lifecycle</p>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {error}</span>
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
            aria-label="Search products"
          />
        </div>
        <button 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full md:w-auto"
          onClick={() => console.log("Search clicked")}
          disabled={isLoading}
        >
          Track Product
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap gap-4">
          <div className="mb-4">
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
              <p className="text-sm text-gray-500">Manufacturer: {selectedProduct.manufacturer} | Type: {selectedProduct.type}</p>
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
          
          {/* Simple Timeline Actions */}
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

// export default EWasteTracking;

// In CompanySide/EWasteTracking.js
const EWasteTrackingWrapper = () => {
    console.log("EWasteTracking component rendering");
    return (
      <div className="ewaste-tracking-container">
        <EWasteTracking />
      </div>
    );
  };
  
  export default EWasteTrackingWrapper;
