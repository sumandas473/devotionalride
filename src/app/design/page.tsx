"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { RadioGroup } from "@/components/ui/Radio";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { Badge } from "@/components/ui/Badge";
import { ReviewStars } from "@/components/ui/ReviewStars";
import { Accordion } from "@/components/ui/Accordion";
import { Tabs } from "@/components/ui/Tabs";
import { Toast } from "@/components/ui/Toast";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pagination } from "@/components/ui/Pagination";
import { Skeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { StatusChip } from "@/components/ui/StatusChip";
import { DataTable } from "@/components/ui/DataTable";
import { FormInlineError } from "@/components/ui/FormInlineError";
import { ProductCard } from "@/components/shop/ProductCard";
import { CartDrawer, CartDrawerItem } from "@/components/shop/CartDrawer";
import { QuickViewModal, QuickViewProduct } from "@/components/shop/QuickViewModal";
import { FilterDrawer, FilterState } from "@/components/shop/FilterDrawer";
import { SizeChartModal } from "@/components/shop/SizeChartModal";
import { Header } from "@/components/shop/Header";
import { Footer } from "@/components/shop/Footer";
import {
  Sun,
  Moon,
  Search,
  Mail,
  Shield,
  ShoppingBag,
  SlidersHorizontal,
  Ruler,
  CheckCircle2,
  Package,
} from "lucide-react";

export default function DesignSystemPreviewPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeTab, setActiveTab] = useState<string>("tokens");
  const [stepperVal, setStepperVal] = useState<number>(2);
  const [selectedRadio, setSelectedRadio] = useState<string>("standard");
  const [interactiveRating, setInteractiveRating] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(2);

  // Modals / Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    gearTypes: ["Jackets"],
    sizes: ["L"],
    ceClasses: ["Class AA"],
    colors: ["Stealth Black"],
    inStockOnly: true,
    minPricePaise: 500000,
    maxPricePaise: 1500000,
  });

  // Mock cart items
  const [cartItems, setCartItems] = useState<CartDrawerItem[]>([
    {
      id: "cart-1",
      name: "Devotional Dakar Rally Jacket",
      slug: "devotional-dakar-rally-jacket",
      sku: "DR-JKT-DKR-01",
      size: "L",
      color: "Stealth Black",
      image:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=500&q=80",
      pricePaise: 899900,
      quantity: 1,
      maxStock: 5,
    },
    {
      id: "cart-2",
      name: "Apex Waterproof Touring Gloves",
      slug: "apex-waterproof-touring-gloves",
      sku: "DR-GLV-APX-02",
      size: "M",
      color: "Hi-Viz Neon",
      image:
        "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=500&q=80",
      pricePaise: 249900,
      quantity: 1,
      maxStock: 8,
    },
  ]);

  // Sample quickview product
  const sampleProduct: QuickViewProduct = {
    id: "prod-1",
    name: "Devotional Trans-Himalayan Pro Jacket",
    slug: "devotional-trans-himalayan-pro-jacket",
    gearType: "Touring Gear",
    description:
      "Engineered for sub-zero mountain passes and extreme highway downpours. Constructed with Invista Cordura 1000D abrasion panels and Safe-Tech CE Level 2 armor.",
    pricePaise: 1149900,
    comparePricePaise: 1399900,
    rating: 4.8,
    reviewCount: 142,
    ceClass: "ce-aa",
    images: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
    ],
    colors: [
      { name: "Stealth Black", hex: "#111111" },
      { name: "Hi-Viz Neon", hex: "#C9E943" },
      { name: "Desert Sand", hex: "#B8A388" },
    ],
    sizes: [
      { size: "S", inStock: true },
      { size: "M", inStock: true },
      { size: "L", inStock: true },
      { size: "XL", inStock: true },
      { size: "2XL", inStock: false },
    ],
  };

  const sampleAdminTableData = [
    {
      id: "ORD-9821",
      customer: "Vikram Rathore",
      items: "Dakar Jacket (L), Apex Gloves (M)",
      amount: "₹11,498",
      status: "paid",
      date: "29 Oct 2026",
    },
    {
      id: "ORD-9820",
      customer: "Ananya Sen",
      items: "Trans-Himalayan Tail Bag 45L",
      amount: "₹4,250",
      status: "shipped",
      date: "29 Oct 2026",
    },
    {
      id: "ORD-9819",
      customer: "Karan Johar",
      items: "Air-Flow Mesh Riding Pants (32)",
      amount: "₹6,800",
      status: "delivered",
      date: "28 Oct 2026",
    },
    {
      id: "ORD-9818",
      customer: "Rohan Varma",
      items: "Bionic Level 2 Back Protector",
      amount: "₹2,100",
      status: "pending",
      date: "28 Oct 2026",
    },
  ];

  return (
    <div
      data-theme={theme}
      className={theme === "light" ? "theme-light" : ""}
      style={{ minHeight: "100vh", backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Design System Header & Theme Switcher */}
      <div className="bg-surface border-b border-line sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading font-extrabold text-18 uppercase tracking-wider text-text">
              DEVOTIONAL <span className="text-accent">RIDE</span>
            </span>
            <span className="text-12 font-heading font-bold px-2 py-0.5 rounded-sharp bg-surface-2 text-muted border border-line">
              DESIGN SYSTEM SPECIFICATION & SHOWROOM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-10 px-3 min-h-[40px] flex items-center gap-2 border border-line bg-surface-2 text-text rounded-sharp text-12 font-heading uppercase font-bold hover:border-accent transition duration-fast"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-4 h-4 text-accent" />
                  <span>Switch to Admin Light Theme</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-accent" />
                  <span>Switch to Dark Road Theme</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Tabs
            tabs={[
              { id: "tokens", label: "Color Tokens & Typography" },
              { id: "inputs", label: "Forms & Controls" },
              { id: "components", label: "Core UI Elements" },
              { id: "shop", label: "Storefront & Modals" },
              { id: "admin", label: "Admin Data Table" },
              { id: "mockups", label: "Static Page Mockups" },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16">
        {/* TAB 1: TOKENS & TYPOGRAPHY */}
        {activeTab === "tokens" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-24 font-heading font-extrabold uppercase tracking-wide text-text">
                Tailwind CSS Design Tokens
              </h2>
              <p className="text-14 text-muted mt-1">
                Zero arbitrary values permitted. Every surface, font, and spacing unit is tied to these verified theme tokens.
              </p>
            </div>

            {/* Color Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { token: "--bg", value: "#0B0C0E", use: "Page background" },
                { token: "--surface", value: "#15171A", use: "Cards & drawers" },
                { token: "--surface-2", value: "#1E2126", use: "Inputs & hover states" },
                { token: "--line", value: "#2B2F36", use: "Borders & dividers" },
                { token: "--text", value: "#F4F5F6", use: "Main copy" },
                { token: "--muted", value: "#9AA0A9", use: "Secondary metadata" },
                { token: "--accent", value: "#C9E943", use: "Buttons & highlights" },
                { token: "--accent-ink", value: "#0B0C0E", use: "Text on accent buttons" },
                { token: "--danger", value: "#FF4D4F", use: "Errors & sale tags" },
                { token: "--success", value: "#3DDC84", use: "In stock & successes" },
              ].map((c) => (
                <div
                  key={c.token}
                  className="p-4 rounded-sharp border border-line bg-surface space-y-3"
                >
                  <div
                    className="w-full h-12 rounded-sharp border border-line"
                    style={{ backgroundColor: `var(${c.token})` }}
                  />
                  <div>
                    <span className="font-mono text-12 font-bold text-accent">
                      {c.token}
                    </span>
                    <p className="font-mono text-11 text-muted">{c.value}</p>
                    <p className="text-12 text-text font-medium mt-1">{c.use}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Typography Scale */}
            <div className="space-y-6 pt-6 border-t border-line">
              <h3 className="text-18 font-heading font-extrabold uppercase tracking-wider text-text">
                Typography System: Barlow Condensed (Headings) & Inter (Body)
              </h3>
              <div className="space-y-4 p-6 bg-surface border border-line rounded-sharp">
                <div className="border-b border-line pb-3">
                  <span className="text-12 font-mono text-muted">64px / 1.05 Leading — Heading 3XL</span>
                  <h1 className="text-64 font-heading font-extrabold uppercase text-text">
                    DEVOTIONAL RIDE ADVENTURE
                  </h1>
                </div>
                <div className="border-b border-line pb-3">
                  <span className="text-12 font-mono text-muted">44px / 1.05 Leading — Heading 2XL</span>
                  <h2 className="text-44 font-heading font-extrabold uppercase text-text">
                    ENGINEERED MOTORCYCLE RIDING GEAR
                  </h2>
                </div>
                <div className="border-b border-line pb-3">
                  <span className="text-12 font-mono text-muted">32px / 1.08 Leading — Heading XL</span>
                  <h3 className="text-32 font-heading font-bold uppercase text-text">
                    CE LEVEL 2 IMPACT PROTECTION SYSTEMS
                  </h3>
                </div>
                <div className="border-b border-line pb-3">
                  <span className="text-12 font-mono text-muted">24px / 1.15 Leading — Heading LG</span>
                  <h4 className="text-24 font-heading font-bold uppercase text-text">
                    CORDURA 1000D SUBMERSIBLE LUGGAGE
                  </h4>
                </div>
                <div className="border-b border-line pb-3">
                  <span className="text-12 font-mono text-muted">16px / 1.6 Leading — Body Base (Inter)</span>
                  <p className="text-16 font-body text-text leading-relaxed">
                    Tested across the highest motorable roads in Ladakh and high-humidity coastal monsoon runs. Every stitch, zipper seal, and armor pocket is reinforced to withstand asphalt friction and continuous torrential downpours.
                  </p>
                </div>
                <div>
                  <span className="text-12 font-mono text-muted">12px / 1.6 Leading — Microcopy / Badges</span>
                  <p className="text-12 font-body text-muted leading-relaxed">
                    EN 17092-3:2020 Standard PPE Certification • HSN Code: 62033300 • GST Included
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FORMS & INPUTS */}
        {activeTab === "inputs" && (
          <div className="space-y-10">
            <div>
              <h2 className="text-24 font-heading font-extrabold uppercase tracking-wide text-text">
                Interactive Form Controls & Inline Validation
              </h2>
              <p className="text-14 text-muted mt-1">
                44px tap targets, high-contrast focus rings in accent color, and unified Zod inline error patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Text Inputs */}
              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Text & Icon Inputs
                </h4>
                <Input
                  label="Rider Full Name"
                  placeholder="e.g. Vikramaditya Sharma"
                />
                <Input
                  label="Registered Email Address"
                  type="email"
                  placeholder="rider@devotionalride.com"
                  leftIcon={<Mail className="w-4 h-4" />}
                  helperText="We will send order tracking details here."
                />
                <Input
                  label="Pincode Check"
                  placeholder="e.g. 560038"
                  leftIcon={<Search className="w-4 h-4" />}
                  error="Pincode 999999 is unserviceable for Cash on Delivery"
                />
              </div>

              {/* Select & Stepper */}
              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Selects & Quantity Steppers
                </h4>
                <Select
                  label="Delivery State (GST Region)"
                  options={[
                    { label: "Maharashtra (Intra-state: CGST + SGST)", value: "MH" },
                    { label: "Karnataka (Inter-state: IGST)", value: "KA" },
                    { label: "Delhi NCR (Inter-state: IGST)", value: "DL" },
                    { label: "West Bengal (Inter-state: IGST)", value: "WB" },
                  ]}
                />
                <div className="space-y-1.5">
                  <label className="block text-12 font-heading uppercase tracking-wide text-muted font-semibold">
                    Cart Quantity Stepper (44px tap target)
                  </label>
                  <QuantityStepper
                    value={stepperVal}
                    min={1}
                    max={10}
                    onChange={setStepperVal}
                  />
                </div>
              </div>

              {/* Checkboxes & Radios */}
              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Checkboxes & Agreements
                </h4>
                <Checkbox
                  label="I agree to the Crash-Replacement Guarantee terms"
                  description="Requires incident photo and gear verification upon claim submission."
                  defaultChecked
                />
                <Checkbox
                  label="Include Level 2 Chest Armor insert (₹1,499)"
                  description="Safe-Tech EN 1621-3 certified honeycomb armor."
                />
                <Checkbox
                  label="Disabled Option"
                  disabled
                  description="This variant is currently sold out."
                />
              </div>

              {/* Radio Group */}
              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Payment Method Selection (Radio)
                </h4>
                <RadioGroup
                  name="paymentMethod"
                  value={selectedRadio}
                  onChange={setSelectedRadio}
                  options={[
                    {
                      label: "Razorpay (UPI, Credit/Debit Cards, Netbanking)",
                      value: "razorpay",
                      description: "Instant order confirmation with free express shipping.",
                    },
                    {
                      label: "Cash on Delivery (COD)",
                      value: "cod",
                      description: "Pay upon delivery. Additional ₹99 handling fee applies.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CORE UI ELEMENTS */}
        {activeTab === "components" && (
          <div className="space-y-10">
            <div>
              <h2 className="text-24 font-heading font-extrabold uppercase tracking-wide text-text">
                Buttons, Badges, Status Chips & Feedback
              </h2>
            </div>

            {/* Buttons Showcase */}
            <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
              <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                Button Variants & States
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="md">
                  Primary CTA
                </Button>
                <Button variant="secondary" size="md">
                  Secondary Action
                </Button>
                <Button variant="outline" size="md">
                  Outline
                </Button>
                <Button variant="ghost" size="md">
                  Ghost Button
                </Button>
                <Button variant="danger" size="md">
                  Cancel / Return
                </Button>
                <Button variant="primary" size="md" isLoading>
                  Processing
                </Button>
                <Button variant="primary" size="sm">
                  Small Button
                </Button>
                <Button variant="primary" size="lg">
                  Large Hero Button
                </Button>
              </div>
            </div>

            {/* Badges & Status Chips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Safety & Product Badges
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="ce-aa" />
                  <Badge variant="ce-a" />
                  <Badge variant="new" />
                  <Badge variant="sale">-30% OFF</Badge>
                  <Badge variant="restocking" />
                  <Badge variant="success">IN STOCK</Badge>
                </div>
              </div>

              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Order State Machine Chips
                </h4>
                <div className="flex flex-wrap gap-2">
                  <StatusChip status="pending" />
                  <StatusChip status="paid" />
                  <StatusChip status="processing" />
                  <StatusChip status="shipped" />
                  <StatusChip status="delivered" />
                  <StatusChip status="cancelled" />
                  <StatusChip status="refunded" />
                </div>
              </div>
            </div>

            {/* Rating Stars & Breadcrumbs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Review Stars
                </h4>
                <div className="space-y-3">
                  <ReviewStars rating={4.8} count={142} size="lg" />
                  <ReviewStars rating={4.0} count={58} size="md" />
                  <div className="pt-2">
                    <span className="text-12 text-muted block mb-1">
                      Interactive (Click to rate): {interactiveRating} Stars
                    </span>
                    <ReviewStars
                      rating={interactiveRating}
                      size="lg"
                      interactive
                      onRatingChange={setInteractiveRating}
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Breadcrumbs & Navigation
                </h4>
                <Breadcrumbs
                  items={[
                    { label: "Touring Gear", href: "/collections/touring-gear" },
                    { label: "Jackets", href: "/collections/touring-jackets" },
                    { label: "Dakar Rally Jacket" },
                  ]}
                />
                <div className="pt-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={5}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </div>

            {/* Accordion & Feedback Toasts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Technical Accordion
                </h4>
                <Accordion
                  items={[
                    {
                      id: "armor",
                      title: "Armor & Impact Protection",
                      content:
                        "Equipped with Safe-Tech CE Level 2 certified protectors at elbows, shoulders, and spine. Designed with pre-curved ergonomics for natural riding position.",
                    },
                    {
                      id: "abrasion",
                      title: "Chassis & Abrasion Materials",
                      content:
                        "Constructed with Invista Cordura 1000D abrasion panels in high-risk slide zones and high-tenacity 3D air-flow mesh across chest and back.",
                    },
                    {
                      id: "warranty",
                      title: "5-Year Manufacturer Warranty",
                      content:
                        "Covers structural seam failures, zipper hardware malfunctions, and armor retention stitching.",
                    },
                  ]}
                  defaultOpenId="armor"
                />
              </div>

              <div className="p-6 bg-surface border border-line rounded-sharp space-y-4">
                <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text">
                  Toast Notification Banners
                </h4>
                <div className="space-y-3">
                  <Toast
                    type="success"
                    title="Order Placed Successfully"
                    message="Order #DR-2026-9821 confirmed. Tracking details dispatched to your email."
                  />
                  <Toast
                    type="warning"
                    title="Low Stock Warning"
                    message="Only 2 units remaining in size Large (Stealth Black)."
                  />
                  <Toast
                    type="danger"
                    title="Payment Authorization Failed"
                    message="Razorpay could not capture UPI payment. Please try another method."
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: STOREFRONT & MODALS */}
        {activeTab === "shop" && (
          <div className="space-y-10">
            <div>
              <h2 className="text-24 font-heading font-extrabold uppercase tracking-wide text-text">
                Storefront Components, Cards & Interactive Modals
              </h2>
              <p className="text-14 text-muted mt-1">
                Trigger the slide-out Cart Drawer, Filter Drawer, Quick View Modal, and Sizing Chart Guide.
              </p>
            </div>

            {/* Modal Trigger Buttons */}
            <div className="flex flex-wrap items-center gap-3 p-4 bg-surface-2 border border-line rounded-sharp">
              <Button
                variant="primary"
                onClick={() => setIsCartOpen(true)}
                leftIcon={<ShoppingBag className="w-4 h-4" />}
              >
                Open Cart Drawer ({cartItems.length})
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsQuickViewOpen(true)}
                leftIcon={<Package className="w-4 h-4" />}
              >
                Open Quick View Modal
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsFilterOpen(true)}
                leftIcon={<SlidersHorizontal className="w-4 h-4" />}
              >
                Open Filter Drawer
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsSizeChartOpen(true)}
                leftIcon={<Ruler className="w-4 h-4" />}
              >
                Open Size Chart Modal
              </Button>
            </div>

            {/* Product Card Grid (2 cols mobile, 3 cols tablet, 4 cols desktop) */}
            <div className="space-y-4">
              <h4 className="text-16 font-heading font-extrabold uppercase tracking-wider text-text">
                Product Cards Grid (Hover image swap & color dots)
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                <ProductCard
                  id="prod-1"
                  name="Devotional Trans-Himalayan Pro Jacket"
                  slug="trans-himalayan-pro-jacket"
                  gearType="Touring Gear"
                  primaryImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
                  hoverImage="https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=600&q=80"
                  pricePaise={1149900}
                  comparePricePaise={1399900}
                  rating={4.9}
                  reviewCount={142}
                  ceClass="ce-aa"
                  isNew
                  colors={[
                    { name: "Stealth Black", hex: "#111111" },
                    { name: "Hi-Viz Neon", hex: "#C9E943" },
                    { name: "Desert Tan", hex: "#A89F91" },
                  ]}
                  onQuickView={() => setIsQuickViewOpen(true)}
                  onAddToCart={() => setIsCartOpen(true)}
                />

                <ProductCard
                  id="prod-2"
                  name="Apex Air Mesh Summer Riding Jacket"
                  slug="apex-air-mesh-jacket"
                  gearType="Mesh Jackets"
                  primaryImage="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80"
                  pricePaise={699900}
                  comparePricePaise={799900}
                  rating={4.7}
                  reviewCount={89}
                  ceClass="ce-a"
                  colors={[
                    { name: "Black / Grey", hex: "#2B2F36" },
                    { name: "Military Olive", hex: "#4A5D4E" },
                  ]}
                  onQuickView={() => setIsQuickViewOpen(true)}
                  onAddToCart={() => setIsCartOpen(true)}
                />

                <ProductCard
                  id="prod-3"
                  name="Trans-Himalayan 45L Dry-Spec Tail Bag"
                  slug="trans-himalayan-45l-tail-bag"
                  gearType="Luggage"
                  primaryImage="https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=600&q=80"
                  pricePaise={425000}
                  rating={5.0}
                  reviewCount={64}
                  colors={[{ name: "Matte Black", hex: "#15171A" }]}
                  onQuickView={() => setIsQuickViewOpen(true)}
                  onAddToCart={() => setIsCartOpen(true)}
                />

                <ProductCard
                  id="prod-4"
                  name="Monsoon Pro 10K Rain Over-Jacket"
                  slug="monsoon-pro-rain-over-jacket"
                  gearType="Rain Wear"
                  primaryImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
                  pricePaise={289900}
                  rating={4.6}
                  reviewCount={32}
                  isRestocking
                  colors={[
                    { name: "Hi-Viz Yellow", hex: "#EAB308" },
                    { name: "Asphalt Black", hex: "#111111" },
                  ]}
                  onQuickView={() => setIsQuickViewOpen(true)}
                  onAddToCart={() => setIsCartOpen(true)}
                />
              </div>
            </div>

            {/* Modals Mounting */}
            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              items={cartItems}
              onUpdateQuantity={(id, qty) =>
                setCartItems((prev) =>
                  prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
                )
              }
              onRemoveItem={(id) =>
                setCartItems((prev) => prev.filter((i) => i.id !== id))
              }
            />

            <QuickViewModal
              isOpen={isQuickViewOpen}
              onClose={() => setIsQuickViewOpen(false)}
              product={sampleProduct}
              onAddToCart={() => {
                setIsQuickViewOpen(false);
                setIsCartOpen(true);
              }}
            />

            <FilterDrawer
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              filters={filters}
              onChange={setFilters}
              onReset={() =>
                setFilters({
                  gearTypes: [],
                  sizes: [],
                  ceClasses: [],
                  colors: [],
                  inStockOnly: false,
                  minPricePaise: 0,
                  maxPricePaise: 2000000,
                })
              }
            />

            <SizeChartModal
              isOpen={isSizeChartOpen}
              onClose={() => setIsSizeChartOpen(false)}
              categoryTitle="Touring Jacket"
            />
          </div>
        )}

        {/* TAB 5: ADMIN DATA TABLE */}
        {activeTab === "admin" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-24 font-heading font-extrabold uppercase tracking-wide text-text">
                Admin Data Table (Light & Dark Compatible)
              </h2>
              <p className="text-14 text-muted mt-1">
                Complete with sorting headers, status chips, responsive scroll, and action links.
              </p>
            </div>

            <DataTable
              keyExtractor={(row) => row.id}
              data={sampleAdminTableData}
              columns={[
                {
                  key: "id",
                  header: "Order #",
                  sortable: true,
                  render: (r) => (
                    <span className="font-heading font-bold text-accent">
                      {r.id}
                    </span>
                  ),
                },
                {
                  key: "customer",
                  header: "Customer",
                  sortable: true,
                },
                {
                  key: "items",
                  header: "Purchased Gear",
                },
                {
                  key: "amount",
                  header: "Amount (INR)",
                  sortable: true,
                  render: (r) => (
                    <span className="font-heading font-bold text-text">
                      {r.amount}
                    </span>
                  ),
                },
                {
                  key: "status",
                  header: "Status",
                  render: (r) => <StatusChip status={r.status} />,
                },
                {
                  key: "date",
                  header: "Placed At",
                  sortable: true,
                },
                {
                  key: "actions",
                  header: "Action",
                  render: () => (
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  ),
                },
              ]}
            />
          </div>
        )}

        {/* TAB 6: STATIC PAGE MOCKUPS */}
        {activeTab === "mockups" && (
          <div className="space-y-12">
            <div>
              <h2 className="text-24 font-heading font-extrabold uppercase tracking-wide text-text">
                Full Page Layout Mockups
              </h2>
              <p className="text-14 text-muted mt-1">
                Visualizing Header, Hero Banner, Curated Rows, Product Discovery, and Footer in the Devotional Ride design system.
              </p>
            </div>

            {/* Header Preview */}
            <div className="border border-line rounded-sharp overflow-hidden">
              <Header cartCount={cartItems.length} wishlistCount={3} />

              {/* Hero Banner Section Mockup */}
              <div className="relative aspect-[21/9] min-h-[380px] w-full bg-surface-2 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80"
                    alt="Devotional Ride Touring"
                    className="w-full h-full object-cover brightness-50"
                  />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-4">
                  <span className="text-12 font-heading font-extrabold uppercase tracking-widest text-accent bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-sharp border border-line">
                    2026 EXPEDITION LINE
                  </span>
                  <h1 className="text-44 md:text-64 font-heading font-extrabold uppercase text-white tracking-tight max-w-2xl leading-none">
                    ENGINEERED FOR THE RELENTLESS ROAD.
                  </h1>
                  <p className="text-16 text-gray-300 max-w-lg leading-relaxed">
                    Tested across the highest Himalayan mountain passes. CE Class AA armor, 1000D ballistic nylon, and 100% waterproof dry-storage.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button variant="primary" size="lg">
                      Explore Touring Gear
                    </Button>
                    <Button variant="secondary" size="lg">
                      Locate a Dealer
                    </Button>
                  </div>
                </div>
              </div>

              {/* Curated Collection Row Mockup */}
              <div className="p-8 space-y-6 bg-bg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-12 font-heading uppercase text-accent font-bold tracking-widest">
                      CURATED GEAR
                    </span>
                    <h3 className="text-24 font-heading font-bold uppercase text-text">
                      MONSOON READY & ALL-WEATHER JACKETS
                    </h3>
                  </div>
                  <Button variant="outline" size="sm">
                    View Collection →
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ProductCard
                    id="m-1"
                    name="Dakar Rally CE Level 2 Jacket"
                    slug="dakar-rally-jacket"
                    gearType="Touring Gear"
                    primaryImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
                    pricePaise={899900}
                    rating={4.9}
                    reviewCount={112}
                    ceClass="ce-aa"
                    colors={[{ name: "Black", hex: "#111111" }]}
                  />
                  <ProductCard
                    id="m-2"
                    name="Air-Flow Pro Ventilated Pants"
                    slug="air-flow-pants"
                    gearType="Pants"
                    primaryImage="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80"
                    pricePaise={549900}
                    rating={4.7}
                    reviewCount={78}
                    ceClass="ce-a"
                    colors={[{ name: "Olive", hex: "#4A5D4E" }]}
                  />
                  <ProductCard
                    id="m-3"
                    name="Submersible 45L Tail Bag"
                    slug="submersible-tail-bag"
                    gearType="Luggage"
                    primaryImage="https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=600&q=80"
                    pricePaise={425000}
                    rating={5.0}
                    reviewCount={45}
                    colors={[{ name: "Black", hex: "#111111" }]}
                  />
                  <ProductCard
                    id="m-4"
                    name="Apex Gauntlet Leather Gloves"
                    slug="apex-gauntlet-gloves"
                    gearType="Gloves"
                    primaryImage="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80"
                    pricePaise={319900}
                    rating={4.8}
                    reviewCount={94}
                    colors={[{ name: "Black / Yellow", hex: "#EAB308" }]}
                  />
                </div>
              </div>

              {/* Footer Preview */}
              <Footer />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
