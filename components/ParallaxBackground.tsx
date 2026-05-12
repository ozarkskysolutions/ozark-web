"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1200], [0, 120]);
  const y2 = useTransform(scrollY, [0, 1200], [0, -80]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#05070d_0%,#070b14_45%,#05070d_100%)]" />
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-x-[-20%] top-[-10rem] h-[28rem] rotate-[-6deg] bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.13),rgba(167,243,208,0.08),transparent)] blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-x-[-15%] top-[34rem] h-[24rem] rotate-[8deg] bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.08),rgba(125,211,252,0.09),transparent)] blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:92px_92px] opacity-25" />
    </div>
  );
}
