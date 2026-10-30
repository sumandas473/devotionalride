"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export interface RecentlyViewedProps {
  onAddToCart: (item: { name: string; price: number; size: string; color: string; image: string }) => void;
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [isAdded, setIsAdded] = useState(false);

  const product = {
    name: "STEALTH AIR TOURING JACKET",
    price: 6950,
    color: "Stealth Gray",
    // Real Devotional Ride jacket from assets
    image: "/assets/jackets/jacket-4.png",
  };

  const sizes = ["S", "M", "L", "XL", "2XL"];

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: product.color,
      image: product.image,
    });
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="recently-viewed" className="w-full py-6 sm:py-8 bg-white select-none">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Compact Centered Heading */}
        <div className="text-center mb-4">
          <h2 className="text-18 sm:text-20 font-sans font-bold uppercase tracking-wider text-black">
            Recently Viewed
          </h2>
          <div className="w-8 h-[2px] bg-black mx-auto mt-1.5" />
        </div>

        {/* Centered Product Card (NO BORDER LINE) */}
        <div className="max-w-[300px] mx-auto bg-white rounded-sharp p-2 space-y-3">
          {/* Isolated Product Photograph */}
          <Link
            href="/products/stealth-evo-touring-jacket"
            className="relative aspect-[4/5] w-full bg-white overflow-hidden flex items-center justify-center block"
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>

          {/* Product Details */}
          <div className="text-center space-y-0.5">
            <Link href="/products/stealth-evo-touring-jacket">
              <h3 className="font-sans font-bold text-13 uppercase tracking-wide text-[#111111] hover:text-lime transition">
                {product.name}
              </h3>
            </Link>
            <p className="font-sans font-bold text-14 text-black">
              ₹ {product.price.toLocaleString("en-IN")}
            </p>
          </div>

          {/* Product Size Selector (No harsh border lines) */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-sans font-semibold text-gray-500 uppercase px-1">
              <span>Size:</span>
              <strong className="text-black">{selectedSize}</strong>
            </div>
            <div className="flex justify-center gap-1.5">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`h-8 w-9 font-sans font-bold text-[10px] uppercase rounded-sharp transition ${
                    selectedSize === s
                      ? "bg-black text-white"
                      : "bg-[#F4F4F4] text-black hover:bg-gray-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Full-width Neon-Lime Green Button */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleAdd}
              className="w-full h-10 btn-lime text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>ADDED</span>
                </>
              ) : (
                <span>ADD TO CART</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
