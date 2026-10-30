"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/devotional/Navbar";
import { MountainFooter } from "@/components/devotional/MountainFooter";
import { MiniCartDrawer, CartItem } from "@/components/devotional/MiniCartDrawer";
import { PDPMainDetail } from "@/components/pdp/PDPMainDetail";
import { PDPFrequentlyBought } from "@/components/pdp/PDPFrequentlyBought";
import { PDPProductHighlights } from "@/components/pdp/PDPProductHighlights";
import { PDPProductDetailsAccordion } from "@/components/pdp/PDPProductDetailsAccordion";
import { PDPRpeatedBanners } from "@/components/pdp/PDPRpeatedBanners";
import { PDPCustomerReviews } from "@/components/pdp/PDPCustomerReviews";
import { PDPRecentlyViewed } from "@/components/pdp/PDPRecentlyViewed";
import { PDPStickyPurchaseBar } from "@/components/pdp/PDPStickyPurchaseBar";
import { getProductBySlug } from "@/data/allProducts";

export default function DynamicProductDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "advento-pro";
  const product = getProductBySlug(slug);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      name: product.name,
      price: product.price,
      size: product.sizes[2] || "L",
      color: product.colors[0]?.name || "Black",
      image: product.images[0] || "/assets/gloves/glove-1.png",
      quantity: 1,
    },
  ]);

  const handleAddToCart = (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
    quantity?: number;
  }) => {
    const qty = item.quantity || 1;
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.name === item.name && i.size === item.size && i.color === item.color
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      }
      return [...prev, { ...item, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const handleAddBundleToCart = (items: { name: string; price: number; image: string }[]) => {
    setCartItems((prev) => {
      const updated = [...prev];
      items.forEach((it) => {
        const existingIdx = updated.findIndex((i) => i.name === it.name);
        if (existingIdx > -1) {
          updated[existingIdx].quantity += 1;
        } else {
          updated.push({
            name: it.name,
            price: it.price,
            size: "L",
            color: "Black",
            image: it.image,
            quantity: 1,
          });
        }
      });
      return updated;
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
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] flex flex-col font-sans selection:bg-[#B7F12B] selection:text-black pb-16 sm:pb-20">
      {/* 1. SECTION 1 — SAME GLOBAL HEADER (Fixed, transparent initially, black on scroll, centered circular logo) */}
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 w-full pt-16 sm:pt-20">
        {/* Subtle Breadcrumbs below header */}
        <div className="w-full bg-[#FFFFFF] border-b border-[#E5E5E5] py-2.5 px-4 sm:px-8 select-none">
          <div className="max-w-[1280px] mx-auto flex items-center gap-1.5 text-[10px] sm:text-[11px] font-sans text-gray-500 uppercase tracking-wider">
            <a href="/" className="hover:text-black transition">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <a href="/gloves" className="hover:text-black transition">
              Catalog
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-black font-bold line-clamp-1">{product.name}</span>
          </div>
        </div>

        {/* 2. SECTION 2 — DYNAMIC MAIN PRODUCT DETAIL AREA */}
        <PDPMainDetail product={product} />

        {/* 3. SECTION 3 — FREQUENTLY BOUGHT TOGETHER */}
        <PDPFrequentlyBought onAddBundleToCart={handleAddBundleToCart} />

        {/* 4. SECTION 4 — PRODUCT HIGHLIGHTS */}
        <PDPProductHighlights />

        {/* 5. SECTION 5 — PRODUCT DETAILS ACCORDION */}
        <PDPProductDetailsAccordion />

        {/* 6. SECTION 6 — CINEMATIC PRODUCT PROMOTIONAL BANNERS */}
        <PDPRpeatedBanners />

        {/* 9. SECTION 9 — CUSTOMER REVIEWS */}
        <PDPCustomerReviews />

        {/* 10. SECTION 10 — RECENTLY VIEWED PRODUCTS */}
        <PDPRecentlyViewed
          onAddToCart={(item) =>
            handleAddToCart({ ...item, quantity: 1 })
          }
        />
      </main>

      {/* 11. SECTION 11 — SAME GLOBAL MOUNTAIN FOOTER */}
      <MountainFooter />

      {/* 12. SECTION 12 — STICKY BOTTOM PURCHASE BAR */}
      <PDPStickyPurchaseBar product={product} onAddToCart={handleAddToCart} />

      {/* Slide-In Mini-Cart Drawer */}
      <MiniCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQty={handleUpdateCartQty}
      />
    </div>
  );
}

