"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { stats } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/dashboard/StatCard";

const AreaChartCard = dynamic(
  () => import("@/components/dashboard/AreaChartCard"),
  { ssr: false }
);
const BarChartCard = dynamic(
  () => import("@/components/dashboard/BarChartCard"),
  { ssr: false }
);
const DonutChart = dynamic(
  () => import("@/components/dashboard/DonutChart"),
  { ssr: false }
);
const TransactionTable = dynamic(
  () => import("@/components/dashboard/TransactionTable"),
  { ssr: false }
);

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          tag="Dashboard"
          title="Your finances at a glance"
          subtitle="A powerful dashboard built for teams that need real-time visibility into every dollar."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Browser chrome frame */}
          <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-alt">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background rounded-lg px-4 py-1 text-xs text-muted max-w-xs w-full text-center">
                  app.finsync.io/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Stat cards row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>

              {/* Charts row 1 */}
              <div className="grid lg:grid-cols-5 gap-4">
                <div className="lg:col-span-3">
                  <AreaChartCard />
                </div>
                <div className="lg:col-span-2">
                  <DonutChart />
                </div>
              </div>

              {/* Charts row 2 */}
              <div className="grid lg:grid-cols-2 gap-4">
                <BarChartCard />
                <TransactionTable />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
