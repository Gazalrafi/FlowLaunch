import React from 'react';

const FilterDropdown = ({ onFilter }) => (
  <select className="dropdown" onChange={(e) => onFilter(e.target.value)}>
    <option value="">All</option>
    <option value="To Do">To Do</option>
    <option value="In Progress">In Progress</option>
    <option value="Done">Done</option>
  </select>
);

export default FilterDropdown;
