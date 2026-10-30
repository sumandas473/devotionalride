import { GLOVES_CATALOG } from "./glovesCatalog";
import { JACKETS_CATALOG } from "./jacketsCatalog";

export interface UnifiedProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  code: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  ceStandard: string;
  highlights: {
    title: string;
    subtitle: string;
    image: string;
  }[];
  specifications: Record<string, string>;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Core Featured Products with Rich Specification Data
export const FEATURED_CATALOG: UnifiedProduct[] = [
  {
    id: "prod-advento-pro",
    slug: "advento-pro",
    name: "ADVENTO PRO GLOVES",
    category: "Full Gauntlet Adventure Gloves",
    code: "DR-GLV-ADVPRO-01",
    price: 4750,
    compareAtPrice: 5450,
    rating: 4.9,
    reviewCount: 128,
    description:
      "Engineered for high-altitude adventure motorcycling and demanding track sprints. Features ventilated Invista Cordura textiles, red-orange impact stitching, molded carbon-fiber knuckle defense, and reinforced Clarino microfiber palm abrasion pads for an ergonomic, fatigue-free grip.",
    images: [
      "/assets/gloves/glove-1.png",
      "/assets/gloves/glove-2.png",
      "/assets/gloves/glove-3.png",
    ],
    colors: [
      { name: "Black / Neon Lime", hex: "#B7F12B" },
      { name: "Stealth Black", hex: "#111111" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 13594:2015 Level 1 KP",
    highlights: [
      {
        title: "TOUCH COMPATIBLE",
        subtitle: "Smart device navigation without removing gloves.",
        image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "COMPLETE CE CERTIFIED PROTECTION",
        subtitle: "Certified to EN 13594:2015 Class KP standards.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "D3O IMPACT PROTECTION",
        subtitle: "Intelligent molecules lock together under high impact.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "FAST-R CORPUS PROTECTION",
        subtitle: "Scaphoid sliders prevent hyper-extension wrist injuries.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Weight: "260g (pair, Size L)",
      "Gauntlet Length": "110mm",
      "Outer Shell": "Invista 500D Cordura + Micro-mesh",
      Palm: "Clarino Microfiber with Silicone Anti-slip",
      Armor: "Forged Carbon Knuckles + High-density EVA",
      Closure: "Dual-stage TPR hook-and-loop gauntlet",
    },
  },
  {
    id: "prod-tornado-pro-4",
    slug: "tornado-pro-4-jacket",
    name: "TORNADO PRO 4 JACKET – CE CERTIFIED CLASS A",
    category: "All-Weather Touring Jackets",
    code: "DR-JKT-TOR4-01",
    price: 8950,
    compareAtPrice: 9950,
    rating: 4.9,
    reviewCount: 96,
    description:
      "All-weather mesh and Cordura 1000D abrasion chassis equipped with Safe-Tech CE Level 2 armor at back, shoulders, and elbows. Built for trans-Himalayan expeditions and high-heat Indian summers.",
    images: [
      "/assets/jackets/jacket-1.png",
      "/assets/jackets/jacket-2.png",
      "/assets/jackets/jacket-3.png",
    ],
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Stealth Gray", hex: "#555555" },
      { name: "Neon Lime Accent", hex: "#C6F42A" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 17092-4:2020 Class A",
    highlights: [
      {
        title: "AERO MESH CHASSIS",
        subtitle: "Massive 3D airflow mesh panels throughout chest, arms, and back.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "SAFE-TECH LEVEL 2 ARMOR",
        subtitle: "Italian memory foam armor with ultra-high impact absorption.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "1000D BALLISTIC CORDURA",
        subtitle: "Reinforced high-slide impact zones at shoulders and elbows.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "DETACHABLE THERMAL LINER",
        subtitle: "Zip-in DuPont thermal insulation for freezing mountain passes.",
        image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Weight: "1.9 kg (Size L)",
      Chassis: "Heavyweight 1000D Ballistic Cordura",
      Armor: "Safe-Tech CE Level 2 (Shoulders, Elbows, Back)",
      Liners: "Thermal zip-in + External Aquaguard Rain Liner",
      Visibility: "3M Scotchlite 360-degree reflective trim",
    },
  },
  {
    id: "prod-air-gt-2",
    slug: "air-gt-2-gloves",
    name: "AIR GT 2 VENTILATED GLOVES",
    category: "Ventilated Street & Touring Gloves",
    code: "DR-GLV-AIRGT2",
    price: 2450,
    compareAtPrice: 2850,
    rating: 4.8,
    reviewCount: 94,
    description:
      "Lightweight, high-ventilation motorcycle gloves designed for warm Indian climates. Engineered with carbon knuckle armor, Clarino microfiber reinforced palms, and high-contrast neon-lime accents.",
    images: [
      "/assets/gloves/glove-1.png",
      "/assets/gloves/glove-2.png",
      "/assets/gloves/glove-3.png",
    ],
    colors: [
      { name: "Black / Neon Lime", hex: "#C8F52B" },
      { name: "Stealth Black", hex: "#111111" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 13594:2015 Level 1 KP",
    highlights: [
      {
        title: "3D HIGH-FLOW MESH",
        subtitle: "Continuous airflow directly across knuckles and fingers.",
        image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CARBON KNUCKLE SHELL",
        subtitle: "Zero-drag protective composite armor.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "TOUCHSCREEN CONDUCTIVE",
        subtitle: "Operate GPS and smartphone touchscreens seamlessly.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CLARINO REINFORCED PALM",
        subtitle: "Anti-slip silicone grip printing with double stitching.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Weight: "160g",
      Material: "Cordura Mesh + Clarino Microfiber",
      Protection: "Composite Carbon Knuckle Shell",
      Closure: "Velcro TPR Wrist Strap",
    },
  },
  {
    id: "prod-stealth-evo",
    slug: "stealth-evo-touring-jacket",
    name: "STEALTH EVO TOURING JACKET",
    category: "Four-Season Touring Jackets",
    code: "DR-JKT-EVO-02",
    price: 11450,
    compareAtPrice: 12950,
    rating: 4.9,
    reviewCount: 42,
    description:
      "Uncompromising four-season touring jacket engineered for cross-country highway endurance and extreme Himalayan elevations. Equipped with CE Level 2 memory armor and bonded 10,000mm waterproof barrier.",
    images: [
      "/assets/jackets/jacket-2.png",
      "/assets/jackets/jacket-1.png",
      "/assets/jackets/jacket-3.png",
    ],
    colors: [
      { name: "Asphalt Gray", hex: "#444444" },
      { name: "Stealth Black", hex: "#111111" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 17092-3:2020 Class AA",
    highlights: [
      {
        title: "CLASS AA CERTIFIED",
        subtitle: "Heavyweight impact and slide resistance tested at 70 km/h.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "WATERPROOF MEMBRANE",
        subtitle: "10,000mm hydrostatic head waterproof breathable membrane.",
        image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "MULTI-POCKET UTILITY",
        subtitle: "Waterproof cargo pockets and large rear map pouch.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "DYNAMIC VENTILATION",
        subtitle: "Zippered chest and sleeve scoops for controlled cross-flow air.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Chassis: "600D Poly-cordura + 1000D Slide Panels",
      Armor: "Safe-Tech CE Level 2 (5-Point)",
      Waterproofing: "Detachable 10,000mm Rain Barrier",
    },
  },
  {
    id: "prod-helium-gt",
    slug: "helium-gt-gloves",
    name: "HELIUM GT AIRFLOW RACING GLOVES",
    category: "Short Cuff Street & Sport Gloves",
    code: "DR-GLV-HELGT",
    price: 3250,
    compareAtPrice: 3850,
    rating: 4.7,
    reviewCount: 51,
    description:
      "Full goat-leather and high-flow mesh hybrid glove designed for agile street maneuvers and warm weather sport riding. Features TPR finger vents and carbon knuckle shield.",
    images: [
      "/assets/gloves/glove-2.png",
      "/assets/gloves/glove-1.png",
      "/assets/gloves/glove-3.png",
    ],
    colors: [
      { name: "Carbon Black", hex: "#151515" },
      { name: "White / Lime", hex: "#C6F42A" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 13594:2015 Level 1 KP",
    highlights: [
      {
        title: "GOAT LEATHER PALM",
        subtitle: "Ultra-supple 0.8mm full-grain leather for maximum throttle feel.",
        image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CARBON ARMOR",
        subtitle: "Direct-impact knuckle shield with silicone shock absorber.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "AIR VENTS",
        subtitle: "Molded TPR finger intakes channel air directly inside.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "TOUCH SCREEN TIPS",
        subtitle: "Conductive index tip compatible with capacitive displays.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Chassis: "Goat Leather + Air Mesh",
      Protection: "Forged Carbon Knuckles + Scaphoid Pad",
      Closure: "TPR Pull Tab with Micro-velcro",
    },
  },
  {
    id: "prod-air-gt-3",
    slug: "air-gt-3-jacket",
    name: "AIR GT 3 3D-AERO MESH JACKET",
    category: "Summer Ventilated Riding Jackets",
    code: "DR-JKT-AIR3-03",
    price: 6450,
    compareAtPrice: 7250,
    rating: 4.8,
    reviewCount: 77,
    description:
      "Ultra-high airflow summer riding jacket engineered for maximum ventilation in sweltering temperatures without compromising CE Level 2 armor protection.",
    images: [
      "/assets/jackets/jacket-3.png",
      "/assets/jackets/jacket-1.png",
      "/assets/jackets/jacket-2.png",
    ],
    colors: [
      { name: "Matte Black", hex: "#111111" },
      { name: "Navy Blue", hex: "#1E2A38" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 17092-4:2020 Class A",
    highlights: [
      {
        title: "3D HIGH FLOW MESH",
        subtitle: "90% high-aperture mesh panels allow uninterrupted airflow.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CE LEVEL 2 IMPACT ARMOR",
        subtitle: "Safe-Tech viscoelastic honeycomb armor at elbows and shoulders.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "CORROSION-RESISTANT YKK",
        subtitle: "Heavy duty genuine YKK zippers with glove-friendly pull tabs.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "ADJUSTABLE ERGONOMIC FIT",
        subtitle: "Dual waist tabs and forearm snaps eliminate high-speed buffeting.",
        image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Chassis: "Poly-mesh 300D with 600D abrasion panels",
      Armor: "Safe-Tech CE Level 2 (Shoulders, Elbows, Back)",
      Fit: "Touring / Street ergonomic pre-curved arms",
    },
  },
  {
    id: "prod-apex-defender",
    slug: "apex-defender-gloves",
    name: "APEX DEFENDER CARBON GLOVES",
    category: "Full Gauntlet Racing Gloves",
    code: "DR-GLV-APEXDEF",
    price: 4950,
    compareAtPrice: 5500,
    rating: 5.0,
    reviewCount: 39,
    description:
      "Track-proven racing gauntlet gloves constructed from premium kangaroo and full-grain cowhide leather with articulated carbon-titanium knuckle armor and TPU finger sliders.",
    images: [
      "/assets/gloves/glove-3.png",
      "/assets/gloves/glove-1.png",
      "/assets/gloves/glove-2.png",
    ],
    colors: [
      { name: "Stealth Black", hex: "#111111" },
      { name: "Racing Red", hex: "#C02626" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 13594:2015 Level 2 KP",
    highlights: [
      {
        title: "TITANIUM-CARBON COMPOSITE",
        subtitle: "Ultra high slide resistance and knuckle impact mitigation.",
        image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "KANGAROO LEATHER PALM",
        subtitle: "Extreme tear resistance with maximum tactile control feedback.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "BRIDGE FINGER PROTECTION",
        subtitle: "Little finger anti-roll bridge prevents dislocation in low-sides.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "DUAL WRIST RESTRAINTS",
        subtitle: "Prevents glove peel-off under violent track impacts.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Chassis: "Full Grain Cowhide + Kangaroo Palm",
      Armor: "Carbon-Titanium Floating Knuckle + Knox SPS Palm Sliders",
      Certification: "CE Level 2 KP (EN 13594)",
    },
  },
  {
    id: "prod-storm-shield",
    slug: "storm-shield-jacket",
    name: "STORM SHIELD ADVENTURE JACKET",
    category: "Extreme Weather Touring Jackets",
    code: "DR-JKT-STRM-04",
    price: 9850,
    compareAtPrice: 10950,
    rating: 4.9,
    reviewCount: 56,
    description:
      "Engineered for monsoon downpours and sub-zero desert crossings. Triple-layer laminate waterproof construction with storm flap closures and reflective high-visibility piping.",
    images: [
      "/assets/jackets/jacket-4.png",
      "/assets/jackets/jacket-2.png",
      "/assets/jackets/jacket-1.png",
    ],
    colors: [
      { name: "Desert Tan", hex: "#B8A282" },
      { name: "Tactical Olive", hex: "#4B5320" },
      { name: "Black", hex: "#111111" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 17092-3:2020 Class AA",
    highlights: [
      {
        title: "15,000MM WATERPROOF SEAL",
        subtitle: "Direct-laminated waterproof breathable membrane.",
        image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "D3O GHOST ARMOR",
        subtitle: "Ultra-slim, flexible, temperature-stable impact protection.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "THERMAL ZIP-IN VEST",
        subtitle: "Retains core body warmth during sub-zero night sprints.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "360-DEGREE RETRO-REFLECTIVE",
        subtitle: "Luminescent accents glow brightly under vehicle headlights.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Chassis: "Cordura 500D Ripstop + 1000D Slide Reinforcement",
      Armor: "D3O CE Level 2 Protectors (Back, Shoulder, Elbow)",
      Hydration: "Compatible with 2L Hydration Bladder",
    },
  },
  {
    id: "prod-expedition-thermal",
    slug: "expedition-thermal-gloves",
    name: "EXPEDITION THERMAL LEATHER GLOVES",
    category: "Winter Touring & Cold Weather Gloves",
    code: "DR-GLV-EXPTHM",
    price: 2850,
    compareAtPrice: 3200,
    rating: 4.8,
    reviewCount: 63,
    description:
      "Thinsulate-lined cold weather riding gloves combining soft goat leather with waterproof Hipora membrane to keep fingers warm, dry, and responsive in sub-zero alpine conditions.",
    images: [
      "/assets/gloves/glove-4.png",
      "/assets/gloves/glove-2.png",
      "/assets/gloves/glove-3.png",
    ],
    colors: [
      { name: "Matte Black", hex: "#111111" },
      { name: "Vintage Brown", hex: "#634735" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    ceStandard: "EN 13594:2015 Level 1 KP",
    highlights: [
      {
        title: "3M THINSULATE INSULATION",
        subtitle: "Traps radiant heat without adding bulky excess weight.",
        image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "HIPORA WATERPROOF BARRIER",
        subtitle: "Microporous membrane blocks rain while venting perspiration.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "TPR VISOR WIPER",
        subtitle: "Built-in left-index rubber blade clears rain off helmet visors.",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "TOUCH CONDUCTIVE TIPS",
        subtitle: "Control your phone GPS without exposing hands to the cold.",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
      },
    ],
    specifications: {
      Chassis: "Goat Leather + High-density Ripstop Fabric",
      Lining: "100g 3M Thinsulate + Micro-fleece",
      Armor: "CE Level 1 Memory Foam Knuckles",
    },
  },
];

// Combine with Gloves Catalog items
export function getProductBySlug(slug: string): UnifiedProduct {
  const normalized = slug.toLowerCase().trim();

  // 1. Direct match on FEATURED_CATALOG
  const foundFeatured = FEATURED_CATALOG.find(
    (p) =>
      p.slug === normalized ||
      slugify(p.name) === normalized ||
      p.id === normalized ||
      slugify(p.name).includes(normalized) ||
      normalized.includes(p.slug)
  );
  if (foundFeatured) return foundFeatured;

  // 2. Direct match on GLOVES_CATALOG
  const foundGlove = GLOVES_CATALOG.find(
    (g) =>
      g.id === normalized ||
      slugify(g.name) === normalized ||
      slugify(g.name).includes(normalized) ||
      normalized.includes(g.id)
  );

  if (foundGlove) {
    return {
      id: foundGlove.id,
      slug: slugify(foundGlove.name),
      name: foundGlove.name,
      category: "Motorcycle Riding Gloves",
      code: `DR-${foundGlove.id.toUpperCase()}`,
      price: foundGlove.price,
      compareAtPrice: Math.round(foundGlove.price * 1.15),
      rating: 4.8,
      reviewCount: 46 + (foundGlove.row * 3),
      description: `Premium ${foundGlove.name.toLowerCase()} engineered with abrasion-resistant textiles, CE certified knuckle protection, and reinforced palm padding for endurance touring and street riding.`,
      images: [
        foundGlove.image,
        "/assets/gloves/glove-2.png",
        "/assets/gloves/glove-3.png",
      ],
      colors: foundGlove.colors.map((hex, i) => ({
        name: `Colorway ${i + 1}`,
        hex,
      })),
      sizes: ["S", "M", "L", "XL", "2XL"],
      ceStandard: "EN 13594:2015 Level 1 KP",
      highlights: [
        {
          title: "IMPACT RESISTANCE",
          subtitle: "Tested to withstand high-velocity abrasion and impact.",
          image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "CLARINO REINFORCEMENT",
          subtitle: "Microfiber palm protection with anti-slip grip.",
          image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "TOUCH COMPATIBLE",
          subtitle: "Operate touch displays without removing gloves.",
          image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "ERGONOMIC WRIST",
          subtitle: "Pre-curved cut with secure hook-and-loop closure.",
          image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
        },
      ],
      specifications: {
        Weight: "190g",
        Standards: "EN 13594:2015 Certified",
        Palm: "Reinforced Clarino Microfiber",
        Fit: "Pre-curved ergonomic race fit",
      },
    };
  }

  // 3. Direct match on JACKETS_CATALOG
  const foundJacket = JACKETS_CATALOG.find(
    (j) =>
      j.id === normalized ||
      slugify(j.name) === normalized ||
      slugify(j.name).includes(normalized) ||
      normalized.includes(j.id)
  );

  if (foundJacket) {
    return {
      id: foundJacket.id,
      slug: slugify(foundJacket.name),
      name: foundJacket.name,
      category: foundJacket.category,
      code: `DR-${foundJacket.id.toUpperCase()}`,
      price: foundJacket.price,
      compareAtPrice: foundJacket.compareAtPrice || Math.round(foundJacket.price * 1.15),
      rating: 4.9,
      reviewCount: 38 + (foundJacket.row * 4),
      description: `Engineered for high-end motorcycle touring, the ${foundJacket.name.toLowerCase()} combines heavy-duty abrasion Cordura textiles with Safe-Tech CE Level 2 armor at back, shoulders, and elbows. Features ventilated panels, pre-curved sleeves, and detachable thermal/rain liners.`,
      images: [
        foundJacket.image,
        "/assets/jackets/jacket-2.png",
        "/assets/jackets/jacket-1.png",
      ],
      colors: foundJacket.colors.map((hex, i) => ({
        name: `Colorway ${i + 1}`,
        hex,
      })),
      sizes: ["S", "M", "L", "XL", "2XL"],
      ceStandard: "EN 17092-3:2020 Class AA",
      highlights: [
        {
          title: "SAFE-TECH LEVEL 2 ARMOR",
          subtitle: "Italian viscoelastic honeycomb armor for back, shoulders, and elbows.",
          image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "HEAVY-DUTY CORDURA CHASSIS",
          subtitle: "1000D ballistic slide zones for maximum impact abrasion defense.",
          image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "AERODYNAMIC AIRFLOW",
          subtitle: "3D high-flow aero mesh panels allow rapid cooling in hot weather.",
          image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "DUAL DETACHABLE LINERS",
          subtitle: "Includes zip-in thermal insulation plus 100% waterproof rain barrier.",
          image: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=800&q=80",
        },
      ],
      specifications: {
        Weight: "1.85 kg (Size L)",
        Chassis: "600D Poly-cordura + 1000D Slide Reinforcement",
        Armor: "Safe-Tech CE Level 2 (Back, Shoulders, Elbows)",
        Zippers: "Genuine Glove-Friendly YKK Heavy-Duty Zippers",
        Visibility: "3M Scotchlite 360-Degree Retro-Reflective Accents",
      },
    };
  }

  // 4. Fallback to ADVento Pro Gloves
  return FEATURED_CATALOG[0];
}
