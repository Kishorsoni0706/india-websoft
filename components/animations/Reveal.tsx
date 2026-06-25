"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
        y: direction === "up" ? 80 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}