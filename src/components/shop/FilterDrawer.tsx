"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";

export interface FilterState {
  gearTypes: string[];
  sizes: string[];
  ceClasses: string[];
  colors: string[];
  inStockOnly: boolean;
  minPricePaise: number;
  maxPricePaise: number;
}

export interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  totalResultsCount?: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onChange,
  onReset,
  totalResultsCount = 24,
}) => {
  if (!isOpen) return null;

  const availableGearTypes = ["Jackets", "Pants", "Gloves", "Luggage", "Rain Wear", "Hard Armor"];
  const availableSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  const availableCeClasses = ["Class AA", "Class A", "Level 2 Armor"];
  const availableColors = [
    { name: "Stealth Black", hex: "#111111" },
    { name: "Hi-Viz Neon", hex: "#C9E943" },
    { name: "Military Olive", hex: "#4A5D4E" },
    { name: "Asphalt Grey", hex: "#5C6370" },
  ];

  const toggleArrayItem = (list: string[], item: string) =>
    list.includes(item) ? list.filter((i) => i !== item) : [...list, item];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Filter Products Drawer"
      className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-fast"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-[380px] bg-surface h-full flex flex-col border-l border-line shadow-card z-10 animate-in slide-in-from-right duration-smooth">
        {/* Header */}
        <div className="h-16 px-5 border-b border-line flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-16 uppercase tracking-wider text-text">
              Filters & Specifications
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted hover:text-text rounded-sharp"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Sections Body */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-line space-y-6">
          {/* Availability */}
          <div className="space-y-3 pt-2 first:pt-0">
            <h4 className="text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
              Availability
            </h4>
            <Checkbox
              label="In Stock Only"
              description="Hide out-of-stock and restocking items"
              checked={filters.inStockOnly}
              onChange={(e) =>
                onChange({ ...filters, inStockOnly: e.target.checked })
              }
            />
          </div>

          {/* CE Certification */}
          <div className="space-y-3 pt-6">
            <h4 className="text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
              Armor & CE Rating
            </h4>
            <div className="space-y-2">
              {availableCeClasses.map((rating) => (
                <Checkbox
                  key={rating}
                  label={rating}
                  checked={filters.ceClasses.includes(rating)}
                  onChange={() =>
                    onChange({
                      ...filters,
                      ceClasses: toggleArrayItem(filters.ceClasses, rating),
                    })
                  }
                />
              ))}
            </div>
          </div>

          {/* Gear Type */}
          <div className="space-y-3 pt-6">
            <h4 className="text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
              Gear Type
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {availableGearTypes.map((type) => (
                <Checkbox
                  key={type}
                  label={type}
                  checked={filters.gearTypes.includes(type)}
                  onChange={() =>
                    onChange({
                      ...filters,
                      gearTypes: toggleArrayItem(filters.gearTypes, type),
                    })
                  }
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-3 pt-6">
            <h4 className="text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
              Size
            </h4>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map((sz) => {
                const isSelected = filters.sizes.includes(sz);
                return (
                  <button
                    key={sz}
                    type="button"
                    onClick={() =>
                      onChange({
                        ...filters,
                        sizes: toggleArrayItem(filters.sizes, sz),
                      })
                    }
                    className={cn(
                      "h-11 w-11 min-w-[44px] min-h-[44px] font-heading font-bold text-14 uppercase rounded-sharp border transition duration-fast",
                      isSelected
                        ? "bg-accent border-accent text-accent-ink"
                        : "border-line bg-surface-2 text-text hover:border-accent"
                    )}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color Selector */}
          <div className="space-y-3 pt-6">
            <h4 className="text-12 font-heading font-extrabold uppercase tracking-wider text-muted">
              Color Palette
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {availableColors.map((c) => {
                const isSelected = filters.colors.includes(c.name);
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() =>
                      onChange({
                        ...filters,
                        colors: toggleArrayItem(filters.colors, c.name),
                      })
                    }
                    aria-label={`Filter by ${c.name}`}
                    className={cn(
                      "w-8 h-8 rounded-full border border-line flex items-center justify-center transition",
                      isSelected && "ring-2 ring-accent ring-offset-2 ring-offset-bg"
                    )}
                    style={{ backgroundColor: c.hex }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-line bg-surface-2 flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={onReset}
            className="flex-1"
            leftIcon={<RotateCcw className="w-4 h-4" />}
          >
            Reset All
          </Button>
          <Button variant="primary" onClick={onClose} className="flex-1">
            Apply ({totalResultsCount})
          </Button>
        </div>
      </div>
    </div>
  );
};
