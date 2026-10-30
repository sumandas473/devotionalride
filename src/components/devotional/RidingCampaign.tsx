"use client";

import React from "react";

export interface RidingCampaignProps {
  onCtaClick: () => void;
}

export const RidingCampaign: React.FC<RidingCampaignProps> = ({ onCtaClick }) => {
  return (
    <section
      id="campaign"
      aria-label="Full-Width Riding Campaign"
      className="relative w-full h-[50vh] sm:h-[60vh] min-h-[400px] bg-black overflow-hidden flex items-end justify-end select-none"
    >
      {/* Background Action Photo: Motorcyclist in dynamic side profile on highway with trees, guardrail, motion blur */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=2000&q=85"
          alt="Adventure motorcycle riding campaign"
          loading="lazy"
          className="w-full h-full object-cover object-center brightness-70"
        />
        {/* Cinematic gradient overlay deepening towards bottom-right */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      </div>

      {/* Bottom-Right Typography & Subtle White CTA Button */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-lg text-right space-y-2.5">
        <h2 className="text-24 sm:text-32 md:text-38 font-sans font-extrabold uppercase text-white tracking-wider leading-[1.05]">
          MAXIMISE PROTECTION AND<br />COMFORT
        </h2>

        <p className="text-12 sm:text-13 text-white/85 font-sans leading-relaxed">
          Tested across extreme high-altitude mountain passes and coastal highways. Equipped with CE Level 2 memory armor and high-velocity aero ventilation channels.
        </p>

        <div className="pt-1">
          <button
            type="button"
            onClick={onCtaClick}
            className="btn-white-pill h-9 px-6 text-[11px] uppercase font-bold text-black tracking-widest shadow-pill"
          >
            DISCOVER GEAR
          </button>
        </div>
      </div>
    </section>
  );
};
