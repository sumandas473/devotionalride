"use client";

import React from "react";
import Link from "next/link";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";

export interface CartItem {
  name: string;
  price: number;
  size: string;
  color: string;
  image: string;
  quantity: number;
}

export interface MiniCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (index: number) => void;
  onUpdateQty: (index: number, newQty: number) => void;
}

export const MiniCartDrawer: React.FC<MiniCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQty,
}) => {
  if (!isOpen) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
      className="fixed inset-0 z-50 flex justify-end animate-fadeIn"
    >
      {/* 50% Black Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in Drawer */}
      <div className="relative w-full max-w-[400px] bg-white text-[#111111] h-full flex flex-col shadow-2xl z-10">
        {/* Header */}
        <div className="h-16 px-6 bg-black text-white flex items-center justify-between border-b border-[#222222]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-lime" />
            <span className="font-sans font-bold text-14 uppercase tracking-wider text-white">
              YOUR CART ({totalItems})
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free delivery prompt */}
        <div className="bg-[#F6F6F6] px-6 py-2.5 border-b border-[#E5E5E5] text-[11px] font-sans font-semibold uppercase tracking-wider text-center">
          {totalPrice >= 1999 ? (
            <span className="text-black font-bold">
              ✓ UNLOCKED FREE PAN-INDIA EXPRESS SHIPPING
            </span>
          ) : (
            <span>
              ADD ₹ {(1999 - totalPrice).toLocaleString("en-IN")} MORE FOR FREE DELIVERY
            </span>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E5E5E5]">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
              <ShoppingBag className="w-12 h-12 text-gray-300" />
              <p className="font-sans font-bold text-15 uppercase text-black">
                YOUR CART IS EMPTY
              </p>
              <p className="text-13 text-gray-500 max-w-xs font-body">
                Explore our CE certified touring gear and riding essentials.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 btn-lime h-10 px-6 text-11 uppercase font-bold tracking-wider"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="py-4 first:pt-0 flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-18 h-22 object-contain bg-[#FAFAFA] rounded-sharp p-1"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-sans font-bold text-13 uppercase text-black line-clamp-1">
                        {item.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(idx)}
                        aria-label="Remove item"
                        className="text-gray-400 hover:text-red-500 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] font-sans uppercase text-gray-500 mt-0.5">
                      {item.color} • SIZE: {item.size}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[#E5E5E5] rounded-sharp bg-white">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(idx, Math.max(1, item.quantity - 1))}
                        className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold text-12"
                      >
                        -
                      </button>
                      <span className="w-7 text-center text-12 font-bold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(idx, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold text-12"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-sans font-bold text-14 text-black">
                      ₹ {(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#E5E5E5] bg-[#FBFBFB] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans font-bold text-14 uppercase text-black">
                SUBTOTAL
              </span>
              <span className="font-sans font-extrabold text-18 text-black">
                ₹ {totalPrice.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="text-[11px] font-sans text-gray-500 uppercase tracking-wider">
              MRP inclusive of all taxes. Free shipping on orders above ₹1,999.
            </p>

            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={onClose}
                className="w-full h-12 btn-lime text-12 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="w-full h-10 border border-[#E5E5E5] bg-white hover:bg-gray-50 text-black font-sans text-11 uppercase font-bold tracking-wider rounded-sharp transition"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

