"use client";

import { motion } from "framer-motion";
import {
  Brain,
  RefreshCw,
  Users,
  BarChart3,
  Shield,
  Plug,
} from "lucide-react";
import { features } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  RefreshCw,
  Users,
  BarChart3,
  Shield,
  Plug,
};

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Features"
          title="Everything you need to manage finances"
          subtitle="Powerful tools designed for modern teams. From AI insights to real-time collaboration."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full group hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
