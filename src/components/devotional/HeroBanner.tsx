"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroBannerProps {
  onExploreClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AIR GT 2 GLOVES",
      subtitle: "Premium Riding Protection",
      // High-contrast, dramatic low-angle rider, gloved hand reaching out, clear blue sky & glass/steel background
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=2000&q=85",
    },
    {
      title: "APEX EVO GLOVES",
      subtitle: "Carbon Knuckle & Scaphoid Defense",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2000&q=85",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="hero"
      aria-label="Cinematic Hero Banner"
      className="relative w-full h-[85vh] sm:h-[90vh] min-h-[580px] bg-black overflow-hidden flex items-center justify-center select-none"
    >
      {/* Background Cinematic Photo with Dramatic Low Angle and Contrast */}
      <div className="absolute inset-0">
        <img
          src={activeSlide.image}
          alt={activeSlide.title}
          className="w-full h-full object-cover object-center brightness-75 transition-all duration-700"
        />
        {/* Subtle radial and gradient vignette for maximum focus on typography and gloved hand */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      </div>

      {/* Hero Centered Typography & Pill Button */}
      <div className="relative z-20 text-center px-4 max-w-2xl mx-auto space-y-3">
        <h1 className="text-38 sm:text-52 md:text-60 font-sans font-extrabold uppercase text-white tracking-wider leading-none drop-shadow-md">
          {activeSlide.title}
        </h1>

        <p className="text-13 sm:text-15 font-sans font-medium uppercase tracking-[0.18em] text-white/90">
          {activeSlide.subtitle}
        </p>

        <div className="pt-3">
          <button
            type="button"
            onClick={onExploreClick}
            className="btn-white-pill h-10 px-7 text-11 tracking-widest uppercase font-bold text-black shadow-pill"
          >
            EXPLORE NOW
          </button>
        </div>
      </div>

      {/* Subtle Carousel Navigation Arrows (Left & Right Edges) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Hero Slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white/60 hover:text-white transition focus-visible:outline-none"
      >
        <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Hero Slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white/60 hover:text-white transition focus-visible:outline-none"
      >
        <ChevronRight className="w-6 h-6 stroke-[1.5]" />
      </button>

      {/* Small Pagination Dots at Bottom Center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === i ? "bg-white w-5" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

