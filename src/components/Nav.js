"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, nav } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(nav[0]?.href);

  useEffect(() => {
    const ids = nav.map((n) => n.href.replace("#", ""));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
          {profile.name}
          <span className="dot">.</span>
        </a>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
