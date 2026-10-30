import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface FormInlineErrorProps {
  error?: string;
  className?: string;
}

export const FormInlineError: React.FC<FormInlineErrorProps> = ({
  error,
  className,
}) => {
  if (!error) return null;

  return (
    <div
      role="alert"
      className={cn(
        "flex items-center gap-1.5 text-12 text-danger font-medium animate-in fade-in duration-fast",
        className
      )}
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      <span>{error}</span>
    </div>
  );
};
