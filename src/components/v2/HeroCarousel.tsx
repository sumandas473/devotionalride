"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/products";

export interface HeroCarouselProps {
  onExploreClick?: (slideIndex: number) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onExploreClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  // Autoplay 5s, pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Featured riding gear hero carousel"
      className="relative w-full h-[60vh] md:h-[80vh] min-h-[500px] overflow-hidden bg-black group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* SLIDES */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-800 ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Ken Burns slow zoom (1 -> 1.08 over 6s) */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover brightness-[0.45] transition-transform duration-6000 ease-out ${
                  isActive ? "scale-108" : "scale-100"
                }`}
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Slide Content with Staggered Entrance */}
            <div className="relative z-20 max-w-site mx-auto h-full px-6 sm:px-10 lg:px-14 flex flex-col justify-center">
              <div className="max-w-2xl space-y-4">
                {/* Stagger 1: Title slides up 30px & fades in */}
                <h2
                  className={`text-36 sm:text-54 lg:text-64 font-heading font-extrabold uppercase text-white tracking-tight leading-[0.98] transition-all duration-600 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                  }`}
                  style={{ transitionDelay: isActive ? "100ms" : "0ms" }}
                >
                  {slide.title}
                </h2>

                {/* Stagger 2: Tagline +150ms */}
                <p
                  className={`text-18 sm:text-22 font-heading font-bold uppercase tracking-wider text-lime transition-all duration-600 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                  }`}
                  style={{ transitionDelay: isActive ? "250ms" : "0ms" }}
                >
                  {slide.tagline}
                </p>

                {/* Subtitle */}
                <p
                  className={`text-14 sm:text-16 text-gray-300 max-w-lg leading-relaxed transition-all duration-600 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                  }`}
                  style={{ transitionDelay: isActive ? "350ms" : "0ms" }}
                >
                  {slide.subtitle}
                </p>

                {/* Stagger 3: Button +300ms */}
                <div
                  className={`pt-3 transition-all duration-600 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
                  }`}
                  style={{ transitionDelay: isActive ? "450ms" : "0ms" }}
                >
                  <a
                    href={slide.categoryHref}
                    onClick={() => onExploreClick?.(index)}
                    className="inline-flex items-center justify-center h-13 px-8 text-15 btn-wipe-primary"
                  >
                    {slide.linkText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* ARROWS (FADE IN ON HOVER) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/60 text-white hover:text-lime border border-line-dark rounded-sharp opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/60 text-white hover:text-lime border border-line-dark rounded-sharp opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* DOTS (ACTIVE DOT STRETCHES INTO A LIME PILL) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 transition-all duration-300 rounded-sharp ${
              currentSlide === i ? "w-8 bg-lime" : "w-2 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

