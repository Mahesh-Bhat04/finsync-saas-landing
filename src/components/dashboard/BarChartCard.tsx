"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { comparisonData } from "@/lib/constants";

export default function BarChartCard() {
  return (
    <div className="bg-surface-alt rounded-xl p-4 border border-border">
      <h4 className="text-sm font-medium mb-4">Monthly Comparison</h4>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={comparisonData}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#27272a"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a1a1aa", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#a1a1aa", fontSize: 12 }}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              background: "#18181b",
              border: "1px solid #3f3f46",
              borderRadius: "8px",
              color: "#fafafa",
            }}
            formatter={(value) => [`$${Number(value).toLocaleString()}`]}
          />
          <Bar dataKey="thisYear" fill="#818cf8" radius={[4, 4, 0, 0]} name="This Year" />
          <Bar dataKey="lastYear" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Last Year" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
