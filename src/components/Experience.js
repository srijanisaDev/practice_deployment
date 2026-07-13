import { experience } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Journey</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">leadership</span>
          </h2>
        </Reveal>

        <div className="timeline">
          {experience.map((exp, i) => (
            <Reveal
              delay={i + 1}
              className="card timeline-card"
              key={`${exp.organization}-${exp.role}`}
            >
              <div className="timeline-head">
                <div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-org">{exp.organization}</div>
                </div>
                <div className="timeline-meta">
                  <div>{exp.period}</div>
                  {exp.location && <div>{exp.location}</div>}
                </div>
              </div>
              {exp.highlights?.length > 0 && (
                <ul className="timeline-list">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
