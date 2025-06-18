// /src/pages/WomensPage.jsx
import React from "react";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";

export default function WomensPage() {
  const WomensProducts = productsData.filter(p => p.category === "Womens");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-4">Womens Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mensProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
