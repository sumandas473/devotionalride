"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn, formatINR } from "@/lib/utils";
import { X, ShieldCheck, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ReviewStars } from "@/components/ui/ReviewStars";

export interface QuickViewProduct {
  id: string;
  name: string;
  slug: string;
  gearType: string;
  description: string;
  pricePaise: number;
  comparePricePaise?: number;
  rating: number;
  reviewCount: number;
  ceClass?: "ce-a" | "ce-aa" | null;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: { size: string; inStock: boolean }[];
}

export interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: QuickViewProduct | null;
  onAddToCart: (variant: { size: string; color: string }) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  React.useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || "");
      const firstAvailableSize = product.sizes.find((s) => s.inStock)?.size || "";
      setSelectedSize(firstAvailableSize);
      setActiveImageIdx(0);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-fast"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-surface border border-line rounded-sharp shadow-card overflow-hidden z-10 animate-in zoom-in-95 duration-fast max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 z-20 w-11 h-11 min-w-[44px] min-h-[44px] bg-surface/80 border border-line rounded-sharp flex items-center justify-center text-muted hover:text-text"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Column */}
        <div className="w-full md:w-1/2 bg-surface-2 p-6 flex flex-col justify-between">
          <div className="relative aspect-square w-full rounded-sharp overflow-hidden border border-line">
            <Image
              src={product.images[activeImageIdx] || product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImageIdx(i)}
                  className={cn(
                    "relative w-14 h-14 rounded-sharp overflow-hidden border shrink-0 transition",
                    activeImageIdx === i ? "border-accent ring-1 ring-accent" : "border-line opacity-70"
                  )}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-12 font-heading uppercase tracking-wider text-muted font-bold">
                  {product.gearType}
                </span>
                {product.ceClass && <Badge variant={product.ceClass} />}
              </div>
              <h2 className="text-24 font-heading font-extrabold uppercase text-text tracking-wide">
                {product.name}
              </h2>
              <ReviewStars rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pb-3 border-b border-line">
              <span className="font-heading font-extrabold text-24 text-text">
                {formatINR(product.pricePaise)}
              </span>
              {product.comparePricePaise && (
                <span className="text-16 text-muted line-through">
                  {formatINR(product.comparePricePaise)}
                </span>
              )}
              <span className="text-12 text-muted ml-auto">GST Inclusive</span>
            </div>

            {/* Color selection */}
            <div className="space-y-2">
              <span className="text-12 font-heading uppercase text-muted font-semibold tracking-wider">
                Color: <strong className="text-text">{selectedColor}</strong>
              </span>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    aria-label={`Choose ${c.name}`}
                    className={cn(
                      "w-7 h-7 rounded-full border border-line flex items-center justify-center transition",
                      selectedColor === c.name && "ring-2 ring-accent ring-offset-2 ring-offset-bg"
                    )}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="space-y-2">
              <span className="text-12 font-heading uppercase text-muted font-semibold tracking-wider">
                Select Size
              </span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    type="button"
                    disabled={!s.inStock}
                    onClick={() => setSelectedSize(s.size)}
                    className={cn(
                      "h-11 min-h-[44px] min-w-[44px] px-4 font-heading font-bold text-14 uppercase rounded-sharp border transition duration-fast",
                      selectedSize === s.size
                        ? "bg-accent border-accent text-accent-ink"
                        : s.inStock
                        ? "border-line bg-surface-2 text-text hover:border-accent"
                        : "border-line/40 bg-surface-2/40 text-muted line-through cursor-not-allowed"
                    )}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-3">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              disabled={!selectedSize}
              onClick={() => onAddToCart({ size: selectedSize, color: selectedColor })}
              leftIcon={<ShoppingCart className="w-5 h-5" />}
            >
              Add to Cart
            </Button>
            <Link
              href={`/products/${product.slug}`}
              className="flex items-center justify-center gap-1.5 text-12 font-heading font-bold uppercase tracking-wider text-muted hover:text-accent min-h-[36px]"
            >
              <span>View Full Tech Specs & Armor Ratings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
