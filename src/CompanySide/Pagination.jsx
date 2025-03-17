import React from 'react';

const Pagination = ({ currentPage, totalPages, totalItems, itemsPerPage, onPageChange }) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
  return (
    <div className="flex justify-between items-center p-4 bg-green-50 mt-3 rounded">
      <div>
        Showing {startItem}-{endItem} of {totalItems} items
      </div>
      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer ${
              currentPage === page ? 'bg-green-500 text-white' : 'hover:bg-green-100'
            }`}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button 
            className="w-8 h-8 flex items-center justify-center rounded cursor-pointer hover:bg-green-100"
            onClick={() => onPageChange(currentPage + 1)}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;