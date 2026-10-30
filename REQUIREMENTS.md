# Devotional Ride — Requirements Specification (REQUIREMENTS.md)

**Document Version:** 1.0.0  
**Brand Name:** Devotional Ride  
**Target Market:** India (Pan-India D2C & B2B Dealer Network)  
**Industry:** Premium Motorcycle Riding Gear, Technical Apparel, Luggage & Accessories  
**Date:** October 2026  

---

## 1. Project Overview & Business Scope

**Devotional Ride** is an Indian direct-to-consumer (D2C) and business-to-business (B2B) motorcycle riding gear brand. The digital flagship web store provides an end-to-end shopping and brand experience comparable in sturdiness, reliability, and functionality to industry benchmarks like Rynox, with 100% bespoke branding, copywriting, assets, and design system.

### 1.1 Core Business Scope
1. **D2C Storefront:**
   - **Product Lines:** Technical riding jackets, riding pants, abrasion-resistant gloves, waterproof rain gear, motorcycle luggage (tank bags, tail bags, saddlebags, backpacks), hard armor/impact protectors, and riding accessories (balaclavas, base layers, hydration bladders).
   - **Pricing & Currency:** Indian Rupee (`INR`), stored as integer paise (e.g., ₹7,450.00 = `745000`), displayed inclusive of GST (Goods and Services Tax).
   - **Fulfillment & Logistics:** Domestic shipping powered by Shiprocket API, covering 28,000+ Indian pincodes with automated AWB generation, prepaid shipping discounts, and Cash on Delivery (COD) serviceability checks.
   - **Payment Methods:** Full Indian payment stack via Razorpay (UPI Apps, UPI QR, Credit/Debit Cards, Netbanking, Wallets, EMI) alongside Cash on Delivery with verification and fraud guards.

2. **Customer Aftercare Programs:**
   - **Warranty / Insurance Registration:** Digital registration of gear purchases (via order number or offline dealer invoice upload) to validate multi-year coverage.
   - **Crash-Replacement Guarantee:** Structured claim submission portal for riders whose gear sustained impact in a crash, allowing discounted replacement upon incident validation.

3. **B2B & Dealer Ecosystem:**
   - **Dealer & Exclusive Store Locator:** Interactive directory of exclusive stores, authorized motorcycle dealerships, and international distributors with geo-coordinates, operating hours, and Google Maps integration.
   - **Dealer Application Inquiries:** Onboarding lead pipeline for prospective Indian and international retail partners.

---

## 2. User Roles & Permission Matrix

The system enforces strict Role-Based Access Control (RBAC). A user session is categorized into one of eight distinct roles:

| Role | Description | Core Capabilities | Restrictions |
| :--- | :--- | :--- | :--- |
| **Guest** | Unauthenticated public visitor | Browse catalog, search, filter, view sizing charts, add items to guest cart, perform guest checkout, track order by order ID + phone/email, submit dealer inquiries, submit contact forms. | Cannot view saved addresses, wishlist, order history, or submit reviews. |
| **Customer** | Authenticated shopper | All Guest capabilities + manage profile, saved addresses, persistent wishlist across devices, order history, downloadable GST invoices, submit verified-buyer reviews, register warranties, submit crash-replacement claims. | Strictly forbidden from accessing `/admin` or any administrative API. Protected against IDOR. |
| **Dealer Applicant** | External prospective partner | Submit detailed business inquiry form (GSTIN, store location, annual turnover, distribution capability) without requiring account creation. | No portal access; receive automated email confirmation only. |
| **Admin: Super Admin** | Store Owner / Chief Technology Officer | Full access to all endpoints, staff accounts, role assignment, TOTP reset, payment/shipping API configuration, maintenance mode, system settings, financial exports, and raw audit logs. | Bound by mandatory TOTP 2FA, session timeout, and password re-entry on destructive actions. |
| **Admin: Catalog Manager** | Merchandising & Inventory Team | Manage products, variants, SKU matrix, pricing/compare price, category trees, curated collections, product media, size charts, inventory low-stock alerts. | Denied access to customer orders, customer PII, refund processing, and system settings. |
| **Admin: Order Manager** | Logistics & Operations Team | View all customer orders, update order statuses, generate Shiprocket AWBs, print shipping labels, generate tax invoices, process cancellations, trigger partial/full refunds, handle returns. | Denied access to modify product base prices, staff permissions, or platform credentials. |
| **Admin: Content Manager** | Marketing & Content Team | Create and publish blog posts, manage announcement banners, edit static CMS pages (Terms, Privacy, Wash & Care, CE Declarations), configure mega menu ordering, edit SEO meta tags. | Denied access to customer data, financial records, inventory levels, and order handling. |
| **Admin: Support** | Customer Care Specialist | Read customer orders, track shipment status, review warranty registrations, process crash-replacement inquiries, reply to customer tickets with templates. | Cannot alter product pricing, trigger refunds, view payment credentials, or modify system settings. |

---

## 3. Detailed Functional Requirements

### 3.1 Catalog & Product Discovery
- **Hierarchical Categories:** Multilevel category tree (e.g., *Riding Gear* → *Jackets* → *All-Weather Mesh*).
- **Curated Collections:** Manual collections and dynamic rule-based collections (e.g., *Monsoon Ready*, *Touring Series*, *CE Level 2 Certified*).
- **Product Variants:** Products support multi-dimensional matrix (Color × Size). Each variant has unique SKU, barcode, price in paise, compare price (MSRP), weight in grams (for shipping rate estimation), and dedicated stock count.
- **Search & Filtering:**
  - Full-text search with instant auto-suggestions after 2 characters typed.
  - Faceted filtering: Category, Collection, Size, Color, Price Range (slider), Gear Type, CE Armor Class (Class A, Class AA, None), and Stock Availability.
  - URL-persisted filter state (query parameters) enabling shareable search links.
- **Size Chart Engine:** Modal display per product or category with interactive measurement units (Centimeters / Inches) and fit guidance.
- **CE Certification Badges:** Visual indicators and downloadable Declaration of Conformity documents for European standard PPE compliance (EN 17092-3, EN 1621-1, EN 1621-2).

### 3.2 Inventory & Stock Management
- **High-Concurrency Locking:** Stock decrements inside a database transaction using conditional checks:
  $$\text{WHERE } (\text{quantity} - \text{reserved}) \ge \text{requested\_qty}$$
  preventing race conditions and overselling during flash promotions.
- **Checkout Reservation:** Inventory is reserved for exactly **15 minutes** when checkout is initiated. If checkout is abandoned or payment times out, a scheduled job releases reserved stock back to the available pool.
- **Stock Audit Ledger (`inventory_movements`):** Immutable log of every inventory delta recording quantity change, reason (`sale`, `return`, `manual_adjustment`, `restock`, `reservation_release`), associated order ID, and user/admin ID.
- **Back-in-Stock Alerts:** When a variant is out of stock, size selectors show a "Restocking Soon" badge with an email capture form. When stock is replenished via the admin, automated notifications are dispatched.

### 3.3 Cart & Dynamic Pricing Engine
- **Unified Cart Experience:** Slide-out Cart Drawer on storefront + dedicated `/cart` page with line-item quantity adjustments, stock limit warnings, and free-shipping progress indicators.
- **Guest-to-User Merging:** Guest carts identified via cryptographically signed `httpOnly` cookie tokens. Upon login or account creation, guest cart items are merged into the user's persistent cart without loss of selections.
- **Server-Side Price Calculation:** The frontend client never dictates prices or discounts. When requesting a cart quote, the backend recalculates item subtotal, active coupon discounts, shipping charges, and GST breakdown directly from authoritative database records.

### 3.4 Checkout & Taxation (Indian Compliance)
- **Pincode Verification:** Instant check against the Shiprocket courier serviceability database to confirm delivery availability, estimated transit days, and COD eligibility.
- **Pincode Auto-Fill:** Automatic population of City and State upon entering a valid 6-digit Indian Postal Code.
- **Double-Submit Protection:** Idempotency keys generated on the client per checkout attempt prevent duplicate charges from double-clicking the pay button.
- **GST Split Calculation:**
  - Prices displayed across the site are GST-inclusive.
  - Invoices calculate taxable amount, SGST (State GST), CGST (Central GST) for intra-state sales, or IGST (Integrated GST) for inter-state deliveries based on the store origin state versus customer delivery state.
  - HSN codes (e.g., 6203 / 6210 for riding garments) and GST percentages attached per product.

### 3.5 Payments & Fraud Prevention
- **Razorpay Integration:**
  - Order initiated exclusively on the server (`POST /api/v1/payments/razorpay/create`).
  - Browser opens Razorpay Checkout using only the generated `razorpay_order_id`.
  - Callback signature verification uses constant-time HMAC-SHA256 comparison with `RAZORPAY_KEY_SECRET`.
  - Payment webhooks (`payment.captured`, `payment.failed`, `refund.processed`) act as the final source of truth with database idempotency records.
- **Cash on Delivery (COD):**
  - Controlled by configurable business rules: maximum order ceiling (e.g., ₹10,000 max), additional handling fee, and serviceable pincode whitelist.
  - Optional OTP verification prior to dispatch for high-value orders to mitigate RTO (Return to Origin) expenses.

### 3.6 Shipping & Logistics (Shiprocket)
- **Automated Workflow:**
  - Admin marks order "Ready to Ship" → API call to Shiprocket creates order payload, assigns lowest-cost or fastest courier partner, and returns AWB and tracking URL.
  - Printable packing slips and shipping labels directly accessible within the Admin Order view.
- **Real-Time Tracking:** Public tracking page (`/track-order`) and Customer Order Detail page fetch live courier milestone status (In Transit, Out for Delivery, Delivered, RTO).

### 3.7 Customer Portal & Claims
- **Self-Service Hub:** Order history, tracking links, downloadable PDF invoices, default address management, and one-click re-order.
- **Verified Buyer Reviews:** Reviews can only be submitted by registered customers who purchased that specific SKU and had their order marked as `delivered`. Includes star ratings, title, body, and customer gear photos (moderated before publishing).
- **Warranty Registration Portal:** Customer or dealer-sold rider uploads purchase invoice, serial/SKU number, and bike details to register 1-year to 5-year gear warranties.
- **Crash-Replacement Claim Submission:** Detailed form for riders reporting a motorcycle accident. Captures incident date, detailed crash description, damaged gear photos, and police/medical report (optional). Admins review and issue special coupon codes for up to 50% discount on replacement gear.

### 3.8 B2B Leads & Contact
- **Dealer Inquiry Form:** Tailored for domestic and international distributors, capturing showroom square footage, existing motorcycle brand alignments, GSTIN, and projected stocking capacity. Captcha protected.

### 3.9 CMS & Brand Experience
- **Announcement Strip:** Sticky global header highlighting current promotions (e.g., "Free Pan-India Delivery on orders above ₹1,999").
- **Hero Slider:** Configurable desktop and mobile banners with high-priority preloading on the primary image to maximize Largest Contentful Paint (LCP).
- **Blog & Technical Articles:** Rich content engine for motorcycle tour preparation, riding tips, armor care, and gear guides with sanitized HTML and automatic Table of Contents.

---

## 4. Non-Functional Requirements & Performance Targets

### 4.1 Performance & Core Web Vitals (Mobile 4G Baseline)
| Metric | Target Specification | Enforcement Mechanism |
| :--- | :--- | :--- |
| **Lighthouse Mobile Score** | **$\ge 85$** across Home, Collection, and Product pages | Audited in Phase 10 |
| **Largest Contentful Paint (LCP)** | **$< 2.5\text{ s}$** on simulated 4G mobile | Preloaded hero image, next/image WebP/AVIF, self-hosted fonts |
| **Interaction to Next Paint (INP)** | **$< 200\text{ ms}$** | Lightweight client components, debounce on search, optimistic UI |
| **Cumulative Layout Shift (CLS)** | **$< 0.1$** | Explicit width/height on all images, reserved skeleton aspect ratios |
| **JavaScript Home Bundle** | **$< 200\text{ KB}$** compressed | Dynamic code-splitting, zero heavy client-side libraries |
| **Hero Image Size** | **$< 150\text{ KB}$** WebP/AVIF | Converted via `sharp`, responsive srcset |

### 4.2 Security & Compliance Standards
- **OWASP ASVS Level 2 Compliance:** Complete defensive posture across authentication, session handling, authorization, and cryptographic storage.
- **Argon2id Password Storage:** Memory 64 MB, 3 iterations, 1 parallelism, checked against zxcvbn / dictionary wordlists.
- **Strict Content Security Policy (CSP):** Nonce-based scripts, strict framing limitations (`X-Frame-Options: DENY`), strict origin referrer policy, nosniff.
- **India DPDP Act 2023 & E-Commerce Rules:**
  - Explicit cookie consent mechanism prior to initializing tracking pixels (GA4 / Meta).
  - Data Principal self-service tools for account data export and "Right to be Forgotten" account deletion requests.
  - Published Grievance Officer details, customer support helpline, and physical Indian registered office address.
  - Mandated GST compliance: Tax invoices generated in PDF and retained for statutory audit requirements.

### 4.3 Reliability & Availability
- **Uptime SLA:** $99.5\%$ target uptime.
- **Database Backup:** Automated daily MySQL dumps with Gzip compression and off-server backup retention for 30 days. Tested monthly via test restores.
- **Health Route:** `/api/health` performing an active `SELECT 1` ping against MySQL with zero credential exposure.

---

## 5. Assumptions & Open Questions

### 5.1 Assumptions
1. **Hosting Environment:** Hostinger Node.js Web App environment or an Ubuntu LTS Hostinger VPS will be utilized for deployment, with Node.js 20+ LTS support.
2. **Payment Gateway:** Razorpay will be the exclusive payment gateway for launch, with test credentials provided during Phase 7 and live keys substituted at Phase 10 go-live.
3. **Logistics:** Shiprocket account credentials will be available with domestic courier aggregator capabilities.
4. **Media Storage:** Initial deployments can utilize private server storage (`/storage` outside the public web root), with full architectural compatibility for seamless migration to Cloudflare R2 / AWS S3 via an abstract storage provider interface.
5. **Localization:** Primary UI is English, but all copywriting is localized in translation dictionaries for upcoming Hindi/Bengali rollout.

### 5.2 Open Questions for Product Owner Approval
1. **COD Fee & Limits:** What should be the default maximum order value eligible for Cash on Delivery (e.g., ₹10,000) and standard COD convenience fee (e.g., ₹99, or free)?
2. **Free Shipping Threshold:** What should be the minimum cart value for free domestic shipping (e.g., ₹1,999)?
3. **Crash-Replacement Discount:** What percentage discount should be granted on replacement gear for verified crash claims (e.g., 30% to 50%)?
4. **Hostinger Plan Type:** Has a Hostinger Business/Cloud hosting plan with Node.js support been provisioned, or will we configure an Ubuntu VPS?

---

## 6. Phase Acceptance Sign-Off

This document constitutes the formal requirements baseline for **Devotional Ride**. Approval transitions the project to the architecture blueprint (`ARCHITECTURE.md`) and subsequent Phase 2 design system construction.

