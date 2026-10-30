"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Star, Check, ShieldCheck, Wind, ArrowRight } from "lucide-react";
import { GloveProduct } from "@/data/glovesCatalog";
import { slugify } from "@/data/allProducts";

export interface GloveQuickViewModalProps {
  product: GloveProduct | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
  }) => void;
}

export const GloveQuickViewModal: React.FC<GloveQuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState("L");
  const [isAdded, setIsAdded] = useState(false);

  if (!isOpen || !product) return null;

  const sizes = ["S", "M", "L", "XL", "2XL"];

  const handleAdd = () => {
    setIsAdded(true);
    onAddToCart({
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: "Black",
      image: product.image,
    });
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Quick View`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
    >
      {/* 50% Black Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card (Clean borderless aesthetic) */}
      <div className="relative w-full max-w-2xl bg-white rounded-sharp shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-30 w-8 h-8 bg-white/90 rounded-sharp flex items-center justify-center text-gray-500 hover:text-black transition shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Glove Product Image on Pure White */}
        <div className="w-full md:w-1/2 p-6 bg-white flex items-center justify-center">
          <div className="relative aspect-[4/5] w-full flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right: Details & Buying Controls */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#C8F52B] bg-black px-2 py-0.5 rounded-sharp">
                CE CERTIFIED GLOVES
              </span>
              <h3 className="text-16 sm:text-18 font-sans font-extrabold uppercase text-black tracking-tight leading-snug mt-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex text-black">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-black text-black" />
                  ))}
                </div>
                <span className="text-[11px] font-sans text-gray-500 font-medium">
                  (4.9 / 5.0 Rating)
                </span>
              </div>
            </div>

            <div className="py-1">
              <span className="text-20 font-sans font-extrabold text-black">
                ₹ {product.price.toLocaleString("en-IN")}
              </span>
              <p className="text-[9px] font-sans uppercase tracking-wider text-gray-500 mt-0.5">
                MRP inclusive of all taxes
              </p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-2 text-center pt-1">
              <div className="p-2 bg-[#F6F6F6] rounded-sharp flex items-center gap-1.5 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                <span className="text-[9px] font-sans font-bold uppercase text-black">
                  EN 13594 LEVEL 1
                </span>
              </div>
              <div className="p-2 bg-[#F6F6F6] rounded-sharp flex items-center gap-1.5 justify-center">
                <Wind className="w-3.5 h-3.5 text-black" />
                <span className="text-[9px] font-sans font-bold uppercase text-black">
                  3D AERO MESH
                </span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-black block">
                Select Size: <strong className="text-gray-500">{selectedSize}</strong>
              </span>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`h-8 w-9 font-sans font-bold text-[11px] uppercase rounded-sharp transition ${
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

          <div className="space-y-2 pt-2">
            <button
              type="button"
              onClick={handleAdd}
              className="w-full h-11 btn-lime text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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

            <Link
              href={`/products/${slugify(product.name)}`}
              onClick={onClose}
              className="w-full h-9 bg-transparent hover:bg-gray-100 text-black text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition rounded-sharp border border-gray-200"
            >
              <span>VIEW FULL PRODUCT DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

