"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn, formatINR } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { ReviewStars } from "@/components/ui/ReviewStars";
import { Eye, ShoppingCart, Heart } from "lucide-react";

export interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  gearType: string;
  primaryImage: string;
  hoverImage?: string;
  pricePaise: number;
  comparePricePaise?: number;
  rating: number;
  reviewCount: number;
  ceClass?: "ce-a" | "ce-aa" | null;
  isNew?: boolean;
  isRestocking?: boolean;
  colors: { name: string; hex: string; image?: string }[];
  onQuickView?: () => void;
  onAddToCart?: () => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  slug,
  gearType,
  primaryImage,
  hoverImage,
  pricePaise,
  comparePricePaise,
  rating,
  reviewCount,
  ceClass,
  isNew,
  isRestocking,
  colors,
  onQuickView,
  onAddToCart,
  className,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isHovered, setIsHovered] = useState(false);

  const displayImage =
    isHovered && hoverImage
      ? hoverImage
      : selectedColor?.image || primaryImage;

  const isOnSale = comparePricePaise && comparePricePaise > pricePaise;
  const discountPercent = isOnSale
    ? Math.round(((comparePricePaise - pricePaise) / comparePricePaise) * 100)
    : 0;

  return (
    <div
      className={cn(
        "group relative flex flex-col bg-surface border border-line rounded-sharp overflow-hidden transition duration-smooth hover:border-accent/60 hover:shadow-card",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Media & Badges */}
      <div className="relative aspect-[3/4] w-full bg-surface-2 overflow-hidden">
        {/* Badges Container */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
          {ceClass && <Badge variant={ceClass} />}
          {isNew && <Badge variant="new" />}
          {isOnSale && (
            <Badge variant="sale">-{discountPercent}%</Badge>
          )}
          {isRestocking && <Badge variant="restocking" />}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute top-2.5 right-2.5 z-10 w-9 h-9 min-w-[36px] min-h-[36px] rounded-sharp bg-surface/80 backdrop-blur-sm border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition duration-fast"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Product Image Link */}
        <Link href={`/products/${slug}`} className="block w-full h-full">
          <Image
            src={displayImage}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-smooth group-hover:scale-105"
          />
        </Link>

        {/* Hover Action Overlay */}
        <div className="absolute inset-x-2 bottom-2 z-10 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-smooth">
          {onQuickView && (
            <button
              type="button"
              onClick={onQuickView}
              aria-label="Quick view product"
              className="flex-1 h-10 min-h-[40px] bg-surface-2/95 backdrop-blur-sm border border-line text-text text-12 font-heading uppercase font-bold tracking-wider rounded-sharp flex items-center justify-center gap-1.5 hover:bg-surface hover:text-accent transition duration-fast"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          )}
          {onAddToCart && (
            <button
              type="button"
              onClick={onAddToCart}
              aria-label="Add product to cart"
              className="h-10 w-10 min-w-[40px] min-h-[40px] bg-accent text-accent-ink rounded-sharp flex items-center justify-center font-bold hover:brightness-105 transition duration-fast"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1 p-3.5 md:p-4 gap-2">
        <div className="flex items-center justify-between text-12 text-muted">
          <span className="font-heading uppercase tracking-wider">{gearType}</span>
          <ReviewStars rating={rating} count={reviewCount} size="sm" />
        </div>

        <Link
          href={`/products/${slug}`}
          className="font-heading font-bold text-16 md:text-18 uppercase tracking-wide text-text hover:text-accent transition duration-fast line-clamp-1"
        >
          {name}
        </Link>

        {/* Color Dots */}
        {colors.length > 0 && (
          <div className="flex items-center gap-1.5 my-0.5">
            {colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c)}
                aria-label={`Select color ${c.name}`}
                className={cn(
                  "w-3.5 h-3.5 rounded-full border border-line transition duration-fast flex items-center justify-center",
                  selectedColor?.name === c.name && "ring-2 ring-accent ring-offset-1 ring-offset-bg"
                )}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mt-auto pt-1">
          <span className="font-heading font-extrabold text-16 md:text-18 text-text tracking-tight">
            {formatINR(pricePaise)}
          </span>
          {isOnSale && (
            <span className="text-12 md:text-14 text-muted line-through">
              {formatINR(comparePricePaise!)}
            </span>
          )}
          <span className="text-12 text-muted ml-auto font-normal">
            Incl. GST
          </span>
        </div>
      </div>
    </div>
  );
};
