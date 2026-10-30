import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";

export interface Column<T> {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (row: T) => string;
  sortColumn?: string;
  sortDirection?: "asc" | "desc";
  onSort?: (key: string) => void;
  isLoading?: boolean;
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T>({
  columns,
  data,
  keyExtractor,
  sortColumn,
  sortDirection,
  onSort,
  isLoading = false,
  emptyMessage = "No records found.",
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn("w-full overflow-x-auto border border-line rounded-sharp bg-surface", className)}>
      <table className="w-full text-left text-14 border-collapse">
        <thead>
          <tr className="border-b border-line bg-surface-2/60">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={cn(
                  "px-4 py-3 text-12 font-heading font-bold uppercase tracking-wider text-muted select-none",
                  col.sortable && "cursor-pointer hover:text-text",
                  col.className
                )}
                onClick={() => col.sortable && onSort?.(col.key)}
              >
                <div className="flex items-center gap-1.5">
                  <span>{col.header}</span>
                  {col.sortable && (
                    <span className="text-muted">
                      {sortColumn === col.key ? (
                        sortDirection === "asc" ? (
                          <ChevronUp className="w-3.5 h-3.5 text-accent" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-accent" />
                        )
                      ) : (
                        <ChevronsUpDown className="w-3.5 h-3.5 opacity-40" />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-muted">
                <div className="inline-flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  <span>Loading data...</span>
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-muted">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={keyExtractor(row)}
                className="hover:bg-surface-2/40 transition duration-fast"
              >
                {columns.map((col) => (
                  <td key={col.key} className={cn("px-4 py-3 text-text align-middle", col.className)}>
                    {col.render ? col.render(row) : (row as Record<string, any>)[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
