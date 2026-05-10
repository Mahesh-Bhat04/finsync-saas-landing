"use client";

import { transactions } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function TransactionTable() {
  return (
    <div className="bg-surface-alt rounded-xl p-4 border border-border">
      <h4 className="text-sm font-medium mb-4">Recent Transactions</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted text-xs">
              <th className="text-left pb-3 font-medium">Name</th>
              <th className="text-right pb-3 font-medium">Amount</th>
              <th className="text-right pb-3 font-medium hidden sm:table-cell">Status</th>
              <th className="text-right pb-3 font-medium hidden sm:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="border-t border-border/50">
                <td className="py-3 font-medium">{tx.name}</td>
                <td
                  className={cn(
                    "py-3 text-right font-mono text-xs",
                    tx.amount.startsWith("+")
                      ? "text-emerald-400"
                      : "text-foreground"
                  )}
                >
                  {tx.amount}
                </td>
                <td className="py-3 text-right hidden sm:table-cell">
                  <span
                    className={cn(
                      "inline-block px-2 py-0.5 rounded-full text-xs font-medium",
                      tx.status === "Completed"
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "bg-amber-400/10 text-amber-400"
                    )}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="py-3 text-right text-muted text-xs hidden sm:table-cell">
                  {tx.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
