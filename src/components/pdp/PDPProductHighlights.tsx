"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PDPProductHighlights: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      id: "hl-1",
      title: "TOUCH COMPATIBLE",
      subtitle: "Smart device navigation without removing gloves.",
      image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hl-2",
      title: "COMPLETE CE CERTIFIED PROTECTION",
      subtitle: "Certified to EN 13594:2015 Class KP standards.",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hl-3",
      title: "D3O IMPACT PROTECTION",
      subtitle: "Intelligent molecules lock together under high impact.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hl-4",
      title: "FAST-R CORPUS PROTECTION",
      subtitle: "Scaphoid sliders prevent hyper-extension wrist injuries.",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Product Highlights"
      className="w-full bg-[#FFFFFF] py-10 sm:py-14 px-4 sm:px-8 select-none border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header with Carousel Arrows */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#666666] block mb-1">
              INNOVATION & CRAFTSMANSHIP
            </span>
            <h2 className="text-18 sm:text-22 font-sans font-extrabold uppercase text-[#111111] tracking-tight">
              Product Highlights
            </h2>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-sharp border border-[#E5E5E5] flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-sharp border border-[#E5E5E5] flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel (4 Photographic Cards, rectangular, no rounded corners) */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
        >
          {highlights.map((card) => (
            <div
              key={card.id}
              className="relative w-[260px] sm:w-[290px] md:w-[310px] shrink-0 aspect-[3/4] bg-black overflow-hidden group cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="w-full h-full object-cover brightness-85 group-hover:scale-105 transition-transform duration-700"
              />
              {/* Darkened lower area for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Overlay white text near bottom-left */}
              <div className="absolute bottom-5 left-5 right-5 space-y-1">
                <span className="text-[9px] font-sans font-bold tracking-widest text-[#B7F12B] uppercase block">
                  HIGHLIGHT
                </span>
                <h3 className="text-14 sm:text-15 font-sans font-extrabold uppercase text-white tracking-wide leading-snug">
                  {card.title}
                </h3>
                <p className="text-[11px] text-gray-300 font-sans leading-relaxed pt-0.5 line-clamp-2">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

