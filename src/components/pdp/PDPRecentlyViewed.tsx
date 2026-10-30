"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export interface PDPRecentlyViewedProps {
  onAddToCart: (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
  }) => void;
}

export const PDPRecentlyViewed: React.FC<PDPRecentlyViewedProps> = ({
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [isAdded, setIsAdded] = useState(false);

  const product = {
    name: "STEALTH AIR TOURING JACKET",
    price: 6950,
    color: "Stealth Gray",
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
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <section
      aria-label="Recently Viewed Product"
      className="w-full bg-[#FFFFFF] py-10 sm:py-14 px-4 sm:px-8 select-none border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Compact Heading */}
        <div className="mb-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#666666] block mb-1">
            CONTINUE BROWSING
          </span>
          <h2 className="text-18 sm:text-20 font-sans font-extrabold uppercase text-[#111111] tracking-tight">
            Recently Viewed
          </h2>
        </div>

        {/* Single Centered Product Card (Isolated gray jacket, generous white space) */}
        <div className="max-w-[280px] sm:max-w-[320px] mx-auto bg-white p-3 space-y-3">
          <Link
            href="/products/stealth-evo-touring-jacket"
            className="relative aspect-[4/5] w-full bg-white flex items-center justify-center p-2 overflow-hidden block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>

          <div className="space-y-1">
            <Link href="/products/stealth-evo-touring-jacket">
              <h3 className="font-sans font-bold text-12 sm:text-13 uppercase tracking-wide text-black line-clamp-1 hover:text-[#B7F12B] hover:bg-black px-1 rounded-sm transition">
                {product.name}
              </h3>
            </Link>
            <p className="font-sans font-bold text-14 text-black">
              ₹ {product.price.toLocaleString("en-IN")}
            </p>
          </div>

          {/* Size Selector */}
          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-[10px] uppercase font-bold text-gray-500 px-1">
              <span>SIZE:</span>
              <strong className="text-black">{selectedSize}</strong>
            </div>
            <div className="flex justify-center gap-1.5">
              {sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`h-8 w-8 font-sans font-bold text-[10px] uppercase rounded-sharp transition ${
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

          {/* Neon-Lime ADD TO CART Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleAdd}
              className="w-full h-10 bg-[#B7F12B] hover:bg-[#a6de22] text-black font-sans font-bold text-[11px] uppercase tracking-wider rounded-sharp transition flex items-center justify-center gap-2 shadow-sm"
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

