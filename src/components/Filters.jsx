import React from "react";
import "./Filters.css";

const Filters = ({ filters, setFilters }) => {
  // Handle input changes to update filter values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value, // Update the filter state with the new value
    }));
  };

  return (
    <div className="filters">
      <input
        type="text"
        name="title"
        placeholder="Filter by job title"
        value={filters.title || ""} // Display value from filters state
        onChange={handleChange} // Handle change event
      />
      <input
        type="text"
        name="location"
        placeholder="Filter by location"
        value={filters.location || ""} // Display value from filters state
        onChange={handleChange} // Handle change event
      />
    </div>
  );
};

export default Filters;
