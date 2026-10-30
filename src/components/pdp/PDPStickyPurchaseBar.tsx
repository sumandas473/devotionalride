"use client";

import React, { useState, useEffect } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { UnifiedProduct, FEATURED_CATALOG } from "@/data/allProducts";

export interface PDPStickyPurchaseBarProps {
  product?: UnifiedProduct;
  onAddToCart: (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
    quantity: number;
  }) => void;
}

export const PDPStickyPurchaseBar: React.FC<PDPStickyPurchaseBarProps> = ({
  product = FEATURED_CATALOG[0],
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0] || "L");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Black");
  const [qty, setQty] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setSelectedSize(product.sizes[2] || product.sizes[0] || "L");
    setSelectedColor(product.colors[0]?.name || "Black");
    setQty(1);
  }, [product.id, product.slug]);

  const colors = product.colors;
  const sizes = product.sizes;

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: product.images[0] || "/assets/gloves/glove-1.png",
      quantity: qty,
    });
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-[#E5E5E5] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2.5 px-4 sm:px-8 select-none">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Left Side: Product Name & Price */}
        <div className="flex flex-col text-left shrink-0">
          <span className="font-sans font-extrabold text-[11px] sm:text-13 uppercase text-[#111111] tracking-tight leading-none line-clamp-1 max-w-[200px] sm:max-w-xs">
            {product.name}
          </span>
          <span className="font-sans font-bold text-12 sm:text-14 text-black mt-0.5">
            ₹ {product.price.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Center: Swatches, Sizes, Qty Stepper */}
        <div className="hidden md:flex items-center gap-5">
          {/* Color Swatches */}
          {colors.length > 0 && (
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-sans font-bold text-gray-500 uppercase">
                COLOR:
              </span>
              <div className="flex items-center gap-1.5">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    aria-label={c.name}
                    className={`w-4 h-4 rounded-full border transition ${
                      selectedColor === c.name
                        ? "ring-2 ring-black scale-110"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Buttons */}
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-sans font-bold text-gray-500 uppercase pr-1">
              SIZE:
            </span>
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSize(s)}
                className={`h-7 w-7 font-sans font-bold text-[10px] uppercase rounded-sharp transition ${
                  selectedSize === s
                    ? "bg-black text-white"
                    : "bg-[#F4F4F4] text-black hover:bg-gray-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Qty Stepper */}
          <div className="flex items-center border border-[#E5E5E5] rounded-sharp bg-white">
            <button
              type="button"
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="w-6 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold text-11"
            >
              -
            </button>
            <span className="w-6 text-center text-11 font-bold">{qty}</span>
            <button
              type="button"
              onClick={() => setQty(qty + 1)}
              className="w-6 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold text-11"
            >
              +
            </button>
          </div>
        </div>

        {/* Right Side: Prominent Neon-Lime Button */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={handleAdd}
            className="h-10 sm:h-11 px-6 sm:px-8 bg-[#B7F12B] hover:bg-[#a5de22] text-black font-sans font-extrabold text-[11px] sm:text-12 uppercase tracking-widest rounded-sharp transition shadow-sm flex items-center justify-center gap-2"
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>ADDED</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO CART</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
