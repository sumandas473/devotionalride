"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GLOVES_CATALOG, GloveProduct } from "@/data/glovesCatalog";
import { slugify } from "@/data/allProducts";
import { Check, Eye, Loader2 } from "lucide-react";

export interface GlovesCatalogGridProps {
  onAddToCart: (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
  }) => void;
  onQuickView: (product: GloveProduct) => void;
}

export const GlovesCatalogGrid: React.FC<GlovesCatalogGridProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (item: GloveProduct, e: React.MouseEvent) => {
    e.stopPropagation();
    setAddedId(item.id);
    onAddToCart({
      name: item.name,
      price: item.price,
      size: "L",
      color: selectedColors[item.id] || "Black",
      image: item.image,
    });
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section
      aria-label="Gloves Product Catalog"
      className="w-full bg-[#FFFFFF] py-6 sm:py-8 px-2 sm:px-4 md:px-6 select-none"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Strict Three-Column Grid */}
        <div className="grid grid-cols-3 gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-10">
          {GLOVES_CATALOG.map((glove, idx) => {
            const productSlug = slugify(glove.name);

            return (
              <div
                key={glove.id}
                className="group flex flex-col items-center justify-between transition-all duration-200"
              >
                {/* Product Image: Isolated on pure white background, takes 75-90% width */}
                <div className="relative aspect-[4/5] sm:aspect-square w-full flex items-center justify-center p-1 sm:p-2 bg-white overflow-hidden">
                  <Link
                    href={`/products/${productSlug}`}
                    className="w-full h-full flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={glove.image}
                      alt={glove.name}
                      loading={idx < 9 ? "eager" : "lazy"}
                      className="w-full h-full max-w-[85%] max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Quick View Button on Hover */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(glove);
                    }}
                    aria-label={`Quick view ${glove.name}`}
                    className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-white/90 rounded-full shadow-sm text-gray-700 hover:text-black z-10"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Product Information Area (Centered beneath image) */}
                <div className="w-full text-center space-y-1 pt-1.5 flex flex-col items-center">
                  {/* Product Title: Very small uppercase sans-serif font */}
                  <Link href={`/products/${productSlug}`}>
                    <h2 className="font-sans font-bold text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-tight text-[#111111] line-clamp-1 max-w-[95%] hover:text-[#C8F52B] hover:bg-black px-1 rounded-sm transition">
                      {glove.name}
                    </h2>
                  </Link>

                  {/* Product Price: Small price beneath title */}
                  <p className="font-sans font-bold text-[10px] sm:text-[11px] md:text-[12px] text-[#111111]">
                    ₹{glove.price.toLocaleString("en-IN")}
                  </p>

                  {/* Color Swatches: Row of tiny circular color selectors (3-5px diameter, minimal spacing) */}
                  <div className="flex items-center justify-center gap-1 pt-0.5">
                    {glove.colors.map((hex, cIdx) => (
                      <button
                        key={`${glove.id}-color-${cIdx}`}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedColors((prev) => ({
                            ...prev,
                            [glove.id]: hex,
                          }));
                        }}
                        aria-label={`Color option ${cIdx + 1}`}
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-gray-300 transition-transform hover:scale-125 focus:outline-none"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>

                  {/* Promotional Badge: Tiny red uppercase text */}
                  {glove.badge && (
                    <span className="text-[8px] sm:text-[9px] font-sans font-extrabold text-[#FF1744] uppercase tracking-wider block pt-0.5">
                      {glove.badge}
                    </span>
                  )}

                  {/* Subtle Add to Bag button visible on hover or mobile tap */}
                  <button
                    type="button"
                    onClick={(e) => handleAdd(glove, e)}
                    aria-label={`Add ${glove.name} to cart`}
                    className="mt-1 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-200 text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-wider bg-black text-white hover:bg-[#C8F52B] hover:text-black px-2.5 py-1 rounded-sharp flex items-center gap-1"
                  >
                    {addedId === glove.id ? (
                      <>
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <span>+ ADD TO CART</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Empty placeholders for Columns 2 & 3 in the Final Row (Row 15) to maintain the exact 3-column layout */}
          <div className="hidden sm:block" />
          <div className="hidden sm:block" />
        </div>

        {/* Section 7: Loading Indicator (Subtle light-gray circular spinner centered before footer) */}
        <div className="w-full py-10 flex flex-col items-center justify-center space-y-2">
          <Loader2 className="w-5 h-5 text-gray-300 animate-spin" />
          <span className="text-[9px] font-sans text-gray-400 uppercase tracking-widest">
            Loading more styles...
          </span>
        </div>
      </div>
    </section>
  );
};

