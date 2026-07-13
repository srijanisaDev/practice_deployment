"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="bg-wrap" aria-hidden="true">
      <div className="bg-grid" />
      <motion.div
        className="orb orb-1"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-2"
        animate={{ x: [0, -50, 20, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="orb orb-3"
        animate={{ x: [0, 40, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
