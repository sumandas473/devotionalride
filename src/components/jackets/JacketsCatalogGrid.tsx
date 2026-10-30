"use client";

import React, { useState } from "react";
import Link from "next/link";
import { JACKETS_CATALOG, JacketProduct } from "@/data/jacketsCatalog";
import { slugify } from "@/data/allProducts";
import { Check, Eye, Loader2, ShieldCheck } from "lucide-react";

export interface JacketsCatalogGridProps {
  onAddToCart: (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
  }) => void;
  onQuickView: (product: JacketProduct) => void;
}

export const JacketsCatalogGrid: React.FC<JacketsCatalogGridProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (item: JacketProduct, e: React.MouseEvent) => {
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
      aria-label="Jackets Product Catalog"
      className="w-full bg-[#FFFFFF] py-6 sm:py-8 px-2 sm:px-4 md:px-6 select-none"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Strict Three-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-8 sm:gap-y-10 md:gap-y-12">
          {JACKETS_CATALOG.map((jacket, idx) => {
            const productSlug = slugify(jacket.name);

            return (
              <div
                key={jacket.id}
                className="group flex flex-col items-center justify-between transition-all duration-200"
              >
                {/* Product Image: Isolated on pure white background, generous proportion */}
                <div className="relative aspect-[4/5] w-full flex items-center justify-center p-2 sm:p-4 bg-white overflow-hidden">
                  <Link
                    href={`/products/${productSlug}`}
                    className="w-full h-full flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={jacket.image}
                      alt={jacket.name}
                      loading={idx < 6 ? "eager" : "lazy"}
                      className="w-full h-full max-w-[90%] max-h-[90%] object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Quick View Button on Hover */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(jacket);
                    }}
                    aria-label={`Quick view ${jacket.name}`}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-white/90 rounded-full shadow-sm text-gray-700 hover:text-black z-10"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Badge */}
                  {jacket.badge && (
                    <span className="absolute top-2 left-2 bg-black text-white text-[8px] sm:text-[9px] font-sans font-extrabold uppercase px-2 py-0.5 rounded-sharp tracking-wider z-10">
                      {jacket.badge}
                    </span>
                  )}
                </div>

                {/* Product Information Area (Centered beneath image) */}
                <div className="w-full text-center space-y-1.5 pt-2 flex flex-col items-center">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-gray-400">
                    {jacket.category}
                  </span>

                  {/* Product Title: Bold uppercase sans-serif font linking to PDP */}
                  <Link href={`/products/${productSlug}`} className="max-w-[95%]">
                    <h2 className="font-sans font-bold text-12 sm:text-13 md:text-14 uppercase tracking-tight text-[#111111] line-clamp-1 hover:text-[#C8F52B] hover:bg-black px-1.5 py-0.5 rounded-sm transition leading-snug">
                      {jacket.name}
                    </h2>
                  </Link>

                  {/* Product Price */}
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-sans font-bold text-14 sm:text-15 md:text-16 text-[#111111]">
                      ₹{jacket.price.toLocaleString("en-IN")}
                    </span>
                    {jacket.compareAtPrice && (
                      <span className="font-sans text-11 sm:text-12 text-gray-400 line-through">
                        ₹{jacket.compareAtPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  {/* Color Swatches: Row of circular color selectors */}
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    {jacket.colors.map((hex, cIdx) => (
                      <button
                        key={`${jacket.id}-color-${cIdx}`}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedColors((prev) => ({
                            ...prev,
                            [jacket.id]: hex,
                          }));
                        }}
                        aria-label={`Color option ${cIdx + 1}`}
                        className="w-3.5 h-3.5 rounded-full border border-gray-300 transition-transform hover:scale-125 focus:outline-none"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>

                  {/* Subtle Add to Bag button visible on hover or mobile tap */}
                  <button
                    type="button"
                    onClick={(e) => handleAdd(jacket, e)}
                    aria-label={`Add ${jacket.name} to cart`}
                    className="mt-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-200 text-[10px] font-sans font-bold uppercase tracking-wider bg-black text-white hover:bg-[#C8F52B] hover:text-black px-4 py-1.5 rounded-sharp flex items-center gap-1.5"
                  >
                    {addedId === jacket.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
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
        </div>

        {/* Section: Loading Indicator (Subtle light-gray circular spinner centered before footer) */}
        <div className="w-full py-12 flex flex-col items-center justify-center space-y-2 border-t border-gray-100 mt-12">
          <Loader2 className="w-5 h-5 text-gray-300 animate-spin" />
          <span className="text-[9px] font-sans text-gray-400 uppercase tracking-widest">
            Loading more jacket styles...
          </span>
        </div>
      </div>
    </section>
  );
};

