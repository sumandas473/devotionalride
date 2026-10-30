"use client";

import React, { useState, useEffect, useRef } from "react";
import { ProductItem } from "@/data/products";
import { X, Star, Check, Loader2, ChevronDown, Ruler } from "lucide-react";

export interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (item: { product: ProductItem; quantity: number; size: string; color: string }) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);

  // Cursor-follow zoom states
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || "");
      setSelectedSize(product.sizes[0] || "L");
      setActiveImageIdx(0);
      setIsAdding(false);
      setIsAddedSuccess(false);
      setShowSizeChart(false);
    }
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const handleAddToCartClick = () => {
    if (!product.inStock) return;
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
      setIsAddedSuccess(true);

      setTimeout(() => {
        onAddToCart({
          product,
          quantity: 1,
          size: selectedSize,
          color: selectedColor,
        });
        onClose();
      }, 500);
    }, 600);
  };

  const allSizes = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
    >
      {/* 50% Black Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog (fade and scale 0.96 -> 1) */}
      <div className="relative w-full max-w-4xl bg-white border border-border-light rounded-sharp shadow-2xl overflow-hidden z-10 transform scale-100 transition-all duration-300 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-30 w-10 h-10 bg-white/90 border border-border-light rounded-sharp flex items-center justify-center text-gray-500 hover:text-black hover:bg-lime transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT: Main Image with Cursor-Follow Zoom & Thumbnails */}
        <div className="w-full md:w-1/2 bg-[#f4f4f4] p-6 flex flex-col justify-between overflow-hidden">
          {/* Main Zoomable Image Viewport */}
          <div
            ref={imageRef}
            onMouseEnter={() => setIsZooming(true)}
            onMouseLeave={() => setIsZooming(false)}
            onMouseMove={handleMouseMove}
            className="relative aspect-[4/5] w-full rounded-sharp overflow-hidden bg-white border border-border-light cursor-crosshair select-none"
          >
            <img
              src={product.images[activeImageIdx] || product.images[0]}
              alt={product.name}
              className={`w-full h-full object-cover transition-transform duration-150 ${
                isZooming ? "scale-175 origin-top-left" : "scale-100"
              }`}
              style={
                isZooming
                  ? {
                      transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    }
                  : undefined
              }
            />

            {!product.inStock && (
              <span className="absolute top-3 left-3 px-2 py-1 bg-black text-white text-11 font-heading uppercase font-bold tracking-wider rounded-sharp">
                RESTOCKING SOON
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2.5 mt-4 overflow-x-auto no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-16 h-20 rounded-sharp overflow-hidden border-2 transition-all ${
                    activeImageIdx === idx
                      ? "border-lime ring-2 ring-lime"
                      : "border-border-light opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Details & Controls */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto no-scrollbar space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-11 font-heading uppercase tracking-widest text-gray-500 font-bold">
                {product.category}
              </span>
              <h2 className="text-22 sm:text-26 font-heading font-extrabold uppercase text-black tracking-tight leading-snug mt-1">
                {product.name}
              </h2>

              {/* Star Rating ("46 reviews") */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-black text-black"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-13 text-gray-600 font-medium">
                  {product.reviewCount} reviews
                </span>
              </div>
            </div>

            {/* Price with MRP Inclusive */}
            <div className="py-2 border-y border-border-light">
              <div className="flex items-baseline gap-3">
                <span className="text-24 font-heading font-extrabold text-black">
                  ₹ {product.price.toLocaleString("en-IN")}
                </span>
                {product.comparePrice && (
                  <span className="text-16 text-gray-400 line-through">
                    ₹ {product.comparePrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              <p className="text-11 font-heading uppercase tracking-wider text-gray-500 mt-0.5">
                MRP inclusive of all taxes
              </p>
            </div>

            {/* Description */}
            <p className="text-14 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Buttons */}
            {product.colors.length > 0 && (
              <div className="space-y-2">
                <span className="text-12 font-heading font-bold uppercase tracking-wider text-black block">
                  COLOR: <strong className="text-gray-600">{selectedColor}</strong>
                </span>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      aria-label={`Select ${c.name}`}
                      className={`w-7 h-7 rounded-full border border-gray-300 transition-all ${
                        selectedColor === c.name
                          ? "ring-2 ring-black scale-110"
                          : "hover:scale-110"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Buttons S–5XL */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-12 font-heading font-bold uppercase tracking-wider text-black">
                  SIZE: <strong className="text-gray-600">{selectedSize}</strong>
                </span>
                {/* Collapsible Size Chart Trigger */}
                <button
                  type="button"
                  onClick={() => setShowSizeChart(!showSizeChart)}
                  className="inline-flex items-center gap-1 text-12 font-heading font-bold uppercase text-black hover:text-lime underline"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Chart</span>
                </button>
              </div>

              {/* Collapsible Size Chart Table */}
              {showSizeChart && (
                <div className="p-3 bg-bg-grey border border-border-light rounded-sharp text-12 space-y-2 animate-fadeIn">
                  <span className="font-heading font-bold uppercase block text-black">
                    Chest & Waist Measurements (Inches)
                  </span>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono text-11">
                    <span className="font-bold">S: 38&quot;</span>
                    <span className="font-bold">M: 40&quot;</span>
                    <span className="font-bold">L: 42&quot;</span>
                    <span className="font-bold">XL: 44&quot;</span>
                    <span className="font-bold">2XL: 46&quot;</span>
                    <span className="font-bold">3XL: 48&quot;</span>
                    <span className="font-bold">4XL: 50&quot;</span>
                    <span className="font-bold">5XL: 52&quot;</span>
                  </div>
                </div>
              )}

              {/* Sizes Grid */}
              <div className="grid grid-cols-4 gap-2">
                {allSizes.map((sz) => {
                  const isAvailable = product.sizes.includes(sz) && product.inStock;
                  const isSelected = selectedSize === sz;

                  return (
                    <button
                      key={sz}
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => setSelectedSize(sz)}
                      className={`h-11 font-heading font-bold text-14 uppercase rounded-sharp border transition-all ${
                        isSelected && isAvailable
                          ? "bg-black text-white border-black"
                          : isAvailable
                          ? "bg-white text-black border-border-light hover:border-black"
                          : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed relative overflow-hidden"
                      }`}
                    >
                      <span>{sz}</span>
                      {!isAvailable && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-full h-[1px] bg-gray-400 transform -rotate-45" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FULL-WIDTH LIME ADD TO CART BUTTON (SPINNER -> CHECK ICON -> CART OPEN) */}
          <div className="pt-2">
            <button
              type="button"
              disabled={!product.inStock || isAdding}
              onClick={handleAddToCartClick}
              className="w-full h-13 btn-wipe-primary flex items-center justify-center gap-2 text-15"
            >
              {isAdding ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-black" />
                  <span>ADDING TO CART...</span>
                </>
              ) : isAddedSuccess ? (
                <>
                  <Check className="w-5 h-5 text-black stroke-[3]" />
                  <span>ADDED TO CART!</span>
                </>
              ) : !product.inStock ? (
                <span>RESTOCKING SOON</span>
              ) : (
                <span>ADD TO CART</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

