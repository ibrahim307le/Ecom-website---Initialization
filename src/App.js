import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import BodySection from "./components/BodySection";
import FeaturedSlider from "./components/FeaturedSlider";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import MensPage from "./pages/MensPage";
import MensTshirts from "./pages/MensTshirts";
import MensPants from "./pages/MensPants";
import MensJackets from "./pages/MensJackets";
import WomensJackets from "./pages/WomensJackets";
import WomensPants from "./pages/WomensPants";
import WomensPage from "./pages/WomensPage";
import AccessoriesPage from "./pages/AccessoriesPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-white text-black">
        <Navbar />
        <Carousel />
        <FeaturedSlider />
        <BodySection />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Carousel />
              <BodySection />
            </>
          } />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/mens" element={<MensPage />} />
          <Route path="/mens/tshirts" element={<MensTshirts />} />
          <Route path="/mens/pants" element={<MensPants />} />
          <Route path="/womens/jackets" element={<WomensJackets />} />
          <Route path="/womens" element={<WomensPage />} />
          <Route path="/womens/jackets" element={<WomensJackets />} />
          <Route path="/womens/pants" element={<WomensPants />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
