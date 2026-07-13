"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });

  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      ref={ref}
      className="card project-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span className="glow" style={{ left: glowX, top: glowY }} />
      <div className="project-index">{num}</div>
      <h3>{project.name}</h3>
      <p className="project-desc">{project.description}</p>

      <ul className="project-tech">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      {project.links?.length > 0 && (
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <span className="arrow" aria-hidden="true">
                &#8599;
              </span>
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}
