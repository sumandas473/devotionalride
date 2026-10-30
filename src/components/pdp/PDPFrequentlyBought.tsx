"use client";

import React, { useState } from "react";
import { Check, Plus } from "lucide-react";

export interface PDPFrequentlyBoughtProps {
  onAddBundleToCart: (items: { name: string; price: number; image: string }[]) => void;
}

export const PDPFrequentlyBought: React.FC<PDPFrequentlyBoughtProps> = ({
  onAddBundleToCart,
}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([0, 1, 2]);
  const [isAdded, setIsAdded] = useState(false);

  const bundleProducts = [
    {
      id: "bundle-1",
      name: "ADVENTO PRO GLOVES",
      price: 4750,
      image: "/assets/gloves/glove-1.png",
      category: "GLOVES",
    },
    {
      id: "bundle-2",
      name: "EXPEDITION TOURING PANTS",
      price: 6950,
      image: "/assets/jackets/jacket-2.png",
      category: "RIDING PANTS",
    },
    {
      id: "bundle-3",
      name: "DEVOTIONAL THERMO BALACLAVA",
      price: 750,
      image: "/assets/gloves/glove-4.png",
      category: "ESSENTIALS",
    },
  ];

  const toggleItem = (idx: number) => {
    setSelectedItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const totalPrice = selectedItems.reduce(
    (sum, idx) => sum + bundleProducts[idx].price,
    0
  );

  const discount = selectedItems.length === 3 ? 1200 : selectedItems.length === 2 ? 600 : 0;
  const finalPrice = Math.max(0, totalPrice - discount);

  const handleAddBundle = () => {
    setIsAdded(true);
    const itemsToAdd = selectedItems.map((idx) => bundleProducts[idx]);
    onAddBundleToCart(itemsToAdd);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <section
      aria-label="Frequently Bought Together"
      className="w-full bg-[#FFFFFF] py-8 sm:py-10 px-4 sm:px-8 select-none"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-18 sm:text-20 font-sans font-extrabold uppercase text-[#111111] tracking-tight mb-4">
          Frequently Bought Together
        </h2>

        {/* Bundle shopping container with light-gray background (#D0D0D0) */}
        <div className="w-full bg-[#E8E8E8] rounded-sharp p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          {/* Horizontal Product Cards */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 w-full">
            {bundleProducts.map((prod, idx) => {
              const isChecked = selectedItems.includes(idx);
              return (
                <React.Fragment key={prod.id}>
                  {idx > 0 && (
                    <div className="text-gray-500 font-bold hidden sm:flex items-center justify-center">
                      <Plus className="w-4 h-4 stroke-[3]" />
                    </div>
                  )}

                  <div
                    onClick={() => toggleItem(idx)}
                    className={`flex-1 w-full sm:max-w-[210px] bg-white rounded-sharp p-3 cursor-pointer border transition-all duration-200 ${
                      isChecked
                        ? "border-black shadow-sm"
                        : "border-[#D0D0D0] opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* White Product Image Area */}
                    <div className="relative aspect-square w-full bg-white flex items-center justify-center p-2 overflow-hidden">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain"
                      />
                      {/* Checkbox in top-right */}
                      <div
                        className={`absolute top-1 right-1 w-4 h-4 rounded-sharp border flex items-center justify-center transition ${
                          isChecked
                            ? "bg-black border-black text-white"
                            : "bg-white border-gray-400"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>

                    {/* Product Name & Price */}
                    <div className="pt-2 text-center sm:text-left space-y-0.5">
                      <h3 className="font-sans font-bold text-[10px] sm:text-[11px] uppercase tracking-wide text-black line-clamp-1">
                        {prod.name}
                      </h3>
                      <p className="font-sans font-bold text-12 text-black">
                        ₹ {prod.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          {/* Right Side: Combined Price & Neon-Lime Add Button */}
          <div className="w-full lg:w-72 shrink-0 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-2 border-t lg:border-t-0 lg:border-l border-gray-300 pt-4 lg:pt-0 lg:pl-6">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-600 block">
                TOTAL BUNDLE PRICE:
              </span>
              <div className="flex items-baseline justify-center lg:justify-end gap-2">
                <span className="text-20 sm:text-24 font-sans font-extrabold text-[#111111]">
                  ₹ {finalPrice.toLocaleString("en-IN")}
                </span>
                {discount > 0 && (
                  <span className="text-12 font-sans line-through text-gray-500">
                    ₹ {totalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              {discount > 0 && (
                <span className="text-[10px] font-sans font-bold uppercase text-[#FF1744] block">
                  BUNDLE SAVINGS: - ₹ {discount.toLocaleString("en-IN")}
                </span>
              )}
            </div>

            <button
              type="button"
              disabled={selectedItems.length === 0}
              onClick={handleAddBundle}
              className="w-full sm:w-auto h-11 px-7 bg-[#B7F12B] hover:bg-[#a6de22] text-black font-sans font-bold text-[11px] uppercase tracking-widest rounded-sharp shadow-sm transition flex items-center justify-center gap-2"
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>BUNDLE ADDED</span>
                </>
              ) : (
                <span>ADD BUNDLE TO CART</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

