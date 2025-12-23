"use client";

import { motion } from "framer-motion";

export default function HeroMotion({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
