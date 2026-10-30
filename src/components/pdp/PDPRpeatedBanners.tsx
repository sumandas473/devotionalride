"use client";

import React from "react";

export const PDPRpeatedBanners: React.FC = () => {
  // Three consecutive full-width promotional banners as requested by the reference
  const banners = [
    {
      id: "banner-1",
      image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=2000&q=85",
    },
    {
      id: "banner-2",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=85",
    },
    {
      id: "banner-3",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2000&q=85",
    },
  ];

  return (
    <section
      aria-label="Promotional Banners"
      className="w-full bg-[#FFFFFF] select-none flex flex-col space-y-[2px]"
    >
      {banners.map((b, idx) => (
        <div
          key={b.id}
          className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] bg-black overflow-hidden flex items-center justify-start border-b border-[#E5E5E5] last:border-b-0"
        >
          {/* Panoramic Action Photography: Rider wearing black gloves with neon-lime details on handlebar */}
          <div className="absolute inset-0">
            <img
              src={b.image}
              alt="ADVento Pro Gloves in action on motorcycle handlebar"
              loading="lazy"
              className="w-full h-full object-cover object-center brightness-70 contrast-110"
            />
            {/* Cinematic Gradient Overlay favoring left text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          </div>

          {/* Left Text Overlay */}
          <div className="relative z-10 px-6 sm:px-12 md:px-16 max-w-lg space-y-1 sm:space-y-2">
            <h3 className="text-26 sm:text-36 md:text-44 font-sans font-extrabold uppercase text-white tracking-tight leading-[1.05] drop-shadow-md">
              MAXIMUM<br />PROTECTION
            </h3>
            <p className="text-11 sm:text-13 font-sans font-medium uppercase tracking-[0.2em] text-white/90">
              Advento Pro Gloves
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

