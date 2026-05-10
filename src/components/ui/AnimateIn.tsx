"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}

export default function AnimateIn({
  children,
  variants = fadeInUp,
  delay = 0,
  className,
}: AnimateInProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
