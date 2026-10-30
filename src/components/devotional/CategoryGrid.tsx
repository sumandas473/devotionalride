"use client";

import React from "react";

export interface CategoryGridProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  // Row 1: 3 Large photographic tiles
  const row1Categories = [
    {
      name: "OFFROAD",
      // Motocross dirt bike rider airborne on red bike kicking up dust on track
      image: "https://images.unsplash.com/photo-1542550546-88afdd84b64f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "GLOVES",
      // Close-up of Alpinestars SMX-2 Air Carbon knuckle protective motorcycle riding gloves
      image: "https://images.unsplash.com/photo-1569863151123-708666f1aa16?auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "JACKETS",
      // Premium black leather motorcycle biker jacket with asymmetric metal zippers
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  // Row 2: 4 Smaller photographic tiles
  const row2Categories = [
    {
      name: "RIDING PANTS",
      // Heavy-duty tactical cargo motorcycle riding pants with articulated knee seams
      image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "GLOVES",
      // Rider wearing helmet and pulling on technical honeycomb armored riding gloves by motorcycle
      image: "https://images.unsplash.com/photo-1779791250933-a7f2d709ffc1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "LUGGAGE",
      // Motorcycle equipped with canvas saddlebags & touring luggage panniers
      image: "https://images.unsplash.com/photo-1615074639137-c895a6a6789b?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "ACCESSORIES",
      // Handlebar mounted motorcycle GPS navigation unit and cockpit tech
      image: "https://images.unsplash.com/photo-1666864027466-42873657b486?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="categories" className="w-full bg-white select-none">
      {/* FIRST ROW: 3 Large Photographic Tiles with thin white borders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-white">
        {row1Categories.map((cat, idx) => (
          <div
            key={`${cat.name}-${idx}`}
            onClick={() => onSelectCategory(cat.name)}
            className="group relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-95"
            />
            {/* Small white rectangular label: small black uppercase typography */}
            <div className="absolute bottom-5 left-5 z-10">
              <span className="inline-block bg-white text-black font-sans font-bold text-[11px] sm:text-[12px] tracking-wider px-3.5 py-1.5 uppercase shadow-sm">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* SECOND ROW: 4 Smaller Photographic Tiles with thin white borders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-white mt-[2px]">
        {row2Categories.map((cat, idx) => (
          <div
            key={`${cat.name}-${idx}`}
            onClick={() => onSelectCategory(cat.name)}
            className="group relative aspect-square sm:aspect-[4/5] overflow-hidden cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-95"
            />
            {/* Small white rectangular label: small black uppercase typography */}
            <div className="absolute bottom-4 left-4 z-10">
              <span className="inline-block bg-white text-black font-sans font-bold text-[10px] sm:text-[11px] tracking-wider px-3 py-1.5 uppercase shadow-sm">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

