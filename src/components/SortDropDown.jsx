import React from 'react';
import './SortDropDown.css';

const SortDropDown = ({ sortOrder, setSortOrder }) => {
  const handleSortChange = (e) => setSortOrder(e.target.value);

  return (
    <div className="sort-dropdown">
      <label htmlFor="sortOrder" className="sort-dropdown-label">
        Sort By
      </label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={handleSortChange}
        aria-label="Sort incidents"
      >
        <option value="Newest">Newest First</option>
        <option value="Oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default SortDropDown;
