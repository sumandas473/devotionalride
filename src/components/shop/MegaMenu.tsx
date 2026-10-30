"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, ArrowRight } from "lucide-react";

export interface MegaMenuItem {
  title: string;
  href: string;
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
  columns: {
    heading: string;
    links: { title: string; href: string; badge?: string }[];
  }[];
}

export const navigationCategories: MegaMenuItem[] = [
  {
    title: "Touring Gear",
    href: "/collections/touring-gear",
    featured: {
      title: "Expedition Pro All-Season Jacket",
      description: "CE Level 2 armor with Cordura 1000D impact chassis.",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
      href: "/products/expedition-pro-jacket",
    },
    columns: [
      {
        heading: "Jackets & Tops",
        links: [
          { title: "All-Weather Touring Jackets", href: "/collections/touring-jackets" },
          { title: "Summer Air Mesh Jackets", href: "/collections/mesh-jackets", badge: "POPULAR" },
          { title: "Waterproof Rain Liners", href: "/collections/rain-liners" },
          { title: "Thermal Mid-Layers", href: "/collections/thermal-layers" },
        ],
      },
      {
        heading: "Pants & Armor",
        links: [
          { title: "Adventure Touring Pants", href: "/collections/touring-pants" },
          { title: "Mesh Ventilated Pants", href: "/collections/mesh-pants" },
          { title: "CE Level 2 Limb Armor", href: "/collections/armor" },
          { title: "Knee & Shin Guards", href: "/collections/guards" },
        ],
      },
      {
        heading: "Gloves & Footwear",
        links: [
          { title: "Leather Gauntlet Gloves", href: "/collections/gauntlet-gloves" },
          { title: "Short Cuff Urban Gloves", href: "/collections/short-cuff-gloves" },
          { title: "Waterproof Touring Gloves", href: "/collections/waterproof-gloves" },
        ],
      },
    ],
  },
  {
    title: "Offroad & Rally",
    href: "/collections/offroad-gear",
    featured: {
      title: "Dakar Rally Chest Protector",
      description: "Ultra-breathable honeycomb composite armor.",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80",
      href: "/products/dakar-rally-protector",
    },
    columns: [
      {
        heading: "Rally Wear",
        links: [
          { title: "Enduro Lightweight Jerseys", href: "/collections/enduro-jerseys" },
          { title: "Articulated Offroad Pants", href: "/collections/offroad-pants" },
          { title: "Rally Roost Deflectors", href: "/collections/roost-deflectors" },
        ],
      },
      {
        heading: "Technical Protection",
        links: [
          { title: "Bionic Chest & Back Protectors", href: "/collections/bionic-armor" },
          { title: "Neck Braces & Collars", href: "/collections/neck-braces" },
          { title: "Motocross Grip Gloves", href: "/collections/motocross-gloves" },
        ],
      },
    ],
  },
  {
    title: "Luggage Systems",
    href: "/collections/luggage",
    featured: {
      title: "Trans-Himalayan Tail Bag 45L",
      description: "100% submersible roll-top TPU luggage.",
      image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=600&q=80",
      href: "/products/trans-himalayan-tail-bag-45l",
    },
    columns: [
      {
        heading: "Bags by Mount",
        links: [
          { title: "Magnetic & Strap Tank Bags", href: "/collections/tank-bags" },
          { title: "Universal Tail Bags (20L - 60L)", href: "/collections/tail-bags", badge: "BESTSELLER" },
          { title: "Dry-Spec Saddlebags", href: "/collections/saddlebags" },
          { title: "Riding Backpacks with Hydration", href: "/collections/backpacks" },
        ],
      },
      {
        heading: "Hardware & Accessories",
        links: [
          { title: "Luggage Straps & Bungees", href: "/collections/straps" },
          { title: "Waterproof Inner Dry Bags", href: "/collections/dry-bags" },
          { title: "Utility Pouches & Tool Rolls", href: "/collections/tool-rolls" },
        ],
      },
    ],
  },
  {
    title: "Series Collections",
    href: "/collections/series",
    columns: [
      {
        heading: "Signature Series",
        links: [
          { title: "Monsoon Ready (10,000mm Hydrostatic)", href: "/collections/monsoon-ready", badge: "MONSOON" },
          { title: "Evo Series (City to Highway)", href: "/collections/evo-series" },
          { title: "GT Series (Grand Touring)", href: "/collections/gt-series" },
          { title: "Pro Expedition (Hardcore Enduro)", href: "/collections/pro-series" },
        ],
      },
    ],
  },
];

export const MegaMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<MegaMenuItem | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActiveItem(null)}>
      {navigationCategories.map((item) => (
        <div key={item.title} className="relative" onMouseEnter={() => setActiveItem(item)}>
          <Link
            href={item.href}
            className={cn(
              "h-14 px-4 flex items-center gap-1 text-14 font-heading font-bold uppercase tracking-wider transition duration-fast border-b-2",
              activeItem?.title === item.title
                ? "text-accent border-accent"
                : "text-text border-transparent hover:text-accent"
            )}
          >
            <span>{item.title}</span>
            <ChevronDown className="w-3.5 h-3.5 text-muted group-hover:text-accent transition duration-fast" />
          </Link>

          {/* Flyout Mega Panel */}
          {activeItem?.title === item.title && (
            <div className="absolute top-full left-0 w-[860px] bg-surface border border-line rounded-sharp p-6 shadow-card z-50 animate-in fade-in slide-in-from-top-1 duration-fast">
              <div className="grid grid-cols-12 gap-8">
                {/* Categorized Columns */}
                <div
                  className={cn(
                    "grid gap-6",
                    item.featured ? "col-span-8 grid-cols-3" : "col-span-12 grid-cols-4"
                  )}
                >
                  {item.columns.map((col) => (
                    <div key={col.heading} className="space-y-3">
                      <h4 className="text-12 font-heading font-extrabold uppercase tracking-wider text-muted border-b border-line pb-1.5">
                        {col.heading}
                      </h4>
                      <ul className="space-y-2">
                        {col.links.map((link) => (
                          <li key={link.title}>
                            <Link
                              href={link.href}
                              className="group flex items-center justify-between text-14 text-text hover:text-accent transition duration-fast"
                            >
                              <span>{link.title}</span>
                              {link.badge && (
                                <span className="text-10 font-heading px-1.5 py-0.2 rounded-sharp bg-accent/20 text-accent font-bold">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Product Promo Card */}
                {item.featured && (
                  <div className="col-span-4 bg-surface-2 border border-line rounded-sharp p-4 flex flex-col justify-between">
                    <div className="relative aspect-video w-full rounded-sharp overflow-hidden mb-3 border border-line">
                      <Image
                        src={item.featured.image}
                        alt={item.featured.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-10 font-heading uppercase text-accent font-bold tracking-widest">
                        FEATURED GEAR
                      </span>
                      <h5 className="text-14 font-heading font-bold uppercase text-text mt-0.5">
                        {item.featured.title}
                      </h5>
                      <p className="text-12 text-muted mt-1 leading-snug">
                        {item.featured.description}
                      </p>
                    </div>
                    <Link
                      href={item.featured.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-12 font-heading font-bold uppercase tracking-wider text-accent hover:underline"
                    >
                      <span>Explore Gear</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
