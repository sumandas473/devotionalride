"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/devotional/Navbar";
import { HeroBanner } from "@/components/devotional/HeroBanner";
import { CategoryGrid } from "@/components/devotional/CategoryGrid";
import { PromoSplit } from "@/components/devotional/PromoSplit";
import { RidingCampaign } from "@/components/devotional/RidingCampaign";
import { FeaturedProducts } from "@/components/devotional/FeaturedProducts";
import { FeaturedShowcase } from "@/components/devotional/FeaturedShowcase";
import { RecentlyViewed } from "@/components/devotional/RecentlyViewed";
import { RideEssentials } from "@/components/devotional/RideEssentials";
import { MountainFooter } from "@/components/devotional/MountainFooter";
import { MiniCartDrawer, CartItem } from "@/components/devotional/MiniCartDrawer";
import { QuickViewModal } from "@/components/devotional/QuickViewModal";

export default function DevotionalRideHomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedJacket, setSelectedJacket] = useState<{
    name: string;
    price: number;
    image: string;
  } | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      name: "HELIUM GT GLOVES",
      price: 2450,
      size: "L",
      color: "Black / Neon Lime",
      image: "/assets/gloves/glove-1.png",
      quantity: 1,
    },
  ]);

  const handleAddToCart = (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
  }) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.name === item.name && i.size === item.size && i.color === item.color
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateCartQty = (index: number, newQty: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-lime selection:text-black">
      {/* MINIMAL TOP NAVBAR (OVER HERO) */}
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* SECTION 1 — CINEMATIC HERO BANNER */}
        <HeroBanner
          onExploreClick={() => {
            const el = document.getElementById("categories");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* SECTION 2 — IMAGE-BASED PRODUCT CATEGORY GRID (7 TILES: 3 LARGE + 4 SMALL) */}
        <CategoryGrid
          onSelectCategory={(cat) => {
            if (cat === "GLOVES") {
              window.location.href = "/gloves";
            } else if (cat === "JACKETS") {
              window.location.href = "/jackets";
            } else if (cat === "OFFROAD") {
              const el = document.getElementById("pro-series");
              el?.scrollIntoView({ behavior: "smooth" });
            } else {
              const el = document.getElementById("essentials");
              el?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />

        {/* SECTION 3 — PREMIUM PRODUCT PROMOTION (PRO SERIES SPLIT: 2-SECOND AUTO SLIDER) */}
        <PromoSplit
          onQuickViewJacket={(jacket) => {
            if (jacket) setSelectedJacket(jacket);
            setIsQuickViewOpen(true);
          }}
        />

        {/* SECTION 4 — FULL-WIDTH MOTORCYCLE RIDING CAMPAIGN */}
        <RidingCampaign
          onCtaClick={() => {
            const el = document.getElementById("featured-products");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* FEATURED PRODUCTS (2 ROWS x 4 COLUMNS = 8 PRODUCTS, NO BORDER LINES) */}
        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onQuickView={(p) => {
            setSelectedJacket(p);
            setIsQuickViewOpen(true);
          }}
        />

        {/* SECTION 5 — FEATURED PRODUCT SHOWCASE (HELIUM GT GLOVES IN LIGHT-GRAY BORDER) */}
        <FeaturedShowcase onAddToCart={handleAddToCart} />

        {/* SECTION 6 — RECENTLY VIEWED PRODUCTS (CENTERED GRAY JACKET) */}
        <RecentlyViewed onAddToCart={handleAddToCart} />

        {/* SECTION 7 — RIDE ESSENTIALS (BALACLAVA & THERMAL LEGGINGS) */}
        <RideEssentials onAddToCart={handleAddToCart} />
      </main>

      {/* SECTION 8 — DRAMATIC MOUNTAIN FOOTER (LAYERED MOUNTAIN SVG WITH RIDER SILHOUETTE) */}
      <MountainFooter />

      {/* SLIDE-IN MINI-CART PANEL */}
      <MiniCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQty={handleUpdateCartQty}
      />

      {/* QUICK VIEW PRODUCT MODAL */}
      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
        product={selectedJacket}
      />
    </div>
  );
}
