"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

export interface PromoSlideItem {
  id: string;
  series: string;
  title: string;
  description: string;
  riderImage: string;
  jacketName: string;
  price: number;
  jacketImage: string;
}

export interface PromoSplitProps {
  onQuickViewJacket: (jacket?: { name: string; price: number; image: string }) => void;
}

export const PromoSplit: React.FC<PromoSplitProps> = ({ onQuickViewJacket }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 5 slides pairing real Devotional Ride jackets with cinematic action rider photography
  const slides: PromoSlideItem[] = [
    {
      id: "pro-1",
      series: "PRO SERIES",
      title: "ENGINEERED FOR PERFORMANCE",
      description: "Designed with 1000D ballistic impact chassis, dual-density memory foam, and certified CE Class AA armor matrix.",
      riderImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
      jacketName: "TORNADO PRO 4 JACKET – CE CERTIFIED CLASS A",
      price: 8950,
      jacketImage: "/assets/jackets/jacket-1.png",
    },
    {
      id: "pro-2",
      series: "EVO SERIES",
      title: "UNCOMPROMISED TOURING ENDURANCE",
      description: "Built for long-distance highway cruising and unpredictable mountain terrain with dual-layer all-weather protection.",
      riderImage: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80",
      jacketName: "STEALTH EVO ALL-WEATHER TOURING JACKET",
      price: 11450,
      jacketImage: "/assets/jackets/jacket-2.png",
    },
    {
      id: "pro-3",
      series: "GT AIR SERIES",
      title: "MAXIMUM AIRFLOW & IMPACT CONTROL",
      description: "Heavy-duty 3D high-flow aero mesh combined with Safe-Tech CE Level 2 back, shoulder, and elbow armor.",
      riderImage: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80",
      jacketName: "AIR GT 3 VENTILATED MESH JACKET",
      price: 6450,
      jacketImage: "/assets/jackets/jacket-3.png",
    },
    {
      id: "pro-4",
      series: "STORM SHIELD",
      title: "ALL-WEATHER WATERPROOF DEFENSE",
      description: "Invista Cordura chassis with 10,000mm hydrostatic head breathable membrane to conquer heavy Indian monsoons.",
      riderImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
      jacketName: "STORM SHIELD ADVENTURE JACKET",
      price: 9850,
      jacketImage: "/assets/jackets/jacket-4.png",
    },
    {
      id: "pro-5",
      series: "EXPEDITION PRO",
      title: "RUGGED HIGHWAY & TRAIL ARMOR",
      description: "CE Class AA certified adventure armor featuring detachable thermal liners and dynamic ventilation scoops.",
      riderImage: "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1200&q=80",
      jacketName: "EXPEDITION PRO TOURING JACKET",
      price: 13950,
      jacketImage: "/assets/jackets/jacket-5.png",
    },
  ];

  // Auto transition every 2 seconds (2000ms), paused when user hovers
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Touch Swipe Handlers for Mobile Carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="pro-series"
      aria-label="Pro Series Product Carousel"
      className="relative w-full bg-white select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* HORIZONTAL CAROUSEL TRACK */}
      <div
        className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className="w-full min-w-full shrink-0 grid grid-cols-1 lg:grid-cols-2"
          >
            {/* LEFT COLUMN: Cinematic Rider in protective gear */}
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-auto min-h-[380px] lg:min-h-[520px] bg-black overflow-hidden flex flex-col justify-end p-6 sm:p-10">
              <img
                src={slide.riderImage}
                alt={slide.title}
                loading={idx === 0 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover brightness-75 transition-transform duration-1000 scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Left Side Overlay Text */}
              <div className="relative z-10 space-y-1.5 max-w-lg">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-lime">
                  {slide.series}
                </span>
                <h2 className="text-22 sm:text-28 md:text-32 font-sans font-extrabold uppercase text-white tracking-wide leading-tight">
                  {slide.title}
                </h2>
                <p className="text-12 sm:text-13 text-gray-300 pt-0.5 leading-relaxed font-body">
                  {slide.description}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Clean White Product Showcase Featuring the Matched Jacket */}
            <div className="bg-white p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center relative">
              {/* Isolated Product Image on Clean White (No Borders) */}
              <div
                onClick={() =>
                  onQuickViewJacket({
                    name: slide.jacketName,
                    price: slide.price,
                    image: slide.jacketImage,
                  })
                }
                className="relative w-full max-w-[340px] aspect-[4/5] overflow-hidden bg-white cursor-pointer group flex items-center justify-center"
              >
                <img
                  src={slide.jacketImage}
                  alt={slide.jacketName}
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quick view hover icon */}
                <div className="absolute bottom-2 right-2 p-2 bg-white/90 rounded-sharp text-gray-700 opacity-0 group-hover:opacity-100 transition shadow-sm">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Product Title and Price */}
              <div className="text-center mt-3 space-y-1 max-w-sm">
                <h3 className="font-sans font-bold text-14 uppercase tracking-wide text-[#111111] line-clamp-1">
                  {slide.jacketName}
                </h3>
                <p className="font-sans font-bold text-16 text-black">
                  ₹ {slide.price.toLocaleString("en-IN")}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    onQuickViewJacket({
                      name: slide.jacketName,
                      price: slide.price,
                      image: slide.jacketImage,
                    })
                  }
                  className="mt-2 btn-lime h-9 px-7 text-[11px] uppercase font-bold tracking-wider"
                >
                  QUICK VIEW & BUY
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING CAROUSEL ARROWS */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous banner slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition shadow-lg backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2]" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next banner slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition shadow-lg backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 stroke-[2]" />
      </button>

      {/* BOTTOM CAROUSEL CONTROLS (THUMBNAILS & ANIMATED PILL DOTS) */}
      <div className="w-full bg-white pb-6 pt-2 flex flex-col items-center justify-center gap-3">
        {/* Clickable Miniature Thumbnails Strip */}
        <div className="flex items-center gap-2 px-4 overflow-x-auto max-w-full">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlide(i)}
              aria-label={`Jump to slide ${i + 1}: ${s.jacketName}`}
              className={`w-12 h-14 rounded-sharp overflow-hidden transition p-0.5 shrink-0 ${
                currentSlide === i
                  ? "opacity-100 ring-2 ring-black scale-105 bg-[#F4F4F4]"
                  : "opacity-45 hover:opacity-85 bg-white"
              }`}
            >
              <img
                src={s.jacketImage}
                alt={s.jacketName}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>

        {/* Banner Pill Progress Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === i ? "w-8 bg-black" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
