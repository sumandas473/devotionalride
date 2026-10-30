"use client";

import React, { useState } from "react";
import { ProductItem } from "@/data/products";
import { Eye } from "lucide-react";

export interface ProductCardProps {
  product: ProductItem;
  onQuickView: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");

  const hasComparePrice = product.comparePrice && product.comparePrice > product.price;

  return (
    <div
      className="group relative flex flex-col bg-white border border-border-light rounded-sharp overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onQuickView(product)}
    >
      {/* Media Container (4:5 Aspect Ratio on #f4f4f4) */}
      <div className="relative aspect-[4/5] w-full bg-[#f4f4f4] overflow-hidden">
        {/* Corner Badge */}
        {!product.inStock ? (
          <span className="absolute top-2.5 left-2.5 z-20 px-2 py-1 bg-black text-white text-11 font-heading uppercase font-bold tracking-wider rounded-sharp">
            RESTOCKING SOON
          </span>
        ) : product.badge ? (
          <span className="absolute top-2.5 left-2.5 z-20 px-2 py-1 bg-lime text-black text-11 font-heading uppercase font-extrabold tracking-wider rounded-sharp">
            {product.badge}
          </span>
        ) : null}

        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-400 ease-standard ${
            isHovered && product.images[1] ? "opacity-0 scale-103" : "opacity-100 scale-100"
          }`}
        />

        {/* Second Image Crossfades on Hover (400ms, scale 1.03) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-400 ease-standard ${
              isHovered ? "opacity-100 scale-103" : "opacity-0 scale-100"
            }`}
          />
        )}

        {/* Quick View Floating Button on Hover */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          aria-label={`Quick view ${product.name}`}
          className="absolute bottom-3 inset-x-3 z-20 h-10 bg-black/90 text-white font-heading text-12 font-bold uppercase tracking-wider rounded-sharp opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-1.5 hover:bg-lime hover:text-black"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>QUICK VIEW</span>
        </button>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          <span className="text-11 font-heading uppercase font-bold text-gray-500 tracking-wider">
            {product.category}
          </span>
          <h3 className="font-heading font-extrabold text-15 sm:text-16 uppercase text-black line-clamp-2 leading-tight group-hover:text-lime transition-colors duration-200 mt-1">
            {product.name}
          </h3>
        </div>

        <div>
          {/* Pricing */}
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-extrabold text-16 sm:text-17 text-black">
              ₹ {product.price.toLocaleString("en-IN")}
            </span>
            {hasComparePrice && (
              <span className="text-13 text-gray-400 line-through">
                ₹ {product.comparePrice!.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Color Swatches (scale 1.15 with ring on hover) */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(c.name);
                  }}
                  aria-label={`Select color ${c.name}`}
                  className={`w-3.5 h-3.5 rounded-full border border-gray-300 transition-all duration-200 hover:scale-115 hover:ring-2 hover:ring-lime ${
                    selectedColor === c.name ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

