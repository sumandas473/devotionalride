"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Check, ShieldCheck, Wind, Touchpad } from "lucide-react";

export interface FeaturedShowcaseProps {
  onAddToCart: (item: { name: string; price: number; size: string; color: string; image: string }) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({ onAddToCart }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("Black / Neon Lime");
  const [isAdded, setIsAdded] = useState(false);

  // Real Devotional Ride brand gloves from assets
  const gloveImages = [
    "/assets/gloves/glove-1.png",
    "/assets/gloves/glove-2.png",
    "/assets/gloves/glove-3.png",
  ];

  const sizes = ["S", "M", "L", "XL", "2XL"];
  const colors = [
    { name: "Black / Neon Lime", hex: "#C6F42A" },
    { name: "Stealth Black", hex: "#111111" },
    { name: "Asphalt Gray", hex: "#555555" },
  ];

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      name: "HELIUM GT GLOVES",
      price: 2450,
      size: selectedSize,
      color: selectedColor,
      image: gloveImages[0],
    });
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section id="featured" className="w-full py-8 sm:py-10 bg-white select-none">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Borderless Product Showcase Container (No border lines, no heavy margins) */}
        <div className="bg-white rounded-sharp p-2 sm:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* LEFT COLUMN: Isolated Glove Product Photography */}
            <div className="flex flex-col items-center">
              {/* Main Product Image Container */}
              <div className="relative aspect-[4/5] w-full max-w-[360px] bg-white overflow-hidden flex items-center justify-center p-2">
                <img
                  src={gloveImages[activeImageIdx]}
                  alt="Helium GT Gloves"
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Thumbnails (No harsh borders) */}
              <div className="flex items-center gap-2 mt-2">
                {gloveImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImageIdx(i)}
                    className={`w-12 h-14 rounded-sharp overflow-hidden transition ${
                      activeImageIdx === i ? "opacity-100 ring-2 ring-black" : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-1.5 mt-2">
                {gloveImages.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      activeImageIdx === i ? "bg-black" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Product Details, Specs, Controls, Neon-Lime Button */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#666666]">
                  FEATURED GEAR
                </span>
                <Link href="/products/helium-gt-gloves">
                  <h2 className="text-22 sm:text-28 font-sans font-extrabold uppercase text-black tracking-tight mt-0.5 hover:text-lime transition">
                    HELIUM GT GLOVES
                  </h2>
                </Link>

                {/* Rating & Review Count */}
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex text-black">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                    ))}
                  </div>
                  <span className="text-11 font-sans text-gray-500 font-medium">
                    (46 customer reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="py-1 flex items-baseline gap-2">
                <span className="text-22 font-sans font-extrabold text-black">
                  ₹ 2,450
                </span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500">
                  MRP inclusive of all taxes
                </span>
              </div>

              {/* Short Description */}
              <p className="text-13 text-gray-600 leading-relaxed font-body">
                Lightweight high-ventilation motorcycle gloves designed for warm Indian climates. Engineered with carbon knuckle armor, Clarino microfiber reinforced palms, and high-contrast neon-lime accents.
              </p>

              {/* Product Specifications (Borderless Minimal Badges) */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 bg-[#F6F6F6] rounded-sharp">
                  <ShieldCheck className="w-3.5 h-3.5 text-black mx-auto mb-0.5" />
                  <span className="text-[9px] font-sans font-bold uppercase block text-black">
                    EN 13594 CE
                  </span>
                </div>
                <div className="p-2 bg-[#F6F6F6] rounded-sharp">
                  <Wind className="w-3.5 h-3.5 text-black mx-auto mb-0.5" />
                  <span className="text-[9px] font-sans font-bold uppercase block text-black">
                    3D AERO MESH
                  </span>
                </div>
                <div className="p-2 bg-[#F6F6F6] rounded-sharp">
                  <Touchpad className="w-3.5 h-3.5 text-black mx-auto mb-0.5" />
                  <span className="text-[9px] font-sans font-bold uppercase block text-black">
                    TOUCH SCREEN
                  </span>
                </div>
              </div>

              {/* Color Options */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-black block">
                  COLOR: <strong className="text-gray-500">{selectedColor}</strong>
                </span>
                <div className="flex items-center gap-2">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      aria-label={`Select ${c.name}`}
                      className={`w-6 h-6 rounded-full transition ${
                        selectedColor === c.name ? "ring-2 ring-black scale-110" : "hover:scale-110"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Buttons (No harsh borders) */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-black block">
                  SIZE: <strong className="text-gray-500">{selectedSize}</strong>
                </span>
                <div className="flex gap-1.5">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`h-9 w-10 font-sans font-bold text-11 uppercase rounded-sharp transition ${
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

              {/* Prominent Neon-Lime Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="w-full h-11 btn-lime text-12 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>ADDED TO CART</span>
                    </>
                  ) : (
                    <span>ADD TO CART</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
