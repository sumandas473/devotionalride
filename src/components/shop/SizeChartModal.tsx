"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { X, Ruler } from "lucide-react";

export interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryTitle?: string;
}

export const SizeChartModal: React.FC<SizeChartModalProps> = ({
  isOpen,
  onClose,
  categoryTitle = "Touring Jacket",
}) => {
  const [unit, setUnit] = useState<"cm" | "in">("in");

  if (!isOpen) return null;

  // Measurement charts in inches and centimeters
  const measurements = [
    { size: "S", chestIn: "36 - 38", waistIn: "30 - 32", armIn: "31", chestCm: "91 - 96", waistCm: "76 - 81", armCm: "79" },
    { size: "M", chestIn: "38 - 40", waistIn: "32 - 34", armIn: "32", chestCm: "96 - 102", waistCm: "81 - 86", armCm: "81" },
    { size: "L", chestIn: "40 - 42", waistIn: "34 - 36", armIn: "33", chestCm: "102 - 107", waistCm: "86 - 91", armCm: "84" },
    { size: "XL", chestIn: "42 - 44", waistIn: "36 - 38", armIn: "34", chestCm: "107 - 112", waistCm: "91 - 97", armCm: "86" },
    { size: "2XL", chestIn: "44 - 46", waistIn: "38 - 40", armIn: "35", chestCm: "112 - 117", waistCm: "97 - 102", armCm: "89" },
    { size: "3XL", chestIn: "46 - 48", waistIn: "40 - 42", armIn: "35.5", chestCm: "117 - 122", waistCm: "102 - 107", armCm: "90" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sizing Chart Guide"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-fast"
    >
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-surface border border-line rounded-sharp shadow-card overflow-hidden z-10 animate-in zoom-in-95 duration-fast">
        {/* Header */}
        <div className="h-16 px-6 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-accent" />
            <span className="font-heading font-extrabold text-16 uppercase tracking-wider text-text">
              {categoryTitle} Sizing Matrix
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Unit Toggle */}
            <div className="flex border border-line rounded-sharp p-0.5 bg-surface-2 text-12 font-heading font-bold uppercase">
              <button
                type="button"
                onClick={() => setUnit("in")}
                className={cn(
                  "px-3 py-1 rounded-sharp transition duration-fast min-h-[32px]",
                  unit === "in" ? "bg-accent text-accent-ink" : "text-muted hover:text-text"
                )}
              >
                Inches (IN)
              </button>
              <button
                type="button"
                onClick={() => setUnit("cm")}
                className={cn(
                  "px-3 py-1 rounded-sharp transition duration-fast min-h-[32px]",
                  unit === "cm" ? "bg-accent text-accent-ink" : "text-muted hover:text-text"
                )}
              >
                Centimeters (CM)
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close size chart"
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-text rounded-sharp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chart Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-line bg-surface-2/60">
                <th className="p-3 text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
                  Size
                </th>
                <th className="p-3 text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
                  Chest ({unit.toUpperCase()})
                </th>
                <th className="p-3 text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
                  Waist ({unit.toUpperCase()})
                </th>
                <th className="p-3 text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
                  Arm Length ({unit.toUpperCase()})
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-14">
              {measurements.map((row) => (
                <tr key={row.size} className="hover:bg-surface-2/40">
                  <td className="p-3 font-heading font-bold text-accent text-16">
                    {row.size}
                  </td>
                  <td className="p-3 text-text">
                    {unit === "in" ? row.chestIn : row.chestCm}
                  </td>
                  <td className="p-3 text-text">
                    {unit === "in" ? row.waistIn : row.waistCm}
                  </td>
                  <td className="p-3 text-text">
                    {unit === "in" ? row.armIn : row.armCm}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Fit Tip Alert */}
          <div className="mt-6 p-4 rounded-sharp border border-line bg-surface-2 flex items-start gap-3">
            <span className="text-12 font-heading font-extrabold text-accent uppercase tracking-widest bg-accent/20 px-2 py-0.5 rounded-sharp">
              FIT ADVICE
            </span>
            <p className="text-12 text-muted leading-relaxed">
              If your measurements fall between two sizes, choose the larger size if you plan to wear thermal mid-layers or chest protector armor inserts underneath.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
