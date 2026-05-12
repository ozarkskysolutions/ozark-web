"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
};

export default function FadeInSection({
  children,
  className = "",
}: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.82, ease: [0.32, 0.72, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
