// /src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white"
      data-aos="fade-up"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover transition-opacity duration-500 hover:opacity-90"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
}
