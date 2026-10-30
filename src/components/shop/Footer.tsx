"use client";

import React from "react";
import Link from "next/link";
import { Shield, Truck, RotateCcw, Award, Mail, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface border-t border-line text-text">
      {/* Trust Strip */}
      <div className="border-b border-line bg-surface-2/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-sharp bg-surface-2 border border-line flex items-center justify-center text-accent shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-14 uppercase tracking-wide text-text">
                CE CERTIFIED ARMOR
              </h4>
              <p className="text-12 text-muted mt-0.5 leading-snug">
                Tested to EN 1621-1 & EN 1621-2 European safety standards.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-sharp bg-surface-2 border border-line flex items-center justify-center text-accent shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-14 uppercase tracking-wide text-text">
                PAN-INDIA DELIVERY
              </h4>
              <p className="text-12 text-muted mt-0.5 leading-snug">
                Delivering to 28,000+ pincodes via Shiprocket express couriers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-sharp bg-surface-2 border border-line flex items-center justify-center text-accent shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-14 uppercase tracking-wide text-text">
                CRASH REPLACEMENT
              </h4>
              <p className="text-12 text-muted mt-0.5 leading-snug">
                Subsidized gear replacement if you experience a road crash.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-sharp bg-surface-2 border border-line flex items-center justify-center text-accent shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-14 uppercase tracking-wide text-text">
                7-DAY EASY EXCHANGES
              </h4>
              <p className="text-12 text-muted mt-0.5 leading-snug">
                Hassle-free size replacement and return pickups.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <span className="font-heading font-extrabold text-24 uppercase tracking-wider text-text">
              DEVOTIONAL <span className="text-accent">RIDE</span>
            </span>
          </Link>
          <p className="text-14 text-muted max-w-sm leading-relaxed">
            Engineered motorcycle riding gear built for extreme Indian terrains, highway expeditions, and relentless monsoons. Designed and road-tested by riders.
          </p>

          {/* Newsletter Form */}
          <div className="pt-2 max-w-md">
            <span className="text-12 font-heading uppercase tracking-wider text-text font-bold block mb-2">
              DISPATCHES FROM THE ROAD (NEWSLETTER)
            </span>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter rider email address"
                className="flex-1 h-11 bg-surface-2 text-text border border-line rounded-sharp px-3.5 text-14 placeholder:text-muted/60 focus-visible:outline-accent"
              />
              <Button type="submit" variant="primary" size="md">
                <span>Join</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </form>
          </div>
        </div>

        {/* Column 2: Riding Gear */}
        <div className="space-y-3">
          <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text border-b border-line pb-1.5">
            Riding Gear
          </h4>
          <ul className="space-y-2 text-14 text-muted">
            <li>
              <Link href="/collections/touring-jackets" className="hover:text-accent transition">
                Touring Jackets
              </Link>
            </li>
            <li>
              <Link href="/collections/mesh-jackets" className="hover:text-accent transition">
                Mesh Summer Jackets
              </Link>
            </li>
            <li>
              <Link href="/collections/touring-pants" className="hover:text-accent transition">
                Riding Pants
              </Link>
            </li>
            <li>
              <Link href="/collections/gloves" className="hover:text-accent transition">
                Motorcycle Gloves
              </Link>
            </li>
            <li>
              <Link href="/collections/luggage" className="hover:text-accent transition">
                Tail & Tank Luggage
              </Link>
            </li>
            <li>
              <Link href="/collections/rain-wear" className="hover:text-accent transition">
                Monsoon Rain Gear
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Rider Services */}
        <div className="space-y-3">
          <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text border-b border-line pb-1.5">
            Rider Support
          </h4>
          <ul className="space-y-2 text-14 text-muted">
            <li>
              <Link href="/stores" className="hover:text-accent transition">
                Dealer & Store Locator
              </Link>
            </li>
            <li>
              <Link href="/track-order" className="hover:text-accent transition">
                Track Your Shipment
              </Link>
            </li>
            <li>
              <Link href="/warranty" className="hover:text-accent transition">
                Register Gear Warranty
              </Link>
            </li>
            <li>
              <Link href="/crash-replacement" className="hover:text-accent transition">
                Crash-Replacement Claim
              </Link>
            </li>
            <li>
              <Link href="/dealer-india" className="hover:text-accent transition">
                Become an Authorized Dealer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition">
                Customer Care & Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Legal & Compliance */}
        <div className="space-y-3">
          <h4 className="text-14 font-heading font-extrabold uppercase tracking-wider text-text border-b border-line pb-1.5">
            Legal & Compliance
          </h4>
          <ul className="space-y-2 text-14 text-muted">
            <li>
              <Link href="/pages/privacy" className="hover:text-accent transition">
                Privacy Policy (DPDP Act)
              </Link>
            </li>
            <li>
              <Link href="/pages/terms" className="hover:text-accent transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/pages/shipping" className="hover:text-accent transition">
                Shipping & Delivery Terms
              </Link>
            </li>
            <li>
              <Link href="/pages/returns" className="hover:text-accent transition">
                Returns & Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/pages/wash-care" className="hover:text-accent transition">
                Technical Wash & Care
              </Link>
            </li>
            <li>
              <Link href="/pages/ce-declarations" className="hover:text-accent transition">
                CE Declarations of Conformity
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Compliance & Payment Bar */}
      <div className="border-t border-line bg-surface-2/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-12 text-muted">
          {/* Statutory info */}
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} <strong>Devotional Ride Apparel & Luggage Pvt. Ltd.</strong> All Rights Reserved.
            </p>
            <p className="text-11">
              GSTIN: 27AABCD1234E1Z5 • Grievance Officer: grievance@devotionalride.com • <a href="tel:+919733784137" className="hover:text-accent transition">+91 97337 84137</a>
            </p>
          </div>

          {/* Accepted Indian Payment Methods Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-2.5 py-1 rounded-sharp border border-line bg-surface text-11 font-heading uppercase font-bold text-text">
              UPI (GPay / PhonePe / Paytm)
            </span>
            <span className="px-2.5 py-1 rounded-sharp border border-line bg-surface text-11 font-heading uppercase font-bold text-text">
              RuPay / Visa / MC
            </span>
            <span className="px-2.5 py-1 rounded-sharp border border-line bg-surface text-11 font-heading uppercase font-bold text-text">
              Netbanking
            </span>
            <span className="px-2.5 py-1 rounded-sharp border border-line bg-surface text-11 font-heading uppercase font-bold text-text">
              Cash On Delivery
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
