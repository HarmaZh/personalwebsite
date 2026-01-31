import React from "react";
import FadeInSection from "./FadeInSection";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <FadeInSection>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.subtitle}>
            A selection of projects showcasing my work in full-stack development, blockchain, and data-driven applications
          </p>
        </FadeInSection>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <FadeInSection key={project.id} delay={index * 100 + 100}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
