"use client";

import React, { useRef } from "react";
import { ProductItem } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface ProductCarouselProps {
  id?: string;
  title: string;
  subtitle?: string;
  products: ProductItem[];
  exploreHref?: string;
  onQuickView: (product: ProductItem) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  id,
  title,
  subtitle,
  products,
  exploreHref = "#",
  onQuickView,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth / 2;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="w-full py-10 md:py-14 border-b border-border-light bg-white">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <div>
            <h2 className="text-24 sm:text-32 font-heading font-extrabold uppercase text-black tracking-tight leading-none">
              {title}
            </h2>
            {subtitle && (
              <p className="text-13 sm:text-14 text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>

          <a
            href={exploreHref}
            className="group inline-flex items-center gap-1 text-13 font-heading font-bold uppercase tracking-wider text-black hover:text-lime transition-colors self-start sm:self-auto py-1"
          >
            <span>EXPLORE MORE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Carousel Viewport with Hover Arrows */}
        <div className="relative group">
          {/* Scroll Left Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label={`Scroll ${title} left`}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-black/80 text-white hover:text-lime border border-line-dark rounded-sharp shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Scroll Container (4 on desktop, 2 on tablet, 1.5 on mobile with peek) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-3"
          >
            {products.map((prod, index) => (
              <div
                key={prod.id}
                className="w-[70vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 snap-start"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                <ProductCard product={prod} onQuickView={onQuickView} />
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label={`Scroll ${title} right`}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center bg-black/80 text-white hover:text-lime border border-line-dark rounded-sharp shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

