import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to a search result page or filter products
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-black shadow-md sticky top-0 z-50 font-sans">
      
      {/* ✅ Logo */}
      <a href="/" className="flex items-center">
        <img src="/assets/logo.png" alt="Tarique Logo" className="h-10 md:h-14 w-auto object-contain" />
      </a>

      {/* ✅ Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-black dark:text-white">

        {/* Navigation Links */}
        <a href="#">Collections</a>
        <a href="#">Shoes</a>
        <a href="#">Watches</a>
        <a href="#">Accessories</a>

        {/* ✅ Dropdown */}
        <li className="relative group list-none">
          <button className="hover:text-gray-800 dark:hover:text-gray-300 transition">
            Products
          </button>
          <ul className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg text-sm p-2 rounded z-10">
            <li>
              <a href="/mens" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Mens
              </a>
            </li>
            <li>
              <a href="/womens" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Womens
              </a>
            </li>
            <li>
              <a href="/accessories" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Accessories
              </a>
            </li>
          </ul>
        </li>

        {/* ✅ Search Bar */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs"
          >
            🔍
          </button>
        </form>

        {/* Right-side Links */}
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </div>

      {/* ✅ Mobile Hamburger Menu */}
      <div className="md:hidden text-black dark:text-white">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
      </div>

      {/* ✅ Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 right-4 bg-white dark:bg-gray-900 shadow-lg p-4 rounded-md md:hidden z-50 space-y-2 text-black dark:text-white">
          <a href="#" className="block">Collections</a>
          <a href="#" className="block">Shoes</a>
          <a href="#" className="block">Watches</a>
          <a href="#" className="block">Accessories</a>
          <a href="/mens" className="block">Mens</a>
          <a href="/womens" className="block">Womens</a>
          <a href="/accessories" className="block">Accessories</a>
          <a href="/contact" className="block">Contact</a>
          <a href="/about" className="block">About</a>
          <a href="/blog" className="block">Blog</a>
          {/* ✅ Mobile Search Bar */}
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full border mt-2 border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none dark:bg-gray-800 dark:text-white"
            />
          </form>
        </div>
      )}
    </header>
  );
}

