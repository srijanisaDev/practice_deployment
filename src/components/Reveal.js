"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Reveal({ children, delay = 0, className, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      custom={delay}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
