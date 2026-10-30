"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const EditorialBanners: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-white border-b border-border-light">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Stormproof Your Monsoon */}
          <div className="group relative aspect-[16/10] sm:aspect-[16/9] min-h-[320px] rounded-sharp overflow-hidden bg-black flex flex-col justify-end p-6 sm:p-10 cursor-pointer select-none">
            {/* Background image zooms 1.06 on hover */}
            <img
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80"
              alt="Stormproof your monsoon"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-standard group-hover:scale-106 brightness-60 group-hover:brightness-50"
            />
            {/* Dark Overlay that darkens on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            <div className="relative z-10 space-y-2">
              <span className="text-11 font-heading uppercase tracking-widest text-lime font-extrabold">
                TECHNICAL GUIDE
              </span>
              <h3 className="text-26 sm:text-34 font-heading font-extrabold uppercase text-white tracking-tight leading-none">
                STORMPROOF YOUR MONSOON
              </h3>
              <p className="text-14 text-gray-300 line-clamp-2 max-w-md">
                10,000mm hydrostatic fabrics, taped storm seams, and fog-free riding strategies for coastal and ghat deluges.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-13 font-heading font-extrabold uppercase tracking-wider text-lime">
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[6px]" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Maximise Protection and Comfort */}
          <div className="group relative aspect-[16/10] sm:aspect-[16/9] min-h-[320px] rounded-sharp overflow-hidden bg-black flex flex-col justify-end p-6 sm:p-10 cursor-pointer select-none">
            {/* Background image zooms 1.06 on hover */}
            <img
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80"
              alt="Maximise protection and comfort"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-standard group-hover:scale-106 brightness-60 group-hover:brightness-50"
            />
            {/* Dark Overlay that darkens on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            <div className="relative z-10 space-y-2">
              <span className="text-11 font-heading uppercase tracking-widest text-lime font-extrabold">
                ARMOR ENGINEERING
              </span>
              <h3 className="text-26 sm:text-34 font-heading font-extrabold uppercase text-white tracking-tight leading-none">
                MAXIMISE PROTECTION AND COMFORT
              </h3>
              <p className="text-14 text-gray-300 line-clamp-2 max-w-md">
                How CE Level 2 viscoelastic memory armor reacts dynamically to kinetic impact while staying featherlight.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-13 font-heading font-extrabold uppercase tracking-wider text-lime">
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[6px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

