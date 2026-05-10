import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export default function Card({
  glass = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border p-6 lg:p-8",
        glass
          ? "bg-surface/50 backdrop-blur-sm"
          : "bg-surface",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
