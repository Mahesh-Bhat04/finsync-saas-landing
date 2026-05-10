"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { spendingData } from "@/lib/constants";

export default function DonutChart() {
  return (
    <div className="bg-surface-alt rounded-xl p-4 border border-border">
      <h4 className="text-sm font-medium mb-4">Spending by Category</h4>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={spendingData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
          >
            {spendingData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#18181b",
              border: "1px solid #3f3f46",
              borderRadius: "8px",
              color: "#fafafa",
            }}
            formatter={(value) => [`${value}%`]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-3 mt-2">
        {spendingData.map((item) => (
          <div key={item.name} className="flex items-center gap-1.5 text-xs text-muted">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: item.color }}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
