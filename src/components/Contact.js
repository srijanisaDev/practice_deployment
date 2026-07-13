"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/data/content";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus({
        state: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Failed to send. Please try again later.",
      });
    }
  };

  const sending = status.state === "sending";

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.span
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          Let&apos;s build <span className="gradient-text">something</span>
        </motion.h2>

        <div className="contact-layout">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            <p>
              Have a question, an opportunity, or just want to say hello? Send a
              message and it lands straight in my inbox.
            </p>

            <div className="contact-detail">
              <div className="label">Email</div>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>

            <div className="contact-detail">
              <div className="label">Find me online</div>
              <div className="socials-row">
                {contact.socials.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="card contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={100}
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={150}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                maxLength={2000}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>

            {status.state === "success" && (
              <div className="form-status success">{status.message}</div>
            )}
            {status.state === "error" && (
              <div className="form-status error">{status.message}</div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
