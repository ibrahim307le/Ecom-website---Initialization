import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters(prev => ({ ...prev, category: e.target.value }));
  };

  const handleSortChange = (e) => {
    setFilters(prev => ({ ...prev, sort: e.target.value }));
  };

  return (
    <div className="w-full md:w-64 p-4 bg-zinc-900 text-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Category</label>
        <select onChange={handleCategoryChange} className="w-full p-2 rounded text-black">
          <option value="">All</option>
          <option value="techwear">Techwear</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      <div>
        <label className="block mb-2">Sort By</label>
        <select onChange={handleSortChange} className="w-full p-2 rounded text-black">
          <option value="latest">Latest</option>
          <option value="lowtohigh">Price: Low to High</option>
          <option value="hightolow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
