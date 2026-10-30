"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Check, Eye, ShoppingBag } from "lucide-react";

export interface FeaturedProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  colors: { name: string; hex: string }[];
}

export interface FeaturedProductsProps {
  onAddToCart: (item: {
    name: string;
    price: number;
    size: string;
    color: string;
    image: string;
  }) => void;
  onQuickView?: (product: { name: string; price: number; image: string }) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onAddToCart,
  onQuickView,
}) => {
  const [addedId, setAddedId] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({
    "prod-1": "Black",
    "prod-2": "Black / Neon Lime",
    "prod-3": "Asphalt Gray",
    "prod-4": "Carbon Black",
    "prod-5": "Matte Black",
    "prod-6": "Stealth Black",
    "prod-7": "Desert Tan",
    "prod-8": "Matte Black",
  });

  // 8 Curated Devotional Ride Products (2 Rows of 4 on Desktop)
  const products: FeaturedProductItem[] = [
    {
      id: "prod-1",
      slug: "tornado-pro-4-jacket",
      name: "TORNADO PRO 4 JACKET – CE CLASS A",
      category: "JACKETS",
      price: 8950,
      compareAtPrice: 9950,
      rating: 4.9,
      reviewCount: 68,
      image: "/assets/jackets/jacket-1.png",
      colors: [
        { name: "Black", hex: "#111111" },
        { name: "Stealth Gray", hex: "#555555" },
        { name: "Neon Lime Accent", hex: "#C6F42A" },
      ],
    },
    {
      id: "prod-2",
      slug: "air-gt-2-gloves",
      name: "AIR GT 2 VENTILATED GLOVES",
      category: "GLOVES",
      price: 2450,
      rating: 4.8,
      reviewCount: 94,
      image: "/assets/gloves/glove-1.png",
      colors: [
        { name: "Black / Neon Lime", hex: "#C6F42A" },
        { name: "Stealth Black", hex: "#111111" },
      ],
    },
    {
      id: "prod-3",
      slug: "stealth-evo-touring-jacket",
      name: "STEALTH EVO TOURING JACKET",
      category: "JACKETS",
      price: 11450,
      compareAtPrice: 12950,
      rating: 4.9,
      reviewCount: 42,
      image: "/assets/jackets/jacket-2.png",
      colors: [
        { name: "Asphalt Gray", hex: "#444444" },
        { name: "Stealth Black", hex: "#111111" },
      ],
    },
    {
      id: "prod-4",
      slug: "helium-gt-gloves",
      name: "HELIUM GT AIRFLOW RACING GLOVES",
      category: "GLOVES",
      price: 3250,
      rating: 4.7,
      reviewCount: 51,
      image: "/assets/gloves/glove-2.png",
      colors: [
        { name: "Carbon Black", hex: "#151515" },
        { name: "White / Lime", hex: "#C6F42A" },
      ],
    },
    {
      id: "prod-5",
      slug: "air-gt-3-jacket",
      name: "AIR GT 3 3D-AERO MESH JACKET",
      category: "JACKETS",
      price: 6450,
      rating: 4.8,
      reviewCount: 77,
      image: "/assets/jackets/jacket-3.png",
      colors: [
        { name: "Matte Black", hex: "#111111" },
        { name: "Navy Blue", hex: "#1E2A38" },
      ],
    },
    {
      id: "prod-6",
      slug: "apex-defender-gloves",
      name: "APEX DEFENDER CARBON GLOVES",
      category: "GLOVES",
      price: 4950,
      compareAtPrice: 5500,
      rating: 5.0,
      reviewCount: 39,
      image: "/assets/gloves/glove-3.png",
      colors: [
        { name: "Stealth Black", hex: "#111111" },
        { name: "Racing Red", hex: "#C02626" },
      ],
    },
    {
      id: "prod-7",
      slug: "storm-shield-jacket",
      name: "STORM SHIELD ADVENTURE JACKET",
      category: "JACKETS",
      price: 9850,
      rating: 4.9,
      reviewCount: 56,
      image: "/assets/jackets/jacket-4.png",
      colors: [
        { name: "Desert Tan", hex: "#B8A282" },
        { name: "Tactical Olive", hex: "#4B5320" },
        { name: "Black", hex: "#111111" },
      ],
    },
    {
      id: "prod-8",
      slug: "expedition-thermal-gloves",
      name: "EXPEDITION THERMAL LEATHER GLOVES",
      category: "GLOVES",
      price: 2850,
      rating: 4.8,
      reviewCount: 63,
      image: "/assets/gloves/glove-4.png",
      colors: [
        { name: "Matte Black", hex: "#111111" },
        { name: "Vintage Brown", hex: "#634735" },
      ],
    },
  ];

  const handleAdd = (item: FeaturedProductItem) => {
    setAddedId(item.id);
    onAddToCart({
      name: item.name,
      price: item.price,
      size: item.category === "GLOVES" ? "L" : "L",
      color: selectedColors[item.id] || item.colors[0]?.name || "Black",
      image: item.image,
    });
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section
      id="featured-products"
      aria-label="Featured Products"
      className="w-full py-10 sm:py-14 bg-white select-none"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-3 border-b border-gray-100 gap-2">
          <div>
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-gray-400 block mb-1">
              ENGINEERED GEAR
            </span>
            <h2 className="text-22 sm:text-28 md:text-32 font-sans font-extrabold uppercase text-black tracking-tight leading-none">
              Featured Products
            </h2>
          </div>
          <a
            href="#categories"
            className="text-12 font-sans font-bold uppercase tracking-wider text-black hover:text-lime transition flex items-center gap-1.5"
          >
            <span>VIEW ALL GEAR</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* 2 ROWS x 4 COLUMNS = 8 PRODUCTS (NO BORDER LINES) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between bg-white rounded-sharp p-2 sm:p-3 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Product Image on Clean Light Background (No Box Borders) */}
              <div className="relative aspect-[4/5] w-full bg-[#FAFAFA] rounded-sharp overflow-hidden flex items-center justify-center p-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* Quick View Hover Button */}
                {onQuickView && (
                  <button
                    type="button"
                    onClick={() =>
                      onQuickView({
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      })
                    }
                    aria-label={`Quick view ${product.name}`}
                    className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 rounded-sharp flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition shadow-sm hover:text-black hover:bg-white z-10"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}

                {/* Compare at Sale Tag */}
                {product.compareAtPrice && (
                  <span className="absolute top-2.5 left-2.5 bg-black text-white text-[9px] font-sans font-bold uppercase px-2 py-0.5 rounded-sharp tracking-wider z-10">
                    SAVE ₹ {(product.compareAtPrice - product.price).toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              {/* Product Information */}
              <div className="pt-3 pb-1 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400">
                    <span>{product.category}</span>
                    <div className="flex items-center gap-1 text-black font-semibold">
                      <Star className="w-3 h-3 fill-black text-black" />
                      <span>{product.rating}</span>
                      <span className="text-gray-400 font-normal">({product.reviewCount})</span>
                    </div>
                  </div>

                  <Link href={`/products/${product.slug}`}>
                    <h3 className="font-sans font-bold text-13 sm:text-14 uppercase tracking-wide text-black mt-1 line-clamp-2 leading-snug hover:text-lime transition">
                      {product.name}
                    </h3>
                  </Link>
                </div>

                <div className="space-y-2 pt-1">
                  {/* Price Row */}
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-extrabold text-15 sm:text-16 text-black">
                      ₹ {product.price.toLocaleString("en-IN")}
                    </span>
                    {product.compareAtPrice && (
                      <span className="font-sans text-12 text-gray-400 line-through">
                        ₹ {product.compareAtPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  {/* Color Swatches */}
                  <div className="flex items-center gap-1.5">
                    {product.colors.map((color) => {
                      const isSelected =
                        (selectedColors[product.id] || product.colors[0]?.name) === color.name;
                      return (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() =>
                            setSelectedColors((prev) => ({
                              ...prev,
                              [product.id]: color.name,
                            }))
                          }
                          aria-label={`Select ${color.name}`}
                          className={`w-4 h-4 rounded-full transition-transform ${
                            isSelected
                              ? "ring-2 ring-black scale-110"
                              : "opacity-70 hover:opacity-100 hover:scale-105"
                          }`}
                          style={{ backgroundColor: color.hex }}
                        />
                      );
                    })}
                  </div>

                  {/* Add To Cart Neon-Lime Button */}
                  <button
                    type="button"
                    onClick={() => handleAdd(product)}
                    className="w-full h-9 sm:h-10 btn-lime text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition mt-1"
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>ADD TO CART</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

