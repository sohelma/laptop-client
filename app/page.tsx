"use client";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import Testimonials from "./components/Testimonials";
import PromoBanner from "./components/PromoBanner";
import HeroSlider from "./components/Hero";


export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSlider />
      <Features />
      <ProductGrid />
      <Testimonials />
      <PromoBanner />
    </div>
  );
}
