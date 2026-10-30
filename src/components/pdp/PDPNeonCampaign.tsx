"use client";

import React, { useState } from "react";
import { Play, Volume2, Maximize2 } from "lucide-react";
import { UnifiedProduct, FEATURED_CATALOG } from "@/data/allProducts";

export interface PDPNeonCampaignProps {
  product?: UnifiedProduct;
}

export const PDPNeonCampaign: React.FC<PDPNeonCampaignProps> = ({
  product = FEATURED_CATALOG[0],
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      aria-label={`${product.name} Neon Campaign`}
      className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-8 bg-gradient-to-br from-[#B7F52D] via-[#A7E522] to-[#8DCB19] text-black select-none overflow-hidden flex flex-col items-center justify-center text-center shadow-inner"
    >
      {/* Subtle radial highlight aura in background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/25 via-transparent to-black/10 pointer-events-none" />

      {/* Main Campaign Center Content */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {/* Play Video Button Positioned Above/Near Center */}
        <div className="flex justify-center pb-1">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={`Play ${product.name} campaign video`}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300 shadow-xl group"
          >
            <Play className="w-6 h-6 fill-current translate-x-0.5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Central Bold Heading */}
        <h2 className="text-36 sm:text-54 md:text-64 font-sans font-black uppercase text-black tracking-tight leading-none drop-shadow-sm">
          {product.name}
        </h2>

        {/* Black Rectangular Label with White Uppercase Text */}
        <div className="inline-block bg-black text-white font-sans font-extrabold text-[11px] sm:text-[13px] uppercase tracking-[0.25em] px-4 py-1.5 shadow-md">
          {product.category}
        </div>

        {/* Short Supporting Line */}
        <p className="text-14 sm:text-16 md:text-18 font-sans font-bold uppercase tracking-wider text-black/90 pt-1">
          Track Inspired. Road Ready.
        </p>

        {isPlaying && (
          <div className="pt-4 text-[11px] font-sans font-semibold uppercase tracking-widest text-black/80 animate-fadeIn">
            ▶ Playing Cinematic Engineering & Armor Stress Simulation...
          </div>
        )}
      </div>

      {/* Subtle Bottom-Right Video Control / View-More Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 flex items-center gap-2 text-black/80">
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label="Video Sound"
          className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition"
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Fullscreen view"
          className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <span className="text-[10px] font-sans font-bold uppercase tracking-widest pl-1 hidden sm:inline">
          4K CINEMATIC REEL
        </span>
      </div>
    </section>
  );
};
