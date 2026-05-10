"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInRight } from "@/lib/animations";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-glow/15 rounded-full blur-[120px]" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fafafa 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 mb-6">
              AI-Powered Finance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Financial clarity
              <br />
              for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">
                modern teams
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-muted max-w-lg mb-8 leading-relaxed">
              Track, analyze, and optimize your team finances with AI-powered
              insights. Real-time dashboards, smart reports, and seamless
              integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                No credit card required
              </span>
              <span>14-day free trial</span>
            </div>
          </motion.div>

          {/* Dashboard Preview Visual */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-[60px]" />

              {/* Dashboard card */}
              <div className="relative bg-surface border border-border rounded-2xl p-6 shadow-2xl">
                {/* Mini stat cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Revenue", value: "$48.2K", change: "+12.5%" },
                    { label: "Users", value: "2,847", change: "+8.2%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-surface-alt rounded-xl p-4 border border-border"
                    >
                      <p className="text-xs text-muted mb-1">{stat.label}</p>
                      <p className="text-xl font-bold">{stat.value}</p>
                      <p className="text-xs text-emerald-400 mt-1">
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Fake chart bars */}
                <div className="bg-surface-alt rounded-xl p-4 border border-border">
                  <div className="flex items-end gap-2 h-32">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-glow to-accent"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
