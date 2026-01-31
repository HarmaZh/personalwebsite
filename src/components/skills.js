import React from "react";
import FadeInSection from "./FadeInSection";
import SkillBadge from "./SkillBadge";
import { skills } from "../data/skills";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <FadeInSection>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
        </FadeInSection>

        <div className={styles.skillsGrid}>
          <FadeInSection delay={100}>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Languages</h3>
              <div className={styles.badgeContainer}>
                {skills.languages.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Frameworks & Libraries</h3>
              <div className={styles.badgeContainer}>
                {skills.frameworks.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>Tools & Platforms</h3>
              <div className={styles.badgeContainer}>
                {skills.tools.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

export default Skills;
