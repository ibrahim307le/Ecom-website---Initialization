import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ⏩ SLIDER SECTION
const slides = [
  {
    image: "/assets/tech.jpg",
    title: "Techwear Drop",
    text: "Explore our latest Japanese Techwear collection.",
  },
  {
    image: "/assets/urban.jpg",
    title: "Urban Footwear",
    text: "New arrivals for all terrains and moods.",
  },
  {
    image: "/assets/street.jpg",
    title: "Street Style",
    text: "Elevate your fit with clean minimalist looks.",
  },
];

// ⏩ FEATURED CARDS SECTION
const featured = [
  { name: "Tech Jacket", img: "/assets/jacket1.png", link: "/products/jacket" },
  { name: "Sneakers", img: "/assets/shoes1.png", link: "/products/sneakers" },
  { name: "Watch", img: "/assets/watch1.png", link: "/products/watch" },
];

export default function FeaturedSlider() {
  const [index, setIndex] = useState(0);

  // ⏱ Auto-slide every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-black overflow-hidden">

      {/* 🔥 IMAGE SLIDER */}
      <div className="relative h-[500px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute w-full transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
              <p className="text-lg">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ⭐ FEATURED PRODUCTS CARDS */}
      <div className="py-10 px-6">
        <h2 className="text-xl font-bold mb-4">Featured</h2>
        <div className="flex overflow-x-auto gap-6">
          {featured.map((item, index) => (
            <motion.a
              whileHover={{ scale: 1.05 }}
              key={index}
              href={item.link}
              className="min-w-[200px] bg-white shadow-md rounded-xl p-4 transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-40 w-auto object-contain mx-auto mb-2 transition-opacity duration-300 hover:opacity-90"
              />
              <p className="text-center font-semibold">{item.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
