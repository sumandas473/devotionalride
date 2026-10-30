"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const PDPProductDetailsAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const items = [
    {
      title: "Product Description",
      content:
        "The ADVento Pro Gloves are purpose-built full-gauntlet adventure riding gloves engineered for extreme road trips and unpredictable high-altitude tracks. Built with high-tenacity Cordura mesh, multi-axis ergonomic finger articulators, and integrated scaphoid sliders.",
    },
    {
      title: "Specifications",
      content:
        "Weight: 260g (pair, Size L). Gauntlet Length: 110mm. Standards: EN 13594:2015 Level 1 KP. Closure: Dual-stage TPR wrist and forearm cuff. Fastening: Heavy-duty hook-and-loop.",
    },
    {
      title: "Protection",
      content:
        "Carbon-composite floating knuckle armor. High-density EVA memory foam palm heel pad. Molded TPR finger and thumb protectors. FAST-R abrasion sliders on outer pinky.",
    },
    {
      title: "Construction",
      content:
        "Pre-curved ergonomic finger pattern with external seam stitching to eliminate internal pressure points on long touring sprints.",
    },
    {
      title: "Comfort",
      content:
        "Micro-perforated airflow panels along the fingers and wrist gusset allow maximum airflow while maintaining structural integrity during warm climates.",
    },
    {
      title: "Material",
      content:
        "Chassis: Invista 500D Cordura textile. Palm: Premium abrasion-resistant Clarino microfiber with silicone anti-slip grips. Knuckles: 100% forged carbon shell.",
    },
    {
      title: "Features",
      content:
        "Touchscreen-compatible fingertips on thumb and index fingers. Visor wiper squeegee on left index finger. Reflective 3M Scotchlite trim accents.",
    },
    {
      title: "Fit and Sizing",
      content:
        "True-to-size performance fit. Measure palm circumference across knuckles (excluding thumb): Small (19-20 cm), Medium (20-21.5 cm), Large (21.5-23 cm), XL (23-24.5 cm), 2XL (24.5-26 cm).",
    },
    {
      title: "Care Instructions",
      content:
        "Hand wash gently in lukewarm water with mild technical detergent. Do not bleach, machine wash, or tumble dry. Dry naturally in shade away from direct heat sources.",
    },
    {
      title: "Warranty",
      content:
        "Covered by Devotional Ride's 1-Year Comprehensive Manufacturer Warranty against seam failures and material defects under standard motorcycling usage.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      aria-label="Product Details"
      className="w-full bg-[#FFFFFF] py-10 sm:py-14 px-4 sm:px-8 select-none border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#666666] block mb-1">
            COMPLETE INFORMATION
          </span>
          <h2 className="text-18 sm:text-22 font-sans font-extrabold uppercase text-[#111111] tracking-tight">
            Product Details
          </h2>
        </div>

        {/* Vertical Understated Accordion List */}
        <div className="w-full divide-y divide-[#E5E5E5] border-t border-b border-[#E5E5E5]">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-3.5 sm:py-4 flex items-center justify-between text-left hover:text-black focus:outline-none transition-colors"
                >
                  <span className="font-sans font-bold text-12 sm:text-13 uppercase tracking-wide text-[#111111]">
                    {item.title}
                  </span>
                  <div className="w-5 h-5 flex items-center justify-center text-gray-500">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 stroke-[2]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-4 pt-1 pr-6 text-12 text-[#666666] font-body leading-relaxed animate-fadeIn">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

