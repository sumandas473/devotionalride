"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn, formatINR } from "@/lib/utils";
import { X, ShoppingBag, ArrowRight, Trash2, Truck } from "lucide-react";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { Button } from "@/components/ui/Button";

export interface CartDrawerItem {
  id: string;
  name: string;
  slug: string;
  sku: string;
  size: string;
  color: string;
  image: string;
  pricePaise: number;
  quantity: number;
  maxStock: number;
}

export interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartDrawerItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  freeShippingThresholdPaise?: number; // e.g. 199900 = ₹1,999
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  freeShippingThresholdPaise = 199900,
}) => {
  if (!isOpen) return null;

  const subtotalPaise = items.reduce(
    (sum, item) => sum + item.pricePaise * item.quantity,
    0
  );

  const amountNeededForFreeShipping = Math.max(
    0,
    freeShippingThresholdPaise - subtotalPaise
  );
  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotalPaise / freeShippingThresholdPaise) * 100)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
      className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-fast"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-[420px] bg-surface h-full flex flex-col border-l border-line shadow-card z-10 animate-in slide-in-from-right duration-smooth">
        {/* Header */}
        <div className="h-16 px-5 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-accent" />
            <span className="font-heading font-extrabold text-16 uppercase tracking-wider text-text">
              Your Gear Cart ({items.length})
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-text rounded-sharp"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-surface-2 border-b border-line">
          <div className="flex items-center gap-2 text-12 font-medium text-text mb-1.5">
            <Truck className="w-4 h-4 text-accent" />
            <span>
              {amountNeededForFreeShipping === 0 ? (
                <span className="text-success font-bold">
                  Unlocked! Free Pan-India Delivery
                </span>
              ) : (
                <>
                  Add{" "}
                  <strong className="text-accent">
                    {formatINR(amountNeededForFreeShipping)}
                  </strong>{" "}
                  more for Free Delivery
                </>
              )}
            </span>
          </div>
          <div className="w-full h-1.5 bg-line rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-smooth"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Line Items */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-line">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <ShoppingBag className="w-12 h-12 text-muted stroke-1" />
              <p className="font-heading font-bold text-18 uppercase text-text">
                Your cart is empty
              </p>
              <p className="text-14 text-muted max-w-xs">
                Explore our touring jackets, modular luggage, and impact armor.
              </p>
              <Button variant="primary" onClick={onClose} className="mt-2">
                Explore Products
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                <div className="relative w-20 h-24 bg-surface-2 border border-line rounded-sharp overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/products/${item.slug}`}
                        onClick={onClose}
                        className="font-heading font-bold text-14 uppercase text-text hover:text-accent line-clamp-1"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="text-muted hover:text-danger p-1 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-12 text-muted mt-0.5">
                      {item.color} • Size: {item.size}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <QuantityStepper
                      size="sm"
                      value={item.quantity}
                      min={1}
                      max={item.maxStock}
                      onChange={(newQty) => onUpdateQuantity(item.id, newQty)}
                    />
                    <span className="font-heading font-extrabold text-16 text-text">
                      {formatINR(item.pricePaise * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout CTA */}
        {items.length > 0 && (
          <div className="p-5 border-t border-line bg-surface-2 space-y-3">
            <div className="space-y-1 text-14">
              <div className="flex items-center justify-between text-muted">
                <span>Subtotal (Incl. GST)</span>
                <span className="text-text font-bold font-heading text-16">
                  {formatINR(subtotalPaise)}
                </span>
              </div>
              <div className="flex items-center justify-between text-muted text-12">
                <span>Shipping</span>
                <span>
                  {amountNeededForFreeShipping === 0
                    ? "FREE"
                    : "Calculated at checkout"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                href="/cart"
                onClick={onClose}
                className="h-11 min-h-[44px] flex items-center justify-center border border-line bg-surface text-text font-heading text-14 uppercase font-bold rounded-sharp hover:bg-surface-2 transition"
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                onClick={onClose}
                className="h-11 min-h-[44px] flex items-center justify-center bg-accent text-accent-ink font-heading text-14 uppercase font-bold rounded-sharp hover:brightness-105 transition gap-1.5"
              >
                <span>Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
