import { achievements } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Recognition</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            <span className="gradient-text">Achievements</span>
          </h2>
        </Reveal>

        <div className="timeline">
          {achievements.map((item, i) => (
            <Reveal delay={i + 1} className="card timeline-card" key={item.title}>
              <div className="timeline-head">
                <div className="timeline-role">{item.title}</div>
                <div className="timeline-meta">{item.date}</div>
              </div>
              {item.description && (
                <ul className="timeline-list">
                  <li>{item.description}</li>
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
