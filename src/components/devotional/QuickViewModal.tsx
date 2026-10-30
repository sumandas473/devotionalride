"use client";

import React, { useState } from "react";
import { X, Star, Check } from "lucide-react";

export interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: { name: string; price: number; size: string; color: string; image: string }) => void;
  product?: {
    name: string;
    price: number;
    image: string;
  } | null;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  product,
}) => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [activeThumb, setActiveThumb] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen) return null;

  const currentProduct = product || {
    name: "TORNADO PRO 4 JACKET – CE CERTIFIED CLASS A",
    price: 8950,
    image: "/assets/jackets/jacket-1.png",
  };

  const jacketImages = [
    currentProduct.image,
    "/assets/jackets/jacket-2.png",
    "/assets/jackets/jacket-3.png",
  ];

  const sizes = ["S", "M", "L", "XL", "2XL"];

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      name: currentProduct.name,
      price: currentProduct.price,
      size: selectedSize,
      color: "Black",
      image: jacketImages[0],
    });
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Tornado Pro 4 Jacket Quick View"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
    >
      {/* 50% Black Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-sharp shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-30 w-9 h-9 bg-white/90 rounded-sharp flex items-center justify-center text-gray-500 hover:text-black transition shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image on Clean White */}
        <div className="w-full md:w-1/2 p-6 bg-white flex flex-col items-center justify-between">
          <div className="relative aspect-[4/5] w-full flex items-center justify-center">
            <img
              src={jacketImages[activeThumb]}
              alt="Tornado Pro 4 Jacket"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex gap-2 mt-3">
            {jacketImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveThumb(i)}
                className={`w-12 h-14 rounded-sharp overflow-hidden transition ${
                  activeThumb === i ? "opacity-100 ring-2 ring-black" : "opacity-40 hover:opacity-80"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Details & Buying Controls */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-gray-500">
                PRO SERIES
              </span>
              <h3 className="text-18 sm:text-20 font-sans font-extrabold uppercase text-black tracking-tight leading-snug mt-1">
                {currentProduct.name}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-black text-black" />
                  ))}
                </div>
                <span className="text-11 font-sans text-gray-500">
                  (52 verified rider reviews)
                </span>
              </div>
            </div>

            <div className="py-1">
              <span className="text-22 font-sans font-extrabold text-black">
                ₹ {currentProduct.price.toLocaleString("en-IN")}
              </span>
              <p className="text-[10px] font-sans uppercase tracking-wider text-gray-500 mt-0.5">
                MRP inclusive of all taxes
              </p>
            </div>

            <p className="text-13 text-gray-600 leading-relaxed font-body">
              All-weather mesh and Cordura 1000D abrasion chassis equipped with Safe-Tech CE Level 2 armor at back, shoulders, and elbows.
            </p>

            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-black block">
                Select Size: <strong className="text-gray-500">{selectedSize}</strong>
              </span>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`h-9 w-10 font-sans font-bold text-12 uppercase rounded-sharp transition ${
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
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="w-full h-12 btn-lime text-12 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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
  );
};

