import { profile, education } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">About</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            A bit <span className="gradient-text">about me</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={1} className="card about-text">
            {profile.bio}
          </Reveal>

          <div>
            {education.map((edu, i) => (
              <Reveal delay={i + 2} className="card edu-item" key={edu.institution}>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-period">{edu.period}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
