"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1200], [0, 180]);
  const y2 = useTransform(scrollY, [0, 1200], [0, -120]);
  const y3 = useTransform(scrollY, [0, 1200], [0, 100]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[-10%] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[-10%] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-8rem] left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl"
      />
    </div>
  );
}