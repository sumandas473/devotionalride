import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DEVOTIONAL RIDE — Premium Motorcycle Riding Gear",
  description:
    "Engineered for relentless roads. CE Certified motorcycle jackets, impact gloves, modular luggage, and protective riding gear.",
  metadataBase: new URL("https://devotionalride.com"),
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#C6F42A] selection:text-black">
        {children}
      </body>
    </html>
  );
}
