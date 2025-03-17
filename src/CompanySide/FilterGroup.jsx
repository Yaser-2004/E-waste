import React from 'react';

const FilterGroup = ({ label, options, onChange }) => {
  return (
    <div className="flex flex-col gap-1 min-w-40">
      <label className="text-sm text-gray-600">{label}</label>
      <select 
        className="p-2 rounded border border-gray-300 bg-green-50"
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option.toLowerCase().replace(' ', '-')}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterGroup;