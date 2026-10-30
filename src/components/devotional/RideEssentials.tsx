"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Check } from "lucide-react";

export interface RideEssentialsProps {
  onAddToCart: (item: { name: string; price: number; size: string; color: string; image: string }) => void;
}

export const RideEssentials: React.FC<RideEssentialsProps> = ({ onAddToCart }) => {
  const [sizeProd1, setSizeProd1] = useState("One Size (Universal)");
  const [sizeProd2, setSizeProd2] = useState("L");
  const [addedIdx, setAddedIdx] = useState<number | null>(null);

  const essentials = [
    {
      id: "ess-1",
      name: "DEVOTIONAL THERMO-BALACLAVA",
      price: 750,
      rating: 4.9,
      reviewCount: 38,
      sizes: ["One Size (Universal)"],
      image: "/assets/gloves/glove-4.png",
    },
    {
      id: "ess-2",
      name: "EXPEDITION THERMAL COMPRESSION LEGGINGS",
      price: 1450,
      rating: 4.8,
      reviewCount: 42,
      sizes: ["S", "M", "L", "XL", "2XL"],
      image: "/assets/jackets/jacket-5.png",
    },
  ];

  const handleAdd = (idx: number) => {
    setAddedIdx(idx);
    const item = essentials[idx];
    onAddToCart({
      name: item.name,
      price: item.price,
      size: idx === 0 ? sizeProd1 : sizeProd2,
      color: "Black",
      image: item.image,
    });
    setTimeout(() => setAddedIdx(null), 2000);
  };

  return (
    <section id="essentials" className="w-full py-6 sm:py-8 bg-white select-none">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 relative">
        {/* Compact Centered Heading */}
        <div className="text-center mb-5">
          <h2 className="text-18 sm:text-20 font-sans font-bold uppercase tracking-wider text-black">
            Ride Essentials
          </h2>
          <div className="w-8 h-[2px] bg-black mx-auto mt-1.5" />
        </div>

        {/* Subtle Carousel Outer Arrows */}
        <button
          type="button"
          aria-label="Previous Essentials"
          className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-black transition"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>

        <button
          type="button"
          aria-label="Next Essentials"
          className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-black transition"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* Two Product Cards Side by Side (NO BORDER LINES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {essentials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-sharp p-4 flex flex-col justify-between space-y-4"
            >
              {/* Isolated Product Image (Clean, no boxes) */}
              <div className="relative aspect-[4/5] w-full bg-white flex items-center justify-center p-2">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2 text-center md:text-left">
                <div className="space-y-0.5">
                  <h3 className="font-sans font-bold text-13 uppercase tracking-wide text-[#111111]">
                    {item.name}
                  </h3>
                  {/* Star Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    <div className="flex text-black">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-black text-black" />
                      ))}
                    </div>
                    <span className="text-[10px] font-sans text-gray-500">
                      ({item.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Price */}
                <p className="font-sans font-bold text-15 text-black">
                  ₹ {item.price.toLocaleString("en-IN")}
                </p>

                {/* Size Selection Dropdown (No harsh border) */}
                <div className="space-y-1 text-left">
                  <label className="block text-[10px] font-sans uppercase font-bold text-gray-500">
                    Size
                  </label>
                  <select
                    value={idx === 0 ? sizeProd1 : sizeProd2}
                    onChange={(e) =>
                      idx === 0 ? setSizeProd1(e.target.value) : setSizeProd2(e.target.value)
                    }
                    className="w-full h-9 px-2.5 bg-[#F4F4F4] text-11 font-sans font-medium uppercase rounded-sharp text-black focus:outline-none focus:ring-1 focus:ring-black border-none"
                  >
                    {item.sizes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Neon-Lime Green ADD TO CART Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => handleAdd(idx)}
                    className="w-full h-10 btn-lime text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    {addedIdx === idx ? (
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
          ))}
        </div>
      </div>
    </section>
  );
};
