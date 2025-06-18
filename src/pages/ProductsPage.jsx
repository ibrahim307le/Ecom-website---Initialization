// /src/pages/ProductsPage.jsx
import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import productsData from "../data/productsData";

export default function ProductsPage() {
  const [filters, setFilters] = useState({ category: '', sort: '' });

  const filtered = productsData
    .filter(p => !filters.category || p.category === filters.category)
    .sort((a, b) => {
      if (filters.sort === "lowtohigh") return a.price - b.price;
      if (filters.sort === "hightolow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 max-w-7xl mx-auto">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
