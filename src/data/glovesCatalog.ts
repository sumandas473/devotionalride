export interface GloveProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  badge?: "BEST SELLER" | "NEW ARRIVAL" | "SALE";
  row: number;
}

// 43 Products structured strictly across Rows 1 to 15 matching the visual sequence
export const GLOVES_CATALOG: GloveProduct[] = [
  // ROW 1: Black classic, Black with neon-lime, Black with subtle gray
  {
    id: "glv-01",
    row: 1,
    name: "AIR GT 2 GLOVES – ALL BLACK",
    price: 2450,
    image: "/assets/gloves/glove-1.png",
    colors: ["#111111", "#333333", "#C8F52B"],
    badge: "BEST SELLER",
  },
  {
    id: "glv-02",
    row: 1,
    name: "AIR GT 2 GLOVES – BLACK / NEON LIME",
    price: 2450,
    image: "/assets/gloves/glove-2.png",
    colors: ["#C8F52B", "#111111", "#888888"],
  },
  {
    id: "glv-03",
    row: 1,
    name: "AIR GT 2 GLOVES – BLACK / SUBTLE GRAY",
    price: 2450,
    image: "/assets/gloves/glove-3.png",
    colors: ["#666666", "#111111", "#FFFFFF"],
  },

  // ROW 2: Touring gloves with lime, Touring gloves with red, Premium black protective
  {
    id: "glv-04",
    row: 2,
    name: "HELIUM GT TOURING – LIME ACCENT",
    price: 2950,
    image: "/assets/gloves/glove-4.png",
    colors: ["#C8F52B", "#111111", "#444444"],
  },
  {
    id: "glv-05",
    row: 2,
    name: "HELIUM GT TOURING – RACING RED",
    price: 2950,
    image: "/assets/gloves/glove-5.png",
    colors: ["#FF1744", "#111111", "#FFFFFF"],
    badge: "NEW ARRIVAL",
  },
  {
    id: "glv-06",
    row: 2,
    name: "TORNADO PRO 3 HEAVY DEFENDER – BLACK",
    price: 3850,
    image: "/assets/gloves/glove-6.png",
    colors: ["#111111", "#222222", "#555555"],
  },

  // ROW 3: Sport with red-and-white, Sport with yellow-and-black, Black sport with hard knuckle
  {
    id: "glv-07",
    row: 3,
    name: "APEX SPORT GLOVES – RED / WHITE",
    price: 4450,
    image: "/assets/gloves/glove-7.png",
    colors: ["#FF1744", "#FFFFFF", "#111111"],
  },
  {
    id: "glv-08",
    row: 3,
    name: "APEX SPORT GLOVES – SPEED YELLOW",
    price: 4450,
    image: "/assets/gloves/glove-8.png",
    colors: ["#EAB308", "#111111", "#666666"],
  },
  {
    id: "glv-09",
    row: 3,
    name: "APEX SPORT GLOVES – HARD KNUCKLE CARBON",
    price: 4850,
    image: "/assets/gloves/glove-9.png",
    colors: ["#111111", "#333333"],
    badge: "BEST SELLER",
  },

  // ROW 4: Adventure blue/turquoise, Adventure neon-lime, Adventure orange accents
  {
    id: "glv-10",
    row: 4,
    name: "EXPEDITION TRAIL GLOVES – TURQUOISE BLUE",
    price: 3250,
    image: "/assets/gloves/glove-10.png",
    colors: ["#0284C7", "#111111", "#888888"],
  },
  {
    id: "glv-11",
    row: 4,
    name: "EXPEDITION TRAIL GLOVES – NEON LIME",
    price: 3250,
    image: "/assets/gloves/glove-11.png",
    colors: ["#C8F52B", "#111111"],
  },
  {
    id: "glv-12",
    row: 4,
    name: "EXPEDITION TRAIL GLOVES – DAKAR ORANGE",
    price: 3250,
    image: "/assets/gloves/glove-12.png",
    colors: ["#F97316", "#111111", "#555555"],
    badge: "SALE",
  },

  // ROW 5: Black-and-red, Black with lime accents, Black with orange accents
  {
    id: "glv-13",
    row: 5,
    name: "TARMAC 2 RIDING GLOVES – BLACK / RED",
    price: 2199,
    image: "/assets/gloves/glove-13.png",
    colors: ["#111111", "#FF1744"],
  },
  {
    id: "glv-14",
    row: 5,
    name: "TARMAC 2 RIDING GLOVES – BLACK / LIME",
    price: 2199,
    image: "/assets/gloves/glove-14.png",
    colors: ["#111111", "#C8F52B"],
  },
  {
    id: "glv-15",
    row: 5,
    name: "TARMAC 2 RIDING GLOVES – BLACK / ORANGE",
    price: 2199,
    image: "/assets/gloves/glove-15.png",
    colors: ["#111111", "#F97316"],
  },

  // ROW 6: Black with red detailing, Black with white detailing, Black with blue detailing
  {
    id: "glv-16",
    row: 6,
    name: "DEFENDER PRO GLOVES – RED ACCENT",
    price: 3650,
    image: "/assets/gloves/glove-16.png",
    colors: ["#111111", "#FF1744", "#444444"],
  },
  {
    id: "glv-17",
    row: 6,
    name: "DEFENDER PRO GLOVES – WHITE ACCENT",
    price: 3650,
    image: "/assets/gloves/glove-17.png",
    colors: ["#111111", "#FFFFFF", "#666666"],
  },
  {
    id: "glv-18",
    row: 6,
    name: "DEFENDER PRO GLOVES – BLUE ACCENT",
    price: 3650,
    image: "/assets/gloves/glove-18.png",
    colors: ["#111111", "#2563EB", "#333333"],
  },

  // ROW 7: Premium touring gray/tan, Black with reinforced palms, Black with subtle protective detailing
  {
    id: "glv-19",
    row: 7,
    name: "VOYAGER TOURING GLOVES – GRAY / TAN",
    price: 3950,
    image: "/assets/gloves/glove-19.png",
    colors: ["#888888", "#C2A385", "#111111"],
  },
  {
    id: "glv-20",
    row: 7,
    name: "VOYAGER TOURING GLOVES – REINFORCED PALM",
    price: 3950,
    image: "/assets/gloves/glove-20.png",
    colors: ["#111111", "#444444"],
    badge: "BEST SELLER",
  },
  {
    id: "glv-21",
    row: 7,
    name: "VOYAGER TOURING GLOVES – STEALTH GRAPHITE",
    price: 3950,
    image: "/assets/gloves/glove-21.png",
    colors: ["#333333", "#111111", "#666666"],
  },

  // ROW 8: Black minimalist, Black with neon-lime details, Black with gray accents
  {
    id: "glv-22",
    row: 8,
    name: "URBAN COMMUTE GLOVES – MINIMALIST BLACK",
    price: 1850,
    image: "/assets/gloves/glove-22.png",
    colors: ["#111111", "#222222"],
  },
  {
    id: "glv-23",
    row: 8,
    name: "URBAN COMMUTE GLOVES – NEON LIME ACCENT",
    price: 1850,
    image: "/assets/gloves/glove-23.png",
    colors: ["#111111", "#C8F52B"],
  },
  {
    id: "glv-24",
    row: 8,
    name: "URBAN COMMUTE GLOVES – GRAY STRIPE",
    price: 1850,
    image: "/assets/gloves/glove-24.png",
    colors: ["#111111", "#777777"],
  },

  // ROW 9: Neon-lime and black, Black and gray, Black with orange accents
  {
    id: "glv-25",
    row: 9,
    name: "RADICAL EVO GLOVES – NEON LIME / BLACK",
    price: 2750,
    image: "/assets/gloves/glove-25.png",
    colors: ["#C8F52B", "#111111"],
    badge: "NEW ARRIVAL",
  },
  {
    id: "glv-26",
    row: 9,
    name: "RADICAL EVO GLOVES – BLACK / GRAPHITE",
    price: 2750,
    image: "/assets/gloves/glove-26.png",
    colors: ["#111111", "#555555"],
  },
  {
    id: "glv-27",
    row: 9,
    name: "RADICAL EVO GLOVES – BLACK / ORANGE",
    price: 2750,
    image: "/assets/gloves/glove-27.png",
    colors: ["#111111", "#F97316"],
  },

  // ROW 10: Black with blue detailing, Black with red detailing, Black with white protective details
  {
    id: "glv-28",
    row: 10,
    name: "STORM MESH GLOVES – BLUE DETAILING",
    price: 2250,
    image: "/assets/gloves/glove-28.png",
    colors: ["#111111", "#2563EB"],
  },
  {
    id: "glv-29",
    row: 10,
    name: "STORM MESH GLOVES – RED DETAILING",
    price: 2250,
    image: "/assets/gloves/glove-29.png",
    colors: ["#111111", "#FF1744"],
  },
  {
    id: "glv-30",
    row: 10,
    name: "STORM MESH GLOVES – WHITE REFLECTIVE",
    price: 2250,
    image: "/assets/gloves/glove-30.png",
    colors: ["#111111", "#FFFFFF"],
  },

  // ROW 11: Black with yellow detailing, Black with gray details, Black-and-blue racing
  {
    id: "glv-31",
    row: 11,
    name: "CIRCUIT PRO RACING GLOVES – YELLOW TRIM",
    price: 4950,
    image: "/assets/gloves/glove-31.png",
    colors: ["#111111", "#EAB308"],
  },
  {
    id: "glv-32",
    row: 11,
    name: "CIRCUIT PRO RACING GLOVES – GRAY TRIM",
    price: 4950,
    image: "/assets/gloves/glove-32.png",
    colors: ["#111111", "#888888"],
  },
  {
    id: "glv-33",
    row: 11,
    name: "CIRCUIT PRO RACING GLOVES – COBALT BLUE",
    price: 4950,
    image: "/assets/gloves/glove-33.png",
    colors: ["#111111", "#1D4ED8"],
    badge: "SALE",
  },

  // ROW 12: Black and blue, Black with white and gray protection, Black with subtle red detailing
  {
    id: "glv-34",
    row: 12,
    name: "CROSSROADS ALL-SEASON GLOVES – BLUE",
    price: 3150,
    image: "/assets/gloves/glove-34.png",
    colors: ["#111111", "#3B82F6"],
  },
  {
    id: "glv-35",
    row: 12,
    name: "CROSSROADS ALL-SEASON GLOVES – WHITE / GRAY",
    price: 3150,
    image: "/assets/gloves/glove-35.png",
    colors: ["#111111", "#FFFFFF", "#9CA3AF"],
  },
  {
    id: "glv-36",
    row: 12,
    name: "CROSSROADS ALL-SEASON GLOVES – SUBTLE RED",
    price: 3150,
    image: "/assets/gloves/glove-36.png",
    colors: ["#111111", "#EF4444"],
  },

  // ROW 13: Black with reinforced armor, Glove textile accessory, Black-and-blue sport
  {
    id: "glv-37",
    row: 13,
    name: "BAJA ENDURO ARMOR GLOVES – REINFORCED",
    price: 3550,
    image: "/assets/gloves/glove-37.png",
    colors: ["#111111", "#374151"],
  },
  {
    id: "glv-38",
    row: 13,
    name: "DEVOTIONAL RAIN OVER-GLOVES – WATERPROOF POUCH",
    price: 950,
    image: "/assets/gloves/glove-38.png",
    colors: ["#111111", "#C8F52B"],
    badge: "BEST SELLER",
  },
  {
    id: "glv-39",
    row: 13,
    name: "BAJA ENDURO ARMOR GLOVES – BLACK / BLUE",
    price: 3550,
    image: "/assets/gloves/glove-39.png",
    colors: ["#111111", "#2563EB"],
  },

  // ROW 14: Blue-and-black racing, Orange-and-black sport, Red-and-black sport
  {
    id: "glv-40",
    row: 14,
    name: "VELOCITY GP RACING GLOVES – BLUE / BLACK",
    price: 5250,
    image: "/assets/gloves/glove-40.png",
    colors: ["#2563EB", "#111111", "#FFFFFF"],
  },
  {
    id: "glv-41",
    row: 14,
    name: "VELOCITY GP RACING GLOVES – ORANGE / BLACK",
    price: 5250,
    image: "/assets/gloves/glove-41.png",
    colors: ["#F97316", "#111111"],
  },
  {
    id: "glv-42",
    row: 14,
    name: "VELOCITY GP RACING GLOVES – RED / BLACK",
    price: 5250,
    image: "/assets/gloves/glove-42.png",
    colors: ["#FF1744", "#111111", "#FFFFFF"],
    badge: "NEW ARRIVAL",
  },

  // FINAL ROW: Single black motorcycle glove positioned in column 1
  {
    id: "glv-43",
    row: 15,
    name: "STEALTH HERITAGE LEATHER GLOVES – BLACK",
    price: 3450,
    image: "/assets/gloves/glove-43.png",
    colors: ["#111111", "#262626"],
  },
];

