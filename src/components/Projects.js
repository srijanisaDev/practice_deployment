import { projects } from "@/data/content";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Work</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="section-title">
            Featured <span className="gradient-text">projects</span>
          </h2>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
