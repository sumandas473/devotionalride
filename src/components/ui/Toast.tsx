import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";

export type ToastType = "success" | "danger" | "warning" | "info";

export interface ToastProps {
  id?: string;
  type?: ToastType;
  title: string;
  message?: string;
  onClose?: () => void;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  type = "info",
  title,
  message,
  onClose,
  className,
}) => {
  const iconMap = {
    success: <CheckCircle2 className="w-5 h-5 text-success shrink-0" />,
    danger: <AlertCircle className="w-5 h-5 text-danger shrink-0" />,
    warning: <AlertTriangle className="w-5 h-5 text-accent shrink-0" />,
    info: <Info className="w-5 h-5 text-text shrink-0" />,
  };

  const borderMap = {
    success: "border-success/40",
    danger: "border-danger/40",
    warning: "border-accent/40",
    info: "border-line",
  };

  return (
    <div
      role="status"
      className={cn(
        "flex items-start gap-3 p-4 bg-surface-2 border rounded-sharp shadow-card max-w-md w-full animate-in fade-in slide-in-from-top-2 duration-fast",
        borderMap[type],
        className
      )}
    >
      {iconMap[type]}
      <div className="flex-1 pr-2">
        <h5 className="text-14 font-heading font-semibold uppercase tracking-wide text-text">
          {title}
        </h5>
        {message && <p className="text-12 text-muted mt-0.5 leading-relaxed">{message}</p>}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="text-muted hover:text-text p-1 min-w-[28px] min-h-[28px] flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
