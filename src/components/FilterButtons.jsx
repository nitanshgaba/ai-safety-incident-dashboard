import React from 'react';
import './FilterButtons.css';

const filters = [
  { label: "All", value: "All" },
  { label: "Low", value: "Low" },
  { label: "Medium", value: "Medium" },
  { label: "High", value: "High" }
];

const FilterButtons = ({ setFilter, currentFilter }) => {
  return (
    <div className="filter-buttons-container">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          className={`filter-button ${currentFilter === value ? 'active' : ''}`}
          onClick={() => setFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
