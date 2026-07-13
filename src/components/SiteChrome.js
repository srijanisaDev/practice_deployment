"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function SiteChrome() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setShowTop(document.documentElement.scrollTop > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      {showTop && (
        <motion.button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ y: -3 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </>
  );
}
