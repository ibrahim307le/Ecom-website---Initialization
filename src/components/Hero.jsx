import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-[60vh] bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Start Your Adventure</h1>
      <p className="text-lg mb-6">Explore the future of fashion</p>
      <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
        Sign Up Now
      </button>
    </section>
  );
}
