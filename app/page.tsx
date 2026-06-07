"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const categories = ["全部", ...Array.from(new Set(products.map((p) => p.category)))];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filtered =
    activeCategory === "全部"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Tools I Actually Use
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A curated list of tools I personally use to build and grow online
          businesses. Some links are affiliate — I only recommend what works.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-primary-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Disclaimer */}
      <p className="mt-16 text-center text-sm text-gray-400">
        Disclosure: Some links on this page are affiliate links. I may earn a
        commission if you make a purchase — at no extra cost to you.
      </p>
    </div>
  );
}
