import { skills } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Toolkit</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">technologies</span>
          </h2>
        </Reveal>

        <div className="skills-groups">
          {skills.map((group, i) => (
            <Reveal delay={i + 1} className="card skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="skill-tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
