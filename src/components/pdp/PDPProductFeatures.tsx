"use client";

import React from "react";
import {
  ShieldAlert,
  HandMetal,
  Activity,
  ShieldCheck,
  Sliders,
  Smartphone,
} from "lucide-react";

export const PDPProductFeatures: React.FC = () => {
  const features = [
    {
      title: "KNUCKLE PROTECTION",
      desc: "Anatomically molded carbon-composite shell.",
      icon: ShieldAlert,
    },
    {
      title: "REINFORCED PALM",
      desc: "Double-stitched Clarino abrasion overlay.",
      icon: HandMetal,
    },
    {
      title: "ERGONOMIC SHAPE",
      desc: "Pre-curved fingers prevent grip fatigue.",
      icon: Activity,
    },
    {
      title: "IMPACT DEFENSE",
      desc: "Multi-density memory foam padding zones.",
      icon: ShieldCheck,
    },
    {
      title: "ADJUSTABLE WRIST",
      desc: "Dual TPR hook-and-loop closure gusset.",
      icon: Sliders,
    },
    {
      title: "TOUCH COMPATIBLE",
      desc: "Conductive index and thumb tips for GPS.",
      icon: Smartphone,
    },
  ];

  return (
    <section
      aria-label="Product Features"
      className="w-full bg-[#FFFFFF] py-10 sm:py-14 px-4 sm:px-8 select-none border-t border-[#E5E5E5]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-6">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#666666] block mb-1">
            TECHNICAL ENGINEERING
          </span>
          <h2 className="text-18 sm:text-22 font-sans font-extrabold uppercase text-[#111111] tracking-tight">
            Product Features
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* LEFT SIDE: Technical Line-Art Illustration of ADVento Pro Gloves */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full bg-[#FAFAFA] rounded-sharp border border-[#EBEBEB] p-6 flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 600 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-h-[320px] object-contain text-black"
            >
              {/* Technical Blueprint Grid Background */}
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E5E5E5" strokeWidth="0.6" />
              </pattern>
              <rect width="600" height="400" fill="url(#grid)" />

              {/* Engineering Dimension Callout Lines */}
              <line x1="80" y1="60" x2="220" y2="60" stroke="#999999" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="80" y1="55" x2="80" y2="65" stroke="#999999" strokeWidth="1" />
              <line x1="220" y1="55" x2="220" y2="65" stroke="#999999" strokeWidth="1" />
              <text x="110" y="52" fill="#666666" fontSize="10" fontFamily="sans-serif" letterSpacing="1">
                KNUCKLE MATRIX: 95mm
              </text>

              <line x1="380" y1="350" x2="520" y2="350" stroke="#999999" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="380" y1="345" x2="380" y2="355" stroke="#999999" strokeWidth="1" />
              <line x1="520" y1="345" x2="520" y2="355" stroke="#999999" strokeWidth="1" />
              <text x="400" y="365" fill="#666666" fontSize="10" fontFamily="sans-serif" letterSpacing="1">
                CUFF GAUNTLET: 110mm
              </text>

              {/* Left Glove: Back of Hand Line Art */}
              <g stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Glove Silhouette */}
                <path d="M 120 320 L 130 240 C 130 200, 140 160, 160 140 L 165 90 C 165 80, 180 80, 185 90 L 190 135 L 205 80 C 208 70, 222 70, 225 80 L 225 130 L 240 95 C 243 85, 255 85, 258 95 L 255 140 L 268 120 C 272 112, 285 116, 282 128 L 270 200 C 270 240, 260 270, 255 320 Z" />

                {/* Thumb */}
                <path d="M 135 230 C 110 220, 95 190, 105 175 C 115 160, 130 180, 145 195" />

                {/* Knuckle Hard-Shell Matrix Outline */}
                <path d="M 160 165 Q 210 145 260 165 L 255 195 Q 210 180 165 195 Z" strokeWidth="2.2" stroke="#000000" fill="#F0F0F0" />
                <line x1="185" y1="160" x2="185" y2="190" stroke="#888888" strokeWidth="1.2" />
                <line x1="210" y1="155" x2="210" y2="188" stroke="#888888" strokeWidth="1.2" />
                <line x1="235" y1="160" x2="235" y2="190" stroke="#888888" strokeWidth="1.2" />

                {/* Finger Armor Segments */}
                <rect x="172" y="105" width="10" height="18" rx="2" stroke="#333333" strokeWidth="1.2" />
                <rect x="210" y="95" width="10" height="20" rx="2" stroke="#333333" strokeWidth="1.2" />
                <rect x="245" y="110" width="9" height="18" rx="2" stroke="#333333" strokeWidth="1.2" />

                {/* Wrist Strap & Fastener */}
                <path d="M 130 280 L 255 280" strokeWidth="2" stroke="#000000" />
                <rect x="175" y="275" width="35" height="10" rx="2" fill="#E0E0E0" stroke="#000000" />
              </g>

              {/* Right Glove: Palm Side Line Art */}
              <g stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Glove Silhouette */}
                <path d="M 360 320 L 355 240 C 355 200, 365 160, 385 140 L 390 90 C 390 80, 405 80, 410 90 L 415 135 L 430 80 C 433 70, 447 70, 450 80 L 450 130 L 465 95 C 468 85, 480 85, 483 95 L 480 140 L 493 120 C 497 112, 510 116, 507 128 L 495 200 C 495 240, 485 270, 480 320 Z" />

                {/* Thumb */}
                <path d="M 470 230 C 495 220, 510 190, 500 175 C 490 160, 475 180, 460 195" />

                {/* Reinforced Palm Scaphoid Pad */}
                <path d="M 385 220 Q 425 210 460 225 Q 460 260 425 265 Q 385 260 385 220 Z" fill="#F4F4F4" stroke="#000000" strokeWidth="2" />
                <path d="M 400 235 L 445 235" stroke="#999999" strokeWidth="1" strokeDasharray="2 2" />

                {/* Conductive Touchscreen Fingertips */}
                <path d="M 390 90 L 410 90" stroke="#B7F12B" strokeWidth="3" />
                <path d="M 495 178 L 505 188" stroke="#B7F12B" strokeWidth="3" />

                {/* Wrist Strap Line */}
                <path d="M 358 285 L 482 285" strokeWidth="2" stroke="#000000" />
              </g>

              {/* Title Badge on Drawing */}
              <text x="30" y="375" fill="#111111" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1.5">
                FIG. 1.0 — ADVENTO PRO SPECIFICATION ARCHITECTURE
              </text>
            </svg>
          </div>

          {/* RIGHT SIDE: 6 Feature Icons (2 Rows x 3 Columns) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex flex-col items-start space-y-2">
                  <div className="w-10 h-10 rounded-sharp bg-[#F6F6F6] flex items-center justify-center text-black">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-[11px] sm:text-12 uppercase tracking-wider text-[#111111]">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#666666] leading-relaxed mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

