import React from "react";
import { cn } from "@/lib/utils";

export type StatusType =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "returned"
  | "refunded"
  | "active"
  | "draft"
  | "archived";

export interface StatusChipProps {
  status: StatusType | string;
  label?: string;
  className?: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({
  status,
  label,
  className,
}) => {
  const getStyles = () => {
    switch (status.toLowerCase()) {
      case "paid":
      case "delivered":
      case "active":
        return "bg-success/15 text-success border-success/30";
      case "shipped":
      case "processing":
        return "bg-accent/15 text-accent border-accent/30";
      case "pending":
      case "pending_payment":
      case "draft":
        return "bg-muted/15 text-muted border-line";
      case "cancelled":
      case "refunded":
      case "returned":
      case "archived":
        return "bg-danger/15 text-danger border-danger/30";
      default:
        return "bg-surface-2 text-text border-line";
    }
  };

  const displayLabel = label || status.replace(/_/g, " ").toUpperCase();

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-12 font-heading font-semibold uppercase tracking-wider rounded-sharp border",
        getStyles(),
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-80" />
      {displayLabel}
    </span>
  );
};
