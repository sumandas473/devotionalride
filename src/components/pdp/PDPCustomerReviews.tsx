"use client";

import React, { useState } from "react";
import { Star, CheckCircle } from "lucide-react";

export const PDPCustomerReviews: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const reviews = [
    {
      id: "rev-1",
      title: "OUTSTANDING TRACK AND HIGHWAY ENDURANCE",
      name: "Rohit Deshmukh",
      date: "14 October 2026",
      rating: 5,
      verified: true,
      comment:
        "Rode 1,200 km through the Western Ghats under heavy drizzle and cold breezes. The pre-curved fingers eliminated any hand cramping and the carbon knuckles give immense confidence. Absolute top-tier gear from Devotional Ride.",
    },
    {
      id: "rev-2",
      title: "PERFECT VENTILATION & ACCURATE TOUCHSCREEN",
      name: "Anand Verma",
      date: "28 September 2026",
      rating: 5,
      verified: true,
      comment:
        "The conductive fingertip works flawlessly with my handlebar-mounted phone GPS. Airflow through the finger gussets keeps hands dry even at 34°C in Pune traffic.",
    },
    {
      id: "rev-3",
      title: "TRUE TO SIZE WITH PREMIUM FINISH",
      name: "Karanjit Singh",
      date: "10 September 2026",
      rating: 5,
      verified: true,
      comment:
        "I bought Size L based on the size guide and it fit like a bespoke glove. The double-stitched Clarino palm reinforcement and scaphoid sliders provide serious peace of mind.",
    },
  ];

  return (
    <section
      aria-label="Customer Reviews"
      className="w-full bg-[#FFFFFF] py-10 sm:py-14 px-4 sm:px-8 select-none border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E5E5E5] gap-4">
          <div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#666666] block mb-1">
              VERIFIED FEEDBACK
            </span>
            <h2 className="text-18 sm:text-22 font-sans font-extrabold uppercase text-[#111111] tracking-tight">
              Customer Reviews
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex text-[#B7E52D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B7E52D] text-[#B7E52D]" />
              ))}
            </div>
            <span className="text-13 font-sans font-bold text-black">4.9 / 5.0</span>
            <span className="text-[11px] font-sans text-gray-500">Based on 128 Reviews</span>
          </div>
        </div>

        {/* Vertically Stacked Review Entries with Subtle Separators */}
        <div className="divide-y divide-[#E5E5E5]">
          {reviews.map((rev) => (
            <div key={rev.id} className="py-5 sm:py-6 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#B7E52D]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#B7E52D] text-[#B7E52D]" />
                    ))}
                  </div>
                  <h3 className="font-sans font-bold text-12 sm:text-13 uppercase tracking-wide text-[#111111] pl-1">
                    {rev.title}
                  </h3>
                </div>
                <span className="text-[10px] font-sans text-gray-400">{rev.date}</span>
              </div>

              <p className="text-12 text-[#666666] font-body leading-relaxed max-w-4xl">
                {rev.comment}
              </p>

              <div className="flex items-center gap-2 pt-1 text-[11px] font-sans">
                <span className="font-semibold text-black">{rev.name}</span>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
                    <CheckCircle className="w-3 h-3 text-[#B7F12B]" />
                    Verified Rider Purchase
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Small Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 pt-8">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-7 h-7 font-sans font-bold text-[11px] rounded-sharp transition ${
                currentPage === page
                  ? "bg-black text-white"
                  : "bg-[#F4F4F4] text-black hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

