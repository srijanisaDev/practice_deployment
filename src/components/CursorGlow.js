"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Skip on touch devices where there is no meaningful cursor.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.style.opacity = "0";
    document.body.appendChild(glow);

    let raf = 0;
    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.opacity = "1";
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      });
    };
    const leave = () => (glow.style.opacity = "0");

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
      glow.remove();
    };
  }, []);

  return null;
}
