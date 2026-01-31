import React from "react";
import FadeInSection from "./FadeInSection";
import ExperienceCard from "./ExperienceCard";
import { experience } from "../data/experience";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <FadeInSection>
          <h2 className={styles.sectionTitle}>Experience</h2>
        </FadeInSection>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>
          {experience.map((exp, index) => (
            <FadeInSection key={exp.id} delay={index * 100 + 100}>
              <ExperienceCard experience={exp} index={index} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
