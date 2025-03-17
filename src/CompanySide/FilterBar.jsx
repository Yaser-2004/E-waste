import React from 'react';

import FilterGroup from './FilterGroup';

const FilterBar = ({ filters=[], onChange }) => {
  return (
    <div className="bg-white rounded-lg p-5 mb-5 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="flex flex-wrap gap-4">
        {filters.map((filter, index) => (
          <FilterGroup 
            key={index}
            label={filter.label} 
            options={filter.options} 
            onChange={(value) => onChange(filter.key, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;