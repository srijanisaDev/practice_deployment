"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, contact } from "@/data/content";

const ROLES = [
  "Python Developer",
  "Backend Engineer",
  "AI & LLM Builder",
];

function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const typed = useTypewriter(ROLES, {});

  return (
    <header id="top" className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-badge" variants={item}>
            <span className="pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1 variants={item}>
            Hi, I&apos;m <span className="hero-name">{profile.name}</span>
          </motion.h1>

          <motion.div className="hero-role" variants={item}>
            {typed}
            <span className="caret" />
          </motion.div>

          <motion.p className="lead" variants={item}>
            {profile.bio}
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={item}>
            {contact.socials.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="photo-ring"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {imgOk ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                className="avatar"
                src={profile.profilePhoto}
                alt={profile.name}
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="avatar-fallback">{profile.initials}</div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="mouse">
          <span className="wheel" />
        </div>
        Scroll
      </motion.div>
    </header>
  );
}
