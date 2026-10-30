"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";
import { UnifiedProduct, FEATURED_CATALOG } from "@/data/allProducts";

export interface PDPMainDetailProps {
  product?: UnifiedProduct;
  onAddToCart?: (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
  }) => void;
}

export const PDPMainDetail: React.FC<PDPMainDetailProps> = ({
  product = FEATURED_CATALOG[0],
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2] || product.sizes[0] || "L");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Black");

  useEffect(() => {
    setActiveImageIdx(0);
    setSelectedSize(product.sizes[2] || product.sizes[0] || "L");
    setSelectedColor(product.colors[0]?.name || "Black");
  }, [product.id, product.slug]);

  const images = product.images.length > 0 ? product.images : ["/assets/gloves/glove-1.png"];
  const sizes = product.sizes;

  const handlePrev = () => {
    setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      aria-label={`${product.name} Details`}
      className="w-full bg-[#FFFFFF] py-6 sm:py-10 px-4 sm:px-8 select-none"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* LEFT COLUMN: Product Gallery */}
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Main Large Studio Photograph */}
          <div className="relative aspect-[4/5] sm:aspect-square w-full max-w-[500px] flex items-center justify-center bg-[#FFFFFF] overflow-hidden">
            <img
              src={images[activeImageIdx] || images[0]}
              alt={product.name}
              className="w-full h-full max-w-[90%] max-h-[90%] object-contain transition-transform duration-500 hover:scale-105"
            />

            {/* Subtle Carousel Arrows at outer edges */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-black transition"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-black transition"
                >
                  <ChevronRight className="w-6 h-6 stroke-[1.5]" />
                </button>
              </>
            )}
          </div>

          {/* Minimal Thumbnails Strip */}
          <div className="flex items-center gap-2 mt-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIdx(idx)}
                aria-label={`View angle ${idx + 1}`}
                className={`w-12 h-14 rounded-sharp overflow-hidden transition p-0.5 ${
                  activeImageIdx === idx
                    ? "opacity-100 ring-1 ring-black"
                    : "opacity-40 hover:opacity-80"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Product Information */}
        <div className="w-full space-y-4 max-w-lg">
          {/* Title */}
          <div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#666666] block">
              {product.category}
            </span>
            <h1 className="text-22 sm:text-26 md:text-28 font-sans font-extrabold uppercase text-[#111111] tracking-tight leading-snug mt-1">
              {product.name}
            </h1>

            {/* Rating Stars in Yellow-Green */}
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex text-[#B7E52D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B7E52D] text-[#B7E52D]" />
                ))}
              </div>
              <span className="text-[11px] font-sans font-semibold text-[#111111]">
                {product.rating}
              </span>
              <span className="text-[10px] font-sans text-[#666666]">
                ({product.reviewCount} verified rider reviews)
              </span>
            </div>
          </div>

          {/* Product Price */}
          <div className="py-1 flex items-baseline gap-2">
            <span className="text-22 sm:text-24 font-sans font-extrabold text-[#111111]">
              ₹ {product.price.toLocaleString("en-IN")}
            </span>
            {product.compareAtPrice && (
              <span className="text-13 font-sans line-through text-gray-400">
                ₹ {product.compareAtPrice.toLocaleString("en-IN")}
              </span>
            )}
            <p className="text-[9px] font-sans uppercase tracking-wider text-[#666666] block w-full mt-0.5">
              MRP inclusive of all taxes. Free Pan-India Shipping.
            </p>
          </div>

          {/* Short Technical Description */}
          <p className="text-12 sm:text-13 text-[#666666] font-body leading-relaxed">
            {product.description}
          </p>

          {/* Thin Gray Separator */}
          <div className="h-[1px] w-full bg-[#E5E5E5]" />

          {/* Product Information Fields */}
          <div className="space-y-2.5 text-[11px] font-sans">
            <div className="flex items-center justify-between py-0.5">
              <span className="font-semibold text-[#111111] uppercase tracking-wider">
                PRODUCT CODE:
              </span>
              <span className="text-[#666666] font-mono">{product.code}</span>
            </div>

            <div className="flex items-center justify-between py-0.5">
              <span className="font-semibold text-[#111111] uppercase tracking-wider">
                CATEGORY:
              </span>
              <span className="text-[#666666] uppercase">{product.category}</span>
            </div>

            <div className="flex items-center justify-between py-0.5">
              <span className="font-semibold text-[#111111] uppercase tracking-wider">
                CE CERTIFICATION:
              </span>
              <span className="text-[#111111] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                {product.ceStandard}
              </span>
            </div>

            <div className="flex items-center justify-between py-0.5">
              <span className="font-semibold text-[#111111] uppercase tracking-wider">
                SHIPPING:
              </span>
              <span className="text-[#666666]">Dispatches within 24 Hours (Express 2–4 Days)</span>
            </div>

            {/* Color Options */}
            {product.colors.length > 0 && (
              <div className="pt-2">
                <div className="flex justify-between text-[10px] uppercase font-bold text-[#111111] mb-1.5">
                  <span>COLOR:</span>
                  <span className="text-[#666666] font-normal">{selectedColor}</span>
                </div>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 py-1 text-[10px] font-sans font-bold uppercase rounded-sharp border transition ${
                        selectedColor === c.name
                          ? "border-black bg-black text-white"
                          : "border-[#E5E5E5] bg-white text-black hover:border-black"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="pt-2">
              <div className="flex justify-between text-[10px] uppercase font-bold text-[#111111] mb-1.5">
                <span>AVAILABLE SIZES:</span>
                <span className="text-[#666666] font-normal">Selected: {selectedSize}</span>
              </div>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`h-8 w-9 font-sans font-bold text-[11px] uppercase rounded-sharp border transition ${
                      selectedSize === s
                        ? "border-black bg-black text-white"
                        : "border-[#E5E5E5] bg-white text-black hover:border-black"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
