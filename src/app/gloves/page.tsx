"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/devotional/Navbar";
import { GlovesHeroBanner } from "@/components/gloves/GlovesHeroBanner";
import { GlovesCatalogGrid } from "@/components/gloves/GlovesCatalogGrid";
import { MountainFooter } from "@/components/devotional/MountainFooter";
import { MiniCartDrawer, CartItem } from "@/components/devotional/MiniCartDrawer";
import { GloveQuickViewModal } from "@/components/gloves/GloveQuickViewModal";
import { GloveProduct } from "@/data/glovesCatalog";

export default function GlovesCollectionPage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState<GloveProduct | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      name: "AIR GT 2 GLOVES – ALL BLACK",
      price: 2450,
      size: "L",
      color: "Black",
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
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] flex flex-col font-sans selection:bg-[#C8F52B] selection:text-black">
      {/* 1. Same Fixed Header */}
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* 2. Gloves Collection Hero Banner */}
        <GlovesHeroBanner />

        {/* 3. Three-Column Main Product Catalog */}
        <GlovesCatalogGrid
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setActiveModalProduct(p)}
        />
      </main>

      {/* 4. Same Mountain Landscape Footer */}
      <MountainFooter />

      {/* Slide-In Mini-Cart Panel */}
      <MiniCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQty={handleUpdateCartQty}
      />

      {/* Quick View Modal */}
      <GloveQuickViewModal
        product={activeModalProduct}
        isOpen={Boolean(activeModalProduct)}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
