"use client";

import React from "react";
import Link from "next/link";

export const JacketsHeroBanner: React.FC = () => {
  return (
    <section
      aria-label="Jackets Collection Hero Banner"
      className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] bg-[#111111] overflow-hidden select-none pt-20 sm:pt-24"
    >
      {/* Background Cinematic Motorcycle Jacket Photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=2000&q=85"
          alt="Motorcycle riding jackets collection"
          loading="eager"
          className="w-full h-full object-cover object-center brightness-70 contrast-110 saturate-90"
        />
        {/* Dark gradient overlay favoring the left text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/50" />
      </div>

      {/* Foreground Content: Large Neon-Lime Title & Breadcrumbs */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col justify-end pb-6 sm:pb-8">
        <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#C8F52B] mb-1">
          ENGINEERED MOTORCYCLE APPAREL • CE CLASS AA
        </span>

        {/* Large, bold, neon-lime green title on left */}
        <h1 className="text-36 sm:text-46 md:text-54 font-sans font-black tracking-tight text-[#C8F52B] uppercase leading-none drop-shadow-md">
          Jackets
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
          <span className="text-white font-semibold">Jackets</span>
        </nav>
      </div>
    </section>
  );
};

