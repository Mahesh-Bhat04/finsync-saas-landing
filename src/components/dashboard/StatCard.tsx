"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export default function StatCard({ label, value, change, positive }: StatCardProps) {
  return (
    <div className="bg-surface-alt rounded-xl p-4 border border-border">
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <div className={cn("flex items-center gap-1 mt-1 text-xs font-medium", positive ? "text-emerald-400" : "text-red-400")}>
        {positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
        {change}
      </div>
    </div>
  );
}
