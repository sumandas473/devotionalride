"use client";

import React from "react";
import Link from "next/link";

export const GlovesHeroBanner: React.FC = () => {
  return (
    <section
      aria-label="Gloves Collection Hero Banner"
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] bg-[#111111] overflow-hidden select-none pt-20 sm:pt-24"
    >
      {/* Background Cinematic Glove Close-Up Photo (Positioned center-right with macro details) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1569863151123-708666f1aa16?auto=format&fit=crop&w=2000&q=85"
          alt="Motorcycle riding glove close up on tank"
          loading="eager"
          className="w-full h-full object-cover object-center brightness-75 contrast-110 saturate-90"
        />
        {/* Subtle dark gradient overlay favoring the left text area and top navbar */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
      </div>

      {/* Foreground Content: Large Neon-Lime Title & Breadcrumbs */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col justify-end pb-6 sm:pb-8">
        {/* Large, bold, neon-lime green title on left */}
        <h1 className="text-36 sm:text-46 md:text-54 font-sans font-black tracking-tight text-[#C8F52B] uppercase leading-none drop-shadow-md">
          Gloves
        </h1>

        {/* Subtle breadcrumb navigation below the title */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-sans font-medium text-gray-300 uppercase tracking-widest mt-2"
        >
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-white font-semibold">Gloves</span>
        </nav>
      </div>
    </section>
  );
};
